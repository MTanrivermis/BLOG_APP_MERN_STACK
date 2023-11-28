"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// node i nodemailer
// sendMail(to:string, subject:string, message:string):


const nodemailer = require('nodemailer')

//nodemailer.createTestAccount().then((email) => console.log(email))

module.exports = function (to, subject, message) {
    //Connection to mailServer:

    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.ethereal.email',
    //     port: '587',
    //     secure: false, // false | 'tls' | 'ssl' // mail servisleri genelde ssl ayarlarını çok istemezler kendi içinde çözerler
    //     auth: {
    //         user: 'g7t5o53awcakxxdm@ethereal.email',
    //         pass: 's6XZuGPZw3zf6yfTaQ'
    //     }
    // })

    // // Send Mail:
    // transporter.sendMail({
    //     from: 'a6rt5fd7ub73r6za@ethereal.email',
    //     to: 'm.tanrivermis88@gmail.com',
    //     subject: 'Hello',  // konu 
    //     text: 'Hello There!', // içerik
    //     html: '<b> Hello World </b>' // textin alternatifi html.. text te yalın metin gönderilirken html de html etiteklerini kullanarak düzenlenen bir mail gönderebiliriz.
    // }, (error, successInfo) => {
    //     (error) ? console.log(error) : console.log(successInfo)
    // })

    /* -------------------------------------------------------------------------------------------*/


    //? GOOGLE MAIL SERVISI
    // Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
    const mailSettings = {
        service: 'Gmail',
        user: 'tanrivermis.mehmet@gmail.com',
        pass: 'tima kybt kdfb tfma'
    }

    // Mail Content:
    const mailContent = {
        from: mailSettings.user,
        to: to,
        subject: subject,
        text: message,
        html: message
    }

    // Connect to mailServer:
    const transporter = nodemailer.createTransport({
        service: mailSettings.service,
        auth: {
            user: mailSettings.user,
            pass: mailSettings.pass
        }
    })

    //Send Mail
    transporter.sendMail(mailContent, (error, info) => {
        error ? console.log(error) : console.log(info)
    })
}