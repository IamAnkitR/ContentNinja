import React from "react";
import ContactList from "../src/components/ContactList";
import AddContactForm from "../src/components/AddContactForm";
import CompanyList from "../src/components/CompanyList";
import TicketList from "../src/components/TicketList";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        HubSpot API Integration
      </h1>
      <AddContactForm />
      <ContactList />
      <CompanyList />
      <TicketList />
    </div>
  );
};

export default App;
