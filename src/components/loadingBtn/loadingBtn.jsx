import clsx from "clsx";
import IconButton from "../iconButton/iconButton";
import Spinner from "../spinner/spinner";

import styles from "./loadingBtn.module.scss";

function LoadingBtn({ className, isLoading, textBtn, onClick }) {
  return (
    <IconButton
      className={clsx(styles.btn, className)}
      textBtn={textBtn}
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading && <Spinner />}
    </IconButton>
  );
}

export default LoadingBtn;
