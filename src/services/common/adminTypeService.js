import httpRequest from "~/utils/httpRequest";

const pathName = "admin-types/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}`, {});
    return res.data;
  } catch (err) {}
};

export const getAdmin = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        level: "admin",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getSuperAdmin = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        level: "super-admin",
      },
    });
    return res.data;
  } catch (err) {}
};
