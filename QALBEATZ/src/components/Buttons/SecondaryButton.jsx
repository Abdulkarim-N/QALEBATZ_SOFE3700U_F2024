import MainButton from "./MainButton";

export default function SecondaryButton({ type, href, className, children }) {
  return (
    <MainButton
      type={type}
      href={href}
      className={`text-sm text-red bg-black ${className}`}
    >
      {children}
    </MainButton>
  );
}
