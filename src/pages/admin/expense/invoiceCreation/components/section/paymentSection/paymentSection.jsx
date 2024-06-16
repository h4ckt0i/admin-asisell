import { useState, useEffect } from "react";
import clsx from "clsx";
import DateChoice from "~/components/dateChoice/dateChoice";
import InputSection from "~/components/section/inputSection/inputSection";
import { convertCurrency } from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function PaymentSection({ productInfo, isDisabled, setPayment, className }) {
  const [total, setTotal] = useState(0);
  const [paidTotal, setPaidTotal] = useState();
  const [unpaidTotal, setUnpaidTotal] = useState(0);
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    setUnpaidTotal(total - paidTotal);

    setPayment({
      payment_info: {
        total: +total,
        paid_number: +paidTotal,
        unpaid_number: +unpaidTotal,
        due_date: dueDate,
      },
    });
  }, [total, paidTotal, unpaidTotal, dueDate]);

  useEffect(() => {
    const quantity = productInfo.quantity;
    const unitPrice = productInfo.unitPrice;
    const vatPrice = productInfo.vatPrice;

    setTotal(quantity * (unitPrice + vatPrice));
  }, [productInfo]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>Thanh toán</div>
      <InputSection
        className={clsx(
          generalStyles.rightSideInputSectionTwo,
          generalStyles.total
        )}
        title="Tổng tiền"
        value={convertCurrency(total)}
        defaultDisabled={true}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Đã thanh toán"
        type="number"
        placeholder="Nhập số tiền đã thanh toán"
        value={paidTotal}
        setState={setPaidTotal}
        isDisabled={isDisabled}
      />
      <InputSection
        className={clsx(
          generalStyles.rightSideInputSectionTwo,
          generalStyles.unpaid
        )}
        title="Chưa thanh toán"
        value={convertCurrency(unpaidTotal)}
        setState={setUnpaidTotal}
        defaultDisabled={true}
      />
      <DateChoice
        className={generalStyles.rightSideInputSectionTwo}
        calendarStyles={generalStyles.rightSideCalendar}
        title="Hạn thanh toán"
        setDateTime={setDueDate}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default PaymentSection;
