import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import NumberSection from "~/components/section/numberSection/numberSection";
import { getCurrentMonth, getCurrentYear, fetchApi } from "~/utils/common";
import * as orderSlice from "~/store/common/slice/orderSlice";

function TotalMonthlyOrders({ className }) {
  const [monthlyOrders, setMonthlyOrders] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const time = {
      month: getCurrentMonth(),
      year: getCurrentYear(),
    };

    const getTotalByMonthAndYear = () =>
      fetchApi(orderSlice.getTotalByMonthAndYear(time), dispatch);

    getTotalByMonthAndYear().then((result) =>
      setMonthlyOrders(result.total_orders)
    );
  }, []);

  return (
    <NumberSection
      className={className}
      title="Tổng đơn hàng tháng"
      number={monthlyOrders}
    />
  );
}

export default TotalMonthlyOrders;
