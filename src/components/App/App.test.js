import React from 'react'
import { createStore } from 'redux'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

test('can render with redux with store', () => {
  const store = createStore(() => ({ app: { name: 'React Test'} }))
  render(<App />, { store })
  expect(screen.getByTestId('name-value')).toHaveTextContent('React Test')
})
