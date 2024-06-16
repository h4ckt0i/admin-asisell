import CurrencySection from "~/components/section/currencySection/currencySection";

function TotalExpense({ total, className }) {
  return (
    <CurrencySection
      className={className}
      title="Tổng chi phí (tháng)"
      number={total}
    />
  );
}

export default TotalExpense;
