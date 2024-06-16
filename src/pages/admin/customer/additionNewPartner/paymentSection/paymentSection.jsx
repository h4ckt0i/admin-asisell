import { useState, useEffect } from "react";
import InputSection from "~/components/section/inputSection/inputSection";
import BankSelection from "../components/bankSelection/bankSelection";

import generalStyles from "~/styles/generalStyle.module.scss";

function PaymentSection({ setPayment, isDisabled, className }) {
  const [bank, setBank] = useState({});
  const [accountNumber, setAccountNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");

  useEffect(() => {
    setPayment({
      payment_info: {
        account_number: accountNumber,
        bank: bank.name,
        owner: ownerName,
      },
    });
  }, [bank, accountNumber, ownerName]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>Tài khoản</div>
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Số tài khoản"
        placeholder="Nhập số tài khoản thụ hưởng"
        value={accountNumber}
        setState={setAccountNumber}
        isDisabled={isDisabled}
      />
      <BankSelection
        className={generalStyles.rightSideInputSectionTwo}
        setBank={setBank}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Người thụ hưởng"
        placeholder="Nhập tên người thụ hưởng"
        value={ownerName}
        setState={setOwnerName}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default PaymentSection;
