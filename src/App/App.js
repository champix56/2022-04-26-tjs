import React, { useState } from "react";
import FlexH from "./components/layout/FlexH/FlexH";
import FlexW from "./components/layout/FlexW/FlexW";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/MemeSvgViewer";
const appInitialState = {
  meme: {
    text: "Le react c'est cool",
    x: 20,
    y: 20,
    fontSize: 20,
    fontWeight: "900",
    color: "#ACB0A1",
    imageId:0,
    underline:true,
    italic:false,
    name:'mon 1er meme'
  },
  images:[
    {
      id:0,
      name:'image',
      url:'futurama1.jpg',
      w:1200,
      h:675
    }
  ]
};
function App(props) {
  const [state, setstate] = useState(appInitialState);
  return (
    <div className="App" style={{ height: "90vh" }}>
      <div>Header</div>
      <div>Nav</div>
      <FlexH>
        <FlexW>
          <MemeSvgViewer meme={state.meme} image={}/>
          <div>Editor</div>
        </FlexW>
      </FlexH>
      <div>Footer</div>
    </div>
  );
}
export default App;
