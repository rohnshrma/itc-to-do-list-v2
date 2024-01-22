const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    }
})

module.exports = mongoose.model("item",itemSchema)