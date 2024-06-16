import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./iconButton.module.scss";

function IconButton({
  to,
  href,
  disabled = false,
  textBtn,
  textStyles,
  className,
  onClick,
  children,
  ...passProps
}) {
  let Comp = "button";
  const props = { onClick, ...passProps };

  //Remove event listener when button is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <Comp className={clsx(styles.btn, className)} {...props}>
      {children}
      {textBtn && (
        <span className={clsx(styles.text, textStyles)}>{textBtn}</span>
      )}
    </Comp>
  );
}

export default IconButton;
