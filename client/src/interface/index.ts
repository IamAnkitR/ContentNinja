export interface ICompany {
  id: string;
  properties: {
    domain: string;
    phone: string;
  };
}

export interface IContact {
  id: string;
  properties: {
    email: string;
    phone: string;
  };
}

export interface ITicket {
  id: string;
  properties: {
    hs_pipeline: string;
    hs_pipeline_stage: string;
  };
}
