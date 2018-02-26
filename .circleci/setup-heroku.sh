#!/bin/sh -e

# deploy code changes (and implicitly restart the app and any running workers)
git push heroku master
