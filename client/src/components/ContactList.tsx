import React, { useEffect, useState } from "react";
import { fetchContacts } from "../api";
import { IContact } from "../interface";

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await fetchContacts();
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    getContacts();
  }, []);

  return (
    <div className="p-6 bg-white shadow rounded mb-4">
      <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="border-b py-2">
            <p className="font-medium">
              Email: {contact.properties.email || "N/A"}
            </p>
            <p>Phone: {contact.properties.phone || "N/A"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
