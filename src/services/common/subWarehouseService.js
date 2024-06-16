import httpRequest from "~/utils/httpRequest";

const pathName = "sub-warehouses/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}`, {});
    return res.data;
  } catch (err) {}
};

export const getSubWarehouseById = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        id: params,
      },
    });
    return res.data;
  } catch (err) {}
};

export const addSubWarehouse = async (data) => {
  try {
    const res = await httpRequest.post(`${pathName}p`, data, {});
    return res.data;
  } catch (err) {}
};
