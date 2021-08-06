import { useContext } from 'react'
import jobsContext from '../context/jobs'
import Item from './Item'

export default function Items (): JSX.Element {
  const { jobs } = useContext(jobsContext)

  const items = jobs.map(job => {
    return (
      <Item key={job.name} {...job} />
    )
  })

  return (
    <>
      {items}
    </>
  )
}
