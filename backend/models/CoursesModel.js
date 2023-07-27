const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    img:{
        type: String,
        required: true
    },
    title: {
        type: String,
        reuiqred: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Course', courseSchema)
