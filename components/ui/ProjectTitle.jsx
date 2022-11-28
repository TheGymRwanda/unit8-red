import Link from "next/link";
import Image from "next/image";
import arrow from "/public/assets/icons/link-arrow.svg";

export default function ProjectTitle({ href, children, handle, remove, mobile }) {
  return (
    <>
      {!mobile && <Link
        onMouseOver={handle}
        onMouseLeave={remove}
        className="z-10 hover:after:bg-black flex items-start gap-2 group after:transition-colors after:duration-300  after:block after:absolute relative after:bottom-0.6 after:w-full after:h-0.5 after:bg-transparent   "
        href={href}
      >
        <h1>{children}</h1>
        <Image
          alt="arrow"
          src={arrow}
          priority
          width="14"
          height="13"
          className="pt-3 transition-opacity duration-300 inline-block opacity-0 group-hover:opacity-100"
        />
      </Link>}
      {mobile && <div
        onMouseOver={handle}
        onMouseLeave={remove}
        className="z-10 hover:after:bg-black flex items-start gap-2 group after:transition-colors after:duration-300  after:block after:absolute relative after:bottom-0.6 after:w-full after:h-0.5 after:bg-transparent   "
      >
        <h1>{children}</h1>
        <Image
          alt="arrow"
          src={arrow}
          priority
          width="14"
          height="13"
          className="pt-3 transition-opacity duration-300 inline-block opacity-0 group-hover:opacity-100"
        />
      </div>}
    </>
  );
}
