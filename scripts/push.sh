# Usage: ./scripts/push.sh "commit message"
yarn build
git add .
git commit -m "$1"
git push