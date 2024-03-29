import React from 'react'
import { render, screen } from '@testing-library/react'
import DataLoad from './DataLoad'
import '@testing-library/jest-dom'

describe('DataLoad', () => {
  test('should reneer Dataload', () => {
    render(<DataLoad />)
    const linkElement = screen.getByText(/DataLoad from server!/i)
    expect(linkElement).toBeInTheDocument()
  })
})
