import Image from 'next/image';
import Link from 'next/link';
import img from '@/public/work.webp';
import { Project } from '@/sanity/lib/interface'
import { urlFor } from '@/sanity/lib/image';




const ProjectCard = ({ project }: { project: Project }) => {
  const { title, shortDescription, slug,thumbnail } = project;

  return (
    <Link
      href={`/portfolio/${slug.current}`}
      className="flex flex-col gap-4 justify-center items-center w-full sm:w-[90%] md:w-[80%] lg:w-[45%] xl:w-[48%]"
    >
      <div className="overflow-hidden">
        <Image
          src={urlFor(thumbnail).url()}
          alt={title}
          className="aspect-[5/4] w-full object-cover shadow-md hover:scale-105 duration-200"
          width={700}
          height={560}
          quality={70}
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-3 px-6">
        <h3 className="text-3xl uppercase font-heading font-medium">{title}</h3>
        <p className="italic">{shortDescription}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
