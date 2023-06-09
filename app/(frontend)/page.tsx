/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Suspense} from "react";

export default async function Home() {
  return (
    <>
      <section>
              <div className="flex flex-col items-center max-w-xl pt-8 pb-16 mx-auto text-center lg:pt-32 lg:pb-32">
                  <div>
                      <img className="w-32 h-32 rounded-full mx-auto object-cover" height={32} width={32} src="/furkan_beydemir.jpg" alt={"furkan beydemir"} />
                  </div>
                  <p className='my-6 flex gap-2.5 rounded-lg border border-emerald-500/20 bg-emerald-50/50 px-4 py-2 leading-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200'>frontend developer</p>
                  <h1 className="mb-8 text-4xl font-bold text-black-800 sm:text-5xl md:mb-6 md:text-6xl dark:text-white">selam ben furkan!</h1>
                  <p className="mb-8 leading-relaxed text-gray-500 md:mb-12  xl:text-lg dark:text-gray-300">günlük hayatta karşılaştığım problemleri ve araştırmalarım sonucu edindiğim bilgileri bulabileceğiniz ufak çaplı bir blog :)</p>
                  <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                      <Link href={"/blog"} className="button-dark">Okumaya Başla</Link>
                      <Link href={"/contact"} className="button-light">İletişim</Link>
                  </div>
              </div>
      </section>
        
    </>
  );
}
