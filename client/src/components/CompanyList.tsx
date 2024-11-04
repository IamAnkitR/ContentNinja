import React, { useEffect, useState } from "react";
import { fetchCompanies } from "../api";
import { ICompany } from "../interface";

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<ICompany[]>([]);

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

  return (
    <div className="p-6 bg-white shadow rounded mb-4">
      <h2 className="text-2xl font-semibold mb-4">Companies</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.id} className="border-b py-2">
            <p className="font-medium">
              Domain: {company.properties.domain || "N/A"}
            </p>
            <p>Phone: {company.properties.phone || "N/A"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
