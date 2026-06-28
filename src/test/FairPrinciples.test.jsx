import { describe, it, expect } from 'vitest'
import { render, screen, within, fireEvent } from '@testing-library/react'
import FairPrinciples from '../components/FairPrinciples.jsx'

function getDatasetCard(name) {
  return screen.getByRole('heading', { name, level: 3 }).closest('article')
}

describe('FairPrinciples', () => {
  it('renders the section title', () => {
    render(<FairPrinciples />)
    expect(screen.getByText('FAIR Principles for Data Management')).toBeInTheDocument()
  })

  it('renders all four FAIR principle sections', () => {
    render(<FairPrinciples />)
    expect(screen.getByRole('heading', { name: /Findable/, level: 3 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Accessible/, level: 3 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Interoperable/, level: 3 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Reusable/, level: 3 })).toBeInTheDocument()
  })

  it('renders principle codes', () => {
    render(<FairPrinciples />)
    expect(screen.getByText('F1.')).toBeInTheDocument()
    expect(screen.getByText('A1.')).toBeInTheDocument()
    expect(screen.getByText('I1.')).toBeInTheDocument()
    expect(screen.getByText('R1.')).toBeInTheDocument()
  })

  it('renders FAIR scores for sample datasets', () => {
    render(<FairPrinciples />)
    expect(screen.getByText('Sample dataset FAIR scores')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Coastal Water Quality Time Series', level: 3 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Urban Tree Health Survey', level: 3 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Historic Rainfall Ledger', level: 3 })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Open access landing page for Coastal Water Quality Time Series/ })).toBeInTheDocument()
    expect(screen.getByText('FAIR score: 4 / 4')).toBeInTheDocument()
    expect(screen.getByText('FAIR score: 3 / 4')).toBeInTheDocument()
    expect(screen.getByText('FAIR score: 2 / 4')).toBeInTheDocument()
  })

  it('shows dataset metadata checks and missing values', () => {
    render(<FairPrinciples />)

    const coastalWaterCard = getDatasetCard('Coastal Water Quality Time Series')
    const urbanTreeHealthCard = getDatasetCard('Urban Tree Health Survey')
    const historicRainfallCard = getDatasetCard('Historic Rainfall Ledger')

    expect(coastalWaterCard).not.toBeNull()
    expect(urbanTreeHealthCard).not.toBeNull()
    expect(historicRainfallCard).not.toBeNull()
    expect(within(coastalWaterCard).queryByText('Not provided')).not.toBeInTheDocument()
    expect(within(urbanTreeHealthCard).getAllByText('Not provided')).toHaveLength(2)
    expect(within(historicRainfallCard).getAllByText('Not provided')).toHaveLength(3)
    expect(screen.getByText(/Interoperable: Metadata terms from ontologies — Needs work/)).toBeInTheDocument()
    expect(screen.getByText(/Reusable: Data license — Needs work/)).toBeInTheDocument()
    expect(screen.getByText(/Findable: Persistent identifier — Needs work/)).toBeInTheDocument()
  })

  it('renders a sortable FAIR assets table', () => {
    render(<FairPrinciples />)

    expect(screen.getByRole('heading', { name: 'Sortable FAIR assets table', level: 3 })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /Metadata profile/ })).toBeInTheDocument()
    expect(screen.getAllByText('Dublin Core')).toHaveLength(2)

    const assetNameSortButton = screen.getByRole('button', { name: /Asset name/ })
    fireEvent.click(assetNameSortButton)

    const dataRows = screen
      .getAllByRole('row')
      .filter((row) => within(row).queryByText(/Time Series|Survey|Ledger/))

    expect(within(dataRows[0]).getByText('Coastal Water Quality Time Series')).toBeInTheDocument()
    expect(within(dataRows[1]).getByText('Historic Rainfall Ledger')).toBeInTheDocument()
    expect(within(dataRows[2]).getByText('Urban Tree Health Survey')).toBeInTheDocument()
  })
})
