import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import AccountTable from "../../components/accountTable/accountTable";
import { fetchApi } from "~/utils/common";
import * as adminSlice from "~/store/common/slice/adminSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function AccountsList() {
  const [accounts, setAccounts] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.admin.loading);

  useEffect(() => {
    const getAll = () => fetchApi(adminSlice.getSubWarehouseAdmin(), dispatch);

    getAll().then((result) => setAccounts(result));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <div className={generalStyles.mainContent}>
              <AccountTable list={accounts} setNewAccounts={setAccounts} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AccountsList;
