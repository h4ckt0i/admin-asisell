import InfoSection from "~/components/section/infoSection/infoSection";
import { convertCurrency } from "~/utils/common";

function CurrencySection({ title, number, subInfo, className }) {
  return (
    <InfoSection
      className={className}
      title={title}
      text={convertCurrency(number)}
      subText={subInfo}
    />
  );
}

export default CurrencySection;
