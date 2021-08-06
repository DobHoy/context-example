import { useContext } from 'react'
import usersContext from '../context/users'
import userContext from '../context/user'

export default function Colleague (
  { username }: { username: string }
): JSX.Element {
  const { findUser } = useContext(usersContext)
  const { user } = useContext(userContext)

  const found = findUser?.(username)

  const item = (
    <li key={username}>{found?.name} as {found?.role}</li>
  )

  const match = user?.name === found?.name
  if (match) {
    return <b>{item}</b>
  }

  return (
    item
  )
}
