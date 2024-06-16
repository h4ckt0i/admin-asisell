import InputSection from "~/components/section/inputSection/inputSection";

function MassInput({ mass, setMass, isDisabled, className }) {
  return (
    <InputSection
      className={className}
      title="Khối lượng (g)"
      type="number"
      placeholder="Nhập khối lượng của sản phẩm"
      value={mass}
      setState={setMass}
      isDisabled={isDisabled}
    />
  );
}

export default MassInput;
