import React, { useEffect, useState } from "react";
import { fetchTickets } from "../api";
import { ITicket } from "../interface";

const TicketList: React.FC = () => {
  const [tickets, setTickets] = useState<ITicket[]>([]);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await fetchTickets();
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };
    getTickets();
  }, []);

  return (
    <div className="p-6 bg-white shadow rounded mb-4">
      <h2 className="text-2xl font-semibold mb-4">Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id} className="border-b py-2">
            <p className="font-medium">
              Pipeline: {ticket.properties.hs_pipeline || "N/A"}
            </p>
            <p>Stage: {ticket.properties.hs_pipeline_stage || "N/A"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
