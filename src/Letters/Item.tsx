import { useContext } from 'react'
import { lettersContext } from '../context/letters'

export default function Item (
  { letter, index }: { letter: string, index: number }
): JSX.Element {
  const { letters, setLetters } = useContext(lettersContext)

  function remove (): void {
    if (letters != null && setLetters != null) {
      const filtered = letters
        .filter(element => element !== letter)

      setLetters(filtered)
    }
  }

  return (
    <li key={letter}>
      <h1>
        {index}
      </h1>
      <p>{letter}</p>
      <button
        onClick={remove}
      >
        Remove
      </button>
    </li>
  )
}
