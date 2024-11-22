import RoundedButton from "./RoundedButton";

export default function MainButton({ type, href, className, children }) {
  return (
    <RoundedButton
      type={type}
      href={href}
      className={`text-red justify-center font-bold hover:scale-105 ${className}`}
    >
      {children}
    </RoundedButton>
  );
}
