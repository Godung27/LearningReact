export default function Tabbutton({ children, isSelect, ...props }) {
  return (
    <li><button className={isSelect ? "active" : undefined} {...props}>
      {children}
    </button></li >
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