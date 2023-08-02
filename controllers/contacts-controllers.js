import Contact from "../model/Contact.js";

const getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

const getContactByID = async (req, res) => {};

export default {
  getAllContacts,
  getContactByID,
};
