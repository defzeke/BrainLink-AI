"use client";

import { useAuth } from "@/components/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
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
  const { user, loading, setUser } = useAuth();
  const router = useRouter();

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
    }
  }, [user, loading, router]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.id]: e.target.value,
    });
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to update profile");
        setIsSubmitting(false);
        return;
      }

      if (user) {
        setUser({
          ...user,
          display_name: profileData.display_name,
          email: profileData.email,
        });
      }

      setSuccess("Profile updated successfully!");
      setIsEditingProfile(false);
    } catch (err) {
      setError("An error occurred. Please try again.");
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
      const response = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to change password");
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
    } catch (err) {
      setError("An error occurred. Please try again.");
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
              <AccountCircleIcon
                style={{ fontSize: 128 }}
                className="text-[#666666]"
              />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-[#B32222]">Coming Soon</p>
              <p className="text-sm text-[#666666] mt-1">Profile picture upload will be available soon</p>
            </div>
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
