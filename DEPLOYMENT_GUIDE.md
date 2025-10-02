# Deployment Guide: Email Service on Vercel

## 🚀 **Option 1: Vercel Serverless Functions (Recommended)**

Your portfolio is ready to deploy on Vercel with built-in email functionality!

### **Setup Steps:**

1. **Deploy to Vercel:**
   ```bash
   # Install Vercel CLI (if not already installed)
   npm i -g vercel
   
   # Deploy your project
   vercel
   ```

2. **Add Environment Variables in Vercel:**
   - Go to your Vercel dashboard
   - Select your project
   - Go to **Settings > Environment Variables**
   - Add these variables:
     ```
     EMAIL_USER = rohit.khandelwal.2059@gmail.com
     EMAIL_PASS = your_gmail_app_password_here
     ```

3. **Update Contact Form URL:**
   - The API endpoint will automatically be: `/api/send-email`
   - No changes needed in your frontend code!

### **How it Works:**
- ✅ **Frontend**: Hosted on Vercel's CDN
- ✅ **Backend**: Serverless function in `/api/send-email.js`
- ✅ **Email**: Sent directly through Gmail using Nodemailer
- ✅ **No separate server needed!**

---

## 🌐 **Option 2: Other Hosting Platforms**

### **Railway (Easy):**
- Deploy backend to Railway
- Update frontend API URL to Railway backend URL

### **Render (Free Tier):**
- Deploy Express server to Render
- Update frontend to call Render backend URL

### **Heroku:**  
- Deploy Express server to Heroku
- Update frontend to call Heroku backend URL

---

## 📝 **For Vercel Deployment:**

1. **Advantages:**
   - ✅ Everything in one place
   - ✅ No separate backend hosting needed
   - ✅ Serverless = automatic scaling
   - ✅ Fast global CDN

2. **Files Created:**
   - ✅ `/api/send-email.js` - Vercel serverless function
   - ✅ `.env.example` - Environment variables template

3. **Current Contact Form:**
   - ✅ Already configured to call `/api/send-email`
   - ✅ Will work automatically on Vercel

---

## 🔧 **Testing Before Deployment:**

You can test the Vercel function locally:
```bash
# Install Vercel CLI
npm i -g vercel

# Run locally with Vercel functions
vercel dev
```

Your contact form will be fully functional once deployed to Vercel! 🎉