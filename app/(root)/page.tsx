import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import Process from '@/components/home/process'
import Portfolio from '@/components/home/portfolio'
import Contact from '@/components/home/contact'

export const revalidate = 60

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Process/>
			<Portfolio/>
			<Contact/>
		</>
	)
}

export default Home
