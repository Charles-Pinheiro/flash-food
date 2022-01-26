import { getCustomRepository } from "typeorm";
import Review from "../../models/Reviews";
import { ReviewRepository } from "../../repositories/Reviews/ReviewsRepository";
import { Request } from "express"

interface IReview {
  stars: number;
  review: string;
}

export default class CreateReviewService {

  public async execute(request: Request): Promise<Review> {

    const reviewRepository = getCustomRepository(ReviewRepository);

    const userId = request.user.id
    const storeId = request.params.store_id

    console.log('USER_ID: ', userId)
    console.log('USER_STORE: ', storeId)

    const { stars, review }:IReview = request.body

    const reviewRepo = reviewRepository.create({
      store: storeId,
      stars,
      user: userId,
      review
    });

    await reviewRepository.save(reviewRepo);

    return reviewRepo;
  }
}
