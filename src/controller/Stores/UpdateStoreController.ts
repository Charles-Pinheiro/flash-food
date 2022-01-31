import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import AppError from "../../errors/appError";
import UpdateStoreService from "../../services/Store/UpdateStoreService";


export default class UpdateStoreController {
    async handle(request: Request, response: Response) {
        const updateStoreService = new UpdateStoreService();

        return await updateStoreService.execute(request).then(
            res => {return response.json(res)}
        ).catch(
            (err: AppError) => {
                return response.status(err.statusCode).json({message: err.message})
        });
    };
};
