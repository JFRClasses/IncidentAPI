import { Request, Response } from "express";
import { IncidentModel } from "../../data";

export class IncidentController{

    constructor(){}

    public getIncidents = async (req: Request, res:Response) => {
        const incidents = await IncidentModel.find();
        return res.json(incidents);
    }

    public getIncidentById = async (req: Request, res:Response) => {
        const { id } = req.params;
        const incident = await IncidentModel.findById(id);
        return res.json(incident);
    }

    public createIncident = async (req: Request, res:Response) => {
        const { lat, lng, description } = req.body;
        const newIncient = await IncidentModel.create({
            lat,
            lng,
            description,
        });
        return res.json(newIncient);
    }

    public updateIncident = async (req: Request, res:Response) => {
        const { id } = req.params;
        const { lat,lng,description } = req.body;
        const incident = await IncidentModel.findByIdAndUpdate(id, {
            lat,
            lng,
            description
        });
        return res.json(incident);
    }

    public deleteIncident = async (req: Request, res:Response) => {
        const { id } = req.params;
        await IncidentModel.findByIdAndDelete(id);
        return res.json({message: 'Incident deleted'});
    }
}