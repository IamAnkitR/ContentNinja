import { Request, Response } from "express";
import axios from "axios";
import { HUBSPOT_API_URL, HUBSPOT_ACCESS_TOKEN } from "../config";
import logger from "../utils/logger";

export const fetchContactDetails = async (req: Request, res: Response) => {
  const limit = 100;
  const maxRecords = 500;
  let results: any[] = [];
  let after: string | null = null;

  try {
    while (results.length < maxRecords) {
      const response: any = await axios.get(
        `${HUBSPOT_API_URL}/crm/v3/objects/contacts`,
        {
          headers: {
            Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          },
          params: {
            properties: "email,phone",
            limit,
            after,
          },
        }
      );

      results = [...results, ...response.data.results];
      after = response.data.paging?.next?.after || null;

      if (!after) break;
    }

    res.json({ results: results.slice(0, maxRecords) });
  } catch (error: any) {
    console.error(`Error while fetching contact details: ${error.stack}`);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};

export const addContactDetails = async (req: Request, res: Response) => {
  const { email, phone } = req.body;
  try {
    const response = await axios.post(
      `${HUBSPOT_API_URL}/crm/v3/objects/contacts`,
      { properties: { email, phone } },
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        },
      }
    );

    res.json({ message: "Contact created successfully", data: response.data });
  } catch (error: any) {
    logger.error(`Error while adding contact details: ${error.stack}`);
    res.status(500).json({ error: `Failed to create contact` });
  }
};
