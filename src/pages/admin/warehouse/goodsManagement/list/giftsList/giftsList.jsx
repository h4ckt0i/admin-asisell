import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import ProductTable from "~/components/table/productTable/productTable";
import Search from "~/components/search/search";
import { fetchApi } from "~/utils/common";
import * as productSlice from "~/store/common/slice/productSlice";

function GiftsList() {
  const [gifts, setGifts] = useState([]);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    document.title = "Quản lý quà tặng - Admin | Asisell";

    const getAll = () => fetchApi(productSlice.getAllGifts(), dispatch);

    getAll().then((result) => setGifts(result));
  }, []);

  return (
    <div>
      <Search placeholder="Tìm kiếm quà tặng" />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <ProductTable list={gifts} isProduct={false} />
        </div>
      )}
    </div>
  );
}

export default GiftsList;
