const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

var connString = ''

if(process.env.NODE_ENV === 'production') {
    connString = process.env.DB_CONNECTSTRING_PRODUCTION
} else if (process.env.NODE_ENV === 'dev') {
    connString = process.env.DB_CONNECTSTRING_DEV
}

mongoose.connect(connString, {useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
module.exports = db