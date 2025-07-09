export default function Tabbutton(props) {
  return (
    <li><button>{props.children}</button></li>
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