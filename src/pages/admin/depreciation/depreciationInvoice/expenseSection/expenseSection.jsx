import { useState, useEffect } from "react";
import clsx from "clsx";
import DateChoice from "~/components/dateChoice/dateChoice";
import InputSection from "~/components/section/inputSection/inputSection";
import HandlerSelection from "../../components/handlerSelection/handlerSelection";
import { formatTypeNumber, convertCurrency } from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function ExpenseSection({ total, isDisabled, setExpense, className }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [responsiblePerson, setResponsiblePerson] = useState(0);
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    setTotalPrice(formatTypeNumber(total));
  }, [total]);

  useEffect(() => {
    setExpense({
      expense_info: {
        total: +totalPrice,
        responsible_person: responsiblePerson.name,
        due_date: dueDate,
      },
    });
  }, [totalPrice, responsiblePerson, dueDate]);

  return (
    <div className={className}>
      <div className={generalStyles.rightSideSubTitle}>
        Tổng chi phí khấu hao & Xử lý
      </div>
      <InputSection
        className={clsx(
          generalStyles.rightSideInputSectionTwo,
          generalStyles.total
        )}
        title="Tổng tiền"
        value={convertCurrency(totalPrice)}
        defaultDisabled={true}
      />
      <HandlerSelection
        className={generalStyles.rightSideInputSectionTwo}
        title="Người lập phiếu"
        placeholder="Chọn người lập phiếu"
        setHandler={setResponsiblePerson}
        isDisabled={isDisabled}
      />
      <DateChoice
        className={generalStyles.rightSideInputSectionTwo}
        calendarStyles={generalStyles.rightSideCalendar}
        title="Ngày hết hạn xử lý"
        setDateTime={setDueDate}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default ExpenseSection;
