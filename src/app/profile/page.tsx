"use client";

import { useAuth, supabase } from "@/components/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

export default function ProfilePage() {
  const { user, loading, setUser, refreshUser } = useAuth();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [profileData, setProfileData] = useState({
    display_name: "",
    email: "",
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [profilePictureFile, setProfilePictureFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    } else if (user) {
      setProfileData({
        display_name: user.display_name || user.name || "",
        email: user.email,
      });
      setProfilePicture(user.profile_picture || null);
    }
  }, [user, loading, router]);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.id]: e.target.value,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.id]: e.target.value,
    });
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5MB");
        return;
      }

      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError("File must be an image");
        return;
      }

      setProfilePictureFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      // Update user metadata using Supabase directly
      const { error: updateError } = await supabase.auth.updateUser({
        email: profileData.email,
        data: {
          display_name: profileData.display_name,
          name: profileData.display_name,
          full_name: profileData.display_name,
        }
      });

      if (updateError) {
        setError(updateError.message || "Failed to update profile");
        setIsSubmitting(false);
        return;
      }

      // Refresh user data
      await refreshUser();

      setSuccess("Profile updated successfully!");
      setIsEditingProfile(false);
    } catch (err: any) {
      console.error('Error:', err);
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate passwords match
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    // Validate password length
    if (passwordData.newPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setIsSubmitting(true);

    try {
      if (!user) {
        setError("Not authenticated");
        setIsSubmitting(false);
        return;
      }

      // Verify current password by attempting to sign in
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: passwordData.currentPassword,
      });

      if (signInError) {
        setError("Current password is incorrect");
        setIsSubmitting(false);
        return;
      }

      // Update password using Supabase directly
      const { error: updateError } = await supabase.auth.updateUser({
        password: passwordData.newPassword,
      });

      if (updateError) {
        setError(updateError.message || "Failed to change password");
        setIsSubmitting(false);
        return;
      }

      setSuccess("Password changed successfully!");
      setIsEditingPassword(false);
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err: any) {
      console.error('Error:', err);
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProfilePictureSubmit = async () => {
    if (!profilePictureFile || !user) return;

    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      // Validate file
      if (!profilePictureFile.type.startsWith('image/')) {
        setError("File must be an image");
        setIsSubmitting(false);
        return;
      }

      if (profilePictureFile.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5MB");
        setIsSubmitting(false);
        return;
      }

      // Create unique filename
      const fileExt = profilePictureFile.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const filePath = `profile-pictures/${fileName}`;

      // Upload to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, profilePictureFile, {
          contentType: profilePictureFile.type,
          upsert: true,
        });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        setError(`Failed to upload image: ${uploadError.message}`);
        setIsSubmitting(false);
        return;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      // Update user metadata
      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          profile_picture: publicUrl,
        }
      });

      if (updateError) {
        setError(`Failed to update profile: ${updateError.message}`);
        setIsSubmitting(false);
        return;
      }

      // Refresh user data
      await refreshUser();

      setSuccess("Profile picture updated successfully!");
      setProfilePictureFile(null);
    } catch (err: any) {
      console.error('Error:', err);
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#666666]">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#F9F5F1] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <a
          href="/"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity w-fit mb-6"
        >
          <ArrowBackIcon />
          <span className="text-base font-medium">Back to Home</span>
        </a>

        <h1 className="text-3xl font-bold text-[#B32222] mb-8">Profile Settings</h1>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-md text-sm mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-3 rounded-md text-sm mb-4">
            {success}
          </div>
        )}

        {/* Profile Picture Section */}
        <Card className="mb-6">
          <CardHeader>
            <h2 className="text-xl font-semibold">Profile Picture</h2>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="relative">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#B32222]"
                />
              ) : (
                <AccountCircleIcon
                  style={{ fontSize: 128 }}
                  className="text-[#666666]"
                />
              )}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 p-2 rounded-full bg-[#B32222] text-white hover:bg-[#8B1A1A] transition-colors"
              >
                <EditIcon fontSize="small" />
              </button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="hidden"
            />
            {profilePictureFile && (
              <div className="flex gap-2">
                <Button
                  onClick={handleProfilePictureSubmit}
                  disabled={isSubmitting}
                  className="bg-[#B32222] hover:bg-[#8B1A1A]"
                >
                  <SaveIcon fontSize="small" className="mr-2" />
                  Save Picture
                </Button>
                <Button
                  onClick={() => {
                    setProfilePictureFile(null);
                    setProfilePicture(user.profile_picture || null);
                  }}
                  variant="outline"
                  disabled={isSubmitting}
                >
                  <CancelIcon fontSize="small" className="mr-2" />
                  Cancel
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Profile Information Section */}
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-semibold">Profile Information</h2>
            {!isEditingProfile && (
              <Button
                onClick={() => setIsEditingProfile(true)}
                variant="outline"
                size="sm"
              >
                <EditIcon fontSize="small" className="mr-2" />
                Edit
              </Button>
            )}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProfileSubmit}>
              <div className="space-y-4">
                <div className="grid gap-3">
                  <Label htmlFor="display_name">Display Name</Label>
                  <Input
                    id="display_name"
                    type="text"
                    value={profileData.display_name}
                    onChange={handleProfileChange}
                    disabled={!isEditingProfile || isSubmitting}
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    disabled={!isEditingProfile || isSubmitting}
                    required
                  />
                </div>
                {isEditingProfile && (
                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#B32222] hover:bg-[#8B1A1A]"
                    >
                      <SaveIcon fontSize="small" className="mr-2" />
                      {isSubmitting ? "Saving..." : "Save Changes"}
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        setIsEditingProfile(false);
                        setProfileData({
                          display_name: user.display_name || user.name || "",
                          email: user.email,
                        });
                      }}
                      variant="outline"
                      disabled={isSubmitting}
                    >
                      <CancelIcon fontSize="small" className="mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Change Password Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-semibold">Change Password</h2>
            {!isEditingPassword && (
              <Button
                onClick={() => setIsEditingPassword(true)}
                variant="outline"
                size="sm"
              >
                <EditIcon fontSize="small" className="mr-2" />
                Change
              </Button>
            )}
          </CardHeader>
          <CardContent>
            {isEditingPassword ? (
              <form onSubmit={handlePasswordSubmit}>
                <div className="space-y-4">
                  <div className="grid gap-3">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#B32222] hover:bg-[#8B1A1A]"
                    >
                      <SaveIcon fontSize="small" className="mr-2" />
                      {isSubmitting ? "Changing..." : "Change Password"}
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        setIsEditingPassword(false);
                        setPasswordData({
                          currentPassword: "",
                          newPassword: "",
                          confirmPassword: "",
                        });
                      }}
                      variant="outline"
                      disabled={isSubmitting}
                    >
                      <CancelIcon fontSize="small" className="mr-2" />
                      Cancel
                    </Button>
                  </div>
                </div>
              </form>
            ) : (
              <p className="text-[#666666]">
                Click &quot;Change&quot; to update your password
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
