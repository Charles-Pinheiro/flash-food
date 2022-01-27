import { Router } from "express";
import Authentication from "../../middlewares/Authentication";
import validateSchema from "../../middlewares/ValidateSchema";
import { fiveLimitSchema } from "../../controller/Reviews/FiveStarsLimit";

import CreateReviewController from "../../controller/Reviews/CreateReviewController";
import ListReviewController from "../../controller/Reviews/ListReviewController";
import DeleteReviewController from "../../controller/Reviews/DeleteReviewController"

const reviewRouter = Router();

const createReview = new CreateReviewController();

reviewRouter.post(
    "/store/:store_id/", Authentication,
    validateSchema(fiveLimitSchema),
    createReview.handle
);

reviewRouter.get("/store/", Authentication, (request, response) => {
    const listReviewController = new ListReviewController();
    listReviewController.handle(request, response)
});

reviewRouter.delete("/store/:idReview", Authentication, (request, response) => {
    const deleteReviewController = new DeleteReviewController();
    deleteReviewController.handle(request, response);
});

export default reviewRouter;