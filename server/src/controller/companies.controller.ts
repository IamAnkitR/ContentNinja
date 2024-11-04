import { Request, Response } from "express";
import axios from "axios";
import { HUBSPOT_API_URL, HUBSPOT_ACCESS_TOKEN } from "../config";
import logger from "../utils/logger";

export const fetchCompanyDetails = async (req: Request, res: Response) => {
  const limit = 100;
  const maxRecords = 500;
  let results: any[] = [];
  let after: string | null = null;

  try {
    while (results.length < maxRecords) {
      const response: any = await axios.get(
        `${HUBSPOT_API_URL}/crm/v3/objects/companies`,
        {
          headers: {
            Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          },
          params: { properties: "domain,phone", limit, after },
        }
      );
      results = [...results, ...response.data.results];
      after = response.data.paging?.next?.after || null;

      if (!after) break;
    }

    res.json(results.slice(0, maxRecords));
  } catch (error: any) {
    logger.error(`Error fetching companies: ${error.stack}`);
    res.status(500).json({ error: "Failed to fetch companies" });
  }
};
