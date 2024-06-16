import InfoSection from "~/components/section/infoSection/infoSection";
import { formatNumber } from "~/utils/common";

function NumberSection({ title, number, subInfo, className }) {
  return (
    <InfoSection
      className={className}
      title={title}
      text={formatNumber(number)}
      subText={subInfo}
    />
  );
}

export default NumberSection;
