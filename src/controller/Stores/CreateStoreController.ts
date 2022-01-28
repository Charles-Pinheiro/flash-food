import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import AppError from "../../errors/appError";
import CreateStoreService from "../../services/Store/CreateStoreService";


export default class CreateStoreController {
    async handle(request: Request, response: Response) {

        const createStore = new CreateStoreService();
        return await createStore.execute(request.body, request.user).then(
            res => {return response.status(201).json(res)}
        ).catch(
            (err: AppError) => {                
                return response.status(err.statusCode).json({message: err.message})
            });
    };
};
