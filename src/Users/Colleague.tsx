import { useContext } from 'react'
import usersContext from '../context/users'
import userContext from '../context/user'

export default function Colleague (
  { username }: { username: string }
): JSX.Element {
  const { findUser } = useContext(usersContext)
  const { user } = useContext(userContext)

  const found = findUser?.(username)

  const match = user?.name === found?.name
  const item = (
    <li key={username}>{user?.name} as {user?.role}</li>
  )
  if (match) {
    return <b>{item}</b>
  }

  return (
    item
  )
}
