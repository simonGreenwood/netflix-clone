import express from "express";
import { PORT } from "./utils/config";
import loginRouter from "./routers/loginRouter";
import userRouter from "./routers/userRouter";
import { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
const app = express();

/*const errorHandlerr = (_req: Request, _res: Response, next: NextFunction) => {
  console.log("lolz");
  next();
};*/
import errorHandler from "./utils/middleware";
app.use(express.json());
app.use("/api/login", loginRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
