import React from "react";
import { connect } from "react-redux";
import MemeSvgViewer from "../MemeSvgViewer/MemeSvgViewer";
import style from './MemeThumbnail.module.scss'
export const MemeThumbnail = (props) => {
  return (
    <div className={style.MemeThumbnail} test-id="MemeThumbnail">
      {props.memes.map((e, i) => (
        <MemeSvgViewer
          key={`th${i}`}
          meme={e}
          image={props.images.find((img) => img.id === e.imageId)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state, props) => ({ ...props, ...state.ressources });

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(MemeThumbnail);
