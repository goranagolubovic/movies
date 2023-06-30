import classNames from "classnames";
import React from "react";
import styles from "./Input.module.css";

interface Props {
  type: string;
  id?: string;
  value?: string;
  username?: boolean;
  password?: boolean;
  search?: boolean;
  onChange?: (e: any) => void;
  placeholder: string;
  autoComplete: "off";
  children?: React.ReactNode;
  width?: string;
}

const Input = (props: Props) => {
  return (
    <input 
      id={props.id}
      className={classNames(styles.input, {
        [styles.username]: props.username,
        [styles.password]: props.password,
        [styles.search]: props.search,
      })}
      style={{ width: props.width }}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    ></input>
  );
};

export default Input;
