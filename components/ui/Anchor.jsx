import React from 'react'
import Image from 'next/image'
import linkIcon from '/public/assets/icons/link-arrow.svg'
import Link from 'next/link'

export default function Anchor({href, children}) {
  return (

        <Link href={href} className='inline-flex gap-1  md:leading-relaxed leading-loose  underline underline-offset-2 decoration-1   font-normal md:text-2xl text-xl tracking-normal md:tracking-wide group'>{children} <Image className='group-hover:translate-x-1 group-hover:-translate-y-1 ease-out transition-transform duration-300' alt='arrow' width='14' height='14' src={linkIcon} /></Link>

  )
}
