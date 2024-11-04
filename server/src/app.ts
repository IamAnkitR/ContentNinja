import express from "express";
import cors from "cors";
import router from "../src/routes";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/companies", router.companiesRoutes);
app.use("/api/contacts", router.contactRoutes);
app.use("/api/tickets", router.ticketsRoutes);

export default app;
