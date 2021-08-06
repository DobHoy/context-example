import { useContext } from 'react'
import usersContext from '../context/users'
import UserItem from './Item'

export default function Items (): JSX.Element {
  const { users } = useContext(usersContext)

  const items = users?.map(user => {
    return (
      <UserItem
        key={user.name}
        {...user}
      />
    )
  })

  return (
    <>
      {items}
    </>
  )
}
