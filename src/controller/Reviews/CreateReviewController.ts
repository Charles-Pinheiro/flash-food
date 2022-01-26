import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import CreateReviewService from "../../services/Review/CreateReviewService";

export default class CreateReviewController {

    async handle(request: Request, response: Response) {

        const createReview = new CreateReviewService();
        const review = await createReview.execute(request);        

        return response.status(201).json(classToClass(review));
    };
};
