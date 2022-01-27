import { Router } from "express";
import CreateReviewController from "../../controller/Reviews/CreateReviewController";
import Authentication from "../../middlewares/Authentication";
import validateSchema from "../../middlewares/ValidateSchema";
import { fiveLimitSchema } from "../../controller/Reviews/FiveStarsLimit";

const reviewRouter = Router();

const createReview = new CreateReviewController();

reviewRouter.post(
    "/store/:store_id/",
    Authentication,
    validateSchema(fiveLimitSchema),
    createReview.handle
);

export default reviewRouter;