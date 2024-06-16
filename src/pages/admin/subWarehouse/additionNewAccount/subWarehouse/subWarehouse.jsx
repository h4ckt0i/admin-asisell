import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import AccountSection from "../components/accountSection/accountSection";
import SubWarehouseSelection from "~/components/selection/subWarehouseSelection/subWarehouseSelection";
import { fetchApi } from "~/utils/common";
import * as adminSlice from "~/store/common/slice/adminSlice";
import * as adminTypeSlice from "~/store/common/slice/adminTypeSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function SubWarehouse() {
  const [adminTypeId, setAdminTypeId] = useState("");
  const [account, setAccount] = useState({});
  const [subWarehouse, setSubWarehouse] = useState({});
  const [isFalse, setIsFalse] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addNewPartner = () => {
    const data = {
      user_name: account.user_name,
      name: account.name,
      password: account.password,
      admin_type: adminTypeId,
      level: {
        warehouse_id: subWarehouse._id,
        type: "sub-warehouse",
      },
    };
    const getAdminByUserName = () =>
      fetchApi(adminSlice.getAdminByUserName(account.user_name), dispatch);
    const addAdmin = () => fetchApi(adminSlice.addAdmin(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    getAdminByUserName().then((result) => {
      if (result[0]) {
        setIsFalse(true);
      } else {
        setIsFalse(false);

        addAdmin().then((result) => {
          result
            ? successfulToast("Thêm tài khoản kho tổng thành công")
            : errorToast("Thêm tài khoản kho tổng không thành công");
        });
      }
      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  useEffect(() => {
    const getAdmin = () => fetchApi(adminTypeSlice.getAdmin(), dispatch);

    getAdmin().then((result) => setAdminTypeId(result[0]._id));
  }, []);

  return (
    <div>
      <Toast />
      <div>
        <SubWarehouseSelection
          className={generalStyles.rightSideInputSectionTwo}
          title="Thuộc kho con"
          setSubWarehouse={setSubWarehouse}
          isDisabled={isDisabled}
        />
        <AccountSection
          setNewAccount={setAccount}
          setIsFalse={setIsFalse}
          isDisabled={isDisabled}
        />
        {isFalse && (
          <span className={generalStyles.canceled}>
            Tên đăng nhập đã tồn tại!
          </span>
        )}
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm tài khoản kho con"
            isLoading={isLoading}
            onClick={addNewPartner}
          />
        </div>
      </div>
    </div>
  );
}

export default SubWarehouse;
