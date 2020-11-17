const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientSchema = require('./Recipients')

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [recipientSchema],
    yes: { type: Number, default: 0 },
    no: {type: Number, default: 0},
    _user: { type: Schema.Types.ObjectId, ref: 'user' },
    datesent: Date,
    lastRespond: Date
});

mongoose.model('surveys', surveySchema);