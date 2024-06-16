import httpRequest from "~/utils/httpRequest";

const pathName = "admins/";

export const getTotalAdmins = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total`, {});
    return res.data;
  } catch (err) {}
};

export const getAdminByUserName = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        user_name: params,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getMainWarehouseAdmin = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        level: "warehouse",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getSubWarehouseAdmin = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        level: "sub-warehouse",
      },
    });
    return res.data;
  } catch (err) {}
};

export const addAdmin = async (data) => {
  try {
    const res = await httpRequest.post(`${pathName}p`, data, {});
    return res.data;
  } catch (err) {}
};

export const deleteAdmin = async (params) => {
  try {
    const res = await httpRequest.delete(`${pathName}d/`, {
      params: {
        id: params,
      },
    });
    return res.data;
  } catch (err) {}
};
