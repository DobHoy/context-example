import { useContext } from 'react'
import { User } from '../types'
import usersContext from '../context/users'
import jobsContext from '../context/jobs'
import Summary from './Summary'
import UserProvider from '../context/user/provider'

export default function UserItem (
  user: User
): JSX.Element {
  const { name, role, company } = user

  const { removeUser } = useContext(usersContext)
  const { userJobs } = useContext(jobsContext)

  const jobs = userJobs?.(name)

  const paragraphs = jobs?.map(job => {
    return (
      <Summary key={job.name} {...job} />
    )
  })

  function remove (): void {
    if (removeUser != null) {
      removeUser(name)
    }
  }

  return (
    <UserProvider user={user}>
      <div>
        <h2>{name}</h2>

        <h3>{role}, {company}</h3>

        {paragraphs}

        <button onClick={remove}>Remove</button>
      </div>
    </UserProvider>
  )
}
