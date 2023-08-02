import express from "express";

import contactsControllers from "../../controllers/contacts-controllers.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

export default contactsRouter;
