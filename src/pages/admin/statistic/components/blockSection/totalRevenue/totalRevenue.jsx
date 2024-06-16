import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CurrencySection from "~/components/section/currencySection/currencySection";
import { fetchApi } from "~/utils/common";
import * as orderSlice from "~/store/common/slice/orderSlice";

function TotalRevenue({ className }) {
  const [revenue, setRevenue] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const getRevenue = () => fetchApi(orderSlice.getRevenue(), dispatch);

    getRevenue().then((result) => setRevenue(result.total_revenue));
  }, []);

  return (
    <CurrencySection
      className={className}
      title="Tổng doanh thu"
      number={revenue}
    />
  );
}

export default TotalRevenue;
