import { Router } from "express";
import CreateReviewController from "../../controller/Reviews/CreateReviewController";
import Authentication from "../../middlewares/Authentication";

const reviewRouter = Router();

const createReview = new CreateReviewController();

reviewRouter.post(
    "/store/:store_id/",
    Authentication,
    createReview.handle
);

export default reviewRouter;