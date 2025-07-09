export default function Tabbutton(props) {
  const handleClick = function () {
    console.log("Hello World!");
  }

  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  )
}

// export default function Tabbutton({ children }) {
//   return (
//     <li><button>{children}</button></li>
//   )
// }

// export default function Tabbutton({ label }) {
//   return (
//     <li><button>{label}</button></li>
//   )
// }