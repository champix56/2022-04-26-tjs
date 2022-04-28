import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link, useLocation,useParams} from "react-router-dom";
import FlexH from "./components/layout/FlexH/FlexH";
import FlexW from "./components/layout/FlexW/FlexW";
import { ConnectedMemeForm } from "./components/MemeForm/MemeForm";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/ConnectedMemeSvgViewer";
import MemeThumbnail from "./components/ui/MemeThumbnail/MemeThumbnail";
import Navbar from "./components/ui/Navbar/Navbar";
import store,{ACTIONS_CURRENT} from "./store/store";

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
            <Route path="/editor/:id" element={<MemeEditor />} />
          </Routes>
        </FlexH>
        <div>Footer</div>
      </Router>
    </div>
  );
}
const mstp=(s)=>{
    return {memes:s.ressources.memes}
}
const mdtp=(dispatch)=>{
  return {
    setCurrent:(meme)=>{
      if(undefined===meme)dispatch({type:ACTIONS_CURRENT.CLEAR_CURRENT})
      else dispatch({type:ACTIONS_CURRENT.UPDATE_CURRENT,value:meme})
    }
  }
}
const MemeEditor=connect(mstp,mdtp)  ( (props)=>{
  const id=useParams().id;
  useEffect(() => {
    props.setCurrent(props.memes.find(m=>m.id===Number(id)))
  }, [props,id])
 return (
    <FlexW>
      <MemeSvgViewer />
      <ConnectedMemeForm />
    </FlexW>
  );
})
// const MemeEditor=connect(mstp,mdtp)(UnConnectedMemeEditor)
export default App;
