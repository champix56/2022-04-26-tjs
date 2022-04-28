import React from "react";
import { connect } from "react-redux";
import SVGViewer from "./MemeSvgViewer";

function mstp(s, p) {
  return {
    ...p,
    meme: s,
  };
}
function mdtp(d) {
  return {};
}
export default connect(mstp, mdtp)(SVGViewer);
