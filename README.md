# @greysonevins/use-local-storage

> custom localStorage hook to control for deleting etc

[![NPM](https://img.shields.io/npm/v/@greysonevins/use-local-storage.svg)](https://www.npmjs.com/package/@greysonevins/use-local-storage) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @greysonevins/use-local-storage
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from '@greysonevins/use-local-storage'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [greysonevins](https://github.com/greysonevins)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
