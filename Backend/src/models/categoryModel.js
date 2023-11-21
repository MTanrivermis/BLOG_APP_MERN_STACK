"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | BLOG_APP Category Model
------------------------------------------------------- */
const { Schema, model } = require('mongoose')
/* ------------------------------------------------------- *
{
    "user_id": "65343222b67e9681f937f001",
    "token": "...tokenKey..."
}
/* ------------------------------------------------------- */
// Category Model:

const CategorySchema = new Schema({

    name: {
        type: String,
        trim: true,
        required: true,
    }, 

}, { collection: 'categories', timestamps: true })

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
module.exports = model('Category', CategorySchema)