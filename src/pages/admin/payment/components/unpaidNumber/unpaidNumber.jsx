import CurrencySection from "~/components/section/currencySection/currencySection";
import { formatNumber } from "~/utils/common";

function UnpaidNumber({ orders, className }) {
  return (
    <CurrencySection
      className={className}
      title="Chưa thanh toán"
      number={orders.total_pending}
      subInfo={`${formatNumber(orders.count)} đơn hàng chưa thanh toán`}
    />
  );
}

export default UnpaidNumber;
