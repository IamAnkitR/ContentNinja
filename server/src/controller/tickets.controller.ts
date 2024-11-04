import { Request, Response } from "express";
import axios from "axios";
import { HUBSPOT_API_URL, HUBSPOT_ACCESS_TOKEN } from "../config";
import logger from "../utils/logger";

export const fetchTicketsDetails = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      `${HUBSPOT_API_URL}/crm/v3/objects/tickets`,
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        },
        params: { properties: "hs_pipeline,hs_pipeline_stage", limit: 100 },
      }
    );
    res.json(response.data.results);
  } catch (error: any) {
    logger.error(`Error while fetching tickets: ${error.stack}`);
    res.status(500).json({ error: "Failed to fetch tickets" });
  }
};
