import { Request, Response } from "express";
import AppError from "../../errors/appError";
import DeleteStoreService from "../../services/Store/DeleteStoreService";

export default class DeleteStoreController {
    async handle(request: Request, response: Response) {
        const deleteStoreService = new DeleteStoreService();

        return await deleteStoreService.execute(request).then(
            res => {return response.status(204).json(res)}
        ).catch(
            (err: AppError) => {                
                return response.status(err.statusCode).json({message: err.message})
            });       
    };
};