import Search from "~/components/search/search";
import SupplierTable from "./components/supplierTable/supplierTable";

function SuppliersList() {
  return (
    <div>
      <div>
        <Search placeholder="Tìm kiếm nhà cung cấp, mã nhà cung cấp" />
        <SupplierTable />
      </div>
    </div>
  );
}

export default SuppliersList;
