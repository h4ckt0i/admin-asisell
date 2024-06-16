import InputSection from "~/components/section/inputSection/inputSection";

function SkuCodeInput({ skuCode, setSkuCode, isDisabled, className }) {
  return (
    <InputSection
      className={className}
      title="Mã SKU"
      placeholder="Nhập mã SKU của sản phẩm"
      value={skuCode}
      setState={setSkuCode}
      isDisabled={isDisabled}
    />
  );
}

export default SkuCodeInput;
