const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var recordSchema = new Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, 
    symptoms: [
        {
            type: String,
            default: ''
        }
    ],
    disease: {
        type: String,
        default: ''
    },
    treatment: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

var Record = mongoose.model('Record', recordSchema);

module.exports = Record;