import { createContext } from 'react'
import { User } from '../../types'

interface Context {
  user?: User
}

const value: Context = {}

export default createContext(value)
