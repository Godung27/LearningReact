import ImgInvestment from "../../assets/investment-calculator-logo.png"
import "./Header.css"

export default function Header() {
  return (
    <header id="header">
      <img src={ImgInvestment} alt="Money Bag Logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}