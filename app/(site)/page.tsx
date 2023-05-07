import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
        <section>
            {/* notice - end */}
            <div className="flex max-w-xl flex-col items-center pt-8 pb-0 text-center sm:pb-16 mx-auto lg:pt-32 lg:pb-32">
                <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p>
                <h1 className="text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">Revolutionary way to build the web</h1>
                <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>
                <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                    <Link href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Okumaya Başla</Link>
                    <Link href="#" className="inline-block rounded-lg border bg-white px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">İletişim</Link>
                </div>
            </div>
        </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
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
