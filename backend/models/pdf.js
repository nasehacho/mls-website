// models/pdf.js

import mongoose from 'mongoose';

const pdfSchema = new mongoose.Schema({
    Id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    uploaded: {
        type: String, // Assuming it's a username or identifier
        required: true,
    },
    uploadedDateTime: {
        type: Date,
        default: Date.now,
    },
    file: {
        originalname: String,
        filename: String,
        path: String,
    },
});


export const Pdf = mongoose.model('Pdf', pdfSchema);


