import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CurrencySection from "~/components/section/currencySection/currencySection";
import {
  formatNumber,
  getCurrentMonth,
  getCurrentYear,
  fetchApi,
} from "~/utils/common";
import * as orderSlice from "~/store/common/slice/orderSlice";

function MonthlyRevenue({ className }) {
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const time = {
      month: getCurrentMonth(),
      year: getCurrentYear(),
    };
    const getRevenueByMonthAndYear = () =>
      fetchApi(orderSlice.getRevenueByMonthAndYear(time), dispatch);

    getRevenueByMonthAndYear().then((result) => setMonthlyRevenue(result));
  }, []);

  return (
    <CurrencySection
      className={className}
      title="Doanh thu tháng"
      number={monthlyRevenue.total_revenue}
      subInfo={`Đã bán ${formatNumber(monthlyRevenue.total_orders)} đơn hàng`}
    />
  );
}

export default MonthlyRevenue;
