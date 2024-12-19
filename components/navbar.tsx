'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

import NavLink from '@/components/nav-link'
import ThemeToggler from '@/components/theme-toggler'
import MobileMenu from './mobile-menu'

export const navLinks = [
	{ href: '/#o-mnie', label: 'O mnie' },
	{ href: '/proces-projektowy', label: 'Proces projektowy' },
	{ href: '/portfolio', label: 'Portfolio' },
	{ href: '/#kontakt', label: 'Kontakt' },
]

const Navbar = () => {
	const [isOpen, setOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	const handleLinkClick = () => {
		setOpen(false)
	}

	useEffect(() => {
		const checkPosition = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		checkPosition()

		window.addEventListener('scroll', checkPosition)

		return () => {
			window.removeEventListener('scroll', checkPosition)
		}
	}, [])

	return (
		<>
			<nav
				className={`fixed top-0 left-0 right-0 text-fontLight transition-all z-50 ${
					isScrolled ? 'bg-primary-600 dark:bg-secondary-400 shadow-2xl shadow-gray-500 dark:shadow-gray-800' : ''
				}`}>
				{/* CONTAINER */}
				<div
					className={`max-w-[1800px] mx-auto flex justify-between items-center px-4 py-3 lg:py-5 border-b ${
						!isScrolled ? 'border-primary-400' : 'border-primary-600 dark:border-secondary-400'
					}`}>
					{/* links */}
					<div className='flex'>
						<Link
							href='/'
							className={`mr-12 text-3xl sm:text-4xl font-semibold ${
								isScrolled ? 'text-fontDark dark:text-fontLight' : ''
							}`}>
							Anna Zientara
						</Link>

						<ul className='hidden lg:flex justify-center items-center gap-8'>
							{navLinks.map((link, index) => (
								<NavLink key={index} link={link} isScrolled={isScrolled} />
							))}
						</ul>
					</div>

					{/* themeToggler & mobileMenu */}
					<ThemeToggler
						className={`hidden lg:block ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
						isScrolled={isScrolled}
					/>
					<div className='flex justify-center items-center lg:hidden'>
						<MobileMenu />
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
