import { useContext } from 'react'
import userContext from '../context/user'
import Colleague from './Colleague'
import { Job } from '../types'

export default function Summary (
  { name, users }: Job
): JSX.Element {
  const colleagues = users.map(username => {
    return (
      <Colleague key={username} username={username} />
    )
  })

  const { user } = useContext(userContext)

  return (
    <div key={name}>
      You will work as a {user?.role} on {name}

      <ul>
        {colleagues}
      </ul>
    </div>
  )
}
