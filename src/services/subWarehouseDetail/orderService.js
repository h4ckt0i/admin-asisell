import httpRequest from "~/utils/httpRequest";

const pathName = "orders/";

export const getAll = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        sub_warehouse: params,
        status: "successful",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalOrders = async (params) => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/total-successful-orders/sub-warehouse/total/`,
      {
        sub_warehouse: params,
      }
    );
    return res.data;
  } catch (err) {}
};

export const getPendingOrders = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        sub_warehouse: params,
        payment_status: "pending",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getPaidOrders = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        sub_warehouse: params,
        payment_status: "successful",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getShippingOrders = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        sub_warehouse: params,
        delivery_status: "shipping",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getPendingDelivery = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        sub_warehouse: params,
        delivery_status: "pending",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getDeliveredOrders = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        sub_warehouse: params,
        delivery_status: "delivered",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getCanceledOrders = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        sub_warehouse: params,
        delivery_status: "canceled",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getMonthlyShippingCost = async (params) => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/total-shipping-cost/sub-warehouse/`,
      {
        params: {
          sub_warehouse: params,
        },
      }
    );
    return res.data;
  } catch (err) {}
};
