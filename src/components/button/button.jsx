import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./button.module.scss";

function Button({
  to,
  href,
  disabled = false,
  textBtn,
  textStyles,
  className,
  btnStyles,
  children,
  onClick,
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
      {textBtn && (
        <span className={clsx(styles.text, textStyles)}>{textBtn}</span>
      )}
      {children}
    </Comp>
  );
}

export default Button;
