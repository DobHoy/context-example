import { createContext } from 'react'
import { Job } from '../../types'

interface Context {
  jobs: Job[]
  setJobs?: React.Dispatch<React.SetStateAction<Job[]>>
  userJobs?: (name: string) => Job[]
}

const value: Context = { jobs: [] }

export default createContext(value)
