import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import SubWarehouseSection from "./subWarehouseSection/subWarehouseSection";
import { fetchApi, setDocumentTitle } from "~/utils/common";
import * as subWarehouseSlice from "~/store/common/slice/subWarehouseSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function AdditionNewSubWarehouse() {
  const [subWarehouse, setSubWarehouse] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addNewPartner = () => {
    const data = {
      name: subWarehouse.name,
      type: {
        label: "Kho nội bộ",
        value: "internal",
      },
      address: subWarehouse.address,
      status: {
        label: "Đang hoạt động",
        value: "active",
      },
    };
    const addSubWarehouse = () =>
      fetchApi(subWarehouseSlice.addSubWarehouse(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addSubWarehouse().then((result) => {
      result
        ? successfulToast("Thêm kho con thành công")
        : errorToast("Thêm kho con không thành công");
      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  useEffect(() => {
    setDocumentTitle("Kho tổng/con - Admin");
  }, []);

  return (
    <div className={generalStyles.rightSideContainer}>
      <span className={clsx(generalStyles.rightSideTitle)}>
        Thêm kho con - Kho tổng/con
      </span>
      <Toast />
      <div>
        <SubWarehouseSection
          setNewSubWarehouse={setSubWarehouse}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm kho con"
            isLoading={isLoading}
            onClick={addNewPartner}
          />
        </div>
      </div>
    </div>
  );
}

export default AdditionNewSubWarehouse;
