# apple-colors
> A Library for using Colors used by apple🍎 in your User Interface🌌 and Getting use of the `Color` API functions.

## Support
**`apple-colors`** is supported mostly across all Javascript Frameworks and libraries.

## How to Install
**Using npm**
```sh
npm i apple-colors
```
**Using yarn**
```sh
yard add apple-colors
```

## Usage
**Using Colors on Your Web App**
Probably in this case we Have both Light and Dark Mode Colors For You.

For Eg :- 
- `Using with Styled Components`

```js
import { Colors } from "apple-colors";

const Button = styled.button`
  background: ${Colors.iOS.Dark.Blue};
  color: ${Colors.iOS.Light.Grey1}
  ...Your Styling
`;
```

- `Using with React inline Styling`
```js
const MyColor = () => <h1 style={{ background: Colors.iOS.Dark.Teal }}>Using Apple Colors</h1>;
```

## There are Colors on these Platforms too...
- MacOS
- iOS
- WatchOS(This contains the most colors);

### API
- `mixUp`: a simple function to mix colors and turn them into gradients so easily.
  ```js
  import { Color } from "apple-colors";

  const color = Color.mixUp(["#fff", /* More colors here */], 20 /* rotation degree */)
  ```

## Developer
- [@HaneenMahdin on Twitter🐥](https://twitter.com/HaneenMahdin)
- [@haneenmahdin on Instagram](https://instagram.com/haneenmahdin)

Give us a star 🌟 on [GitHub](https://github.com/haneenmahd/apple-colors)

## LICENSE
Apple Colors is licensed under **`MIT`** License.
