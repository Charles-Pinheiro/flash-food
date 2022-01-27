import { Request, Response } from "express";
import AppError from "../../errors/appError";
import UpdateReviewService from "../../services/Review/UpdateReviewService";

export default class UpdateReviewController {

    async handle(request: Request, response: Response) {

        const updateReviewService = new UpdateReviewService();

    
        return await updateReviewService.execute(request).then(
            res => {return response.json(res)}
        ).catch(
            (err: AppError) => {
                return response.status(err.statusCode).json({message: err.message})    
        });
    };
}