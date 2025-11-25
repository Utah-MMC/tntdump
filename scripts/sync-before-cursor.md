# Local ↔ Remote Sync Checklist (for Cursor sessions)

The goal: **never start editing until your local repo is clean and up to date with `origin`.**

---

## 0. Make sure you’re in the right repo & branch

```bash
pwd              # confirm folder
git status -sb   # shows branch & short status


git switch <branch-name>
