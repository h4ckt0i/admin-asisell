import { useState, useEffect } from "react";
import SelectSection from "~/components/section/selectSection/selectSection";

function TypeSelection({ isDisabled, setChosenType, className }) {
  const [type, setType] = useState({});

  const options = [
    {
      label: "Cố định",
      value: "fixed_cost",
    },
    {
      label: "Lưu động",
      value: "mobile_cost",
    },
  ];

  useEffect(() => {
    setChosenType(type);
  }, [type]);

  return (
    <SelectSection
      className={className}
      title="Loại chi phí"
      placeholder="Chọn loại chi phí"
      options={options}
      setState={setType}
      isDisabled={isDisabled}
    />
  );
}

export default TypeSelection;
