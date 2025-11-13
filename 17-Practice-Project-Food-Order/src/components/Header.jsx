import Button from "./Button.jsx";

import imgLogo from '../assets/logo.jpg';

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={imgLogo} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}