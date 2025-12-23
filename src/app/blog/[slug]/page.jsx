import Link from 'next/link';
import { posts } from '@/data/posts';

// 1. FUNGSI KRUSIAL: Memberitahu Next.js daftar halaman yang harus dibuat secara statis
export async function generateStaticParams() {
  // Kita melakukan mapping dari array 'posts' untuk mengambil semua 'slug'
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. OPTIONAL: Memastikan jika slug tidak ada di data, langsung tampilkan 404 (penting untuk static export)
export const dynamicParams = false;

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto mt-8 p-4 text-center">
        <h1 className="text-2xl font-bold">Artikel tidak ditemukan!</h1>
        <Link href="/blog" className="text-blue-600 hover:underline mt-4 block">
          Kembali ke Daftar
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      
      <div className="text-sm text-gray-500 mb-6 border-b pb-4">
        <span className="font-semibold text-gray-900">
          Penulis: {post.author}
        </span>
        <span className="mx-2">|</span>
        <span>
          Tanggal: {post.date}
        </span>
      </div>

      <div className="prose lg:prose-xl text-lg leading-relaxed mb-8">
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