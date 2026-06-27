import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import DataStream from '../components/DataStream.jsx'

describe('DataStream', () => {
  it('renders the section title', () => {
    render(<DataStream />)
    expect(screen.getByText('Data Stream Plot')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<DataStream />)
    expect(screen.getByText(/simulated random walk/i)).toBeInTheDocument()
  })

  it('renders the refresh button', () => {
    render(<DataStream />)
    expect(screen.getByRole('button', { name: /generate new stream/i })).toBeInTheDocument()
  })

  it('clicking refresh button re-renders without error', () => {
    render(<DataStream />)
    const btn = screen.getByRole('button', { name: /generate new stream/i })
    fireEvent.click(btn)
    expect(screen.getByText('Data Stream Plot')).toBeInTheDocument()
  })
})
