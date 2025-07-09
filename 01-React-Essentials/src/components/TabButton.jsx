export default function Tabbutton({ children, onSelect }) {
  return (
    <li><button onClick={onSelect}>{children}</button></li>
  )
}

// export default function Tabbutton(props) {
//   return (
//     <li><button onClick={handleClick}>{props.children}</button></li>
//   )
// }

// export default function Tabbutton({ label }) {
//   return (
//     <li><button>{label}</button></li>
//   )
// }