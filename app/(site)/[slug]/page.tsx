import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { slug: string}
}

export default async function Page ({params} : Props) {
    const page = await getPage(params.slug);

    return (
        <>
            <h2 className="mt-24 font-extrabold text-6xl">{page.title}</h2>
            <div className="py-14"><PortableText value={page.content}/></div>
        </>
    )
}