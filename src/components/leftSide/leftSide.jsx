import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "../image/image";
import IconButton from "../iconButton/iconButton";
import Login from "../sign/login/login";
import Logout from "../sign/logout/logout";
import Manuals from "../manuals/manuals";
import TextLogo from "~/assets/images/text-logo.png";
import { menu } from "./index";

import styles from "./leftSide.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function LeftSide({ title, setTitle, parent, setParent, className }) {
  const [titleItem, setTitleItem] = useState(menu[0].id);
  const [parentIndex, setParentIndex] = useState(0);
  const [orders, setOrders] = useState(0);
  const [messages, setMessages] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const handleShowModal = () => {
    isShow ? setIsShow(false) : setIsShow(true);
  };

  useEffect(() => {
    setTitleItem(title);
    setParentIndex(parent);
  }, [title, parent]);

  useEffect(() => {
    const orders = sessionStorage.getItem("orders");
    const saleRegistrations = sessionStorage.getItem("sale-registrations");
    const cooperativeSources = sessionStorage.getItem("cooperative-sources");
    const messages = saleRegistrations > 0 || cooperativeSources > 0 ? 1 : 0;

    setOrders(orders);
    setMessages(messages);
  }, []);

  return (
    <div className={clsx(styles.container, className)}>
      <Image className={styles.logo} src={TextLogo} />
      <div className={styles.content}>
        <ul className={clsx(generalStyles.list, styles.topList)}>
          {menu.map((item, index) => {
            const parent = item.parent;

            if (parent) {
              const ParentIcon = parent.icon;

              return (
                <div key={parent.id}>
                  <IconButton
                    className={clsx(
                      styles.item,
                      parentIndex === index + 100 && styles.parentActivated
                    )}
                    textBtn={parent.title}
                    onClick={() => {
                      setParentIndex(parent.id);
                      setParent(parent.id);
                    }}
                  >
                    <ParentIcon className={styles.icon} />
                    {parentIndex === index + 100 ? (
                      <i className="fa-solid fa-chevron-down"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-up"></i>
                    )}
                  </IconButton>
                  {parent.children.map((child) => {
                    const ChildIcon = child.icon;

                    return (
                      <IconButton
                        className={clsx(
                          styles.item,
                          styles.child,
                          !(parentIndex === index + 100) && styles.noneChild,
                          titleItem === child.id && styles.itemActivated
                        )}
                        textBtn={child.title}
                        onClick={() => {
                          setTitleItem(child.id);
                          setTitle(child.id);
                        }}
                        key={child.id}
                      >
                        <ChildIcon className={styles.icon} />
                      </IconButton>
                    );
                  })}
                </div>
              );
            } else {
              const ChildIcon = item.icon;

              return (
                <div
                  className={clsx(
                    styles.btnContainer,
                    titleItem === item.id && styles.itemActivated
                  )}
                  onClick={() => {
                    setTitleItem(item.id);
                    setTitle(item.id);
                    setParent(0);
                  }}
                  key={item.id}
                >
                  <IconButton
                    className={clsx(styles.item)}
                    textBtn={item.title}
                  >
                    <ChildIcon className={styles.icon} />
                  </IconButton>
                  {item.title === menu[3].title && orders > 0 && (
                    <div
                      className={clsx(
                        generalStyles.backgroundPending,
                        styles.notifyDot
                      )}
                    ></div>
                  )}
                  {item.title === menu[4].title && messages > 0 && (
                    <div
                      className={clsx(
                        generalStyles.backgroundPending,
                        styles.notifyDot
                      )}
                    ></div>
                  )}
                </div>
              );
            }
          })}
        </ul>
        <div className={styles.bottomList}>
          <Manuals
            className={styles.bottomBtn}
            setIsShow={handleShowModal}
            isShow={isShow}
          />
          <Login className={styles.bottomBtn} />
          <Logout className={styles.bottomBtn} />
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
