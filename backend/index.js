import express, { request, response }  from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Pdf } from "./models/pdf.js";
import multer from "multer";
const app = express();



mongoose.connect(mongoDBURL).then(() => {
    console.log("App connected to databse");
    app.listen(PORT, () => {
        console.log("App is listening to port: ${PORT}");
    });
})
.catch((error) => {
    console.log(error);
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.post('/upload', upload.single('pdf'), async (req, res) => {
    // Handle the uploaded file
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const { Id, name, subject, type, uploaded } = req.body;

    // Save information about the uploaded file to MongoDB
    const newPdf = new Pdf({
        Id,
        name,
        subject,
        type,
        uploaded,
        file: {
            originalname: req.file.originalname,
            filename: req.file.filename,
            path: req.file.path,
        },
    });

    try {
        const savedPdf = await newPdf.save();
        console.log('File information saved to MongoDB:', savedPdf);
        res.send('File uploaded and information saved to MongoDB.');
    } catch (error) {
        console.error('Error saving PDF information to MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('WELCOME');
});

