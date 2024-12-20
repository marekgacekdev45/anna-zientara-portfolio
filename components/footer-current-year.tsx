'use client'

const FooterCurrentYear = () => {
	const currentYear = new Date().getFullYear()

	return <span className='text-sm'>© {currentYear}</span>
}

export default FooterCurrentYear
