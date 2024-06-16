import httpRequest from "~/utils/httpRequest";

const pathName = "users/";

export const getAllCustomers = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/customers`, {});
    return res.data;
  } catch (err) {}
};

export const getAllCustomersByToday = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/customers/`, {
      params: {
        birthday: "today",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getAllCustomersByUpcoming = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/customers/`, {
      params: {
        birthday: "upcoming",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getAllNewCustomers = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/new-customers`, {});
    return res.data;
  } catch (err) {}
};

export const getNewCustomersToday = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/new-customers/today`, {});
    return res.data;
  } catch (err) {}
};

export const getAllCustomersByLocation = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/customers/`, {
      params: {
        filter: "location",
        limit: 5,
      },
    });
    return res.data;
  } catch (err) {}
};
