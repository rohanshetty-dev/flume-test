import { useState } from 'react'
import './App.css'
import config from './components/Flume/config'
import {NodeEditor} from 'flume'
import Homepage from './components/Flume/homepage'

function App() {
  const [nodes, setNodes] = useState({});
  console.log('Nodes in NodeEditor----', nodes)
  return (
    <div className="App" style={{width:960, height:966}}>
      <Homepage nodes={nodes}/>
      <NodeEditor 
        portTypes={config.portTypes}
        nodeTypes={config.nodeTypes}
        defaultNodes={[{type: "homepage", x: 10, y:1}]}
        onChange={setNodes}
        />
    </div>
  )
}

export default App
