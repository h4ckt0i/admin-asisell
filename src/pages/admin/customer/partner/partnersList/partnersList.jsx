import Search from "~/components/search/search";
import PartnerTable from "./components/partnerTable/partnerTable";

function partnersList() {
  return (
    <div>
      <div>
        <Search placeholder="Tìm kiếm đối tác, mã đối tác" />
        <PartnerTable />
      </div>
    </div>
  );
}

export default partnersList;
