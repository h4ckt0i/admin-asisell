import httpRequest from "~/utils/httpRequest";

const pathName = "invoices/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}`, {});
    return res.data;
  } catch (err) {}
};

export const getInvoiceById = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        id: params,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getImportedInvoices = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        type: "import",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getExportedInvoices = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        type: "export",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalImportedInvoices = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-import`, {});
    return res.data;
  } catch (err) {}
};

export const getTotalExportedInvoices = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-export`, {});
    return res.data;
  } catch (err) {}
};

export const getTotalExportedInvoicesByRetail = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-export/quantity/`, {
      params: {
        type: "retail",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalExportedInvoicesByWholesale = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-export/quantity/`, {
      params: {
        type: "wholesale",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalExportedAndImportedInvoicesByYear = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-import-export`, {
      params: {
        year: params,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalExportedInvoicesByYear = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-export`, {
      params: {
        year: params,
      },
    });
    return res.data;
  } catch (err) {}
};

export const addImportedInvoice = async (data) => {
  try {
    const res = await httpRequest.post(`${pathName}p/`, data, {
      params: {
        type: "import",
      },
    });
    return res.data;
  } catch (err) {}
};

export const addExportedInvoice = async (data) => {
  try {
    const res = await httpRequest.post(`${pathName}p/`, data, {
      params: {
        type: "export",
      },
    });
    return res.data;
  } catch (err) {}
};

export const addExportedSubWarehouseInvoice = async (data) => {
  try {
    const res = await httpRequest.post(`${pathName}p/`, data, {
      params: {
        type: "export-product",
      },
    });
    return res.data;
  } catch (err) {}
};
