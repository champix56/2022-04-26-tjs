import React, { useEffect, useState } from "react";
import FlexH from "./components/layout/FlexH/FlexH";
import FlexW from "./components/layout/FlexW/FlexW";
import {ConnectedMemeForm} from "./components/MemeForm/MemeForm";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/ConnectedMemeSvgViewer";
import  MemeThumbnail  from "./components/ui/MemeThumbnail/MemeThumbnail";
import Navbar from "./components/ui/Navbar/Navbar";
import { REST_ADR, REST_RESSOURCES } from "./config/config";
import store, { ACTIONS_CURRENT } from './store/store'
const appInitialState = {
  meme: {
    text: "Le react c'est cool",
    x: 20,
    y: 20,
    fontSize: 20,
    fontWeight: "900",
    color: "#000000",
    imageId: 0,
    underline: true,
    italic: false,
    name: "mon 1er meme",
  },
  images: [],
  memes: [],
};
let isloaded=false;

function App(props) {

   return (
    <div className="App" style={{ height: "90vh" }}>
      <div>Header</div>
      <Navbar />
      <MemeThumbnail/>
      <FlexH>
        <FlexW>
          <MemeSvgViewer/>
          <ConnectedMemeForm />
        </FlexW>
      </FlexH>
      <div>Footer</div>
    </div>
  );
}

export default App;
