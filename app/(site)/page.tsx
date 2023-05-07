import { getPosts } from "@/sanity/sanity-utils";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
        <section>
            {/* notice - end */}
            <div className="flex flex-col items-center max-w-xl pt-8 pb-16 mx-auto text-center lg:pt-32 lg:pb-32">
                <p className='my-6 flex gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 leading-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200 dark:[--tw-prose-links-hover:theme(colors.emerald.300)] dark:[--tw-prose-links:theme(colors.white)]'>@furkanbeydemir | frontend-developer</p>
                <h1 className="mb-8 text-4xl font-bold text-black-800 sm:text-5xl md:mb-6 md:text-6xl dark:text-white">selam ben furkan!</h1>
                <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 xl:text-lg dark:text-gray-300">günlük hayatta karşılaştığım problemleri ve araştırmalarım sonucu edindiğim bilgileri bulabileceğiniz ufak çaplı bir blog :)</p>
                <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                    <Link href="/blog" className="button-dark">Okumaya Başla</Link>
                    <Link href="/contact" className="button-light">İletişim</Link>
                </div>
            </div>
        </section>
        
      <div className="grid grid-cols-1 gap-8 pb-24 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post._id}
            className="post-item"
          >
            <h3 className="mt-0.5 text-lg font-bold text-gray-900 dark:text-gray-100">
              {post.name}
            </h3>
            <div className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed">
              <PortableText value={post.content} />
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-emerald-500 hover:text-emerald-600 dark:text-emerald-400"
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
