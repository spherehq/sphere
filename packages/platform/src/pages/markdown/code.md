# Code example

```js
import * as React from 'react'

import Layout from './src/components/layout'

// highlight-start
export const wrapPageElement = ({ element, props }) => {
  // Render custom layout component
  return <Layout {...props}>{element}</Layout>
}
// highlight-end
```

and then some css

```css
@import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css);

.gatsby-highlight {
  padding: 24px;
  margin: 16px;
  border-radius: 5px;
  overflow: auto;
  background-color: #282a36;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 20px 68px;
}

.gatsby-highlight-code-line {
  border-left: 3px solid #bd93f9;
  background-color: rgb(52, 54, 70);
}

code[class*='language-'],
pre[class*='language-'] {
  font-family: 'Fira Code', monospace;
}
```
