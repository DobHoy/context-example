import { createContext } from 'react'
import { User } from '../../types'

interface Context {
  users?: User[]
  setUsers?: React.Dispatch<React.SetStateAction<User[]>>
  removeUser?: (name: string) => void
  findUser?: (name: string) => User | undefined
}

const value: Context = {}

export default createContext(value)
