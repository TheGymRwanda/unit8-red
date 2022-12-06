import Link from "next/link";
import Image from "next/image";
import arrow from "/public/assets/icons/link-arrow.svg";

export default function ProjectTitle({ href, children, handle, remove, mobile, show }) {
  return (
    <>
      {!mobile && <Link
        onMouseOver={handle}
        onMouseLeave={remove}
        className="z-10 hover:after:bg-black flex items-start gap-2 group after:hidden after:xl:block after:transition-colors after:duration-300 after:absolute relative after:bottom-0.6 after:w-full after:h-0.5 after:bg-transparent   "
        href={href}
      >
        <h1>{children}</h1>
        <Image
          alt="arrow"
          src={arrow}
          priority
          width="14"
          height="13"
          className="hidden xl:inline-block pt-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </Link>}
      {mobile && <span
        onClick={handle}
        className="z-10 cursor-pointer hover:after:bg-black flex items-start gap-2 group after:transition-colors after:duration-300 after:hidden after:xl:block after:absolute relative after:bottom-0.6 after:w-full after:h-0.5 after:bg-transparent"
      >
        <h1>{children}</h1>
        <Image
          alt="arrow"
          src={arrow}
          priority
          width="14"
          height="13"
          className="pt-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100 hidden xl:inline-block"
        />
      </span>}
    </>
  );
}
