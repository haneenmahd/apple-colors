import Colors from "./index";
import Color from "./lib/Color";

const color = new Color(Colors.iOS.Dark.Blue);

console.log(color.mixUp(["#fff", "#fff", "#fff"], 20))