import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "~/components/loading/loading";
import Search from "~/components/search/search";
import CustomerTable from "./components/customerTable/customerTable";
import BriefInfo from "./components/briefInfo/briefInfo";
import { fetchApi, setDocumentTitle } from "~/utils/common";
import * as userSlice from "~/store/common/slice/userSlice";

import generalStyles from "~/styles/generalStyle.module.scss";

function Overview() {
  const [customers, setCustomers] = useState([]);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalNewCustomers, setTotalNewCustomers] = useState(0);
  const [birthdaysToday, setBirthdaysToday] = useState(0);
  const [birthdayUpcoming, setBirthdayUpcoming] = useState(0);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    setDocumentTitle("Khách hàng - Admin");

    const getAllCustomers = () =>
      fetchApi(userSlice.getAllCustomers(), dispatch);
    const getAllNewCustomers = () =>
      fetchApi(userSlice.getAllNewCustomers(), dispatch);
    const getAllCustomersByToday = () =>
      fetchApi(userSlice.getAllCustomersByToday(), dispatch);
    const getAllCustomersByUpcoming = () =>
      fetchApi(userSlice.getAllCustomersByUpcoming(), dispatch);

    getAllCustomers().then((result) => {
      setCustomers(result.information_of_customers);
      setTotalCustomers(result.total_customers);
    });

    getAllNewCustomers().then((result) =>
      setTotalNewCustomers(result.total_customers)
    );

    getAllCustomersByToday().then((result) =>
      setBirthdaysToday(result.total_customers)
    );

    getAllCustomersByUpcoming().then((result) =>
      setBirthdayUpcoming(result.total_customers)
    );
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={generalStyles.rightSideContainer}>
          <span className={generalStyles.rightSideTitle}>
            Tổng quan - Khách hàng
          </span>
          <div>
            <BriefInfo
              briefUsersInfo={[
                totalCustomers,
                totalNewCustomers,
                birthdaysToday,
                birthdayUpcoming,
              ]}
            />
            <div>
              <Search placeholder="Tìm kiếm khách hàng" />
              <CustomerTable list={customers} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Overview;
