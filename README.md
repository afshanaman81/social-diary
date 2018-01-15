Description: a web application to show 5 latest feeds from different social media accounts of a given user

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


Step 3: Then Add the env variables to the config setting on heroku:
> heroku config:set VAR=value
https://devcenter.heroku.com/articles/config-vars


Step 4: Make the setting on the Facebook Dev console for Login
Add the following to the list of Valid OAuth redirect URIs
'http://social-diary.herokuapp.com/facebook/callback'  (not https)
'http://localhost:3001/facebook/callback'

For Feed:
API endpoint:   https://developers.facebook.com/docs/graph-api/reference/v2.11/user/feed
Tutorial:       https://lorenstewart.me/2017/03/12/using-node-js-to-interact-with-facebooks-graph-api/



Step 5: Create Instagram Account/Register Client in the developer console
Dev Console:    https://www.instagram.com/developer/clients/register/
Tutorial:       https://css-tricks.com/everything-need-know-instagram-api-integration/#instagram-api-part-two-how-to

CLIENT INFO
Redirect URI:   http://social-diary.herokuapp.com/instagram/callback, http://localhost:3001/instagram/callback
CLIENT ID	    dd1f3469aa8844139a6758d22f637743
SUPPORT EMAIL	miss_aman2000@yahoo.com
CLIENT STATUS	Sandbox Mode



