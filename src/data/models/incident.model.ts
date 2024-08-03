import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export const IncidentModel = mongoose.model('Incident', incidentSchema);