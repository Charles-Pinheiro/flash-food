import { Request } from "express";
import { DeleteResult, getCustomRepository } from "typeorm";
import AppError from "../../errors/appError";
import { ReviewRepository } from "../../repositories/Reviews/ReviewsRepository";

export default class DeleteReviewService {

    async execute(request: Request): Promise<DeleteResult> {

        const idReview = request.params.idReview;        
        const reviewRepository = getCustomRepository(ReviewRepository);

        const review = await reviewRepository.findOne(idReview);

        if(!review) {
            throw new AppError("Not found any review with this ID.", 404);
        };

        if(review.userId !== request.user.id) {
            throw new AppError("No permission for this store.", 403);
        };

        return reviewRepository.delete(idReview);
    };
};