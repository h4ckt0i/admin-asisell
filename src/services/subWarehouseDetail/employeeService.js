import httpRequest from "~/utils/httpRequest";

const pathName = "employees/";

export const getAll = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        sub_warehouse: params,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalEmployees = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/sub-warehouse/`, {
      params: {
        sub_warehouse: params,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getAllManagers = async (params) => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/total-manager/sub-warehouse/`,
      {
        params: {
          sub_warehouse: params,
        },
      }
    );
    return res.data;
  } catch (err) {}
};

export const getAllStaff = async (params) => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/total-staff/sub-warehouse/`,
      {
        params: {
          sub_warehouse: params,
        },
      }
    );
    return res.data;
  } catch (err) {}
};

export const getMostPosition = async (params) => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/most-position/sub-warehouse/`,
      {
        params: {
          sub_warehouse: params,
          limit: 5,
        },
      }
    );
    return res.data;
  } catch (err) {}
};
