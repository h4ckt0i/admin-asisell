import { useState, useEffect } from "react";
import InputSection from "~/components/section/inputSection/inputSection";
import DateChoice from "~/components/dateChoice/dateChoice";
import TextAreaSection from "~/components/section/textAreaSection/textAreaSection";
import { convertToNumber } from "~/utils/common";

import generalStyles from "~/styles/generalStyle.module.scss";

function ToDoSection({ isDisabled, setMainInfo, className }) {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [process, setProcess] = useState();
  const [note, setNote] = useState("");

  useEffect(() => {
    setMainInfo({
      name,
      time: {
        start: startTime,
        end: endTime,
      },
      process: convertToNumber(process),
      note,
    });
  }, [name, startTime, endTime, process, note]);

  return (
    <div className={className}>
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Việc cần làm"
        placeholder="Nhập tên việc cần làm"
        value={name}
        setState={setName}
        isDisabled={isDisabled}
      />
      <DateChoice
        className={generalStyles.rightSideInputSectionTwo}
        calendarStyles={generalStyles.rightSideCalendar}
        title="Ngày bắt đầu"
        setDateTime={setStartTime}
        isDisabled={isDisabled}
      />
      <DateChoice
        className={generalStyles.rightSideInputSectionTwo}
        calendarStyles={generalStyles.rightSideCalendar}
        title="Ngày kết thúc"
        setDateTime={setEndTime}
        isDisabled={isDisabled}
      />
      <InputSection
        className={generalStyles.rightSideInputSectionTwo}
        title="Tiến độ (%)"
        placeholder="Nhập tiến độ công việc (không nhập kí hiệu %)"
        type="number"
        value={process}
        setState={setProcess}
        isDisabled={isDisabled}
      />
      <TextAreaSection
        row={5}
        className={generalStyles.rightSideInputSectionTwo}
        title="Ghi chú (nếu có)"
        placeholder="Nhập ghi chú"
        value={note}
        setState={setNote}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default ToDoSection;
