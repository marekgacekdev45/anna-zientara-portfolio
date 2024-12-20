import Image from 'next/image';
import Link from 'next/link';
import img from '@/public/work.webp';

interface Project {
  id: string;
  title: string;
  description: string;
  slug?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, description, slug } = project;

  return (
    <Link
      href={`/portfolio/${slug || ''}`}
      className="flex flex-col gap-4 justify-center items-center w-full sm:w-[90%] md:w-[80%] lg:w-[45%] xl:w-[48%]"
    >
      <div className="overflow-hidden">
        <Image
          src={img}
          alt={title}
          className="aspect-[5/4] object-cover shadow-md hover:scale-105 duration-200"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-3 px-6">
        <h3 className="text-3xl uppercase font-heading font-medium">{title}</h3>
        <p className="italic">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
