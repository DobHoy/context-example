import { useState } from 'react'
import Item from './Item'
import { lettersContext } from '../context/letters'

function Letters (): JSX.Element {
  const [letters, setLetters] = useState(['a', 'b', 'c'])

  const items = letters.map((letter, index) => {
    return (
      <Item key={letter} letter={letter} index={index} />
    )
  })

  const { Provider } = lettersContext
  const value = { letters, setLetters }

  return (
    <Provider value={value}>
      <ul>{items}</ul>
    </Provider>
  )
}

export default Letters
