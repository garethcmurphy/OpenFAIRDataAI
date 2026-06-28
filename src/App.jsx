import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import AssetDetails from './components/AssetDetails.jsx'
import FairPrinciples from './components/FairPrinciples.jsx'
import FairHelp from './components/FairHelp.jsx'
import './App.css'

const PAGES = {
  ASSET_DETAILS: 'Asset Details',
  FAIR_PRINCIPLES: 'FAIR Principles',
  FAIR_HELP: 'FAIR Help',
}

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.ASSET_DETAILS)

  return (
    <div className="app-container">
      <Sidebar pages={Object.values(PAGES)} currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        <h1 className="app-title">FAIRflow</h1>
        <p className="app-description">Welcome to FAIRflow - Your FAIR data management tool!</p>
        {currentPage === PAGES.ASSET_DETAILS && <AssetDetails />}
        {currentPage === PAGES.FAIR_PRINCIPLES && <FairPrinciples />}
        {currentPage === PAGES.FAIR_HELP && <FairHelp />}
      </main>
    </div>
  )
}

export default App
