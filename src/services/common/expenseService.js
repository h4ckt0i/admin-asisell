import httpRequest from "~/utils/httpRequest";

const pathName = "expenses/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}`, {});
    return res.data;
  } catch (err) {}
};

export const getAllFixedCost = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        type: "fixed_cost",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getAllMobileCost = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        type: "mobile_cost",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getAllTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/`, {
      params: {
        type: "all",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getUnpaidTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/`, {
      params: {
        type: "unpaid",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getPaidTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/`, {
      params: {
        type: "paid",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getAllFixedCostTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/fixed-cost/`, {
      params: {
        type: "all",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getUnpaidFixedCostTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/fixed-cost/`, {
      params: {
        type: "unpaid",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getPaidFixedCostTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/fixed-cost/`, {
      params: {
        type: "paid",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getAllMobileCostTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/mobile-cost/`, {
      params: {
        type: "all",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getUnpaidMobileCostTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/mobile-cost/`, {
      params: {
        type: "unpaid",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getPaidMobileCostTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/mobile-cost/`, {
      params: {
        type: "paid",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getAllMonthlyTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/monthly/`, {
      params: {
        type: "all",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getUnpaidMonthlyTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/monthly/`, {
      params: {
        type: "unpaid",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getPaidMonthlyTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/monthly/`, {
      params: {
        type: "paid",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getAllMonthlyFixedCostTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/fixed-cost/monthly/`, {
      params: {
        type: "all",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getUnpaidMonthlyFixedCostTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/fixed-cost/monthly/`, {
      params: {
        type: "unpaid",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getPaidMonthlyFixedCostTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/fixed-cost/monthly/`, {
      params: {
        type: "paid",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getAllMonthlyMobileCostTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/mobile-cost/monthly/`, {
      params: {
        type: "all",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getUnpaidMonthlyMobileCostTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/mobile-cost/monthly/`, {
      params: {
        type: "unpaid",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getPaidMonthlyMobileCostTotal = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/mobile-cost/monthly/`, {
      params: {
        type: "paid",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getYearlyTotal = async (params) => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/yearly/`, {
      params: {
        year: params,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getMostExpensiveFixedCost = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/most-expensive-cost/`, {
      params: {
        type: "fixed_cost",
        limit: 5,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getMostExpensiveMobileCost = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/most-expensive-cost/`, {
      params: {
        type: "mobile_cost",
        limit: 5,
      },
    });
    return res.data;
  } catch (err) {}
};

export const addExpense = async (data) => {
  try {
    const res = await httpRequest.post(`${pathName}p`, data, {});
    return res.data;
  } catch (err) {}
};

export const deleteExpense = async (params) => {
  try {
    const res = await httpRequest.delete(`${pathName}d`, {
      params: {
        id: params,
      },
    });
    return res.data;
  } catch (err) {}
};
