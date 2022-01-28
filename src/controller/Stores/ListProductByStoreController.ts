import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import AppError from "../../errors/appError";
import ListProductByStoreService from "../../services/Store/ListProductsByStoreService";


export default class ListProductByStoreController {
    async handle(request: Request, response: Response) {
        const listproductByStoreService = new ListProductByStoreService();        

        return await listproductByStoreService.execute(request).then(
            res => {return response.json(classToClass(res))}
        ).catch(
            (err: AppError) => {
                return response.status(err.statusCode).json({message: err.message})
        });     
    };
};