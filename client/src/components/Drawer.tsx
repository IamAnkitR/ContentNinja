import React from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-25 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-500"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="p-6">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
