// src/components/Header.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex justify-center space-x-6 mb-4 bg-gray-600 py-4">
      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          `text-lg font-semibold ${
            isActive ? "text-blue-300" : "text-gray-100"
          }`
        }
      >
        Contacts
      </NavLink>
      <NavLink
        to="/companies"
        className={({ isActive }) =>
          `text-lg font-semibold ${
            isActive ? "text-blue-300" : "text-gray-100"
          }`
        }
      >
        Companies
      </NavLink>
      <NavLink
        to="/tickets"
        className={({ isActive }) =>
          `text-lg font-semibold ${
            isActive ? "text-blue-300" : "text-gray-100"
          }`
        }
      >
        Tickets
      </NavLink>
    </header>
  );
};

export default Header;
