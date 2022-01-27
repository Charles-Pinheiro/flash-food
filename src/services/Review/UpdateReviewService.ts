import { Request } from "express";
import { getCustomRepository } from "typeorm";
import AppError from "../../errors/appError";
import { ReviewRepository } from "../../repositories/Reviews/ReviewsRepository";

interface IReview {
    stars: number;
    review: string;
}

export default class UpdateReviewService {

    public async execute(request: Request ) {
        
        const reviewRequest: IReview = request.body;
        const reviewId = request.params.idReview;        
        const reviewRepository = getCustomRepository(ReviewRepository);
    
        try{
            const updateReview = await reviewRepository.findOne(reviewId)

            if(!updateReview) {
                throw new AppError("Review not found.", 404);
            };

            if(updateReview.userId !== request.user.id) {
                throw new AppError("No permission for this store.", 403);
            };
    
        await reviewRepository.save(updateReview);

        }catch(err) {
            throw new AppError("Update Failed.")
        }
        const newReview = await reviewRepository.findOne(reviewId);

        return newReview; 
    };
};