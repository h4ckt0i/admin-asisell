import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import BlockSection from "~/components/block/blockSection/blockSection";
import { iconsList, blockList } from "./index";
import { fetchApi } from "~/utils/common";
import * as toDoSlice from "~/store/common/slice/toDoSlice";

function BriefInfo() {
  const [ToDoInfoList, setToDoInfoList] = useState([]);
  const [totalToDoes, setTotalToDoes] = useState(0);
  const [completedToDoes, setCompletedToDoes] = useState(0);
  const [UnfulfilledToDoes, setUnfulfilledToDoes] = useState(0);
  const [IncompleteToDoes, setIncompleteToDoes] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTotalToDoes = () => fetchApi(toDoSlice.getTotalToDoes(), dispatch);
    const getCompleted = () => fetchApi(toDoSlice.getCompleted(), dispatch);
    const getUnfulfilled = () => fetchApi(toDoSlice.getUnfulfilled(), dispatch);
    const getIncomplete = () => fetchApi(toDoSlice.getIncomplete(), dispatch);

    getTotalToDoes().then((result) => setTotalToDoes(result.count));
    getCompleted().then((result) => setCompletedToDoes(result.count));
    getUnfulfilled().then((result) => setUnfulfilledToDoes(result.count));
    getIncomplete().then((result) => setIncompleteToDoes(result.count));
  }, []);

  useEffect(() => {
    const numbersList = [
      totalToDoes,
      completedToDoes,
      UnfulfilledToDoes,
      IncompleteToDoes,
    ];

    const dataList = blockList.map((item, index) => ({
      ...item,
      number: numbersList[index],
    }));

    setToDoInfoList(dataList);
  }, [totalToDoes, completedToDoes, UnfulfilledToDoes, IncompleteToDoes]);

  return <BlockSection list={ToDoInfoList} iconsList={iconsList} />;
}

export default BriefInfo;
