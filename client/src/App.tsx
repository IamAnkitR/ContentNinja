import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContactForm from "./components/AddContactForm";
import CompanyList from "./components/CompanyList";
import TicketList from "./components/TicketList";
import Drawer from "./components/Drawer";

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <Router>
      <Header />
      <div className="container mx-auto p-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="flex justify-end mr-6">
                  <button
                    onClick={toggleDrawer}
                    className="px-4 py-2 mb-4 bg-blue-500 text-white rounded"
                  >
                    Add New Contact
                  </button>
                </div>

                <ContactList />
                <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
                  <AddContactForm />
                </Drawer>
              </>
            }
          />
          <Route
            path="/contacts"
            element={
              <>
                <div className="flex justify-end mr-6">
                  <button
                    onClick={toggleDrawer}
                    className="px-4 py-2 mb-4 bg-blue-500 text-white rounded"
                  >
                    Add New Contact
                  </button>
                </div>

                <ContactList />
                <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
                  <AddContactForm />
                </Drawer>
              </>
            }
          />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route
            path="*"
            element={
              <div className="text-center text-gray-500">
                Please select a section from above.
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
