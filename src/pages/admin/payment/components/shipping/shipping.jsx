import NumberSection from "~/components/section/numberSection/numberSection";

function Shipping({ orders, className }) {
  return (
    <NumberSection
      className={className}
      title="Đang vận chuyển"
      number={orders.count}
      subInfo="Đơn hàng đang vận chuyển"
    />
  );
}

export default Shipping;
