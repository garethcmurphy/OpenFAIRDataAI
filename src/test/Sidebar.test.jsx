import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Sidebar from '../components/Sidebar.jsx'

describe('Sidebar', () => {
  const pages = ['Asset Details', 'FAIR Principles', 'FAIR Help']

  it('renders the Navigation heading', () => {
    render(<Sidebar pages={pages} currentPage="Asset Details" onNavigate={() => {}} />)
    expect(screen.getByText('Navigation')).toBeInTheDocument()
  })

  it('renders all page buttons', () => {
    render(<Sidebar pages={pages} currentPage="Asset Details" onNavigate={() => {}} />)
    expect(screen.getByRole('button', { name: 'Asset Details' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'FAIR Principles' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'FAIR Help' })).toBeInTheDocument()
  })

  it('marks the current page button as active', () => {
    render(<Sidebar pages={pages} currentPage="Asset Details" onNavigate={() => {}} />)
    const activeBtn = screen.getByRole('button', { name: 'Asset Details' })
    expect(activeBtn).toHaveClass('active')
  })

  it('calls onNavigate when a button is clicked', () => {
    const mockOnNavigate = vi.fn()
    render(<Sidebar pages={pages} currentPage="Asset Details" onNavigate={mockOnNavigate} />)
    fireEvent.click(screen.getByRole('button', { name: 'FAIR Principles' }))
    expect(mockOnNavigate).toHaveBeenCalledWith('FAIR Principles')
  })
})
