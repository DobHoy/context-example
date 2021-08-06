import JobsProvider from '../context/jobs/provider'
import UsersProvider from '../context/users/provider'
import Items from './Items'

export default function Jobs (): JSX.Element {
  return (
    <>
      <h2>Jobs</h2>

      <UsersProvider>
        <JobsProvider>
          <Items />
        </JobsProvider>
      </UsersProvider>
    </>
  )
}
