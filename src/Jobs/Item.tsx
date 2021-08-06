import { Job } from '../types'
import Assignment from './Assignment'

export default function Item (
  { name, users }: Job
): JSX.Element {
  const assignments = users.map(user => {
    return (
      <Assignment key={user} user={user} name={name} />
    )
  })

  return (
    <>
      <h2>{name}</h2>

      <ul>{assignments}</ul>
    </>
  )
}
