import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react"
import Image from "next/image";

type Props = {
    params: { project: string }
};


export default async function Project({ params } : Props) {

    const slug = params.project
    const project = await getProject(slug)

  return (
    <div className="my-24 max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-slate-900">{project.name}</h1>
        <a href=""></a>
        {/* content goes here */}
        
        <div className="py-12 text-lg leading-8 text-gray-600"><PortableText value={project.content}/></div>

        {/* image goes here */}

        {project.image && (
            <Image 
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
        )}

    </div>
  )
}
