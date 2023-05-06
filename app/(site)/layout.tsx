import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beydemir.dev",
  description: "Beydemir.dev - Kişisel Blog Sayfası",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pages = await getPages();

  return (
    <html lang="en" className="min-h-screen bg-gradient-to-b from-indigo-100 to-slate-50 ">
      <body className={inter.className}>
        <div className="max-w-7xl px-6 md:px-8 w-full mx-auto">
          <header>
            <nav
              aria-label="Site Nav"
              className="mx-auto flex items-center justify-between p-4"
            >
              <Link
                href="/"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
              >
                <span className="sr-only">Logo</span>
                👋
              </Link>
              <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
                {pages.map((page) => (
                  <li key={page._id}>
                    <Link href={`/${page.slug}`}>{page.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
