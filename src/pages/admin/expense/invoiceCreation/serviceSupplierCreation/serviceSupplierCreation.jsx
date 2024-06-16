import { useState } from "react";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import InputSection from "~/components/section/inputSection/inputSection";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import { fetchApi } from "~/utils/common";
import * as serviceSupplierSlice from "~/store/common/slice/serviceSupplierSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function ServiceSupplierCreation() {
  const [serviceSupplier, setServiceSupplier] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const addServiceSupplier = () => {
    const data = { name: serviceSupplier };

    const addServiceSupplier = () =>
      fetchApi(serviceSupplierSlice.addServiceSupplier(data), dispatch);

    setIsDisabled(true);
    setIsLoading(true);

    addServiceSupplier().then((result) => {
      result
        ? successfulToast("Thêm nhà cung cấp dịch vụ thành công")
        : errorToast("Thêm nhà cung cấp dịch vụ không thành công");
      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  return (
    <div>
      <Toast />
      <div>
        <InputSection
          className={generalStyles.rightSideInputSectionTwo}
          title="Nhà cung cấp dịch vụ"
          placeholder="Nhập tên nhà cung cấp dịch vụ"
          value={serviceSupplier}
          setState={setServiceSupplier}
          isDisabled={isDisabled}
        />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Thêm nhà cung cấp dịch vụ"
            isLoading={isLoading}
            onClick={addServiceSupplier}
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceSupplierCreation;
