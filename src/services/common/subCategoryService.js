import httpRequest from "~/utils/httpRequest";

const pathName = "sub-categories/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}`, {});
    return res.data;
  } catch (err) {}
};

export const getAllByCategory = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        category: params,
      },
    });
    return res.data;
  } catch (err) {}
};

export const addSubCategory = async (data) => {
  try {
    const res = await httpRequest.post(`${pathName}p`, data, {});
    return res.data;
  } catch (err) {}
};
