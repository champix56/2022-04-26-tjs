import React from 'react'
import FlexH from './components/layout/FlexH/FlexH'
import FlexW from './components/layout/FlexW/FlexW'

function App(props) {
  return (
    <div className="App" style={{height:'90vh'}}>
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
  )
}
export default App
