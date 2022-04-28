import React from "react";
import { connect } from "react-redux";
import SVGViewer from "./MemeSvgViewer";

function mstp(s, p) {
  return {
    ...p,
    meme: s.current,
    image:s.ressources.images.find(img=>img.id===s.current.imageId)
  };
}
function mdtp(d) {
  return {};
}
export default connect(mstp, mdtp)(SVGViewer);
