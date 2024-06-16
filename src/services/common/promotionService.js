import httpRequest from "~/utils/httpRequest";

const pathName = "promotions/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}`, {});
    return res.data;
  } catch (err) {}
};

export const getPromotionById = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        id: params,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalRevenue = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-revenue`, {});
    return res.data;
  } catch (err) {}
};

export const getTotalProfit = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-profit`, {});
    return res.data;
  } catch (err) {}
};

export const getTotalProducts = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-product`, {});
    return res.data;
  } catch (err) {}
};

export const getMostEffectivePromotion = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/efficiency/`, {
      params: {
        limit: 5,
      },
    });
    return res.data;
  } catch (err) {}
};

export const addPromotion = async (data) => {
  try {
    const res = await httpRequest.post(`${pathName}p`, data, {});
    return res.data;
  } catch (err) {}
};

export const editPromotion = async (data) => {
  try {
    const res = await httpRequest.put(`${pathName}u/`, data.body, {
      params: {
        id: data.id,
      },
    });
    return res.data;
  } catch (err) {}
};
