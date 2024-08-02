import { Router, Request,Response } from "express";
import { IncidentController } from "./incidents/controller";
import { IncidentRoutes } from "./incidents/routes";

export class AppRoutes {
    static get routes() : Router{
        const router = Router();
        router.use('/api/incidents', IncidentRoutes.routes);
        return router;
    }
}