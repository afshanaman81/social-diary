Setup:
step 1: Setup on GitHub
create empty online repository (dont initialize it with readme or gitignore)
On the local machine, follow the git commands shown on the gihub page as the result of creating the repo




Step 2: Setup on Heroku
- First create an empty app on Heroku
- Then push the code to Heroku. Use the webstorm's terminal to login to heroku CLI first
> heroku login
> git add .
> git commit -am "make it better"
> git push heroku master

The above will install the dependencies using Yarn (or npm) automatically and deploy the app


Then Add the env variables to the config setting on heroku:
> heroku config:set VAR=value
https://devcenter.heroku.com/articles/config-vars


Make the setting on the Facebook Dev console:
Add the 'https://social-diary.herokuapp.com/facebook/callback' to the list of Valid OAuth redirect URIs




