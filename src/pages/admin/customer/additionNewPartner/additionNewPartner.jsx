import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Toast, { errorToast, successfulToast } from "~/components/toast/toast";
import LoadingBtn from "~/components/loadingBtn/loadingBtn";
import PartnerSection from "./partnerSection/partnerSection";
import ContactSection from "./contactSection/contactSection";
import PaymentSection from "./paymentSection/paymentSection";
import { fetchApi } from "~/utils/common";
import * as partnerSlice from "~/store/common/slice/partnerSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function AdditionNewPartner() {
  const [partner, setPartner] = useState({});
  const [contact, setContact] = useState({});
  const [payment, setPayment] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dispatch = useDispatch();

  const addNewPartner = () => {
    const data = { ...partner, ...contact, ...payment };

    const addPartner = () => fetchApi(partnerSlice.addPartner(data), dispatch);

    setIsLoading(true);
    setIsDisabled(true);

    addPartner().then((result) => {
      result
        ? successfulToast("Tạo đối tác thành công")
        : errorToast("Tạo đối tác không thành công");
      setIsLoading(false);
      setIsDisabled(false);
    });
  };

  return (
    <div>
      <Toast />
      <div>
        <PartnerSection
          className={generalStyles.additionSection}
          setPartner={setPartner}
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
            textBtn="Tạo đối tác"
            isLoading={isLoading}
            onClick={addNewPartner}
          />
        </div>
      </div>
    </div>
  );
}

export default AdditionNewPartner;
