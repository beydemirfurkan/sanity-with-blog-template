import { createClient, groq } from "next-sanity";
import { Blog } from "@/types/Blog";
import clientConfig from './config/client-config'

export async function getPosts(): Promise<Blog[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
    )
}

export async function getPost(slug: string): Promise<Blog> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
        { slug }
    )
}

