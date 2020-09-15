
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');
const users = mongoose.model('users');

passport.serializeUser((user, done) =>{
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    user.findById(id)
    .then(user => {
        done(null, user);
    });
});

const { googleClientSecret } = require('../config/keys');

passport.use(
    new GoogleStrategy(
        {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'    
        },
        (accessToken, refreshToken, profile, done) => {
            
            user.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if(existingUser)
                {
                    //we already have a record of the perticular google ID
                    done(null,existingUser);
                }
                else
                {
                    //we dont have record of that perticular google ID
                    new user({ googleId: profile.id })
                    .save()
                    .then(user => done(null,user)) 
                }
            })
        }
       )
    );
    