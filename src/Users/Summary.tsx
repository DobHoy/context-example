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
    <li>
      <h4>You will work as a {user?.role} on {name}</h4>

      <p>Colleagues</p>

      <ul>
        {colleagues}
      </ul>
    </li>
  )
}
