
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    slug: "silicone-mat",
    title: "Silicone Dish Drying Mat",
    category: "Kitchen & Home",
    description:
      "A product listing demonstration focused on clear product presentation, SEO-friendly content, and customer-focused features.",
    image: "/images/silicone-mat.jpg",
  },
  {
    slug: "chenille-mat",
    title: "Chenille Bath Mat",
    category: "Home & Living",
    description:
      "A product presentation demonstration highlighting softness, comfort, product benefits, and lifestyle positioning.",
    image: "/images/chenille-mat.jpg",
  },
  {
    slug: "book-stand",
    title: "Foldable Book Stand",
    category: "Home & Office",
    description:
      "A product listing demonstration showcasing functionality, convenience, and search-friendly product content.",
    image: "/images/book-stand.jpg",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-wide">
            SOHAIB<span className="text-yellow-500">.</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-300 transition hover:text-yellow-400"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">
          <Sparkles size={16} />
          Portfolio Showcase
        </div>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          My <span className="text-yellow-500">Work</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Explore product listing demonstrations created to showcase
          TikTok Shop content, product presentation, and SEO optimization.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition duration-300 hover:-translate-y-2 hover:border-yellow-500/50"
            >
              <Link href={`/work/${project.slug}`} className="block">
                <div className="relative aspect-square overflow-hidden bg-[#1b1b1b]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-yellow-500">
                    {project.category}
                  </p>

                  <div className="mt-3 flex items-start justify-between gap-3">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <ArrowUpRight
                      size={22}
                      className="shrink-0 text-yellow-500 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5 text-sm font-semibold text-yellow-500">
                    View Project →
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Sohaib Khan. TikTok Shop Management Portfolio.
      </footer>
    </main>
  );
}
