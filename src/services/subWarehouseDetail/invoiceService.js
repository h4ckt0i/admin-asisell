import httpRequest from "~/utils/httpRequest";

const pathName = "invoices/";

export const getTotalExportedInvoices = async (params) => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/total-export/sub-warehouse/`,
      {
        params: {
          sub_warehouse: params,
        },
      }
    );
    return res.data;
  } catch (err) {}
};

export const getTotalExportedInvoicesByRetail = async (params) => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/total-export/quantity/sub-warehouse/`,
      {
        params: {
          sub_warehouse: params,
          type: "retail",
        },
      }
    );
    return res.data;
  } catch (err) {}
};

export const getTotalExportedInvoicesByWholesale = async (params) => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/total-export/quantity/sub-warehouse/`,
      {
        params: {
          sub_warehouse: params,
          type: "wholesale",
        },
      }
    );
    return res.data;
  } catch (err) {}
};

export const getTotalExportedAndImportedInvoicesByYear = async (params) => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/total-import-export/sub-warehouse/`,
      {
        params: {
          sub_warehouse: params.id,
          year: params.year,
        },
      }
    );
    return res.data;
  } catch (err) {}
};
