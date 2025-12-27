# Disable Branch Protection for Direct Production Pushes

## ⚠️ Current Issue

Your `master` branch is **protected** and requires pull requests. To push directly to production, you need to disable branch protection.

## 🔧 Steps to Disable Branch Protection

1. **Go to GitHub Repository Settings:**
   - Navigate to: https://github.com/Utah-MMC/tntdump/settings
   - Click on **"Branches"** in the left sidebar

2. **Find Branch Protection Rule:**
   - Look for a rule protecting `master` branch
   - Click **"Edit"** or **"Delete"** on the rule

3. **Disable Protection:**
   - Either delete the rule entirely, OR
   - Uncheck all protection options:
     - ❌ Require a pull request before merging
     - ❌ Require approvals
     - ❌ Require status checks to pass
     - ❌ Require branches to be up to date
     - ❌ Restrict pushes that create files

4. **Save Changes**

## ✅ After Disabling Protection

Once branch protection is disabled, you can push directly:

```bash
git push origin master
```

## 🚀 Alternative: Force Push (Not Recommended)

If you have admin access and want to force push (overwrites remote):

```bash
git push origin master --force
```

⚠️ **Warning:** Force push can overwrite remote history. Only use if you're sure.

## 📝 Note

After disabling branch protection, all pushes to `master` will:
- ✅ Deploy directly to production
- ✅ Skip pull request requirements
- ✅ Bypass review process

Make sure you test thoroughly before pushing!

