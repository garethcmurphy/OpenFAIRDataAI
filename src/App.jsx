import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import DataStream from './components/DataStream.jsx'
import FairPrinciples from './components/FairPrinciples.jsx'
import './App.css'

const PAGES = {
  DATA_STREAM: 'Data Stream',
  FAIR_PRINCIPLES: 'FAIR Principles',
}

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.DATA_STREAM)

  return (
    <div className="app-container">
      <Sidebar pages={Object.values(PAGES)} currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        <h1 className="app-title">FAIRflow</h1>
        <p className="app-description">Welcome to FAIRflow - Your data stream visualization tool!</p>
        {currentPage === PAGES.DATA_STREAM && <DataStream />}
        {currentPage === PAGES.FAIR_PRINCIPLES && <FairPrinciples />}
      </main>
    </div>
  )
}

export default App
