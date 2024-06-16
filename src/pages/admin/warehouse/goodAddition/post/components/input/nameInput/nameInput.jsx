import InputSection from "~/components/section/inputSection/inputSection";

function NameInput({ name, setName, isDisabled, className }) {
  return (
    <InputSection
      className={className}
      title="Tên sản phẩm"
      placeholder="Nhập tên sản phẩm"
      value={name}
      setState={setName}
      isDisabled={isDisabled}
    />
  );
}

export default NameInput;
