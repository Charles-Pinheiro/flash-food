import { Request, Response } from "express";
import DeleteReviewService from "../../services/Review/DeleteReview";

export default class DeleteReviewController {

    async handle(request: Request, response: Response) {

        const deleteStoreService = new DeleteReviewService();
        const reviews = await deleteStoreService.execute(request);

        return response.status(204).json(reviews);

    };
};