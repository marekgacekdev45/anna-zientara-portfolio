
import Link from 'next/link'
import Image from 'next/image'


import BaseLink from '@/components/base-link'
import { socials } from '@/app/utils/socials'

// import DummyImage from '@/public/assets/kontakt.webp'




const contactList = [
    {
        title: 'Telefon',
        content: '+48 555 444 444',
        link:"tel:+48 555 444 444"
    },
    {
        title: 'Email',
        content: 'test@gmail.com',
        link:"mailto:test@gmail.com"
    },
    {
        title: 'Adres',
        content: 'testowa 123, 34-400 Test',
        link:""
        
    },
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
                            <BaseLink noArrow href={item.link} className='lowercase leading-relaxed  text-lg after:bg-white dark:after-bg-black'>
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
					{/* <Image
						src={DummyImage}
						alt='hero'
						className='aspect-square max-h-[550px] shadow-2xl shadow-gray-700'
						loading='lazy'
					/> */}
				</div>
			</div>
		</section>
	)
}

export default Contact