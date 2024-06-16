import httpRequest from "~/utils/httpRequest";

const pathName = "orders/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}`, {});
    return res.data;
  } catch (err) {}
};

export const getOrderById = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        id: params,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getAllBySuccess = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        status: "successful",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalOrders = async () => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/total-successful-orders/total`,
      {}
    );
    return res.data;
  } catch (err) {}
};

export const getAllPending = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/pending-orders`, {});
    return res.data;
  } catch (err) {}
};

export const getRevenue = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/revenue/total`, {});
    return res.data;
  } catch (err) {}
};

export const getRevenueByYear = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/revenue/`, {
      params: {
        year: params,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getRevenueByMonthAndYear = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/revenue/`, {
      params: {
        month: params.month,
        year: params.year,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalByMonthAndYear = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-orders/`, {
      params: {
        month: params.month,
        year: params.year,
      },
    });
    return res.data;
  } catch (err) {}
};

export const editOrder = async (data) => {
  try {
    const res = await httpRequest.put(`${pathName}u/`, data.body, {
      params: {
        id: data.id,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getPendingOrders = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        payment_status: "pending",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getPaidOrders = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        payment_status: "successful",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getShippingOrders = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        delivery_status: "shipping",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getPendingDelivery = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        delivery_status: "pending",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getDeliveredOrders = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        delivery_status: "delivered",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getCanceledOrders = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        delivery_status: "canceled",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalOrdersToday = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-orders/today`, {});
    return res.data;
  } catch (err) {}
};

export const getRevenueToday = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/revenue/today`, {});
    return res.data;
  } catch (err) {}
};

export const getMonthlyShippingCost = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-shipping-cost`, {});
    return res.data;
  } catch (err) {}
};
