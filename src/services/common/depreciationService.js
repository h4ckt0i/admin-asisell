import httpRequest from "~/utils/httpRequest";

const pathName = "depreciations/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}`, {});
    return res.data;
  } catch (err) {}
};

export const getDepreciationById = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        id: params,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalDepreciationCost = async () => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/total-depreciations-cost`,
      {}
    );
    return res.data;
  } catch (err) {}
};

export const getTotalMonthlyDepreciationCost = async () => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/total-depreciations-cost/monthly`,
      {}
    );
    return res.data;
  } catch (err) {}
};

export const getTotalProducts = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-products`, {});
    return res.data;
  } catch (err) {}
};

export const getTotalCompletedProducts = async () => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/total-completed-products`,
      {}
    );
    return res.data;
  } catch (err) {}
};

export const getMostDepreciations = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/most-depreciations/`, {
      params: {
        limit: 5,
      },
    });
    return res.data;
  } catch (err) {}
};

export const addDepreciation = async (data) => {
  try {
    const res = await httpRequest.post(`${pathName}p`, data, {});
    return res.data;
  } catch (err) {}
};

export const editDepreciation = async (data) => {
  try {
    const res = await httpRequest.put(`${pathName}u/`, data.body, {
      params: {
        id: data.id,
      },
    });
    return res.data;
  } catch (err) {}
};
