const Timeline = (props: { children: React.ReactNode }) => {
	return (
		<ol className='relative border-s border-gray-500 '>
			{props.children}
		</ol>
	)
}

export default Timeline