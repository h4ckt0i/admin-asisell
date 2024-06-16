import InputSection from "~/components/section/inputSection/inputSection";

function UnitInput({ unit, setUnit, isDisabled, className }) {
  return (
    <InputSection
      className={className}
      title="Đơn vị"
      placeholder="Nhập đơn vị sản phẩm (cái, chai, lon,...)"
      value={unit}
      setState={setUnit}
      isDisabled={isDisabled}
    />
  );
}

export default UnitInput;
