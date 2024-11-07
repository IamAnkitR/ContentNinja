import React, { useEffect, useState } from "react";
import { fetchContacts } from "../api";
import { IContact } from "../interface";

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [after, setAfter] = useState(null);
  const [isLastPage, setIsLastPage] = useState(false);
  const [count, setCount] = useState(0);
  const contactsPerPage = 100;

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await fetchContacts(currentPage, after);
        setIsLastPage(!response.data.nextPageAfter);

        setContacts(response.data.contacts);
        setAfter(response.data.nextPageAfter);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    getContacts();
  }, [currentPage]);

  const nextPage = () => {
    if (!isLastPage) {
      setCurrentPage((prev) => prev + 1);
      setCount((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setCount((prev) => prev - 1);
      setAfter(null);
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
            disabled={count > 3}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${
              count > 3 ? "opacity-50 cursor-not-allowed" : ""
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
          {contacts.map((contact, index) => (
            <tr key={contact.id} className="border-b">
              <td className="p-2">
                {(currentPage - 1) * contactsPerPage + index + 1}
              </td>
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
