# @greysonevins/use-local-storage

> custom localStorage hook to control for deleting and updating. Created from @gragland blog about useLocalStorage but adjusted for my use. https://usehooks.com/useLocalStorage/

[![NPM](https://img.shields.io/npm/v/@greysonevins/use-local-storage.svg)](https://www.npmjs.com/package/@greysonevins/use-local-storage) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @greysonevins/use-local-storage
```

## Usage

```jsx
const App = () => {

  // takes two parameters at initilization. First is the key for localStorage and the second is the initial value.
  // will check if key exists and use existing, or create localStorage key value pair if not.
 
  const [localStorage, setLocalStorage] = useLocalStorage('test', '')
  const [exampleText,setExampleText] = useState('')

  // to delete
  // setLocalStorage(null)
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
```

## License

MIT © [greysonevins](https://github.com/greysonevins)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
