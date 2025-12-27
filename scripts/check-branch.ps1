# PowerShell script to check if on production branch before pushing

$currentBranch = git branch --show-current
$productionBranches = @("main", "master")

if ($productionBranches -notcontains $currentBranch) {
    Write-Host "⚠️  Warning: You're not on main/master branch!" -ForegroundColor Yellow
    Write-Host "   Current branch: $currentBranch"
    Write-Host "   Switch to main/master for production deployments"
    exit 1
}

Write-Host "✅ On production branch: $currentBranch" -ForegroundColor Green
exit 0

