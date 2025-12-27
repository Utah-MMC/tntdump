# Merge current branch to master and push to production
# This script helps consolidate changes to master for production deployment

Write-Host "Merging to master for production deployment..." -ForegroundColor Cyan

# Get current branch
$currentBranch = git branch --show-current
Write-Host "Current branch: $currentBranch" -ForegroundColor Yellow

if ($currentBranch -eq "master") {
    Write-Host "Already on master branch!" -ForegroundColor Green
    Write-Host "   Just push with: git push origin master" -ForegroundColor Cyan
    exit 0
}

# Check if there are uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "Warning: You have uncommitted changes!" -ForegroundColor Red
    Write-Host "   Please commit or stash them first." -ForegroundColor Yellow
    exit 1
}

# Switch to master
Write-Host ""
Write-Host "Switching to master branch..." -ForegroundColor Cyan
git checkout master
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to switch to master" -ForegroundColor Red
    exit 1
}

# Pull latest from master
Write-Host "Pulling latest from master..." -ForegroundColor Cyan
git pull origin master
if ($LASTEXITCODE -ne 0) {
    Write-Host "Warning: Failed to pull from master" -ForegroundColor Yellow
}

# Merge the branch
Write-Host ""
Write-Host "Merging $currentBranch into master..." -ForegroundColor Cyan
git merge $currentBranch --no-edit
if ($LASTEXITCODE -ne 0) {
    Write-Host "Merge failed. Resolve conflicts and try again." -ForegroundColor Red
    exit 1
}

Write-Host "Successfully merged $currentBranch into master!" -ForegroundColor Green

# Ask if user wants to push
Write-Host ""
Write-Host "Ready to push to production (master)?" -ForegroundColor Cyan
Write-Host "   Run: git push origin master" -ForegroundColor White
Write-Host ""
Write-Host "Tip: After pushing, you can delete the branch with:" -ForegroundColor Yellow
Write-Host "   git branch -d $currentBranch" -ForegroundColor White
$deleteCmd = "git push origin --delete $currentBranch"
Write-Host "   $deleteCmd" -ForegroundColor White
