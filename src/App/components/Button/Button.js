import React, { useState } from "react";
import style from "./Button.module.css";
import PropTypes from 'prop-types';

const Button = (props) => {
  const [isClicked, setClicked] = useState(false);
  return (
    <button
      className={style.Button}
      style={{ color: props.color, backgroundColor: props.bgColor }}
      onClick={(evt)=>{
           // console.log(evt);
           setClicked(!isClicked);
           console.log("value de isClicked:",isClicked);
      }}
    >
      {props.children}
      <br/>
      {isClicked.toString()}
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
