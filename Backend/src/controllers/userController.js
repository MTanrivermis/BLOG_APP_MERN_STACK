"use strict";
/* -------------------------------------------------------
    EXPRESS_JS - BLOG-API Controller
------------------------------------------------------- */
// User Controller:
const User = require("../models/userModel");
const Token = require("../models/token");
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(User);
    res.status(200).send({
      error: false,
      // details: await res.getModelListDetails(User),
      data,
    });
  },
  
  create: async (req, res) => {

    const user = await User.create(req.body);
    
    const id = user._id
    
    // register
     const tokenData = await Token.create({user_id: user._id,token: passwordEncrypt(user._id + Date.now())});

    const {token} = tokenData

    res.status(201).send({...user._doc,token, id });
  },
  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    const data = await User.updateOne({ _id: req.params.id }, req.body);
    res.status(202).send({
      error: false,
      data,
      new: await User.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await User.delete({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
