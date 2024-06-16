import Search from "~/components/search/search";
import ProductTable from "../components/productTable/productTable";

function RemainingProducts() {
  return (
    <div>
      <div>
        <Search placeholder="Tìm kiếm sản phẩm, mã sản phẩm" />
        <ProductTable />
      </div>
    </div>
  );
}

export default RemainingProducts;
