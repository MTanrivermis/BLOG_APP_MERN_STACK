"use strict";
/* -------------------------------------------------------
    EXPRESS_JS - BLOG-API Controller
------------------------------------------------------- */
// User Controller:
const User = require("../models/user");
const Token = require("../models/token");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const sendMail = require('../helpers/sendMail')

module.exports = {
  list: async (req, res) => {

    /*
    #swagger.tags=['Users']
    
     */

    const data = await res.getModelList(User);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(User),
      data,
    });
  },

  create: async (req, res) => {

    /*
      #swagger.tags=['Users']
      
      */

    const user = await User.create(req.body);
    console.log(user._id)

    // register
    const tokenData = await Token.create({ user_id: user._id, token: passwordEncrypt(user._id + Date.now()) });


    user._doc.id = user._id;
    user._doc.token = tokenData.token;

    sendMail(
      user.email,
      'welcome',
      `
      <p>Welcome my blog app</p>
      Verify Email: http://127.0.0.1:8000/users/verify/?id=${user._id}&verifyCode=${passwordEncrypt(user.email)}
      `
    )

    console.log(user._id)

    res.status(201).send(user);
  },

  read: async (req, res) => {

    /*
      #swagger.tags=['Users']
      
      */

    const data = await User.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {

    /*
      #swagger.tags=['Users']
      
      */

    const data = await User.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      data,
      new: await User.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {

    /*
      #swagger.tags=['Users']
      
      */

    const data = await User.delete({ _id: req.params.id });
    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },

  verify: async (req, res) => {

    const { id: _id, verifyCode } = req.query

    console.log(req.query)

    const user = await User.findOne({ _id })
    console.log(user)

    if (
      user && verifyCode == passwordEncrypt(user.email)
    ) {
      await User.updateOne({ _id }, { emailVerified: true })
      sendMail(
        user.email,
        'Email Verified',
        'Email Verified'
      )

      res.status(200).send({
        error: false,
        message: 'Email Verified'
      })
    } else {
      res.errorStatusCode = 402
      throw new Error('User not found')
    }
  }
};

