
import Link from 'next/link'
import Image from 'next/image'


import BaseLink from '@/components/base-link'
import { socials } from '@/app/utils/socials'

import ContactImage from '@/public/kontakt.webp'




const contactList = [
    {
        title: 'Telefon',
        content: '+48 500 499 600',
        link:"tel:+48500499600"
    },
    {
        title: 'Email',
        content: 'anna@ebene.com.pl',
        link:"mailto:anna@ebene.com.pl"
    },
    // {
    //     title: 'Adres',
    //     content: 'testowa 123, 34-400 Test',
    //     link:"#"
        
    // },
]

const Contact = () => {
	return (
		<section id='kontakt' className='section pt-12 sm:pt-24 pb-24'>
			<div className='wrapper grid lg:grid-cols-2 gap-20 '>
				<div className='flex flex-col  items-start gap-12 lg:gap-12 '>
					<div className='space-y-5'>
						<h2 className='heading'>Kontakt</h2>
					</div>
					{/* CONTAINER */}
					<div className='space-y-6'>
					
                    {contactList.map((item) => (
                        <div key={item.title} className='flex flex-col gap-2'>
                            <h3 className='text-3xl'>{item.title}</h3>
                            <BaseLink noArrow href={item.link} className='lowercase leading-relaxed  text-lg after:bg-black dark:after:bg-white'>
                                {item.content}
                            </BaseLink>
                        </div>
                    ))}
						{/* socials */}
						<div className='flex flex-col gap-3'>
							<h3 className='text-3xl'>Social Media</h3>
							<ul className='flex gap-4'>
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

				<div className='flex justify-start items-center'>
				<Image
						src={ContactImage}
						alt='wizualizacja wystroju wnętrza wykonana przez Anna Zientara'
						
						placeholder='blur'
						className=' aspect-square w-full object-cover'
						
						width={600}
						height={600}
						quality={90}
					/>
				</div>
			</div>
		</section>
	)
}

export default Contact