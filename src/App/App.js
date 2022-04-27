import React, { useState } from "react";
import FlexH from "./components/layout/FlexH/FlexH";
import FlexW from "./components/layout/FlexW/FlexW";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/MemeSvgViewer";
import Navbar from "./components/ui/Navbar/Navbar";
const appInitialState = {
  meme: {
    text: "Le react c'est cool",
    x: 20,
    y: 20,
    fontSize: 20,
    fontWeight: "900",
    color: "#ACB0A1",
    imageId: 1,
    underline: true,
    italic: false,
    name: "mon 1er meme",
  },
  images: [
    {
      id: 0,
      name: "image",
      url: "futurama1.jpg",
      w: 1200,
      h: 675,
    },
  ],
};
function App(props) {
  const [state, setstate] = useState(appInitialState);
  return (
    <div className="App" style={{ height: "90vh" }}>
      <div>Header</div>
      <Navbar/>
      <FlexH>
        <FlexW>
          <MemeSvgViewer
            meme={state.meme}
            image={state.images.find((img) => img.id === state.meme.imageId)}
          />
          <div>Editor</div>
        </FlexW>
      </FlexH>
      <div>Footer</div>
    </div>
  );
}
export default App;
