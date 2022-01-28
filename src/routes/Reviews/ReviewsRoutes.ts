import { request, Router } from "express";
import Authentication from "../../middlewares/Authentication";
import validateSchema from "../../middlewares/ValidateSchema";
import { fiveLimitSchema } from "../../controller/Reviews/FiveStarsLimit";

import CreateReviewController from "../../controller/Reviews/CreateReviewController";
import ListReviewController from "../../controller/Reviews/ListReviewController";
import DeleteReviewController from "../../controller/Reviews/DeleteReviewController"
import UpdateReviewController from "../../controller/Reviews/UpdateProductController";

const reviewRouter = Router();

const createReview = new CreateReviewController();
const listReview = new ListReviewController();
const deleteReview = new DeleteReviewController();
const updateReview = new UpdateReviewController();

reviewRouter.post(
    "/store/:store_id", 
    Authentication,
    validateSchema(fiveLimitSchema),
    createReview.handle
);

reviewRouter.get("/store", 
    Authentication, (request, response) => {
    listReview.handle(request, response)
});

reviewRouter.put(
    "/store/:idReview",
    Authentication,
    validateSchema(fiveLimitSchema),
    (request, response) => {
        updateReview.handle(request, response)
    }
    
);

reviewRouter.delete("/store/:idReview/", 
    Authentication, (request, response) => {
    deleteReview.handle(request, response);
});

export default reviewRouter;