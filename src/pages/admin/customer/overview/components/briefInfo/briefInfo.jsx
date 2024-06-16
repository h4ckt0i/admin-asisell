import { useState, useEffect } from "react";
import BlockSection from "~/components/block/blockSection/blockSection";
import { iconsList, blockList } from "./index";

function BriefInfo({ briefUsersInfo }) {
  const [usersInfoList, setUsersInfoList] = useState([]);

  useEffect(() => {
    const usersList = blockList.map((item, index) => ({
      ...item,
      number: briefUsersInfo[index],
    }));

    setUsersInfoList(usersList);
  }, [briefUsersInfo]);

  return <BlockSection list={usersInfoList} iconsList={iconsList} />;
}

export default BriefInfo;
