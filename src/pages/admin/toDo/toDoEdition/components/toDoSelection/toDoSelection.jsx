import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi, formatOptionSelection } from "~/utils/common";
import * as toDoSlice from "~/store/common/slice/toDoSlice";

function ToDoSelection({ isDisabled, setToDo, className }) {
  const [toDoes, setToDoes] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAll = () => fetchApi(toDoSlice.getAll(), dispatch);

    getAll().then((result) => {
      const toDoes = formatOptionSelection(result);
      setToDoes(toDoes);
    });
  }, []);

  return (
    <SelectSection
      className={className}
      title="Việc hiện tại"
      placeholder="Chọn việc hiện tại"
      options={toDoes}
      setState={setToDo}
      isDisabled={isDisabled}
    />
  );
}

export default ToDoSelection;
