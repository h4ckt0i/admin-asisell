import CurrencySection from "~/components/section/currencySection/currencySection";

function ShippingCost({ shippingCost, className }) {
  return (
    <CurrencySection
      className={className}
      title="Chi phí giao hàng (tháng)"
      number={shippingCost}
    />
  );
}

export default ShippingCost;
