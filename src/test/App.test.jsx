import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App.jsx'

describe('App', () => {
  it('renders the FAIRflow title', () => {
    render(<App />)
    expect(screen.getByText('FAIRflow')).toBeInTheDocument()
  })

  it('renders the welcome description', () => {
    render(<App />)
    expect(screen.getByText(/Welcome to FAIRflow/)).toBeInTheDocument()
  })

  it('shows Data Stream page by default', () => {
    render(<App />)
    expect(screen.getByText('Data Stream Plot')).toBeInTheDocument()
  })

  it('navigates to FAIR Principles page', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'FAIR Principles' }))
    expect(screen.getByText('FAIR Principles for Data Management')).toBeInTheDocument()
  })

  it('navigates back to Data Stream page', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'FAIR Principles' }))
    fireEvent.click(screen.getByRole('button', { name: 'Data Stream' }))
    expect(screen.getByText('Data Stream Plot')).toBeInTheDocument()
  })
})
