
# Wax Deal -- https://calm-reef-67389.herokuapp.com/#!/

Wax Deal is a web app that allow you to upload music and help you to connect with other music collector that wants to exchange the music that they  don't want anymore & discover new music.


Logos - 

[![Skylab](https://github.com/FransLopez/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)  

[![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![AngularJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![NodeJS](https://github.com/FransLopez/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)

[![Bootstrap](https://github.com/FransLopez/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)
[![Bower](https://github.com/FransLopez/logo-images/blob/master/logos/bower.png)](https://bower.io/)
[![SASS](https://github.com/FransLopez/logo-images/blob/master/logos/sass.png)](http://sass-lang.com/) 
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/), [bower](https://bower.io/) and [MongoDB](https://www.mongodb.com/)

### Configuration `env` file
You need to create an **.env** file in the project root with the following environment variables configured:
- Port:
```
    PORT=3000
```

- Mongodb path and database to use:
```
    DB_URI=mongodb://localhost:27017/NAME_DB
```

- Secret word to encrypt users' passwords:
```
    SECRET=XXXXXXXXXXXXXXXXXXXXXX
```

### To run the server:
```
    npm start
```
All dependencies will be installed automatically

## API
The server part has multiple Api endpoints using several routes:

`/api` -> Serves the internal data of the users and recipes.
`/auth` -> Serves the authentication options, register and login.


## Built with:
* **SublimeText**
* **Front-end**
    - angular": "^1.6.4"
    - angular-animate": "^1.6.4"
    - angular-jwt": "^0.1.9"
    - angular-route": "^1.6.4"
    - angular-sweetalert": "^1.1.2"
    - angular-toastr": "^2.1.1"
    - bower": "^1.8.0"
    - babelify": "^7.3.0"
    - bootstrap": "^3.3.7"
    - bootstrap-sass": "^3.3.7"
    - brfs": "^1.4.3"
    - ng-table": "^3.0.1"
    - node-sass": "^4.5.3"
    
* **Back-end**
    - body-parser": "^1.17.2
    - dotenv": "^4.0.0"
    - express": "^4.15.3"
    - mongoose": "^4.10.4"
    - nodemailer": "^4.0.1"
    - express-jwt": "^5.3.0"
    - jsonwebtoken": "^7.4.1"
    - passport": "^0.3.2"
    - passport-jwt": "^2.2.1"
    - passport-local": "^1.0.0"
    - passport-local-mongoose": "^4.0.0"
    - browserify": "^14.4.0"
    - nodemon": "^1.11.0"
    - request": "^2.81.0"
    - request-promise": "^4.2.1"
    - sweetalert2": "^6.6.5"
    - watchify": "^3.9.0"

## Authors
[Wally Torres ](https://github.com/studiosally)


CURLS ROUTES
## Add Deal

```
curl -X POST --data "Albumtitle=The Best of Quincy Jones‎(LP, Album&ArtistAlbum=Quincy Jones&VinylCode=SMAS 11163&Genre=Funk / Soul &Country=US&image=http://studiosally.com/portadas/disco1.png" 127.0.0.1:3000/api/waxDeals

curl -X PUT --data "Albumtitle=Punk Floyd" 127.0.0.1:3000/api/waxdeal/5943c6f6a8f70e17b713afd4


curl -X POST --data "Albumtitle=Offering for anxius(LP, Album&ArtistAlbum=Digss DukeKraftwerk&VinylCode=6305 058&Genre=Jazz&Country=EUROPE&image=http://studiosally.com/portadas/disco2.png" 127.0.0.1:3000/api/waxDeals

curl -X POST --data "Albumtitle=Traggic kindom(LP, Album&ArtistAlbum=No doubt&VinylCode=6305 058&Genre=Jazz&Country=EUROPE&image=http://studiosally.com/portadas/disco3.png" 127.0.0.1:3000/api/waxDeals


```

## Get All Deals

```
curl 127.0.0.1:3000/api/waxDeals
```
curl -X GET --data 127.0.0.1:3000/api/waxDeal/594326dd5a1e101121b99c90 
```

## Remove Deal

```
curl -X DELETE 127.0.0.1:3000/api/waxDeal/5941093976cb2e16ef518b2d
```

## Update Deal

```
curl -X PUT --data "Albumtitle=Punk Floyd" 127.0.0.1:3000/api/waxdeal/593691a5eac2f80c94123538
```

