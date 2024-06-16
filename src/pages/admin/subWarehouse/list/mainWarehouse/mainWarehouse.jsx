import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import AccountTable from "../components/accountTable/accountTable";
import { fetchApi } from "~/utils/common";
import * as adminSlice from "~/store/common/slice/adminSlice";

import styles from "./mainWarehouse.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function MainWarehouse() {
  const [accounts, setAccounts] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.admin.loading);

  useEffect(() => {
    const getAll = () => fetchApi(adminSlice.getMainWarehouseAdmin(), dispatch);

    getAll().then((result) => setAccounts(result));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={generalStyles.mainContent}>
              <AccountTable list={accounts} setNewAccounts={setAccounts} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainWarehouse;
