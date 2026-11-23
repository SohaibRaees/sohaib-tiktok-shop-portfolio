
"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Search,
  ShoppingBag,
  Image as ImageIcon,
  FileText,
  Sparkles,
  Package,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Silicone Dish Drying Mat",
    category: "Kitchen & Home",
    icon: "🍽️",
    title:
      "Large Silicone Dish Drying Mat – Non-Slip Kitchen Counter Mat",
    description:
      "Keep kitchen countertops organized with a flexible silicone drying mat. Designed as a convenient surface for drying dishes, glasses and everyday kitchen accessories.",
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
      "dish drain mat",
      "countertop drying mat",
    ],
    images: [
      "Main product image on white background",
      "Close-up showing silicone texture",
      "Product beside a kitchen sink",
      "Lifestyle kitchen demonstration",
    ],
  },
  {
    number: "02",
    name: "Chenille Bath Mat",
    category: "Bathroom & Home",
    icon: "🛁",
    title:
      "Soft Chenille Bathroom Mat – Plush Bath Rug for Bathroom Floors",
    description:
      "Add a cozy touch to your bathroom with a plush chenille bath mat. Its soft texture creates a comfortable surface underfoot and complements modern bathroom spaces.",
    features: [
      "Soft chenille texture",
      "Comfortable underfoot",
      "Absorbent material",
      "Suitable for bathroom spaces",
      "Practical everyday design",
    ],
    keywords: [
      "chenille bath mat",
      "soft bathroom rug",
      "plush bath mat",
      "bathroom floor mat",
    ],
    images: [
      "Main product image",
      "Close-up of chenille texture",
      "Mat beside a bathtub",
      "Modern bathroom lifestyle scene",
    ],
  },
  {
    number: "03",
    name: "Foldable Book Stand",
    category: "Home & Lifestyle",
    icon: "📚",
    title:
      "Adjustable Foldable Book Stand – Portable Reading Holder",
    description:
      "Create a comfortable reading and study setup with a foldable book stand. Its practical design helps hold books in a convenient position at your desk or study space.",
    features: [
      "Foldable portable design",
      "Adjustable reading position",
      "Suitable for books and study materials",
      "Convenient desktop accessory",
      "Space-saving storage",
    ],
    keywords: [
      "foldable book stand",
      "adjustable book holder",
      "reading stand",
      "study desk accessories",
    ],
    images: [
      "Main product image",
      "Side view showing structure",
      "Book displayed on the stand",
      "Lifestyle study desk scene",
    ],
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="/" className="text-xl font-bold">
            SOHAIB<span className="text-[#D6B36A]">.</span>
            <span className="ml-2 text-xs font-normal tracking-widest text-gray-500">
              KHAN
            </span>
          </a>

          <a
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#D6B36A]"
          >
            <ArrowLeft size={17} />
            Back to Home
          </a>

        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 py-28">

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#D6B36A]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D6B36A]/30 bg-[#D6B36A]/10 px-4 py-2 text-xs tracking-widest text-[#E6C987]">
              <Sparkles size={15} />
              MY PORTFOLIO
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight sm:text-7xl">
              Practical Work.
              <span className="block text-[#D6B36A]">
                Thoughtful Execution.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
              Explore product listing, SEO copywriting and product
              presentation demonstrations created to showcase my
              approach to TikTok Shop management.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-full bg-[#D6B36A] px-7 py-4 font-semibold text-black transition hover:bg-[#edca88]"
              >
                Explore Projects <ArrowUpRight className="ml-2 inline" size={18} />
              </a>

              <a
                href="/#contact"
                className="rounded-full border border-white/20 px-7 py-4 transition hover:border-[#D6B36A] hover:text-[#D6B36A]"
              >
                Contact Me
              </a>

            </div>

          </motion.div>
        </div>
      </section>

      {/* Demonstration Disclosure */}
      <section className="mx-auto max-w-7xl px-6 pt-12">

        <div className="rounded-2xl border border-[#D6B36A]/25 bg-[#D6B36A]/[0.06] p-6">

          <div className="flex items-start gap-4">

            <Sparkles className="mt-1 text-[#D6B36A]" />

            <div>
              <h2 className="font-semibold text-[#E6C987]">
                Demonstration Portfolio
              </h2>

              <p className="mt-2 text-sm leading-7 text-gray-400">
                These are illustrative demonstration projects created
                to showcase product listing and optimization skills.
                They are not represented as completed client projects
                or verified sales results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-14">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#D6B36A]">
            Selected Demonstrations
          </p>

          <h2 className="text-4xl font-semibold sm:text-5xl">
            Product Listing
            <span className="text-[#D6B36A]"> Showcase.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            Three sample projects showing how I approach product
            positioning, search optimization, copywriting and
            visual planning.
          </p>

        </div>

        <div className="space-y-12">

          {projects.map((project, index) => (

            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111]"
            >

              <div className="grid lg:grid-cols-[0.7fr_1.3fr]">

                {/* Product Visual */}
                <div className="flex min-h-[320px] flex-col items-center justify-center bg-gradient-to-br from-[#332819] to-[#111111] p-10">

                  <div className="flex h-36 w-36 items-center justify-center rounded-full border border-[#D6B36A]/30 bg-black/30 text-7xl">
                    {project.icon}
                  </div>

                  <span className="mt-7 rounded-full border border-[#D6B36A]/40 px-4 py-2 text-xs tracking-widest text-[#E6C987]">
                    DEMONSTRATION {project.number}
                  </span>

                  <p className="mt-3 text-sm text-gray-400">
                    {project.category}
                  </p>

                </div>

                {/* Project Details */}
                <div className="p-7 sm:p-10">

                  <div className="flex items-center justify-between gap-3">

                    <span className="text-xs uppercase tracking-widest text-[#D6B36A]">
                      PRODUCT LISTING & SEO
                    </span>

                    <span className="rounded-full bg-white/[0.06] px-3 py-2 text-xs text-gray-400">
                      Sample Project
                    </span>

                  </div>

                  <h3 className="mt-6 text-2xl font-semibold sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* SEO Title */}
                  <div className="mt-8">

                    <h4 className="mb-3 text-sm font-semibold">
                      Example SEO Product Title
                    </h4>

                    <div className="rounded-xl border border-[#D6B36A]/20 bg-black/40 p-4 text-sm leading-7 text-gray-300">
                      {project.title}
                    </div>

                  </div>

                  {/* Features and Keywords */}
                  <div className="mt-8 grid gap-8 sm:grid-cols-2">

                    <div>

                      <h4 className="mb-4 text-sm font-semibold">
                        Key Features
                      </h4>

                      <ul className="space-y-3">

                        {project.features.map((feature) => (

                          <li
                            key={feature}
                            className="flex gap-2 text-xs leading-5 text-gray-400"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D6B36A]" />
                            {feature}
                          </li>

                        ))}

                      </ul>
                    </div>

                    <div>

                      <h4 className="mb-4 text-sm font-semibold">
                        Target Keywords
                      </h4>

                      <div className="flex flex-wrap gap-2">

                        {project.keywords.map((keyword) => (

                          <span
                            key={keyword}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-400"
                          >
                            {keyword}
                          </span>

                        ))}

                      </div>
                    </div>

                  </div>

                  {/* Image Plan */}
                  <div className="mt-8 border-t border-white/10 pt-7">

                    <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold">
                      <ImageIcon className="h-4 w-4 text-[#D6B36A]" />
                      Product Image Planning
                    </h4>

                    <div className="grid grid-cols-2 gap-3">

                      {project.images.map((image, index) => (

                        <div
                          key={image}
                          className="flex gap-2 rounded-xl bg-white/[0.04] p-3 text-xs leading-5 text-gray-400"
                        >
                          <span className="text-[#D6B36A]">
                            0{index + 1}
                          </span>
                          {image}
                        </div>

                      ))}

                    </div>
                  </div>

                </div>
              </div>

            </motion.article>

          ))}

        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-white/10 bg-[#0e0e0e] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">

            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D6B36A]">
              My Approach
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl">
              What Goes Into Every
              <span className="text-[#D6B36A]"> Listing?</span>
            </h2>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Search,
                title: "Keyword Research",
                description: "Identify relevant product search phrases.",
              },
              {
                icon: FileText,
                title: "Copywriting",
                description: "Create clear and benefit-focused product content.",
              },
              {
                icon: ShoppingBag,
                title: "Listing Structure",
                description: "Organize titles, features and specifications.",
              },
              {
                icon: ImageIcon,
                title: "Visual Planning",
                description: "Plan professional product image concepts.",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#141414] p-7"
                >

                  <Icon className="mb-7 h-8 w-8 text-[#D6B36A]" />

                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>

                </div>

              );

            })}

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-28 text-center">

        <Package className="mx-auto mb-6 h-10 w-10 text-[#D6B36A]" />

        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#D6B36A]">
          Have a Product in Mind?
        </p>

        <h2 className="mx-auto max-w-3xl text-4xl font-semibold sm:text-5xl">
          Let's Create a Better
          <span className="block text-[#D6B36A]">
            Product Listing.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-gray-400">
          Tell me about your products and your TikTok Shop goals.
          Let's discuss how I can support your business.
        </p>

        <a
          href="mailto:sohaibkhan.edu@gmail.com?subject=TikTok%20Shop%20Project%20Inquiry"
          className="mt-9 inline-flex items-center rounded-full bg-[#D6B36A] px-8 py-4 font-semibold text-black transition hover:bg-[#edca88]"
        >
          Discuss a Project
          <ArrowUpRight className="ml-3 h-5 w-5" />
        </a>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">

          <a href="/" className="font-bold">
            SOHAIB<span className="text-[#D6B36A]">.</span> KHAN
          </a>

          <p className="text-xs text-gray-500">
            © 2026 Sohaib Khan. All rights reserved.
         </p>

          <a href="/" className="text-sm text-gray-400 hover:text-[#D6B36A]">
            Back to Home
          </a>

        </div>

      </footer>

    </main>
  );
}
