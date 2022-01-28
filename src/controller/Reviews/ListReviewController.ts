import { Request, Response } from "express";
import AppError from "../../errors/appError";
import ListReviewService from "../../services/Review/ListReviews";

export default class ListReviewController {

    async handle(request: Request, response: Response) {

        const listReviewService = new ListReviewService();

        return await listReviewService.execute(request).then(
            res => {return response.status(200).json(res)}
        ).catch(
            (err: AppError) => {
                return response.status(err.statusCode).json({message: err.message})
        });

    };
};