import InputSection from "~/components/section/inputSection/inputSection";

function QuantityInput({ quantity, setQuantity, isDisabled, className }) {
  return (
    <InputSection
      className={className}
      title="Số lượng"
      type="number"
      placeholder="Nhập số lượng sản phẩm đang có"
      value={quantity}
      setState={setQuantity}
      isDisabled={isDisabled}
    />
  );
}

export default QuantityInput;
