import mongoose, { Schema, Model, model, Document, mongo } from "mongoose";

const transferSchema = new mongoose.Schema({
    scheduler: { type: String },
    address: { type: String },
    patient: { type: String },
    contact: { type: String },
    day: { type: String },
    month: { type: String },
    time: { type: String },
    tool: { type: String },
    completed: { type: Boolean }
});

export const Transfer = mongoose.models.Transfer || mongoose.model('Transfer', transferSchema);