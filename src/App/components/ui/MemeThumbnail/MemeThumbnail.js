import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MemeSvgViewer from "../MemeSvgViewer/MemeSvgViewer";
import style from './MemeThumbnail.module.scss'
export const MemeThumbnail = (props) => {
  return (
    <div className={style.MemeThumbnail} test-id="MemeThumbnail">
      {props.memes.map((e, i) => (
        <Link to={`/editor/${e.id}`} key={`th${i}`}>
        <MemeSvgViewer
          meme={e}
          image={props.images.find((img) => img.id === e.imageId)}
        />
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return { ...props, ...state.ressources };}

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MemeThumbnail);
