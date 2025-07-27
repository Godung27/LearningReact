// import { styled } from "styled-components"

// const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: ${({ $checkInvalid }) => $checkInvalid ? "#f87171" : "#6b7280"};
// `

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   line - height: 1.5;
//   background-color: ${({ $checkInvalid }) => $checkInvalid ? "#fed2d2" : "#d1d5db"};
//   color: ${({ $checkInvalid }) => $checkInvalid ? "#ef4444" : "#374151"};
//   border: 1px solid ${({ $checkInvalid }) => $checkInvalid ? "#f73f3f" : "transparent"};
//   border - radius: 0.25rem;
//   box - shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
// `

// export default function CustomInput({ label, checkInvalid, ...props }) {
//   return (
//     <p>
//       <Label $checkInvalid={checkInvalid}>{label}</Label>
//       <Input $checkInvalid={checkInvalid} {...props} />
//     </p>
//   );
// }

export default function Input({ label, checkInvalid, ...props }) {
  let labelClass = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClass = "w-full px-3 py-2 leading-tight border rounded shadow";

  if (checkInvalid) {
    labelClass += " text-red-400"
    inputClass += " text-red-500 bg-red-100 border-red-300"
  } else {
    labelClass += " text-stone-300"
    inputClass += " text-gray-700"
  }

  return (
    <p>
      <label className={labelClass}>{label}</label>
      <input className={inputClass} {...props} />
    </p>
  );
}