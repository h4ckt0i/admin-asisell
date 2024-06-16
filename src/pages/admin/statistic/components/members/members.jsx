import { useState, useEffect } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Image from "~/components/image/image";
import { members } from "./index";
import { fetchApi } from "~/utils/common";
import * as employeeSlice from "~/store/common/slice/employeeSlice";
import * as adminSlice from "~/store/common/slice/adminSlice";

import styles from "./members.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function Members({ className }) {
  const [membersInfo, setMembersInfo] = useState(members);
  const [totalAdmins, setTotalAdmins] = useState(0);
  const [totalEmployees, setTotalEmployees] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTotalAdmins = () =>
      fetchApi(adminSlice.getTotalAdmins(), dispatch);
    const getTotalEmployees = () =>
      fetchApi(employeeSlice.getTotalEmployees(), dispatch);

    getTotalAdmins().then((result) => {
      setTotalAdmins(result.total_admins);
    });
    getTotalEmployees().then((result) => {
      setTotalEmployees(result.total_employees);
    });
  }, []);

  useEffect(() => {
    setMembersInfo([
      {
        ...membersInfo[0],
        number: totalAdmins,
      },
      {
        ...membersInfo[1],
        number: totalEmployees,
      },
    ]);
  }, [totalAdmins, totalEmployees]);

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
