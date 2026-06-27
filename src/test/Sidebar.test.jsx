import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Sidebar from '../components/Sidebar.jsx'

describe('Sidebar', () => {
  const pages = ['Data Stream', 'FAIR Principles']

  it('renders the Navigation heading', () => {
    render(<Sidebar pages={pages} currentPage="Data Stream" onNavigate={() => {}} />)
    expect(screen.getByText('Navigation')).toBeInTheDocument()
  })

  it('renders all page buttons', () => {
    render(<Sidebar pages={pages} currentPage="Data Stream" onNavigate={() => {}} />)
    expect(screen.getByRole('button', { name: 'Data Stream' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'FAIR Principles' })).toBeInTheDocument()
  })

  it('marks the current page button as active', () => {
    render(<Sidebar pages={pages} currentPage="Data Stream" onNavigate={() => {}} />)
    const activeBtn = screen.getByRole('button', { name: 'Data Stream' })
    expect(activeBtn).toHaveClass('active')
  })

  it('calls onNavigate when a button is clicked', () => {
    const onNavigate = vi.fn()
    render(<Sidebar pages={pages} currentPage="Data Stream" onNavigate={onNavigate} />)
    fireEvent.click(screen.getByRole('button', { name: 'FAIR Principles' }))
    expect(onNavigate).toHaveBeenCalledWith('FAIR Principles')
  })
})
