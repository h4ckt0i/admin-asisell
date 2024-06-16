import CurrencySection from "~/components/section/currencySection/currencySection";

function CollectionPrice({ collectionPrice, className }) {
  return (
    <CurrencySection
      className={className}
      title="Thu hộ (tháng)"
      number={collectionPrice}
    />
  );
}

export default CollectionPrice;
