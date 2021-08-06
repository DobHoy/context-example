import { useContext } from 'react'
import usersContext from '../context/users'

export default function Item (
  { user, name }: { user: string, name: string }
): JSX.Element {
  const { findUser } = useContext(usersContext)

  const found = findUser?.(user)

  const key: string = found != null ? found.role : ''
  console.log('key test:', key)

  const labels: Record<string, string> = {
    Teacher: 'teach you',
    Developer: 'develop your'
  }
  const label = labels[key]
  // const label = labels[found['role']]

  return (
    <p>
      <i>{user}</i>
      {' '}
      from
      {' '}
      <b>{found?.company}</b>
      {' '}
      will
      {' '}
      <b>{label}</b>
      {' '}
      <i>{name}</i>
    </p>
  )
}
