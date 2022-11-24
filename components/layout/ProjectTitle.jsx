import Link from "next/link";

export default function ProjectTitle({href, children, handle, remove}) {

    return <><Link onMouseEnter={handle}  href={href}><h1 onMouseLeave={remove}>{children}</h1></Link>
    </>
}
