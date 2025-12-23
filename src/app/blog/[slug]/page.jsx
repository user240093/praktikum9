// src/app/blog/[slug]/page.jsx
import Link from 'next/link';
import { posts } from '@/data/posts'; // Memanggil data posts kamu

// FUNGSI WAJIB UNTUK STATIC EXPORT
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Menangani halaman yang tidak terdaftar di data posts
export const dynamicParams = false;

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div>Artikel tidak ditemukan!</div>;

  return (
    <article className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="prose">
        <p>{post.content}</p>
      </div>
      <Link href="/blog" className="text-blue-600 block mt-8">
        &larr; Kembali ke Daftar
      </Link>
    </article>
  );
}