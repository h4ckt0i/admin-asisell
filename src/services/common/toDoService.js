import httpRequest from "~/utils/httpRequest";
import { localAdmin } from "~/constants/localStorage";

const pathName = "to-dos/";

export const getAll = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/`, {
      params: {
        admin: localAdmin._id,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getTotalToDoes = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/`, {
      params: {
        admin: localAdmin._id,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getCompleted = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/completed/`, {
      params: {
        admin: localAdmin._id,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getUnfulfilled = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/unfulfilled/`, {
      params: {
        admin: localAdmin._id,
      },
    });
    return res.data;
  } catch (err) {}
};

export const getIncomplete = async () => {
  try {
    const res = await httpRequest.get(`${pathName}g/total/incomplete/`, {
      params: {
        admin: localAdmin._id,
      },
    });
    return res.data;
  } catch (err) {}
};

export const addTodo = async (data) => {
  try {
    const res = await httpRequest.post(`${pathName}p`, data, {});
    return res.data;
  } catch (err) {}
};

export const editTodo = async (data) => {
  try {
    const res = await httpRequest.put(`${pathName}u/`, data.body, {
      params: {
        id: data.id,
      },
    });
    return res.data;
  } catch (err) {}
};

export const deleteToDo = async (params) => {
  try {
    const res = await httpRequest.delete(`${pathName}d/`, {
      params: {
        id: params,
      },
    });
    return res.data;
  } catch (err) {}
};
