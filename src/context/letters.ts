import { createContext } from 'react'

interface Context {
  letters?: string[]
  setLetters?: React.Dispatch<React.SetStateAction<string[]>>
}

const value: Context = {}

export const lettersContext = createContext(value)
