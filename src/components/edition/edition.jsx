import clsx from "clsx";
import IconButton from "../iconButton/iconButton";
import BluePenIcon from "~/assets/icons/bluePenIcon";

import generalStyles from "~/styles/generalStyle.module.scss";

function Edition({ parentId, childId, setTitle, setParent, className }) {
  return (
    <div className={clsx(generalStyles.action, className)}>
      <IconButton
        className={generalStyles.actionBtn}
        onClick={() => {
          setTitle(childId, setParent(parentId));
        }}
      >
        <BluePenIcon className={generalStyles.actionIcon} />
      </IconButton>
    </div>
  );
}

export default Edition;
