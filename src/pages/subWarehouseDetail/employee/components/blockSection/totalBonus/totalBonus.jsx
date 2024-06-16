import CurrencySection from "~/components/section/currencySection/currencySection";

function TotalBonus({ totalBonus, className }) {
  return (
    <CurrencySection
      className={className}
      title="Tổng thưởng (tháng)"
      number={totalBonus}
    />
  );
}

export default TotalBonus;
