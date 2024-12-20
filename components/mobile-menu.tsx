'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import { navLinks } from '@/components/navbar'
import ThemeToggler from './theme-toggler'

export default function MobileMenu() {
	const [open, setOpen] = useState(false)

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<button aria-label='Menu'>
					<Menu strokeWidth={.5} className='size-8' />
				</button>
			</SheetTrigger>
			<SheetContent side='right' className='w-full sm:max-w-none h-screen flex flex-col justify-around items-center'>
				<SheetHeader>
					<SheetTitle >
                    <Link
							href='/'
							className={` text-3xl sm:text-4xl font-semibold font-heading `}>
							Anna Zientara
						</Link>
					</SheetTitle>
				</SheetHeader>
				<nav className='mt-8 '>
					<ul className='space-y-4 text-center'>
						{navLinks.map(item => (
							<li key={item.href}>
								<Link
									href={item.href}
									className='block py-2 text-lg font-light transition-colors hover:text-primary'
									onClick={() => setOpen(false)}>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className='flex gap-6 justify-center items-center'>
                    <Link href='/' aria-label='Facebook'>
                    <Facebook strokeWidth={1}/>
                    </Link>
                    <Link href='/' aria-label='Instagram'>
                    <Instagram strokeWidth={1}/>
                    </Link>
                </div>

<div className='absolute left-1 top-1.5'>

                <ThemeToggler mobile/>
</div>
			</SheetContent>
		</Sheet>
	)
}
