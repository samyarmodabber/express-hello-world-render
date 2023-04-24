const mongoose = require('mongoose')

const wordSchema = mongoose.Schema(
    {
        esperanto: {
            type: String,
            required: [true, "Please enter the esperanto word"]
        },
        translate: {
            type: String,
            required: true,
            // default: 0
        },
    },
    {
        timestamps: true
    }
)


const Word = mongoose.model('eoenpauldenisowski', wordSchema);

module.exports = Word;