import mongoose from "mongoose";

const medicleRecordSchema = new mongoose.Schema({
    
},{timestamps:true})


export const MedicalReport = mongoose.model("MedicalReport", medicleRecordSchema)