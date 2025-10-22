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

## 5) Open a pull request (GitHub only)
- After pushing, GitHub prints a link to open a PR. Open that link in your browser, confirm the base branch (e.g., `master` or `main`), add a clear title and description, and create the PR.
- Alternatively, go to your repository on GitHub, switch to `feature/short-description`, and click "Compare & pull request".

## 6) Update the PR after reviews (if needed)
```bash
git add -A
git commit -m "Address review feedback"
git push
```

## 7) Sync `master` after merge (optional cleanup)
```bash
git checkout master
git pull --ff-only
git branch -d feature/short-description
git push origin --delete feature/short-description
```
