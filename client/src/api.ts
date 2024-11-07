import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const API = axios.create({ baseURL: `${REACT_APP_API_URL}/api` });

export const fetchContacts = (currentPage: number, after: number | null) =>
  API.get("/contacts/fetchContacts", {
    params: {
      currentPage,
      after,
    },
  });
export const addContact = (contactData: { email: string; phone: string }) =>
  API.post("/contacts/addContact", contactData);
export const fetchCompanies = () => API.get("/companies/fetchComapnies");
export const fetchTickets = () => API.get("/tickets/fetchTickets");
