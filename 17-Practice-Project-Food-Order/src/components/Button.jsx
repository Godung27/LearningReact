export default function Button({ textOnly, className, children, ...props }) {
  return (
    <button
      className={textOnly ? `text-button ${className}` : `button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}