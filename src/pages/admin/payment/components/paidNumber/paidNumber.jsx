import CurrencySection from "~/components/section/currencySection/currencySection";
import { formatNumber } from "~/utils/common";

function PaidNumber({ orders, className }) {
  return (
    <CurrencySection
      className={className}
      title="Đã thanh toán"
      number={orders.total_paid}
      subInfo={`${formatNumber(orders.count)} đơn hàng đã thanh toán`}
    />
  );
}

export default PaidNumber;
