import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://asisell.com/api/orders/vnpay_ipn",
});

export const getAll = async () => {
  try {
    const res = await httpRequest.get(``, {});
    return res.data;
  } catch (err) {}
};
