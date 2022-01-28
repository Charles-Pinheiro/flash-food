import { Request } from "express";
import { getCustomRepository } from "typeorm";
import AppError from "../../errors/appError";
import { ReviewRepository } from "../../repositories/Reviews/ReviewsRepository";

interface ReviewRequest {
    stars: number;
    review: string;
}

export default class UpdateReviewService {

    async execute(request: Request) {
        
        const { idReview } = request.params;

        const reviewRepository = getCustomRepository(ReviewRepository);
        const review = await reviewRepository.findOne(idReview);
        
        if (!review) {
            throw new AppError('Not found any review with this ID.', 404);
        }

        review.stars = request.body.stars;
        review.review = request.body.review;
        
        await reviewRepository.save(review);

        const updatedReview = await reviewRepository.findOne(idReview);

        return updatedReview;
    }
}