# Magic gong
A magic gong that makes decisions for you. Deployed with heroku here: https://magic-gong.herokuapp.com (Be patient, I'm on a free account and am slooooow!)

## Running Locally

Before following these steps, ensure you have npm and 
python3 on your machine.

### Backend
Create a new virtualenv using:

`$ pip3 install virtualenv`

`$ virtualenv venv`

Start the virtualenv:

`$ . activate.sh`
 
Install dependencies:

`$ sh manage.sh buildenv`

Run the server with:

`$ sh manage.sh runserver`

Or alternatively:

`$ sh manage.sh runserver [desired port]`

### Frontend
Generate reactjs build files with:

`$ sh manage.sh build`

Enable watch mode with:

`$ sh manage.sh runwebpack`


