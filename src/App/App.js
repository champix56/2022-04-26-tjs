import React, { useState } from "react";
import FlexH from "./components/layout/FlexH/FlexH";
import FlexW from "./components/layout/FlexW/FlexW";
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
      url:'',
      w:1280,
      h:720
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
          <div>Viewer</div>
          <div>Editor</div>
        </FlexW>
      </FlexH>
      <div>Footer</div>
    </div>
  );
}
export default App;
