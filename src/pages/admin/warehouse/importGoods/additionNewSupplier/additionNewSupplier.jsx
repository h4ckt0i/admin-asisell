import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import SupplierSection from "./supplierSection/supplierSection";
import InfoSection from "./infoSection/infoSection";
import ContactSection from "./contactSection/contactSection";
import PaymentSection from "./paymentSection/paymentSection";
import { fetchApi } from "~/utils/common";
import * as supplierSlice from "~/store/common/slice/supplierSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function AdditionNewSupplier() {
  const [supplier, setSupplier] = useState({});
  const [info, setInfo] = useState({});
  const [contact, setContact] = useState({});
  const [payment, setPayment] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addNewSupplier = () => {
    const data = { ...supplier, ...contact, ...info, ...payment };

    const addSupplier = () =>
      fetchApi(supplierSlice.addSupplier(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addSupplier().then((result) => {
      result
        ? successfulToast("Tạo nhà cung cấp thành công")
        : errorToast("Tạo nhà cung cấp không thành công");
      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  return (
    <div>
      <Toast />
      <div>
        <SupplierSection setSupplier={setSupplier} isDisabled={isDisabled} />
        <InfoSection
          className={generalStyles.additionSection}
          setInfo={setInfo}
          isDisabled={isDisabled}
        />
        <ContactSection
          className={generalStyles.additionSection}
          setContact={setContact}
          isDisabled={isDisabled}
        />
        <PaymentSection setPayment={setPayment} isDisabled={isDisabled} />
        <div className={generalStyles.rightSideBtnContainer}>
          <LoadingBtn
            className={generalStyles.rightSideBtn}
            textBtn="Tạo nhà cung cấp"
            isLoading={isLoading}
            onClick={addNewSupplier}
          />
        </div>
      </div>
    </div>
  );
}

export default AdditionNewSupplier;
