import express from "express";
import controller from "../controller";

const router = express.Router();

router.get("/fetchContacts", controller.fetchContactDetails);
router.post("/addContact", controller.addContactDetails);

export default router;
