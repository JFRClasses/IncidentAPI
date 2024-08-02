import { Request, Response } from "express";
import { Incident } from "../../domain/entities/incident.entity";
import { IncidentModel } from "../../data";

const incidents = [
    {
        id:1,
        title: 'Caso 1',
        description: 'Detalhes do caso',
    },
    {
        id:2,
        title: 'Caso 2',
        description: 'Detalhes do caso',
    },
    {
        id:3,
        title: 'Caso 3',
        description: 'Detalhes do caso',
    }
]



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
        const { title, description, status } = req.body;
        const newIncient = await IncidentModel.create({
            title,
            description,
            status,
            createdDate: new Date()
        });
        return res.json(newIncient);
    }

    public updateIncident = async (req: Request, res:Response) => {
        const { id } = req.params;
        const { title, description, status } = req.body;
        const incident = await IncidentModel.findByIdAndUpdate(id, {
            title,
            description,
            status
        });
        return res.json(incident);
    }

    public deleteIncident = async (req: Request, res:Response) => {
        const { id } = req.params;
        await IncidentModel.findByIdAndDelete(id);
        return res.json({message: 'Incident deleted'});
    }
}