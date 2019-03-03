## Material 1000+ icons library [Demo](https://elv1n.github.io/material-icons-library/)

[![npm version](https://badgen.net/npm/v/material-icons-library)](https://npm.im/material-icons-library) [![npm downloads](https://badgen.net/npm/dm/material-icons-library)](https://npm.im/material-icons-library)

This package provide [Material Icons Library](https://icons.pixsellz.io/) packaged as a set of React components

### 💣 Features
* 1000+ Icons in 16 Categories
* 24x24px
* 2 Styles


More on [icons.pixsellz.io](https://icons.pixsellz.io/)
* Neatly Organized
* +1 Style
* Sketch Styles & Symbols
* Figma Styles & Components
* 6 File Formats

### Get Started

```bash
yarn add material-icons-library // Outlined style
yarn add material-icons-two-tone // Two Tone style
```

## Imports

- If your environment doesn't support tree-shaking, the **recommended** way to import the icons is the following:
```jsx
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AddLocationIcon from '@material-ui/icons/AddLocation';
```

- If your environment support tree-shaking you can also import the icons this way:
```jsx
import { AccessAlarm, AddLocation } from '@material-ui/icons';
```

Note: Importing named exports in this way will result in the code for *every icon* being included in your project, so is not recommended unless you configure [tree-shaking](https://webpack.js.org/guides/tree-shaking/). It may also impact Hot Module Reload performance.
