# Git: add, commit, push, and open a pull request

## 1) Create a new branch
```bash
git checkout -b feature/short-description
```

## 2) Stage your changes
```bash
git add -A
# or stage specific files:
# git add path/to/file1 path/to/file2
```

## 3) Commit with a clear message
```bash
git commit -m "Describe what changed and why"
```

## 4) Push your branch to the remote
```bash
git push -u origin HEAD
# or explicitly:
# git push -u origin feature/short-description
```

## 5) Open a pull request
- On GitHub: open your repository and click "Compare & pull request" for your branch.
- With GitHub CLI (optional):
```bash
gh pr create --fill --base master --head feature/short-description
```

## 6) Update the PR after reviews (if needed)
```bash
git add -A
git commit -m "Address review feedback"
git push
```

## 7) Sync `main` after merge (optional cleanup)
```bash
git checkout main
git pull --ff-only
git branch -d feature/short-description
git push origin --delete feature/short-description
```