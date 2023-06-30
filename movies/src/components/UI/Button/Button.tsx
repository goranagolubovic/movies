import classNames from "classnames";
import React from "react";
import styles from "./Button.module.css";

export type ButtonType = "primary" | "default";

const buttonTypeClasses: Record<ButtonType, string> = {
  primary: styles.primary,
  default: styles.default,
};

export interface ButtonProps 
    extends Omit< React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>,"type" >{
  children?: React.ReactNode;
  width?: string;
  type: ButtonType;
}

const Button = ({ type, width, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, buttonTypeClasses[type])}
      style={{ width: width }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
