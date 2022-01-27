import { Router } from "express";
import CreateReviewController from "../../controller/Reviews/CreateReviewController";
import ListReviewController from "../../controller/Reviews/ListReviewController";
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

reviewRouter.get("/store/", Authentication, (request, response) => {
    const listReviewController = new ListReviewController();
    listReviewController.handle(request, response)
});

export default reviewRouter;