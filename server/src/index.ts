import express from "express";
import { PORT } from "./utils/config";
import loginRouter from "./routers/loginRouter";
import userRouter from "./routers/userRouter";
const app = express();

app.use(express.json());
app.use("/api/login", loginRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
