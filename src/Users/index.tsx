import UserItems from './Items'
import UsersProvider from '../context/users/provider'
import JobsProvider from '../context/jobs/provider'

export default function Users (): JSX.Element {
  return (
    <>
      <h2>Users</h2>

      <JobsProvider>
        <UsersProvider>
          <UserItems />
        </UsersProvider>
      </JobsProvider>
    </>
  )
}
