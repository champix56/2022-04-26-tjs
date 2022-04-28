import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FlexH from "./components/layout/FlexH/FlexH";
import FlexW from "./components/layout/FlexW/FlexW";
import { ConnectedMemeForm } from "./components/MemeForm/MemeForm";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/ConnectedMemeSvgViewer";
import MemeThumbnail from "./components/ui/MemeThumbnail/MemeThumbnail";
import Navbar from "./components/ui/Navbar/Navbar";

function App(props) {
  return (
    <div className="App" style={{ height: "90vh" }}>
      <Router>
        <div style={{ textAlign: "center" }}>
          <Link to="/thumbnail">thumbnail</Link> | <Link to="/editor">New</Link>
        </div>
        <Navbar />
        <FlexH>
          <Routes>
            <Route path="/thumbnail" element={<MemeThumbnail />} />
            <Route path="/editor" element={<MemeEditor />} />
          </Routes>
        </FlexH>
        <div>Footer</div>
      </Router>
    </div>
  );
}
function MemeEditor() {
  return (
    <FlexW>
      <MemeSvgViewer />
      <ConnectedMemeForm />
    </FlexW>
  );
}
export default App;
