import SelectSection from "~/components/section/selectSection/selectSection";

function TypeSelection({ isDisabled, setType, className }) {
  const options = [
    {
      label: "Theo phần trăm",
      value: 1,
    },
    {
      label: "Theo số lượng",
      value: 2,
    },
  ];

  return (
    <SelectSection
      className={className}
      title="Loại SL khấu hao"
      placeholder="Chọn loại số lượng khấu hao"
      options={options}
      setState={setType}
      isDisabled={isDisabled}
    />
  );
}

export default TypeSelection;
