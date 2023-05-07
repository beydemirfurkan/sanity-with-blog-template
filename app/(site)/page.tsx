import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <h2 className="mt-24 font-extrabold text-6xl">Keyifli okumalar...</h2>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project._id}
            className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
          >
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              {project.name}
            </h3>
            <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              <PortableText value={project.content} />
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Devamını gör
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                →
              </span>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
