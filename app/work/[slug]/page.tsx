
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Search,
  FileText,
  ShoppingBag,
} from "lucide-react";

const projects = {
  "silicone-mat": {
    name: "Silicone Dish Drying Mat",
    category: "Kitchen & Home",
    image: "/images/silicone-mat.jpg",
    title: "Large Silicone Dish Drying Mat – Non-Slip Kitchen Counter Mat",
    description:
      "A practical product listing demonstration for a flexible silicone dish drying mat. The listing focuses on its everyday kitchen use, easy-clean design and functional features.",
    features: [
      "Flexible silicone material",
      "Non-slip surface",
      "Easy-to-clean design",
      "Suitable for kitchen countertops",
      "Multipurpose everyday use",
    ],
    keywords: [
      "silicone dish drying mat",
      "kitchen drying mat",
      "non-slip counter mat",
      "dish drying accessories",
    ],
  },

  "chenille-mat": {
    name: "Chenille Bath Mat",
    category: "Bathroom & Home",
    image: "/images/chenille-mat.jpg",
    title: "Soft Chenille Bath Mat – Comfortable Bathroom Floor Mat",
    description:
      "A product presentation demonstration highlighting the soft chenille texture, comfortable feel and practical bathroom use of a bath mat.",
    features: [
      "Soft chenille texture",
      "Comfortable underfoot feel",
      "Suitable for bathroom floors",
      "Practical everyday design",
      "Home bathroom accessory",
    ],
    keywords: [
      "chenille bath mat",
      "soft bathroom rug",
      "bathroom floor mat",
      "comfortable bath mat",
    ],
  },

  "book-stand": {
    name: "Foldable Book Stand",
    category: "Office & Stationery",
    image: "/images/book-stand.jpg",
    title: "Foldable Book Stand – Adjustable Reading Holder",
    description:
      "A product listing demonstration presenting a foldable book stand with emphasis on convenience, everyday reading and practical organization.",
    features: [
      "Foldable design",
      "Convenient reading support",
      "Suitable for books and documents",
      "Space-saving storage",
      "Useful for study and work",
    ],
    keywords: [
      "foldable book stand",
      "book holder",
      "reading stand",
      "book stand for desk",
    ],
  },
};

type ProjectSlug = keyof typeof projects;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

// Generate the three known project routes.
export function generateStaticParams() {
  return [
    { slug: "silicone-mat" },
    { slug: "chenille-mat" },
    { slug: "book-stand" },
  ];
}

// This component reads the URL parameter inside Suspense.
async function ProjectContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#090909] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold">Project Not Found</h1>

          <Link
            href="/work"
            className="mt-6 inline-flex items-center text-[#D6B36A]"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to My Work
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#D6B36A]"
          >
            <ArrowLeft size={17} />
            Back to My Work
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-semibold tracking-[0.25em] text-[#D6B36A]">
              {project.category.toUpperCase()}
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              {project.name}
            </h1>

            <p className="mt-7 text-lg leading-8 text-gray-400">
              {project.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="mailto:sohaibkhan.edu@gmail.com?subject=TikTok%20Shop%20Services%20Inquiry"
                className="inline-flex items-center gap-2 rounded-full bg-[#D6B36A] px-7 py-4 font-semibold text-black transition hover:bg-[#E6C987]"
              >
                Discuss Your Project
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="mt-8 rounded-xl border border-[#D6B36A]/30 bg-[#D6B36A]/5 p-4 text-sm leading-6 text-[#E6C987]">
              Portfolio demonstration only. This is not a client case study
              or a claim of verified sales performance.
            </div>

            <div className="mt-7 flex items-center gap-2 text-sm text-[#D6B36A]">
              <CheckCircle2 size={18} />
              Practical product demonstration
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#D6B36A]/20 bg-[#151515]">
            <div className="relative aspect-square">
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101010]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <ShoppingBag className="text-[#D6B36A]" size={24} />
              <h2 className="text-2xl font-bold">Product Features</h2>
            </div>

            <ul className="space-y-5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <CheckCircle2
                    className="shrink-0 text-[#D6B36A]"
                    size={18}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <Search className="text-[#D6B36A]" size={24} />
              <h2 className="text-2xl font-bold">SEO Keywords</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3">
              <FileText className="text-[#D6B36A]" size={23} />
              <h3 className="text-xl font-semibold">Listing Approach</h3>
            </div>

            <p className="mt-4 leading-7 text-gray-400">
              Focus on clear product information, relevant search phrases,
              useful features and customer-friendly product presentation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-[#D6B36A]">
          LET'S WORK TOGETHER
        </p>

        <h2 className="text-3xl font-bold md:text-5xl">
          Need help with your
          <span className="text-[#D6B36A]"> TikTok Shop?</span>
        </h2>

        <p className="mt-6 leading-7 text-gray-400">
          Let's discuss your products and the support your business needs.
        </p>

        <a
          href="mailto:sohaibkhan.edu@gmail.com?subject=TikTok%20Shop%20Services%20Inquiry"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D6B36A] px-7 py-4 font-semibold text-black transition hover:bg-[#E6C987]"
        >
          Contact Me
          <ArrowUpRight size={18} />
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Sohaib Khan. All rights reserved.
      </footer>
    </main>
  );
}

// The page itself does not read URL data outside Suspense.
export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#090909] text-[#D6B36A]">
          Loading project...
        </main>
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  );
}
