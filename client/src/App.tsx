import './App.css'

import { gRPCClients } from 'gRPCClients'
import MessagePage from 'pages/message'
import React from 'react'

function App() {
  return (
    <div className="App">
      <section>
        <MessagePage clients={gRPCClients} />
      </section>
    </div>
  )
}

export default App
