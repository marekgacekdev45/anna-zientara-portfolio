
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const BaseLink = (props: { href: string; children: React.ReactNode; className?: string, noArrow?: boolean,small?:boolean }) => {
	const linkHover = `relative w-fit  after:block after:content-[''] after:absolute after:bottom-0 after:h-[.5px]  after:w-[75%] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:bg-fontDark dark:after:bg-fontLight`

	return (
		<Link
			href={props.href}
			className={`${props.className} ${props.small ? "text-base" : "text-xl "} uppercase flex items-center gap-2 group font-normal   ${linkHover}  `}>
			{props.children} {!props.noArrow ? <ArrowRight strokeWidth={1} className={`w-4 group-hover:translate-x-2 duration-300 `} /> : ''}
		</Link>
	)
}

export default BaseLink