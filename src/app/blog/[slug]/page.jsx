import Link from 'next/link';
import { posts } from '@/data/posts';

// --- BAGIAN INI YANG HARUS ADA ---
export async function generateStaticParams() {
  // Next.js butuh array berisi slug agar bisa membuat file HTML statis
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Tambahkan ini agar aman di GitHub Pages
export const dynamicParams = false; 
// ---------------------------------

export default async function BlogDetail({ params }) {
  const { slug } = await params; // Next.js 15+ menggunakan await untuk params
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Artikel tidak ditemukan!</div>;
  }

  return (
    <article className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-6">
        Penulis: {post.author} | {post.date}
      </div>
      <div className="prose lg:prose-xl">
        <p>{post.content}</p>
      </div>
      <div className="mt-10">
        <Link href="/blog" className="text-blue-600 hover:underline">
          &larr; Kembali ke Daftar
        </Link>
      </div>
    </article>
  );
}