"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const incidentSchema = new mongoose_1.default.Schema({
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
exports.IncidentModel = mongoose_1.default.model('Incident', incidentSchema);
