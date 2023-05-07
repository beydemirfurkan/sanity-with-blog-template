import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react"
import Image from "next/image";
import Link from "next/link";
import { BsCalendar2Date } from "react-icons/bs";

type Props = {
    params: { post: string }
};


export default async function Post({ params } : Props) {

    const slug = params.post
    const post = await getPost(slug)

  return (
      <>
          <div className="mx-auto max-w-8xl">
              <div className="flex px-4 pt-8 lg:px-8">
                  <Link className="flex text-sm font-semibold leading-6 group text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-emerald-300" href="/">
                      <svg viewBox="0 -9 3 24" className="w-auto h-6 mr-3 overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-600">
                          <path d="M3 0L0 3L3 6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>Go back</Link>
              </div>
          </div>
          <div className="max-w-4xl mx-auto my-24">
              <dd className="inset-x-0 flex items-center gap-2 mb-3 text-slate-700 dark:text-gray-300"><BsCalendar2Date/> <time dateTime="2022-01-24T19:00:00.000Z"> Monday, January 24, 2022</time></dd>
              <h1 className="inline-block text-2xl font-extrabold tracking-tight sm:text-3xl text-slate-900 dark:text-slate-200">{post.name}</h1>

              {/* image goes here */}
              {post.image && (
                  <Image
                      src={post.image}
                      alt={post.name}
                      width={1920}
                      height={1080}
                      className="object-cover mt-10 border-2 border-gray-700 rounded-xl" />
              )}
              {/* content goes here */}
              <div className="py-12 text-md leading-8 text-[#334155] mx-auto blog-content"><PortableText value={post.content}/></div>

          </div>
      </>

  )
}
