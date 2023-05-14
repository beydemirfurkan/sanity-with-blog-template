import { getPosts } from "@/sanity/sanity-utils";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
        <section>
            {/* notice - end */}
            <div className="flex flex-col items-center max-w-xl pt-32 pb-16 mx-auto text-center">
                <h1 className="text-4xl font-bold text-black-800 sm:text-5xl md:mb-6 md:text-6xl dark:text-white pl-10">tüm yazılar ✍🏽</h1>
            </div>
        </section>
        
      <div className="grid grid-cols-1 gap-8 pb-24 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post._id}
            className="post-item"
          >
            <h3 className="mt-0.5 text-lg font-bold text-gray-900 dark:text-gray-100 leading-6">
              {post.name}
            </h3>
            <div className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed h-[70px]">
              <PortableText value={post.content} />
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-emerald-500 hover:text-emerald-600 dark:text-emerald-400"
            >
              devamını gör
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
