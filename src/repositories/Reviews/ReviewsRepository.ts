import { EntityRepository, Repository } from "typeorm";
import Review from "../../models/Reviews";

@EntityRepository(Review)
class ReviewRepository extends Repository<Review> {};

export { ReviewRepository };