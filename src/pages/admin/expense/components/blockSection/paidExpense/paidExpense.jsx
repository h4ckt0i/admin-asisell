import CurrencySection from "~/components/section/currencySection/currencySection";

function PaidExpense({ total, className }) {
  return (
    <CurrencySection
      className={className}
      title="Đã thanh toán (tháng)"
      number={total}
    />
  );
}

export default PaidExpense;
