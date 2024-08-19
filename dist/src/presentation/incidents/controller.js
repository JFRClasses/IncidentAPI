"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentController = void 0;
const data_1 = require("../../data");
class IncidentController {
    constructor() {
        this.getIncidents = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const incidents = yield data_1.IncidentModel.find();
            return res.json(incidents);
        });
        this.getIncidentById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const incident = yield data_1.IncidentModel.findById(id);
            return res.json(incident);
        });
        this.createIncident = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { lat, lng, description } = req.body;
            const newIncient = yield data_1.IncidentModel.create({
                lat,
                lng,
                description,
            });
            return res.json(newIncient);
        });
        this.updateIncident = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { lat, lng, description } = req.body;
            const incident = yield data_1.IncidentModel.findByIdAndUpdate(id, {
                lat,
                lng,
                description
            });
            return res.json(incident);
        });
        this.deleteIncident = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield data_1.IncidentModel.findByIdAndDelete(id);
            return res.json({ message: 'Incident deleted' });
        });
    }
}
exports.IncidentController = IncidentController;
