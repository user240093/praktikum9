import Link from 'next/link';
import { posts } from '@/data/posts';

// 1. FUNGSI WAJIB: Memberitahu rute mana saja yang harus dibuatkan file HTML statis
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Mematikan rute dinamis agar aman di GitHub Pages (Hosting Statis)
export const dynamicParams = false;

// 3. Tambahkan 'async' pada fungsi utama
export default async function BlogDetail({ params }) {
  // 4. WAJIB: Gunakan await untuk mengambil params di Next.js 15/16
  const { slug } = await params; 
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Artikel tidak ditemukan!</h1>
        <Link href="/blog" className="text-blue-500 underline">Kembali</Link>
      </div>
    );
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