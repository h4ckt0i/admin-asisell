import httpRequest from "~/utils/httpRequest";

const pathName = "products/";

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
