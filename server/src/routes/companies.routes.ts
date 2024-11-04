import express from "express";
import controller from "../controller";

const router = express.Router();

router.get("/fetchComapnies", controller.fetchCompanyDetails);

export default router;
