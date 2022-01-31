import { Request, Response } from "express";
import AppError from "../../errors/appError";
import ListStoreByLocalizationService from "../../services/Store/ListStoreByLocalizationService";


export default class ListStoreByLocalizationController {
    async handle(request: Request, response: Response) {
        const listStoreByLocalizationService = new ListStoreByLocalizationService();        

        return await listStoreByLocalizationService.execute(request).then(
            res => {return response.json(res)}
        ).catch(
            (err: AppError) => {
                return response.status(err.statusCode).json({message: err.message})
        });   
    };
};