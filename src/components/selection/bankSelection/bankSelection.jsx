import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi, formatOptionSelection } from "~/utils/common";
import * as bankSlice from "~/store/common/slice/bankSlice";

function BankSelection({ isDisabled, setBank, className }) {
  const [banks, setBanks] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllBanks = () => fetchApi(bankSlice.getAll(), dispatch);

    getAllBanks().then((result) => {
      const banks = formatOptionSelection(result.data);
      setBanks(banks);
    });
  }, []);

  return (
    <SelectSection
      className={className}
      title="Ngân hàng"
      placeholder="Chọn ngân hàng"
      options={banks}
      setState={setBank}
      isDisabled={isDisabled}
    />
  );
}

export default BankSelection;
