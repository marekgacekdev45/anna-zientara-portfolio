'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

import logoLight from '@/public/logo--light.png'
import logoDark from '@/public/logo--dark.png'

import NavLink from '@/components/nav-link'
import ThemeToggler from '@/components/theme-toggler'
import MobileMenu from './mobile-menu'
import Image from 'next/image'

export const navLinks = [
	{ href: '/#o-mnie', label: 'O mnie' },
	{ href: '/proces-projektowy', label: 'Proces projektowy' },
	{ href: '/portfolio', label: 'Portfolio' },
	{ href: '/#kontakt', label: 'Kontakt' },
]

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false)

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
			<header
				className={`fixed top-0 left-0 right-0 text-primary--light transition-all z-50  ${
					isScrolled ? 'bg-white dark:bg-black shadow-md  text-colors' : ''
				}`}>
				{/* CONTAINER */}
				<div
					className={`flex justify-between items-center px-4 py-3 lg:py-4 max-w-[1800px] mx-auto ${
						isScrolled ? 'border-none' : ' border-b border-gray-300'
					}`}>
					{/* links */}
					<nav className='flex'>
						<Link
							href='/'
							className={`mr-12 text-3xl sm:text-4xl font-semibold font-heading ${
								isScrolled ? 'text-fontDark dark:text-fontLight' : ''
							}`}>
							{!isScrolled && (
								<Image
									src={logoLight}
									alt='logo Ebene Studio by Anna Zientara'
									width={120}
									height={30}
									quality={100}
									priority
								/>
							)}
							{isScrolled && (
								<>
									<Image
										src={logoLight}
										alt='logo Ebene Studio by Anna Zientara'
										width={120}
										height={50}
										quality={100}
										priority
										className='hidden dark:block'
									/>
									<Image
										src={logoDark}
										alt='logo Ebene Studio by Anna Zientara'
										width={120}
										height={50}
										quality={100}
										priority
										className='block dark:hidden'
									/>
								</>
							)}
						</Link>

						<ul className='hidden lg:flex justify-center items-center gap-8'>
							{navLinks.map((link, index) => (
								<NavLink key={index} link={link} isScrolled={isScrolled} />
							))}
						</ul>
					</nav>

					{/* themeToggler & mobileMenu */}
					<ThemeToggler
						className={`hidden lg:block ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
						isScrolled={isScrolled}
					/>
					<div className='flex justify-center items-center lg:hidden'>
						<MobileMenu />
					</div>
				</div>
			</header>
		</>
	)
}

export default Navbar
