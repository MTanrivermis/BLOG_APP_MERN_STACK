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

    // rest operoter
    const { _id, ...userInfo } = user._doc;

    // register
    const tokenData = await Token.create({user_id: _id,token: passwordEncrypt(_id + Date.now()),});

    userInfo.id = user._id
    userInfo.token = tokenData.token

    console.log(userInfo);

    res.status(201).send(userInfo);
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
