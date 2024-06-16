import CurrencySection from "~/components/section/currencySection/currencySection";

function TotalSalary({ totalSalaries, className }) {
  return (
    <CurrencySection
      className={className}
      title="Tổng lương (tháng)"
      number={totalSalaries}
    />
  );
}

export default TotalSalary;
