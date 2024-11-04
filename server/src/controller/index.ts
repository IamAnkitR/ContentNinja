import * as CompanyController from "./companies.controller";
import * as ContactController from "./contacts.controller";
import * as TicketController from "./tickets.controller";

export default {
  ...CompanyController,
  ...ContactController,
  ...TicketController,
};
