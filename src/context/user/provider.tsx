import { ReactNode } from 'react'
import usersContext from './index'
import { User } from '../../types'

export default function Provider (
  { children, user }: { children?: ReactNode, user: User }
): JSX.Element {
  const { Provider } = usersContext
  const value = { user }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}
