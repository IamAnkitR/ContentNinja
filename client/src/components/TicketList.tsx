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

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b">
            <th className="p-2 font-semibold">Pipeline</th>
            <th className="p-2 font-semibold">Stage</th>
            <th className="p-2 font-semibold">Created Date</th>
            <th className="p-2 font-semibold">Last Modified Date</th>
            <th className="p-2 font-semibold">Archived</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="border-b">
              <td className="p-2">{ticket.properties.hs_pipeline || "N/A"}</td>
              <td className="p-2">
                {ticket.properties.hs_pipeline_stage || "N/A"}
              </td>
              <td className="p-2">
                {new Date(ticket.createdAt).toUTCString() || "N/A"}
              </td>
              <td className="p-2">
                {new Date(
                  ticket.properties.hs_lastmodifieddate
                ).toUTCString() || "N/A"}
              </td>
              <td className="p-2">{ticket.archived ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;
