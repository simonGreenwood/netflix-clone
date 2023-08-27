//import { Prisma } from "@prisma/client";
import { NextFunction } from "express";
import { Prisma } from "@prisma/client";
const errorHandler = (
  error: Error,
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  console.log("error", error);
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      throw new Error("Duplicate unique key");
    }
    console.log(error.code, error.meta, error.message, error.stack);
  }
  console.log(error.message);
  if (error.message === "data and salt arguments required") {
    throw new Error("Password is required");
  }
  next();
};

export default errorHandler;
