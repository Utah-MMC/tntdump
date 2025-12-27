#!/bin/bash
# Check if we're on the production branch before pushing

CURRENT_BRANCH=$(git branch --show-current)
PRODUCTION_BRANCHES=("main" "master")

if [[ ! " ${PRODUCTION_BRANCHES[@]} " =~ " ${CURRENT_BRANCHES} " ]]; then
  echo "⚠️  Warning: You're not on main/master branch!"
  echo "   Current branch: $CURRENT_BRANCH"
  echo "   Switch to main/master for production deployments"
  exit 1
fi

echo "✅ On production branch: $CURRENT_BRANCH"
exit 0

