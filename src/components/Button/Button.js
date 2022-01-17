import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";
import cn from "classnames";

function Button(props) {
  const { children, variation, accepted, handleClick, ...args } = props;
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: variation === "primary",
        [styles.secondary]: variation === "secondary",
        [styles.success]: variation === "success",
        [styles.underline]: variation === "underline",
        [styles.empty]: variation === "empty",
        [styles.accepted]: accepted,
      })}
      {...args}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variation: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "underline",
    "empty",
  ]),
  children: PropTypes.string,
  accepted: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
