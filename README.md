# apple-colors
A Package for using Colors used by apple🍎 in your User Interface🌌
![Cover](https://github.com/haneenmahd/apple-colors/blob/master/cover.png)

# How to Install
### Using npm
```
npm i apple-colors
```
### Using yarn
```
yard add apple-colors
```

# How to use
### Using Colors on Your Web App
Probably in this case we Have both Light and Dark Mode Colors For You.

For Eg :- 
- Using Styled Components

```
import { Colors } from "apple-colors";

const Button = styled.button`
  background: ${Colors.iOS.Dark.Blue};
  color: ${Colors.iOS.Light.Grey1}
  ...Your Styling
`;
```

- Using inline Styling
```
const MyColor = () => (
    <h1 style={{ background: Colors.iOS.Dark.Teal }}>Using Apple Colors</h1>
)
```

# There are Colors on these Platforms too...
- MacOS
- iOS
- WatchOS(This contains the most colors); 
