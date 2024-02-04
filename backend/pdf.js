import mongoose from "mongoose";

const PdfdetailsSchema = new mongoose.Schema({
    pdf: String,
    id: String,
    FileName: String,
    Subject: String,
    Type: String,
    uploadedby: String,
},
{
    collection: "PdfDetails"
}
);

mongoose.model("PdfDetails", PdfdetailsSchema)