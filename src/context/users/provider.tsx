import { useState, ReactNode } from 'react'
import usersContext from './index'
import data from '../../users.json'
import { User } from '../../types'

export default function UsersProvider (
  { children }: { children?: ReactNode }
): JSX.Element {
  const [users, setUsers] = useState(data)

  console.log('provider users test:', users)

  function removeUser (name: string): void {
    const filtered = users
      .filter(user => user.name !== name)

    setUsers(filtered)
  }

  function findUser (name: string): User | undefined {
    const found = users.find(user => user.name === name)

    return found
  }

  const { Provider } = usersContext
  const value = { users, setUsers, removeUser, findUser }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}
