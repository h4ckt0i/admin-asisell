import httpRequest from "~/utils/httpRequest";

const pathName = "cooperative-sources/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}`, {});
    return res.data;
  } catch (err) {}
};

export const getNotCheckedCooperativeSources = async () => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/not-checked-cooperative-sources`,
      {}
    );
    return res.data;
  } catch (err) {}
};

export const editCooperativeSources = async (data) => {
  try {
    const res = await httpRequest.put(`${pathName}u/`, data.body, {
      params: {
        id: data.id,
      },
    });
    return res.data;
  } catch (err) {}
};
