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
    expect(screen.getByText(/Findable/)).toBeInTheDocument()
    expect(screen.getByText(/Accessible/)).toBeInTheDocument()
    expect(screen.getByText(/Interoperable/)).toBeInTheDocument()
    expect(screen.getByText(/Reusable/)).toBeInTheDocument()
  })

  it('renders principle codes', () => {
    render(<FairPrinciples />)
    expect(screen.getByText('F1.')).toBeInTheDocument()
    expect(screen.getByText('A1.')).toBeInTheDocument()
    expect(screen.getByText('I1.')).toBeInTheDocument()
    expect(screen.getByText('R1.')).toBeInTheDocument()
  })
})
