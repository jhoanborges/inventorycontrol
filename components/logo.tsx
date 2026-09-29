import Image from "next/image";

/** Brand mark from public/logo.svg. Pass `alt=""` when the brand name is already next to it. */
export function Logo({
  className,
  animated = false,
  alt = "Inventory Control",
}: {
  className?: string;
  animated?: boolean;
  alt?: string;
}) {
  return (
    <Image
      src="/logo.svg"
      alt={alt}
      width={1045}
      height={1050}
      priority={animated}
      className={`${className ?? ""} ${animated ? "logo-animated" : ""}`}
    />
  );
}
