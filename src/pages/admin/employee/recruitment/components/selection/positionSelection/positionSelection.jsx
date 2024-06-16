import SelectSection from "~/components/section/selectSection/selectSection";

function PositionSelection({ setPosition, isDisabled }) {
  const options = [
    {
      label: "Nhân viên",
      value: "staff",
    },
    {
      label: "Trưởng phòng",
      value: "manager",
    },
    {
      label: "Giám đốc",
      value: "manager",
    },
  ];

  return (
    <SelectSection
      title="Vị trí"
      placeholder="Chọn vị trí"
      options={options}
      setState={setPosition}
      isDisabled={isDisabled}
    />
  );
}

export default PositionSelection;
