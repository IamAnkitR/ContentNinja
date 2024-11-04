import express from "express";
import controller from "../controller";

const router = express.Router();

router.get("/fetchTickets", controller.fetchTicketsDetails);

export default router;
