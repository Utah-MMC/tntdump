# Git: add, commit, push, and open a pull request


## 1) Stage your changes
```bash
git add -A
# or stage specific files:
# git add path/to/file1 path/to/file2
```

## 2) Commit with a clear message
```bash
git commit -m "Describe what changed and why"
```

## 3) Push your branch to the remote
```bash
git push -u origin HEAD
# or explicitly:
# git push -u origin feature/short-description
```

## 4) Open a pull request
- After pushing, GitHub prints a link to open a PR. Open that link in your browser, confirm the base branch (e.g., `master` or `main`), add a clear title and description, and create the PR.


## 5) Update the PR after reviews (if needed)
```bash
git add -A
git commit -m "Address review feedback"
git push
```

## 6) Sync `master` after merge (optional cleanup)
```bash
git checkout master
git pull --ff-only
git branch -d feature/short-description
git push origin --delete feature/short-description
```
