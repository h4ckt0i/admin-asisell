import { useState } from "react";
import SelectSection from "~/components/section/selectSection/selectSection";

function WorkFormSelection({ setWorkForm, isDisabled }) {
  const options = [
    {
      label: "Toàn thời gian",
      value: "full-time",
    },
    {
      label: "Bán thời gian",
      value: "part-time",
    },
  ];

  return (
    <SelectSection
      title="Hình thức làm việc"
      placeholder="Chọn hình thức làm việc"
      options={options}
      setState={setWorkForm}
      isDisabled={isDisabled}
    />
  );
}

export default WorkFormSelection;
