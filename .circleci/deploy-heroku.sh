BRANCH=$1

if [ -z $BRANCH ]; then
  BRANCH='development'
fi

if [ "$BRANCH" == "master" ]; then
  echo "Deploy master"

  git remote add heroku git@heroku.com:chess--api.git
fi

git show --summary

git push -f heroku master
