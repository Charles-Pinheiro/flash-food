import { Request } from "express";
import { getCustomRepository } from "typeorm";
import { ReviewRepository } from "../../repositories/Reviews/ReviewsRepository"
import AuthConfig from "../../config/auth";
import { verify } from "jsonwebtoken";
import AppError from "../../errors/appError";
import { StoreRepository } from "../../repositories/Store/StoresRepository";

export default class ListReviewService {
    
    async execute(request: Request) {

        const reviewRepository = getCustomRepository(ReviewRepository);
        const storeRepository = getCustomRepository(StoreRepository);
        const storeId = request.params.store_id;

        const store = await storeRepository.findOne(storeId);

        if(!store) {
            throw new AppError("Store not found.", 404);
        }

        const reviews = await reviewRepository.find({
            where: {
                storeId
            }
        });
        return reviews;

    };
};
