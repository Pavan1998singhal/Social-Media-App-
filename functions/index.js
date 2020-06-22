const functions = require('firebase-functions');

const app = require('express')();

const FBauth = require('./util/fbauth'); 


const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login } = require('./handlers/users');

//Screams Route
app.get('/screams', getAllScreams);
app.post('/scream', FBauth, postOneScream);

//users route
app.post('/signup', signup);
app.post('/login', login);

//https:baseurl.com/api/

exports.api = functions.https.onRequest(app);