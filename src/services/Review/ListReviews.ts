import { Request } from "express";
import { getCustomRepository } from "typeorm";
import { ReviewRepository } from "../../repositories/Reviews/ReviewsRepository"
import AuthConfig from "../../config/auth";
import { verify } from "jsonwebtoken";
import AppError from "../../errors/appError";

export default class ListReviewService {
    
    async execute(request: Request) {

        const reviewRepository = getCustomRepository(ReviewRepository);
        const header = request.headers.authorization?.replace("Bearer", "");                

        if(!header) {
            const allReviews = await reviewRepository.find();
            return allReviews;            
        };        

        try {
            const [, token] = header.split(" ")
            const { secret } = AuthConfig.jwt;
            const { sub } = verify(token, secret);

            const reviews = await reviewRepository.find({
                where: {
                    userId: sub
                }
            });
            return reviews;

        }catch(err) {            
            throw new AppError("Inválid Token");
        };
    };
};
