import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import BaseLink from '@/components/base-link'

const NotFound = () => {
	return (
		<div className='flex flex-col  justify-between h-screen'>
			<Navbar />
			<main className='flex flex-col items-center justify-center h-full space-y-12 text-center my-32'>
				<h1 className='heading'>Nie ma takiej strony</h1>
				<h2 className='preheading'>404</h2>
				<BaseLink href='/'>Wróć do strony głównej</BaseLink>
			</main>
			<Footer />
		</div>
	)
}

export default NotFound
