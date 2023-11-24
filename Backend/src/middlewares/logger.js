const morgan = require('morgan')
const fs = require('node:fs')

module.exports = morgan(
    "combined",
    { stream: fs.createWriteStream('./logs/logsçlog') },
    { flags: "a+" }
)