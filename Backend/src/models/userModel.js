"use strict"
/* -------------------------------------------------------
    USERS BLOGG APP
------------------------------------------------------- */

/* ------------------------------------------------------- *

{
    "username": "admin",
    "password": "aA?123456",
    "email": "admin@site.com",
    "first_name": "admin",
    "last_name": "admin",
    "image":"",
    "bio":"",
    "isAdmin": true
}

/* ------------------------------------------------------- */

const { Schema, model } = require('mongoose')
const { isEmail } = require('validator') // for Validate process : npm i validator
const passwordEncrypt = require('../helpers/passwordEncrypt')

// User Model:
const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    },
    
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true,
        validate: [isEmail, "Email type is not correct"]
    },
    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password)
    },
    first_name: {
        type: String,
        trim: true,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        required: false
    },
    bio: {
        type: String,
        trim: true,
        required: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
​
},{ collection: 'users', timestamps: true })
/* ------------------------------------------------------- */
// Schema Configs:
module.exports = model('User', UserSchema)