import React, { useState } from "react";
import { addContact } from "../api";

const AddContactForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addContact({ email, phone });
      setMessage("Contact added successfully");
      setEmail("");
      setPhone("");
    } catch (error) {
      setMessage("Failed to add contact");
    }
  };

  return (
    <div className="p-6 bg-white  rounded mb-4">
      <h2 className="text-2xl font-semibold mb-4">Add New Contact</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Contact
        </button>
      </form>
      {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
    </div>
  );
};

export default AddContactForm;
