import Link from 'next/link'
import Image from 'next/image'

import { socials } from '@/app/utils/socials'

import mmLight from '@/public/icons/mm--light.svg'
import mmDark from '@/public/icons/mm--dark.svg'
import BaseLink from '@/components/base-link'

import FooterCurrentYear from '@/components/footer-current-year'

const Footer = () => {
	// const currentYear = new Date().getFullYear()

	return (
		<footer className='bg-white dark:bg-black'>
			{/* CONTAINER */}
			<div className='max-w-screen-xl mx-auto pt-20  pb-10 space-y-6 md:space-y-12 px-12 lg:px-6 2xl:px-0'>
				{/* TOP */}
				<div className='flex flex-col md:flex-row w-full justify-between lg:justify-evenly items-start  pb-6 gap-12 md:gap-0'>
					{/* logo */}
					<div className=' flex flex-col text-center  md:text-left items-center  md:items-start gap-2 w-full  md:max-w-[300px]  '>
						<Link href='/' className='text-3xl sm:text-4xl font-semibold'>
							Anna Zientara
						</Link>
						<p className='text'>Architektura wnętrz z pasją i zaangażowaniem</p>
					</div>

					<div className='w-full md:w-1/2 lg:w-1/3 flex flex-col sm:flex-row gap-6 justify-end items-start'>
						<div className='flex flex-col space-y-3 mx-auto  w-full items-center md:items-start'>
							<h2 className='text-xl font-heading  uppercase '>Kontakt</h2>
							<ul className='space-y-3'>
								<li>
									<BaseLink href='#' noArrow small className='after:bg-white dark:after-bg-black'>
										+48 123 456 789
									</BaseLink>
								</li>
								<li>
									<BaseLink href='#' noArrow small className='after:bg-white dark:after-bg-black'>
										test@gmail.com
									</BaseLink>
								</li>
							</ul>
						</div>
						{/* socials */}
						<div className=' flex flex-col space-y-3 mx-auto  w-full items-center md:items-end'>
							<div className='flex flex-col gap-3'>
								<h2 className='text-xl font-heading  uppercase '>Social Media</h2>
								<ul className='flex justify-center md:justify-start items-start gap-4'>
									{socials.map((social, index) => (
										<li key={index}>
											<Link href={social.href} target='_blank' rel='noreferrer nofollow' aria-label={social.label}>
												{social.icon}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>

				<hr className='border-secondary-400 dark:border-primary-400 w-full ' />
				{/* BOTTOM */}
				<div className='flex flex-col sm:flex-row w-full justify-center items-center sm:justify-between gap-6'>
					<BaseLink href='/polityka-prywatnosci' noArrow small className='after:bg-white dark:after-bg-black'>
						Polityka Prywatności
					</BaseLink>

					<p className='text !text-sm'>
						<FooterCurrentYear/> Anna Zientara
					</p>
					<Link href='https://marketingmix.pl' target="_blank" rel='noreferrer nofollow' className='hover:scale-105 duration-300' aria-label='marketingmix.pl'>
						<Image src={mmLight} alt='MarketingMix' width={134} height={22}  className='hidden dark:block w-36' />
						<Image src={mmDark} alt='MarketingMix' width={134} height={22} className='block dark:hidden w-36' />
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
