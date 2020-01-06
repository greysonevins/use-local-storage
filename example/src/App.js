import React, {useState} from 'react'
import { useLocalStorage } from '@greysonevins/use-local-storage'

const App = () => {
  const [localStorage, setLocalStorage] = useLocalStorage('test', '')
  const [exampleText,setExampleText] = useState('')

  return (
    <div>
      <p>Current Local Storage: {!! localStorage ? localStorage : 'undefined'}</p>
      <input
        onChange={(e) => setExampleText(e.target.value)}
        placeholder={'set text'}
        value={exampleText}
      />
      <button
        onClick={
          () => {
            setLocalStorage(exampleText);
            setExampleText('');
          }
        }
      >
        Change Local Storage
      </button>
      <button
        onClick={() => setLocalStorage(null)}
      >
        delete localStorage
      </button>
    </div>
  )
}
export default App
