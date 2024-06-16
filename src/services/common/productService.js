import httpRequest from "~/utils/httpRequest";

const pathName = "products/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}`, {});
    return res.data;
  } catch (err) {}
};

export const getAllProducts = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        is_gift: "false",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getAllGifts = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        is_gift: "true",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getAllProductsOfWholeWarehouses = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {});
    return res.data;
  } catch (err) {}
};

export const getAllGiftsOfWholeWarehouses = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {});
    return res.data;
  } catch (err) {}
};

export const getMostSoldProducts = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/most-sold/`, {
      params: {
        limit: 5,
      },
    });
    return res.data;
  } catch (err) {}
};

export const addProduct = async (data) => {
  try {
    const res = await httpRequest.post(`${pathName}p`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalSoldToday = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total-sold/today`, {});
    return res.data;
  } catch (err) {}
};

export const getTotalProducts = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/`, {
      params: {
        type: "product",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalGifts = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/`, {
      params: {
        type: "gift",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalNewProducts = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/new/`, {
      params: {
        type: "product",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalNewGifts = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/new/`, {
      params: {
        type: "gift",
      },
    });
    return res.data;
  } catch (err) {}
};

export const getMostImportedProducts = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/most-imported/`, {
      params: {
        limit: 5,
      },
    });
    return res.data;
  } catch (err) {}
};

export const editProductById = async (data) => {
  try {
    const res = await httpRequest.put(`${pathName}u/`, data.body, {
      params: {
        id: data.id,
      },
    });
    return res.data;
  } catch (err) {}
};
