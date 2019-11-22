var mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
var Schema = mongoose.Schema

var personSchema = new Schema({
    name: String, 
    address: String,
    contact: String,
})

var recordSchema = new Schema({
    item: String,
    amount: Number,
    person: personSchema,
})

module.exports = {
    purchaseRecord: mongoose.model('purchaseRecord', recordSchema)
}