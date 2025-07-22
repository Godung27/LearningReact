import logo from "../../assets/logo.png"
import "./Header.css"

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p
      // style={{
      //   color: "green",
      //   // "margin- left": 100, // same
      //   marginLeft: 100,
      // }}
      >A community of artists and art-lovers.</p>
    </header>
  );
}
