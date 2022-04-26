import React from "react";
import style from "./Button.module.css";
import PropTypes from 'prop-types';
const Button = (props) => {
  console.log(props);
  return (
    <button
      className={style.Button}
      style={{ color: props.color, backgroundColor: props.bgColor }}
    >
      {props.children}
    </button>
  );
};
Button.propTypes={
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}
Button.defaultProps={
    bgColor:'grey'
}
export default Button;
