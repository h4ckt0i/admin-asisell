import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://vapi.vnappmob.com/api/province/",
});

export const getAllCities = async () => {
  try {
    const res = await httpRequest.get(``, {});
    return res.data;
  } catch (err) {}
};

export const getDistrictsByCity = async (params) => {
  try {
    const res = await httpRequest.get(`/district/${params}`, {});
    return res.data;
  } catch (err) {}
};

export const getWardsByDistrict = async (params) => {
  try {
    const res = await httpRequest.get(`/ward/${params}`, {});
    return res.data;
  } catch (err) {}
};
