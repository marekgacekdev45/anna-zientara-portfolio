import Link from 'next/link'
import Image from 'next/image'

import { socials } from '@/app/utils/socials'

import mmLight from '@/public/icons/mm--light.svg'
import mmDark from '@/public/icons/mm--dark.svg'

import logoLight from '@/public/logo--light.png'
import logoDark from '@/public/logo--dark.png'

import BaseLink from '@/components/base-link'

import FooterCurrentYear from '@/components/footer-current-year'

const Footer = () => {
	return (
		<footer className='bg-white dark:bg-black'>
			{/* CONTAINER */}
			<div className='max-w-screen-xl mx-auto pt-20  pb-10 space-y-6 md:space-y-12 px-12 lg:px-6 2xl:px-0'>
				{/* TOP */}
				<div className='flex flex-col md:flex-row w-full justify-between lg:justify-evenly items-start  pb-6 gap-12 md:gap-0'>
					{/* logo */}
					<div className=' flex flex-col text-center  md:text-left items-center  md:items-start gap-2 w-full  md:max-w-[300px]  '>
						<Link href='/' className='text-3xl sm:text-4xl font-semibold'>
							<Image src={logoLight} alt='logo Ebene Studio by Anna Zientara' width={175}height={72} className='hidden dark:block' />
							<Image src={logoDark} alt='logo Ebene Studio by Anna Zientara' width={175} height={72} className='block dark:hidden' />
						</Link>
						<p className='text'>Architektura wnętrz z pasją i zaangażowaniem</p>
					</div>

					<div className='w-full md:w-1/2 lg:w-1/3 flex flex-col sm:flex-row gap-6 justify-end items-start'>
						<div className='flex flex-col space-y-3 mx-auto  w-full items-center md:items-start'>
							<h2 className='text-xl font-heading  uppercase '>Kontakt</h2>
							<ul className='space-y-3'>
								<li>
									<BaseLink href='tel:+48500499600' noArrow small className='after:bg-black dark:after:bg-white'>
										+48 500 499 600
									</BaseLink>
								</li>
								<li>
									<BaseLink
										href='mailto:anna@ebene.com.pl'
										noArrow
										small
										className='after:bg-black dark:after:bg-white'>
										anna@ebene.com.pl
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
					<BaseLink href='/polityka-prywatnosci' noArrow small className='after:bg-black dark:after:bg-white'>
						Polityka Prywatności
					</BaseLink>

					<p className='text !text-sm'>
						<FooterCurrentYear /> Anna Zientara
					</p>
					<Link
						href='https://marketingmix.pl'
						target='_blank'
						rel='noreferrer nofollow'
						className='hover:scale-105 duration-300'
						aria-label='marketingmix.pl'>
						<Image src={mmLight} alt='MarketingMix' width={128} height={20} className='hidden dark:block w-32' />
						<Image src={mmDark} alt='MarketingMix' width={128} height={20} className='block dark:hidden w-32' />
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
