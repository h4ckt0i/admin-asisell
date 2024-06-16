import CurrencySection from "~/components/section/currencySection/currencySection";

function UnpaidExpense({ total, className }) {
  return (
    <CurrencySection
      className={className}
      title="Chưa thanh toán (tháng)"
      number={total}
    />
  );
}

export default UnpaidExpense;
