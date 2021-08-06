import { useContext } from 'react'
import { User } from '../types'
import usersContext from '../context/users'
import jobsContext from '../context/jobs'
import Summary from './Summary'
import UserProvider from '../context/user/provider'

export default function Item (
  user: User
): JSX.Element {
  const { name, role, company } = user

  const { removeUser } = useContext(usersContext)
  const { userJobs } = useContext(jobsContext)

  const jobs = userJobs?.(name)

  const summaries = jobs?.map(job => {
    return (
      <Summary key={job.name} {...job} />
    )
  })

  function remove (): void {
    removeUser?.(name)
  }

  return (
    <UserProvider user={user}>
      <div>
        <h3>{name} ({role}, {company})</h3>

        {summaries}

        <button onClick={remove}>Remove</button>
      </div>
    </UserProvider>
  )
}
