import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./MemeSvgViewer.js";
export const memeSvgViewerInitialState = {};
const MemeSvgViewer = (props) => {
  const [state, setstate] = useState(memeSvgViewerInitialState);
  useEffect(() => {
    
  }, [state])
  return (
    <div className={style.MemeSvgViewer} data-testid="MemeSvgViewer">
      memeSvgViewer
    </div>
  );
};

MemeSvgViewer.propTypes = {};
MemeSvgViewer.defaultProps = {};

export default MemeSvgViewer;
