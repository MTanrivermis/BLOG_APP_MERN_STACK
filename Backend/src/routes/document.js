"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/document:

//URL:/documents
router.all("/", (req, res) => {
    res.send({
        swagger: "/documents/swagger",
        redoc: "/documents/redoc",
        json: "/documents/json",
    });
});

// Swagger:
const swaggerUi = require('swagger-ui-express')

router.use(
    '/swagger', swaggerUi.serve, swaggerUi.setup(require('../configs/swagger.json')
        , {
            swaggerOptions: { persistAuthorization: true }
        })
);

// Redoc:
const redoc = require('redoc-express')
router.use('/redoc', redoc({ specUrl: '/documents/json', title: 'API Docs' }))

// JSON:
router.use('/json', (req, res) => {
    res.sendFile(`/src/configs/swagger.json`, { root: '.' })
})
/* ------------------------------------------------------- */
module.exports = router