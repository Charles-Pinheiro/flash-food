import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import router from "./routes";
import AppError from "./errors/appError";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const app = express();

app.use(express.json());

app.use(
  "/api-documentation",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocument)
);


app.use(router);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

export default app;
