#!/bin/sh -e
APP_NAME=$1

git remote add heroku git@heroku.com:$APP_NAME.git
git fetch heroku

PREV_WORKERS=$(heroku ps --app $APP_NAME | grep "^worker." | wc -l | tr -d ' ')

# deploy code changes (and implicitly restart the app and any running workers)
git push heroku $CIRCLE_SHA1:refs/heads/master

heroku maintenance:off --app $APP_NAME
