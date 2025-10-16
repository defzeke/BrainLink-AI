# Quick Start Guide - Profile Management

## Setup Steps

### 1. Supabase Configuration

#### Create Storage Bucket
1. Go to your Supabase Dashboard
2. Navigate to **Storage** section
3. Click **New bucket**
4. Name it: `avatars`
5. Make it **Public**
6. Click **Create bucket**

#### Set Storage Policies (Recommended)
Go to Storage → Policies and add these:

```sql
-- Allow authenticated users to upload
CREATE POLICY "Users can upload profile pictures"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'avatars');

-- Allow public read access
CREATE POLICY "Public can view profile pictures"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'avatars');
```

### 2. Environment Setup

Make sure your `.env.local` file has:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Test the Features

#### Test Registration
1. Go to `/register`
2. Fill in: Name, Email, Password
3. Click "Register"
4. Should redirect to login

#### Test Login
1. Go to `/login`
2. Enter your credentials
3. Click "Login"
4. Should redirect to home page
5. **Check topbar** - you should see your name!

#### Test Profile Settings
1. Click on your name in the topbar
2. Click "Profile Settings"
3. You should see the profile page with 3 sections:
   - Profile Picture
   - Profile Information
   - Change Password

#### Test Profile Picture Upload
1. On profile page, click the edit icon on the profile picture
2. Select an image (< 5MB)
3. Click "Save Picture"
4. Picture should update and appear in topbar

#### Test Profile Edit
1. Click "Edit" on Profile Information card
2. Change your display name
3. Click "Save Changes"
4. Name should update in topbar

#### Test Password Change
1. Click "Change" on Change Password card
2. Enter current password
3. Enter new password (twice)
4. Click "Change Password"
5. Success message should appear

#### Test Logout
1. Click your name in topbar
2. Click "Logout"
3. Should be logged out and see "Sign In/Sign Up" buttons again

## Features Overview

### What Users See When Logged Out
- ❌ No profile picture
- ❌ No display name
- ✅ "Sign In" button
- ✅ "Sign Up" button

### What Users See When Logged In
- ✅ Profile picture (or default icon)
- ✅ Display name
- ✅ Dropdown menu with:
  - Profile Settings link
  - Logout button
- ✅ Access to all pages

## Common Issues & Solutions

### Profile picture not showing?
**Solution:** 
- Check if `avatars` bucket exists in Supabase
- Make sure bucket is public
- Verify file was uploaded successfully

### Display name not updating?
**Solution:**
- Refresh the page
- Check browser console for errors
- Verify Supabase connection

### Can't change password?
**Solution:**
- Make sure current password is correct
- New password must be at least 6 characters
- Both new password fields must match

### "Not authenticated" error?
**Solution:**
- Logout and login again
- Clear browser cache
- Check `.env.local` file has correct Supabase credentials

## File Changes Summary

### New Files Created:
```
✅ src/app/profile/page.tsx
✅ src/app/api/auth/update-profile/route.ts
✅ src/app/api/auth/change-password/route.ts
✅ src/app/api/auth/update-profile-picture/route.ts
✅ PROFILE_MANAGEMENT.md
✅ QUICKSTART.md
```

### Modified Files:
```
✅ src/components/context/AuthContext.tsx (added profile_picture support)
✅ src/components/sections/Topbar.tsx (added profile pic & settings link)
✅ src/components/login-form.tsx (uses AuthContext)
✅ src/app/layout.tsx (wrapped with AuthProvider)
✅ .env.local.example (template for env vars)
```

## How It Works

### Authentication Flow
```
Registration → Supabase creates user → User metadata stored → Redirect to login
Login → Supabase verifies → Session created → User data loaded → AuthContext updated
Logout → Session cleared → User redirected to home
```

### Profile Update Flow
```
User edits profile → Form validation → API call → Supabase updates metadata → AuthContext refreshed → UI updates
```

### Profile Picture Flow
```
User selects image → Client validation → Upload to Supabase Storage → URL saved to user metadata → UI updates
```

## Routes Available

| Route | Description | Auth Required |
|-------|-------------|---------------|
| `/` | Home page | No |
| `/login` | Login page | No |
| `/register` | Registration page | No |
| `/profile` | Profile settings | Yes |

## API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/auth/signin` | POST | Login user |
| `/api/auth/signup` | POST | Register user |
| `/api/auth/signout` | POST | Logout user |
| `/api/auth/update-profile` | POST | Update profile info |
| `/api/auth/change-password` | POST | Change password |
| `/api/auth/update-profile-picture` | POST | Upload profile pic |

## Mobile Responsive

### Desktop (> 768px)
- Full topbar with navigation
- Profile dropdown menu
- Side-by-side profile cards

### Mobile (< 768px)
- Hamburger menu
- Side drawer navigation
- Stacked profile cards
- Profile info in drawer

## Success Indicators

✅ **Registration works** if:
- User is created in Supabase Auth
- User metadata includes name
- Redirect to login works

✅ **Login works** if:
- User redirected to home
- Display name appears in topbar
- Profile picture shows (if set)

✅ **Profile editing works** if:
- Changes save successfully
- UI updates immediately
- Changes persist on refresh

✅ **Profile picture works** if:
- File uploads to Supabase Storage
- Picture appears in topbar
- Picture appears on profile page

✅ **Password change works** if:
- Success message appears
- User can login with new password

## Development Checklist

Before deploying:
- [ ] Supabase `avatars` bucket created
- [ ] Storage policies set up
- [ ] Environment variables configured
- [ ] Registration tested
- [ ] Login tested
- [ ] Profile editing tested
- [ ] Profile picture upload tested
- [ ] Password change tested
- [ ] Logout tested
- [ ] Mobile view tested
- [ ] All error states tested

## Need Help?

Check these files:
1. `PROFILE_MANAGEMENT.md` - Detailed documentation
2. `.env.local.example` - Environment variable template
3. Browser Console - Error messages
4. Supabase Dashboard - User data and storage

---

**You're all set!** 🎉

Your profile management system is ready to use. Start by creating an account and testing all the features!
