import InputSection from "~/components/section/inputSection/inputSection";

function ExpiryInput({ expiry, setExpiry, isDisabled, className }) {
  return (
    <InputSection
      className={className}
      title="Hạn sử dụng (tháng)"
      type="number"
      placeholder="Nhập hạn sử dụng của sản phẩm"
      value={expiry}
      setState={setExpiry}
      isDisabled={isDisabled}
    />
  );
}

export default ExpiryInput;
