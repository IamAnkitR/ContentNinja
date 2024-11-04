import React, { useEffect, useState } from "react";
import { fetchCompanies } from "../api";
import { ICompany } from "../interface";

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 100;

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const response = await fetchCompanies();
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };
    getCompanies();
  }, []);

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentCompanies = companies?.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(companies.length / contactsPerPage)) {
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
        <h2 className="text-2xl font-semibold mb-4">Companies</h2>
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
              currentPage === Math.ceil(companies.length / contactsPerPage)
            }
            className={`px-4 py-2 bg-blue-500 text-white rounded ${
              currentPage === Math.ceil(companies.length / contactsPerPage)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <table className="w-full border-collapse">
        <tr className="border-b">
          <th className="p-2 text-left font-semibold">S. No.</th>
          <th className="p-2 text-left font-semibold">Domain</th>
          <th className="p-2 text-left font-semibold">Phone</th>
        </tr>
        <tbody>
          {currentCompanies.map((company, index) => (
            <tr key={company.id} className="border-b py-2">
              <td className="p-2">{indexOfFirstContact + index + 1}</td>
              <td className="font-medium p-2">
                {company.properties.domain || "N/A"}
              </td>
              <td className="p-2">{company.properties.phone || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
