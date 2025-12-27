# Switch to master branch and delete other branches
# This script helps consolidate to production-only deployments

Write-Host "🔄 Switching to production (master) branch..." -ForegroundColor Cyan

# Get current branch
$currentBranch = git branch --show-current
Write-Host "Current branch: $currentBranch" -ForegroundColor Yellow

# Check if there are uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "⚠️  Warning: You have uncommitted changes!" -ForegroundColor Red
    Write-Host "   Please commit or stash them before switching branches."
    exit 1
}

# Switch to master
Write-Host "`n📦 Switching to master branch..." -ForegroundColor Cyan
git checkout master
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to switch to master" -ForegroundColor Red
    exit 1
}

# Pull latest from master
Write-Host "⬇️  Pulling latest from master..." -ForegroundColor Cyan
git pull origin master
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Warning: Failed to pull from master" -ForegroundColor Yellow
}

# List all local branches except master
Write-Host "`n📋 Other branches found:" -ForegroundColor Cyan
$otherBranches = git branch | Where-Object { $_ -notmatch '^\*?\s*master$' } | ForEach-Object { $_.Trim() -replace '^\* ', '' }

if ($otherBranches.Count -eq 0) {
    Write-Host "✅ No other branches to clean up!" -ForegroundColor Green
} else {
    Write-Host "Found $($otherBranches.Count) branch(es):" -ForegroundColor Yellow
    $otherBranches | ForEach-Object { Write-Host "   - $_" }
    
    Write-Host "`n⚠️  To delete these branches, run:" -ForegroundColor Yellow
    Write-Host "   git branch -d <branch-name>" -ForegroundColor White
    Write-Host "`n   Or delete all at once:" -ForegroundColor Yellow
    $otherBranches | ForEach-Object { Write-Host "   git branch -d $_" -ForegroundColor White }
}

# List remote branches
Write-Host "`n🌐 Remote branches:" -ForegroundColor Cyan
$remoteBranches = git branch -r | Where-Object { $_ -notmatch 'origin/master$' -and $_ -notmatch 'origin/HEAD' } | ForEach-Object { $_.Trim() -replace 'origin/', '' }

if ($remoteBranches.Count -eq 0) {
    Write-Host "✅ No other remote branches!" -ForegroundColor Green
} else {
    Write-Host "Found $($remoteBranches.Count) remote branch(es):" -ForegroundColor Yellow
    $remoteBranches | ForEach-Object { Write-Host "   - $_" }
    
    Write-Host "`n⚠️  To delete remote branches, run:" -ForegroundColor Yellow
    $remoteBranches | ForEach-Object { Write-Host "   git push origin --delete $_" -ForegroundColor White }
}

Write-Host "`n✅ Now on master branch - ready for production!" -ForegroundColor Green
Write-Host "   Push directly with: git push origin master" -ForegroundColor Cyan

