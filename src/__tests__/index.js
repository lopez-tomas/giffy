import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../App';

test('home works as expected', async () => {
  const { container } = render(<App />)
  const gifLink = await waitFor(
    () => container.querySelector('.Gif-link')
  )

  expect(gifLink)
});

test('search form could be used', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, { target: { value: 'Matrix' }})
  fireEvent.click(button)

  const title = await screen.findByText('Matrix')
  expect(title).toBeVisible()
})
