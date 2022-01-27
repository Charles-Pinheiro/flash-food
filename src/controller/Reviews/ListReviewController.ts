import { Request, Response } from "express";
import ListReviewService from "../../services/Review/ListReviews";

export default class ListReviewController {

    async handle(request: Request, response: Response) {

        const listReviewService = new ListReviewService();
        const reviews = await listReviewService.execute(request);

        return response.json(reviews);

    };
};