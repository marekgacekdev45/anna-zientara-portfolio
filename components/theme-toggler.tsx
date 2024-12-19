'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Sun, Moon } from 'lucide-react'

const ThemeToggler = (props: { className?: string; isScrolled?: boolean }) => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme, resolvedTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<button
			className={`p-2 border border-transparent rounded-lg hover:bg-gray-200 hover:bg-opacity-10 duration-500  ${
				props.className
			} ${props.isScrolled ? 'hover:border-fontDark dark:hover:border-fontLight' : 'hover:border-fontLight'}  `}
			onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
			aria-label='Zmień motyw'>
			{theme === 'dark' || resolvedTheme === 'dark' ? (
				<Sun className='dark:text-fontLight' />
			) : (
				<Moon
					className={`text-fontDark  ${props.isScrolled ? 'text-fontDark dark:text-fontLight' : 'lg:text-fontLight'}`}
				/>
			)}
		</button>
	)
}

export default ThemeToggler