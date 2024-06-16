import Search from "~/components/search/search";
import ProductTable from "../components/productTable/productTable";

function RemainingGifts() {
  return (
    <div>
      <div>
        <Search placeholder="Tìm kiếm sản phẩm, mã sản phẩm" />
        <ProductTable isProduct={false} />
      </div>
    </div>
  );
}

export default RemainingGifts;
