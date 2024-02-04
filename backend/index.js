import express, { request, response }  from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import multer from "multer";
import cors from "cors";
import "./pdf.js"


const app = express();
app.use(express.json());
app.use(cors()); 
app.use("/files",express.static("files"))
//---------------------------------------------------

mongoose.connect(mongoDBURL).then(() => {
    console.log("App connected to databse");
    app.listen(PORT, () => {
        console.log("App is listening to port: ${PORT}");
    });
})
.catch((error) => {
    console.log(error);
});

//------------------------------------------------------------
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "./files");
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Date.now();
        cb(null,uniqueSuffix + file.originalname);
    },
});
const PdfSchema = mongoose.model("PdfDetails")
const upload = multer({ storage: storage});

app.post("/upload-files", upload.single("file"),async(req,res)=>{
    console.log(req.file);
    const id=req.body.id;
    const FileName=req.body.FileName;
    const Subject=req.body.Subject;
    const Type=req.body.Type;
    const uploadedby=req.body.uploadedby;
    const filename = req.file.filename;
    try {
        await PdfSchema.create({id: id, FileName: FileName, Subject: Subject, Type: Type, uploadedby: uploadedby, pdf: filename });
        res.send({status: "ok"})
    } catch (error) {
        res.json({status:error})
    }

});

app.get("/get-files",async(req,res)=>{
    try{
        PdfSchema.find({}).then((data)=>{
            res.send({status: "ok", data: data});
        });
    } catch (error){}
});

//---------------------------------------------------------
app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('WELCOME');
});

