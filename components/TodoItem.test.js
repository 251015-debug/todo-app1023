
// components/TodoItem.test.js

import { render, screen } from '@testing-library/react'
import TodoItem from './TodoItem'

test('TODO の文字が表示される', () => {
  const todo = { id: '1', text: '牛乳を買う', done: false }
  render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />)
  expect(screen.getByText('牛乳を買う')).toBeInTheDocument()
})

test('完了済みならチェックがオンで、打ち消し線が付く', () => {
  const todo = { id: '1', text: '牛乳を買う', done: true }
  render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />)
  expect(screen.getByRole('checkbox', { name: '牛乳を買う' })).toBeChecked()
  expect(screen.getByText('牛乳を買う')).toHaveStyle({ textDecoration: 'line-through' })
})
