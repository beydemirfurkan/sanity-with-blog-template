
// import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import DarkModeToggle from "@/components/header/toggleButton";
import Providers from "@/components/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "beydemir.dev",
  description: "beydemir.dev - kişisel blog",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div  className="min-h-screen transition-colors duration-500 bg-white dark:text-slate-400 dark:bg-zinc-900" >
            <header className='sticky top-0  w-full backdrop-blur flex-none transition-colors duration-500 z-50 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent '>
            <nav
                aria-label="Site Nav"
                className="flex items-center justify-between max-w-5xl px-4 py-4 mx-auto border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10"
            >
              <Link
                  href="/"
                  className="inline-flex items-center justify-center font-extrabold text-slate-900 dark:text-white">
                  <span className="sr-only">Logo</span>
                <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={24} height={24} viewBox="0 0 256 256" xmlSpace="preserve">
                  <defs>
                  </defs>
                  <g style={{"stroke":"none","strokeWidth":"0","strokeDasharray":"none","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"10","fill":"none","fillRule":"nonzero","opacity":"1"}} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                    <polygon points="71.43,35.12 50.46,39.15 54.52,0 32.06,46.25 42.64,50.54 35.48,90 " style={{"stroke":"none","strokeWidth":"1","strokeDasharray":"none","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"10","fill":"rgb(124,255,207)","fillRule":"nonzero","opacity":"1"}} transform="  matrix(1 0 0 1 0 0) " />
                    <polygon points="54.52,0 34.48,46.53 48.22,44.15 35.48,90 39.54,50.85 18.57,54.88 " style={{"stroke":"none","strokeWidth":"1","strokeDasharray":"none","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"10","fill":"rgb(75,191,148)","fillRule":"nonzero","opacity":"1"}} transform="  matrix(1 0 0 1 0 0) " />
                  </g>
                </svg> beydemir.dev
              </Link>

              <ul className="flex items-center gap-2 text-sm font-bold sm:gap-5 text-slate-900 dark:text-white">
                <li>
                  <Link className='' href={'/blog'}>blog</Link>
                </li>
                <li>
                  <Link className='hidden sm:block' href='/'>hakkımda</Link>
                </li>
                <li>
                  <Link className='' href={'/contact'}>iletişim</Link>
                </li>
                  <DarkModeToggle />
              </ul>
            </nav>
          </header>
            <main className="w-full max-w-4xl px-6 mx-auto md:px-8">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
