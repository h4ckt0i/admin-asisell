import { useState, memo } from "react";
import clsx from "clsx";
import Button from "../button/button";
import IconButton from "../iconButton/iconButton";
import MessageIcon from "~/assets/icons/messageIcon";
import Modal from "../modal/modal";
import { manuals } from "./index";

import styles from "./manuals.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Manuals({ setIsShow, isShow, className }) {
  const [indexItem, setIndexItem] = useState();

  return (
    <div className={styles.container}>
      <IconButton
        className={clsx(generalStyles.bottomLeftSideBtn, className)}
        textBtn="Hướng dẫn sử dụng"
        onClick={setIsShow}
      >
        <MessageIcon className={generalStyles.bottomLeftSideIcon} />
      </IconButton>
      {isShow && (
        <Modal
          contentContainerStyles={indexItem && styles.contentHeight}
          title="Hướng dẫn sử dụng"
          setIsShow={setIsShow}
        >
          <ul className={styles.list}>
            {manuals.map((qna, index) => {
              return (
                <li className={clsx(styles.item)} key={qna.id}>
                  <div
                    className={styles.titleContainer}
                    onClick={() => setIndexItem(index + 1)}
                  >
                    <Button className={styles.title} textBtn={qna.title} />
                    <IconButton className={styles.titleIcon}>
                      {indexItem === qna.id ? (
                        <i className="fa-solid fa-chevron-down"></i>
                      ) : (
                        <i className="fa-solid fa-chevron-up"></i>
                      )}
                    </IconButton>
                  </div>
                  {indexItem === qna.id &&
                    qna.subTitle.map((sub) => {
                      return (
                        <div className={styles.subtitleItem} key={sub.id}>
                          <p className={styles.subTitle}>{sub.title}</p>
                          {sub.content.map((cont) => {
                            return (
                              <p className={styles.contentItem} key={cont.id}>
                                {cont.text}
                              </p>
                            );
                          })}
                        </div>
                      );
                    })}
                </li>
              );
            })}
          </ul>
        </Modal>
      )}
    </div>
  );
}

export default memo(Manuals);
