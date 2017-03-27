# swatcher
Make CSS variables via JavaScript

```
npm install swatcher --save
```

## Usage

```
var swatcher = require('swatcher')

swatcher().assign({
  orange: '#f60',
  black: '#000'
}).css()
```

## Methods
- `.assign(swatches)`: set swatch values
- `.lookup(name)`: get swatch value
- `.object()`: get JavaScript object
- `.json()`: get json string
- `.css()`: get css string
- `.scss()`: get scss string
- `.less()`: get less string
