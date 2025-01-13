import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import SearchBar from '../SearchBar'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

describe('SearchBar', () => {
  const mockPush = jest.fn()
  
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      push: mockPush
    }))
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render search input', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Site içinde arama yapın...')
    expect(input).toBeInTheDocument()
  })

  it('should update input value on change', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Site içinde arama yapın...')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })

  it('should navigate to search results on submit', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Site içinde arama yapın...')
    const form = screen.getByRole('search')
    
    fireEvent.change(input, { target: { value: 'test' } })
    fireEvent.submit(form)
    
    expect(mockPush).toHaveBeenCalledWith('/search?q=test')
  })

  it('should not navigate if search query is empty', () => {
    render(<SearchBar />)
    const form = screen.getByRole('search')
    
    fireEvent.submit(form)
    
    expect(mockPush).not.toHaveBeenCalled()
  })

  it('should show search button', () => {
    render(<SearchBar />)
    const button = screen.getByLabelText('Arama')
    expect(button).toBeInTheDocument()
  })
}) 