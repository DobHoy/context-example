import { useContext } from 'react'
import userContext from '../context/user'
import Colleague from './Colleague'
import { Job } from '../types'

export default function Summary (
  { name, users }: Job
): JSX.Element {
  const items = users.map(username => {
    return (
      <Colleague key={username} username={username} />
    )
  })

  const { user } = useContext(userContext)

  return (
    <p key={name}>
      You will work as a {user?.role} on {name}

      <ul>
        {items}
      </ul>
    </p>
  )
}
