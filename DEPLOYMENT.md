# Production Deployment Guide

## 🚀 Direct to Production Setup

This project is configured to deploy **directly to production** from the `master` branch only.

### Current Configuration

- **Default Branch**: `master`
- **Production Deployments**: Only from `master` branch
- **Preview Deployments**: **DISABLED**

### How to Deploy

1. **Make sure you're on master branch:**
   ```bash
   git checkout master
   git pull origin master
   ```

2. **Make your changes and commit:**
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

3. **Push directly to production:**
   ```bash
   git push origin master
   ```

4. **Vercel will automatically deploy** your changes to production.

### Switching to Production Branch

Run the helper script:
```powershell
.\scripts\switch-to-production.ps1
```

Or manually:
```bash
git checkout master
git pull origin master
```

### Cleaning Up Other Branches

To remove other branches and consolidate to master only:

**Delete local branches:**
```bash
git branch -d branch-name
```

**Delete remote branches:**
```bash
git push origin --delete branch-name
```

### Vercel Configuration

The `vercel.json` file is configured to:
- ✅ Only deploy from `master` branch
- ❌ Disable preview deployments for other branches

### Important Notes

- ⚠️ **All pushes to master deploy to production immediately**
- ⚠️ **No preview/staging environment** - test locally first
- ✅ **Simplified workflow** - one branch, one deployment target

### Testing Before Production

Always test locally before pushing:
```bash
npm run dev          # Test development server
npm run build        # Test production build
npm run lint         # Check for errors
```

