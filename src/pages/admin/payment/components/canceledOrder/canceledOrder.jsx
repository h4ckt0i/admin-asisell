import NumberSection from "~/components/section/numberSection/numberSection";

function CanceledOrder({ orders, className }) {
  return (
    <NumberSection
      className={className}
      title="Đơn hàng hủy"
      number={orders.count}
      subInfo="Đơn hàng trả về"
    />
  );
}

export default CanceledOrder;
