import httpRequest from "~/utils/httpRequest";

const pathName = "messages/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}`, {});
    return res.data;
  } catch (err) {}
};

export const getNotCheckedMessages = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/not-checked-messages`, {});
    return res.data;
  } catch (err) {}
};

export const editMessage = async (data) => {
  try {
    const res = await httpRequest.put(`${pathName}u/`, data.body, {
      params: {
        id: data.id,
      },
    });
    return res.data;
  } catch (err) {}
};
