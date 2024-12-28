

const TimelineItem = (props:{title:string,text?:string}) => {

    const {title,text} = props

  return (
    <li className='mb-10 ms-6 space-y-2'>
    <div className='absolute w-4 h-4  rounded-full mt-1.5 -start-2 border border-[#b99e87]  bg-[#b99e87]'></div>

    <h2 className='text-3xl'>{title}</h2>
    {props.title && <p className="text !text-sm">{text}</p>}
</li>
  )
}

export default TimelineItem