import InputSection from "~/components/section/inputSection/inputSection";

function WarrantyInput({ warranty, setWarranty, isDisabled, className }) {
  return (
    <InputSection
      className={className}
      title="Thời gian đổi trả (ngày)"
      type="number"
      placeholder="Nhập thời gian đổi trả của sản phẩm"
      value={warranty}
      setState={setWarranty}
      isDisabled={isDisabled}
    />
  );
}

export default WarrantyInput;
