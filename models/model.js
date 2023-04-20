const mongoose = require('mongoose')

const acronymSchema = mongoose.Schema(
    {
        _id:{
            type: String,
            require: [true, "please include an id"]
        },
        acronym: {
            type: String,
            require: [true, "please include an acronymn"]
        },
        definition: {
            type: String,
            require: [true, "please include an definition"]
        }
    }
)
const Acronym = mongoose.model('Acronym', acronymSchema);

module.exports = Acronym;