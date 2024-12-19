import Link from 'next/link'

import { usePathname } from 'next/navigation'

const NavLink = (props: {
	link: { href: string; label: string }
	onClick?: () => void
	isScrolled?: boolean
	mobile?: boolean
}) => {
	const linkHover = `relative w-fit block after:block after:content-[''] after:absolute after:h-[1px]  after:w-[75%] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
		props.isScrolled ? ' after:bg-secondary-400 dark:after:bg-primary-400 ' : 'after:bg-primary-400 '
	}
		${props.mobile ? ' after:bg-fontDark dark:after:bg-fontLight' : ''} `

	const actionLink = `relative w-fit block after:block after:content-[''] after:absolute after:h-[1px]  after:w-[75%]  after:scale-x-100 after:transition after:duration-300 after:origin-left`

	const pathname = usePathname()

	return (
		<li>
			<Link
				onClick={props.onClick}
				href={props.link.href}
				className={`text-2xl lg:text-base uppercase 
					${props.isScrolled ? ' text-fontDark dark:text-fontLight' : ''} 
					${props.mobile ? ' text-fontDark dark:text-fontLight' : ''} 
					${linkHover} ${pathname === props.link.href ? actionLink : ''}`}>
				{props.link.label}
			</Link>
		</li>
	)
}

export default NavLink