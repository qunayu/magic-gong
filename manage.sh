#!/usr/bin/env bash
PYTHON=./venv/bin/python
PIP=./venv/bin/pip
WEBPACK=./node_modules/.bin/webpack

if [ $1 == "buildenv" ]
then
    PIP install -r requirements.txt
    npm install
elif [ $1 == "runserver" ]
then
    if [ $2 ]
    then
        PYTHON manage.py runserver $2
    else
        PYTHON manage.py runserver
    fi
elif [ $1 == "build" ]
then
    WEBPACK --config webpack.config.js
elif [ $1 == "runwebpack" ]
then
    WEBPACK --config webpack.config.js --watch
elif [ $1 == "loadanswers" ]
then
    curl -X POST -d "@$2" http://127.0.0.1:8000/api/answers/ --header "Content-Type:application/json"
fi