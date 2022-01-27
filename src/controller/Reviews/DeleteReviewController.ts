import { Request, Response } from "express";
import AppError from "../../errors/appError";
import DeleteReviewService from "../../services/Review/DeleteReview";

export default class DeleteReviewController {

    async handle(request: Request, response: Response) {

        const deleteReviewService = new DeleteReviewService();

        return await deleteReviewService.execute(request).then(
            res => {return response.status(204).json(res)}
        ).catch(
            (err: AppError) => {
                return response.status(err.statusCode).json({message: err.message})
        });
    };
};