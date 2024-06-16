import clsx from "clsx";
import IconButton from "../iconButton/iconButton";

import styles from "./modal.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Modal({
  className,
  children,
  title,
  contentContainerStyles,
  contentStyles,
  setIsShow,
}) {
  return (
    <div
      className={clsx(
        generalStyles.modalOpacity,
        generalStyles.modalContainer,
        styles.container,
        className
      )}
    >
      <div
        className={clsx(
          generalStyles.modalContentContainer,
          generalStyles.modalFadeIn,
          styles.contentContainer,
          contentContainerStyles
        )}
      >
        <div className={generalStyles.modalHeader}>
          <span className={generalStyles.modalTitle}>{title}</span>
          <IconButton
            className={generalStyles.modalCloseBtn}
            onClick={setIsShow}
          >
            <i className="fa-regular fa-circle-xmark"></i>
          </IconButton>
        </div>
        <div
          className={clsx(
            generalStyles.modalContent,
            styles.content,
            contentStyles
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
