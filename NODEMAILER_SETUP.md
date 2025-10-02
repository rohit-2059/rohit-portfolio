# Nodemailer Setup Guide

Your contact form now uses Nodemailer with an Express backend to send emails directly to your Gmail.

## 🚀 **Quick Start**

### 1. **Get Gmail App Password**
1. Go to [Google Account Settings](https://myaccount.google.com/apppasswords)
2. Sign in to your Gmail account
3. Create a new App Password:
   - Select "Mail" as the app
   - Select "Other" as the device and name it "Portfolio Website"
   - Copy the generated 16-character password

### 2. **Configure Environment Variables**
1. Open `server/.env` file
2. Replace `EMAIL_PASS=` with your App Password:
   ```
   EMAIL_USER=rohit.khandelwal.2059@gmail.com
   EMAIL_PASS=your_16_character_app_password_here
   PORT=3001
   ```

### 3. **Run the Application**
Choose one of these options:

**Option A: Run both frontend and backend together**
```bash
npm run dev:full
```

**Option B: Run separately (in 2 terminals)**
```bash
# Terminal 1 - Backend server
npm run server

# Terminal 2 - Frontend
npm run dev
```

## ✅ **What's Already Set Up**

- ✅ **Backend Server**: Express server with Nodemailer configuration
- ✅ **Email Templates**: HTML and text email templates
- ✅ **Frontend Integration**: Contact form sends to `/api/send-email`
- ✅ **Error Handling**: Proper validation and user feedback
- ✅ **Proxy Configuration**: Vite proxies API calls to backend

## 📁 **File Structure**
```
├── server/
│   ├── index.js          # Express server with Nodemailer
│   ├── .env              # Your email credentials (fill this)
│   └── .env.example      # Template for environment variables
├── src/components/
│   └── Contact.tsx       # Updated form with backend integration
└── vite.config.ts        # Proxy configuration for API calls
```

## 🔧 **Troubleshooting**

**If emails aren't sending:**
1. Make sure your App Password is correct (16 characters, no spaces)
2. Check that both servers are running
3. Look at console logs for error messages

**If you get "Authentication failed":**
- Double-check your Gmail App Password
- Make sure 2FA is enabled on your Google account

**If the backend server won't start:**
- Make sure port 3001 is available
- Check that all dependencies are installed: `npm install`

## 🎯 **How It Works**
1. User fills out the contact form
2. Frontend sends POST request to `/api/send-email`
3. Backend receives request and uses Nodemailer
4. Email is sent directly from your Gmail to rohit.khandelwal.2059@gmail.com
5. User gets success/error notification

Your contact form is now fully functional with a professional backend setup!