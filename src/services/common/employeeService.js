import httpRequest from "~/utils/httpRequest";

const pathName = "employees/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}`, {});
    return res.data;
  } catch (err) {}
};

export const getTotalEmployees = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total`, {});
    return res.data;
  } catch (err) {}
};

export const getAllManagers = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/`, {
      params: {
        type: "manager",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getAllStaff = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/`, {
      params: {
        type: "staff",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getMostPosition = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/most-position/`, {
      params: {
        limit: 5,
      },
    });
    return res.data;
  } catch (err) {}
};

export const addEmployee = async (data) => {
  try {
    const res = await httpRequest.post(`${pathName}p`, data, {});
    return res.data;
  } catch (err) {}
};

export const editEmployee = async (data) => {
  try {
    const res = await httpRequest.put(`${pathName}u/`, data.body, {
      params: {
        id: data.id,
      },
    });
    return res.data;
  } catch (err) {}
};

export const deleteEmployee = async (params) => {
  try {
    const res = await httpRequest.delete(`${pathName}d/`, {
      params: {
        id: params,
      },
    });
    return res.data;
  } catch (err) {}
};
