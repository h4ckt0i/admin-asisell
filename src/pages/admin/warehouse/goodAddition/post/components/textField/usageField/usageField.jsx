import TextFieldSection from "~/components/section/textFieldSection/textFieldSection";

function UsageField({ using, setUsing, isDisabled, className }) {
  return (
    <TextFieldSection
      className={className}
      title="Cách sử dụng"
      placeholder="Điền cách sử dụng sản phẩm"
      value={using}
      setState={setUsing}
      isDisabled={isDisabled}
    />
  );
}

export default UsageField;
