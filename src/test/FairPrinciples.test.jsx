import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import FairPrinciples from '../components/FairPrinciples.jsx'

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
    expect(screen.getByText('Coastal Water Quality Time Series')).toBeInTheDocument()
    expect(screen.getByText('Urban Tree Health Survey')).toBeInTheDocument()
    expect(screen.getByText('Historic Rainfall Ledger')).toBeInTheDocument()
    expect(screen.getByText('FAIR score: 4 / 4')).toBeInTheDocument()
    expect(screen.getByText('FAIR score: 3 / 4')).toBeInTheDocument()
    expect(screen.getByText('FAIR score: 2 / 4')).toBeInTheDocument()
  })

  it('shows dataset metadata checks and missing values', () => {
    render(<FairPrinciples />)
    expect(screen.getAllByText('Missing')).toHaveLength(3)
    expect(screen.getByText(/Interoperable: Metadata terms from ontologies — Needs work/)).toBeInTheDocument()
    expect(screen.getByText(/Reusable: Data license — Needs work/)).toBeInTheDocument()
    expect(screen.getByText(/Findable: Persistent identifier — Needs work/)).toBeInTheDocument()
  })
})
