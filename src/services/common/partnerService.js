import httpRequest from "~/utils/httpRequest";

const pathName = "partners/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}`, {});
    return res.data;
  } catch (err) {}
};

export const getTotalPartners = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total`, {});
    return res.data;
  } catch (err) {}
};

export const addPartner = async (data) => {
  try {
    const res = await httpRequest.post(`${pathName}p`, data, {});
    return res.data;
  } catch (err) {}
};
