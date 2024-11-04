import React, { useEffect, useState } from "react";
import { fetchContacts } from "../api";
import { IContact } from "../interface";

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 100;

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await fetchContacts();
        setContacts(response.data.results);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    getContacts();
  }, []);

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts?.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(contacts.length / contactsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded mb-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
        <div className="flex justify-end gap-4 items-center">
          <span className="font-medium">Page {currentPage}</span>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>

          <button
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(contacts.length / contactsPerPage)
            }
            className={`px-4 py-2 bg-blue-500 text-white rounded ${
              currentPage === Math.ceil(contacts.length / contactsPerPage)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left font-semibold">S. No.</th>
            <th className="p-2 text-left font-semibold">Email</th>
            <th className="p-2 text-left font-semibold">Phone</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.map((contact, index) => (
            <tr key={contact.id} className="border-b">
              <td className="p-2">{indexOfFirstContact + index + 1}</td>
              <td className="p-2">{contact.properties.email || "N/A"}</td>
              <td className="p-2">{contact.properties.phone || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
