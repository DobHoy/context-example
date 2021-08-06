import { useState, ReactNode } from 'react'
import jobsContext from './index'
import data from '../../jobs.json'
import { Job } from '../../types'

export default function JobsProvider (
  { children }: { children?: ReactNode }
): JSX.Element {
  const [jobs, setJobs] = useState(data)

  function userJobs (name: string): Job[] {
    const filtered = jobs.filter(job => {
      const match = job.users.includes(name)

      return match
    })

    return filtered
  }

  const { Provider } = jobsContext
  const value = { jobs, setJobs, userJobs }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}
