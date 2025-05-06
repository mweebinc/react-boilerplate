# Set default SSH username if not provided
if [ -z "$SSH_USERNAME" ]; then
  SSH_USERNAME="root"
fi
# check host name
if [ -z "$SSH_HOST" ]; then
  echo "missing host" && exit 1
fi
echo "using $SSH_HOST"
SSH_COMMAND="ssh -A -o StrictHostKeyChecking=no $SSH_USERNAME@$SSH_HOST"

TARGET_PATH="/$SSH_USERNAME/$GITHUB_REPOSITORY_NAME"
# add github to known hosts
$SSH_COMMAND "ssh-keyscan -t rsa github.com >>~/.ssh/known_hosts"

# clone if not exist
if $SSH_COMMAND [ -d "$TARGET_PATH" ]; then
  $SSH_COMMAND "cd $TARGET_PATH && git pull"
  # restart docker
  #  $SSH_COMMAND "docker-compose restart" no need to restart the nginx
else
  $SSH_COMMAND "git clone git@github.com:$GITHUB_REPOSITORY_OWNER/$GITHUB_REPOSITORY_NAME.git $TARGET_PATH"
  # run docker
  $SSH_COMMAND "cd $TARGET_PATH && docker-compose up -d"
fi

# remove known_hosts files
$SSH_COMMAND "rm ~/.ssh/known_hosts*"
