import React from "react";
import FlexH from "./components/layout/FlexH/FlexH";
import FlexW from "./components/layout/FlexW/FlexW";
import {ConnectedMemeForm} from "./components/MemeForm/MemeForm";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/ConnectedMemeSvgViewer";
import  MemeThumbnail  from "./components/ui/MemeThumbnail/MemeThumbnail";
import Navbar from "./components/ui/Navbar/Navbar";

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
