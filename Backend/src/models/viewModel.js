"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | BLOG_APP View Model
------------------------------------------------------- */
const { Schema, model } = require('mongoose')
/* ------------------------------------------------------- *

/* ------------------------------------------------------- */
// View Model:

const ViewSchema = new Schema({

    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    },

    viewedBy: {
        type: Array,
        default: [],
    }

}, { collection: 'views', timestamps: true })


/* ------------------------------------------------------- */
module.exports = model('View', ViewSchema)