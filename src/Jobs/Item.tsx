import { Job } from '../types'
import Assignment from './Assignment'

export default function Item (
  { name, users }: Job
): JSX.Element {
  const paragraphs = users.map(user => {
    return (
      <Assignment key={user} user={user} name={name} />
    )
  })

  return (
    <li>
      <h3>{name}</h3>

      {paragraphs}
    </li>
  )
}