import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Toast, { WarningToast } from "~/components/toast/toast";
import LeftSide from "~/components/leftSide/leftSide";
import ScrollToTopButton from "~/components/scrollToTopButton/scrollToTopButton";
import { menu } from "~/components/leftSide/index";
import { components } from "./index";
import { fetchApi } from "~/utils/common";
import * as orderSlice from "~/store/common/slice/orderSlice";
import * as messageSlice from "~/store/common/slice/messageSlice";
import * as cooperativeSourceSlice from "~/store/common/slice/cooperativeSourceSlice";

import styles from "./admin.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Admin() {
  const [title, setTitle] = useState(menu[0].id);
  const [parent, setParent] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const notifyNewOrders = () =>
      fetchApi(orderSlice.getAllPending(), dispatch);
    const notifySaleRegistrations = () =>
      fetchApi(messageSlice.getNotCheckedMessages(), dispatch);
    const notifyCooperativeSources = () =>
      fetchApi(
        cooperativeSourceSlice.getNotCheckedCooperativeSources(),
        dispatch
      );

    notifyNewOrders().then((result) => {
      const count = result.count;

      count > 0 && WarningToast(`Có ${count} đơn hàng mới`);
      sessionStorage.setItem("orders", count);
    });

    notifySaleRegistrations().then((result) => {
      const count = result.count;

      count > 0 && WarningToast(`Có ${count} đăng ký bán hàng mới`);
      sessionStorage.setItem("sale-registrations", count);
    });

    notifyCooperativeSources().then((result) => {
      const count = result.count;

      count > 0 && WarningToast(`Có ${count} đăng ký nguồn hàng mới`);
      sessionStorage.setItem("cooperative-sources", count);
    });
  }, []);

  return (
    <div className={clsx(generalStyles.generalContainer, styles.container)}>
      <Toast />
      <div className={generalStyles.body}>
        <div className={clsx(generalStyles.content, styles.bodyContainer)}>
          <LeftSide
            className={styles.leftSideBar}
            title={title}
            parent={parent}
            setTitle={setTitle}
            setParent={setParent}
          />
          <ul className={clsx(generalStyles.list, styles.content)}>
            {components.map((item, index) => {
              const Component = item.component;
              const parent = item.parent;

              if (parent) {
                return parent.children.map((child, idx) => {
                  const children = menu[index].parent.children;
                  const Component = child.component;

                  return (
                    title === children[idx].id && (
                      <Component
                        setTitle={setTitle}
                        setParent={setParent}
                        key={child.id}
                      />
                    )
                  );
                });
              } else {
                return (
                  title === menu[index].id && (
                    <Component setTitle={setTitle} key={index} />
                  )
                );
              }
            })}
          </ul>
        </div>
      </div>
      <ScrollToTopButton element={styles.container} />
    </div>
  );
}

export default Admin;
