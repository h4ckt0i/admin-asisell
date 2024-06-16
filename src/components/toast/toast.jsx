import { ToastContainer, toast } from "react-toastify";

import styles from "./toast.module.scss";
import "react-toastify/dist/ReactToastify.css";

const toastSettings = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const successfulToast = (title) => toast.success(title, toastSettings);
export const WarningToast = (title) => toast.warn(title, toastSettings);
export const errorToast = (title) => toast.error(title, toastSettings);

function Toast() {
  return <ToastContainer />;
}

export default Toast;
