import MainButton from "./MainButton";

export default function PrimaryButton({ type, href, className, children }) {
  return (
    <MainButton
      type={type}
      href={href}
      className={`py-3 bg-brand ${className}`}
    >
      {children}
    </MainButton>
  );
}
