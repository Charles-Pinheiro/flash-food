import express from "express";
import routes from "./routes";
import connection from "./database";

connection();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    "Running..."
});

export default app;