"use strict"
//* $npm i swagger-autogen
//* $npm i swagger-ui-express
//* $npm i redoc-express

const swaggerAutogen = require('swagger-autogen')()
const packageJson = require('./package.json')
require('dotenv').config()

const document = {
    info: {
        version: packageJson.version,
        title: packageJson.title,
        description: packageJson.description,
        termsOfService: 'http://',
        contact: {
            name: packageJson.author,
            email: 'tanrivermis.mehmet@gmail.com'
        },
        license: packageJson.license
    },
    host: `${process.env.HOST}:${process.env.PORT}`,
    basePath: '/',
    consumes: ['application/json'],
    produces: ['application/json'],
    schemes: ['http', 'https'],
    securityDefinitions: {
        Token: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description:
                "SimpleToken Auth * Example: <b>Token <i>...tokenKey...</i></b>"
        }
    },
    security: [{ Token: true }],
    definition: {
        "User": require('./src/models/user').schema.obj,
        "Blog": require('./src/models/blog').schema.obj,
        "Category": require('./src/models/category').schema.obj,
        "Comment": require('./src/models/comment').schema.obj,
        "Like": require('./src/models/like').schema.obj,
        "View": require('./src/models/view').schema.obj
    }
};
const routes = ['./index.js']
const outputFile = './src/configs/swagger.json'

swaggerAutogen(outputFile, routes, document);