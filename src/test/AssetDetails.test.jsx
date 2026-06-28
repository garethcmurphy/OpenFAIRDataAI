import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import AssetDetails from '../components/AssetDetails.jsx'

describe('AssetDetails', () => {
  it('renders the section title', () => {
    render(<AssetDetails />)
    expect(screen.getByRole('heading', { name: 'Asset Details', level: 1 })).toBeInTheDocument()
  })

  it('renders the intro paragraph', () => {
    render(<AssetDetails />)
    expect(screen.getByText(/FAIR scores, ontology terms, license/)).toBeInTheDocument()
  })

  it('renders all asset cards', () => {
    render(<AssetDetails />)
    expect(screen.getByRole('heading', { name: 'Coastal Water Quality Time Series', level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Urban Tree Health Survey', level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Historic Rainfall Ledger', level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Soil Microbiome Atlas', level: 2 })).toBeInTheDocument()
  })

  it('renders FAIR score badges', () => {
    render(<AssetDetails />)
    expect(screen.getAllByLabelText('FAIR score 4 out of 4').length).toBeGreaterThan(0)
    expect(screen.getAllByLabelText(/FAIR score \d out of 4/).length).toBeGreaterThan(0)
  })

  it('renders ontology terms for Coastal Water Quality', () => {
    render(<AssetDetails />)
    expect(screen.getByText(/ENVO:00002259/)).toBeInTheDocument()
    expect(screen.getByText(/SWEET:seaWater/)).toBeInTheDocument()
  })

  it('shows Not provided for missing license in Historic Rainfall Ledger', () => {
    render(<AssetDetails />)
    const rainfallHeading = screen.getByRole('heading', { name: 'Historic Rainfall Ledger', level: 2 })
    const card = rainfallHeading.closest('article')
    expect(card).not.toBeNull()
  })

  it('renders access landing page links', () => {
    render(<AssetDetails />)
    expect(screen.getByRole('link', { name: /Open access landing page for Coastal Water Quality Time Series/ })).toBeInTheDocument()
  })

  it('toggles detailed panel on Show details click', () => {
    render(<AssetDetails />)
    const toggleButtons = screen.getAllByRole('button', { name: 'Show details' })
    expect(toggleButtons.length).toBeGreaterThan(0)
    fireEvent.click(toggleButtons[0])
    expect(screen.getByRole('button', { name: 'Hide details' })).toBeInTheDocument()
    expect(screen.getByText('FAIR score breakdown')).toBeInTheDocument()
  })

  it('shows expanded metadata after toggling details', () => {
    render(<AssetDetails />)
    const toggleButtons = screen.getAllByRole('button', { name: 'Show details' })
    fireEvent.click(toggleButtons[0])
    expect(screen.getByText('Marine Research Institute')).toBeInTheDocument()
    expect(screen.getByText('NetCDF / CSV')).toBeInTheDocument()
  })

  it('collapses panel when Hide details is clicked', () => {
    render(<AssetDetails />)
    const toggleButtons = screen.getAllByRole('button', { name: 'Show details' })
    fireEvent.click(toggleButtons[0])
    fireEvent.click(screen.getByRole('button', { name: 'Hide details' }))
    expect(screen.queryByText('FAIR score breakdown')).not.toBeInTheDocument()
  })
})
