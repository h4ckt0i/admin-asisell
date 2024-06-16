import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Image from "~/components/image/image";
import { members } from "./index";
import { fetchApi } from "~/utils/common";
import * as employeeSlice from "~/store/subWarehouseDetail/slice/employeeSlice";

import styles from "./members.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Members({ subWarehouseInfo, className }) {
  const [membersInfo, setMembersInfo] = useState(members);
  const [totalManagers, setTotalManagers] = useState(0);
  const [totalStaff, setTotalStaff] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const subWarehouseId = subWarehouseInfo._id;

    const getAllManagers = () =>
      fetchApi(employeeSlice.getAllManagers(subWarehouseId), dispatch);
    const getAllStaff = () =>
      fetchApi(employeeSlice.getAllStaff(subWarehouseId), dispatch);

    if (subWarehouseId) {
      getAllManagers().then((result) => {
        setTotalManagers(result.total_employees);
      });
      getAllStaff().then((result) => {
        setTotalStaff(result.total_employees);
      });
    }
  }, [subWarehouseInfo]);

  useEffect(() => {
    setMembersInfo([
      {
        ...membersInfo[0],
        number: totalManagers,
      },
      {
        ...membersInfo[1],
        number: totalStaff,
      },
    ]);
  }, [totalManagers, totalStaff]);

  return (
    <div
      className={clsx(
        generalStyles.rightSideSection,
        generalStyles.container,
        styles,
        className
      )}
    >
      <span className={generalStyles.rightSideSubTitle}>Thành viên nội bộ</span>
      <ul className={clsx(generalStyles.list, styles.list)}>
        {membersInfo.map((member, index) => {
          return (
            <div
              className={styles.item}
              key={member.id}
              style={{ backgroundColor: members[index].backgroundColor }}
            >
              <Image className={styles.icon} src={member.icon} />
              <div className={styles.textContainer}>
                <span className={styles.title}>{member.title}</span>
                <span className={styles.number}>{member.number}</span>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Members;
