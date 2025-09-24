# 🚀 Deploy AI-Code-Marketplace to Vercel

## Prerequisites ✅
- Vercel CLI installed (✓ Already installed)
- Vercel account (Sign up at https://vercel.com if you don't have one)

## Step 1: Deploy to Vercel

Run this command in your terminal:
```bash
vercel
```

## Step 2: Follow the Prompts

When you run `vercel`, you'll be asked:

1. **"Set up and deploy?"** → Type `Y` and press Enter
2. **"Which scope?"** → Select your account or create a new one
3. **"Link to existing project?"** → Type `N` (for new project)
4. **"What's your project's name?"** → Press Enter to use default or type a custom name like `ai-code-marketplace`
5. **"In which directory is your code located?"** → Press Enter (current directory)
6. **"Want to override the settings?"** → Type `N`

## Step 3: Set Environment Variables in Vercel

After deployment, you need to add your environment variables:

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Click on your project
3. Go to "Settings" tab
4. Click on "Environment Variables" in the left sidebar
5. Add these variables:

```
VITE_EMAILJS_SERVICE_ID = service_hx50lue
VITE_EMAILJS_TEMPLATE_ID = template_u8vvm2o
VITE_EMAILJS_PUBLIC_KEY = phoKmnO_wlsbHWGuO
VITE_EMAILJS_USER_TEMPLATE_ID = q48gn9q
VITE_GEMINI_API_KEY = (your API key if you have one)
```

6. Click "Save" for each variable
7. Redeploy for changes to take effect

## Step 4: Redeploy with Environment Variables

After adding environment variables, redeploy:
```bash
vercel --prod
```

## Alternative: Deploy via Vercel Dashboard (No Git Required)

If the CLI doesn't work, you can deploy directly:

1. Build your project first:
```bash
npm run build
```

2. Go to https://vercel.com/new
3. Click "Deploy without Git"
4. Drag and drop your `dist` folder
5. Configure environment variables as mentioned above

## Your Deployed URLs

After deployment, you'll get:
- **Production URL**: `https://your-project-name.vercel.app`
- **Preview URL**: For testing changes

## Important Notes

### Environment Variables
- ⚠️ Your `.env` file is NOT deployed (for security)
- ✅ Environment variables must be added in Vercel dashboard
- 🔄 After adding/changing env vars, redeploy is required

### Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### If deployment fails:
1. Check build errors in the output
2. Ensure all dependencies are in `package.json`
3. Try running `npm run build` locally first

### If EmailJS doesn't work after deployment:
1. Verify all environment variables are set in Vercel
2. Check that variables start with `VITE_` prefix
3. Redeploy after adding variables

### If pages show 404:
- The `vercel.json` file handles routing for single-page apps
- Already configured correctly in your project

## Commands Summary

```bash
# First deployment
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs your-deployment-url
```

## Next Steps

1. Test your live site thoroughly
2. Share your URL: `https://your-project-name.vercel.app`
3. Monitor usage in Vercel dashboard
4. Set up analytics (optional)

## Free Tier Limits

Vercel's free tier includes:
- ✅ Unlimited personal projects
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments

Your site is ready to go live! 🎉
