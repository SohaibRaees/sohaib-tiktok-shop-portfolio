
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Store,
  Search,
  Image,
  Users,
  BarChart3,
  CheckCircle2,
  Mail,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Store,
    title: "TikTok Shop Management",
    description:
      "Support with shop setup, product management, daily operations and store organization.",
  },
  {
    icon: Search,
    title: "Product Listing & SEO",
    description:
      "Keyword-focused product titles, descriptions, features and listing optimization.",
  },
  {
    icon: Image,
    title: "Product Content & Images",
    description:
      "Product image concepts and content presentation designed to communicate product value.",
  },
  {
    icon: Users,
    title: "Affiliate & Creator Outreach",
    description:
      "Support with creator discovery, affiliate collaboration and outreach strategies.",
  },
  {
    icon: BarChart3,
    title: "Ads & Performance Reporting",
    description:
      "Campaign support, store performance monitoring and reporting.",
  },
  {
    icon: ShoppingBag,
    title: "Product Research",
    description:
      "Product and competitor research to identify listing and store improvement opportunities.",
  },
];

const process = [
  ["01", "Discovery", "Understand your products, business goals and current store situation."],
  ["02", "Strategy", "Identify priorities for listings, content and shop operations."],
  ["03", "Execution", "Work on agreed tasks and manage the selected TikTok Shop activities."],
  ["04", "Review", "Monitor progress, share reports and identify improvements."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-wide">
            SOHAIB<span className="text-[#D6B36A]">.</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#about" className="hover:text-[#D6B36A]">About</a>
            <a href="#services" className="hover:text-[#D6B36A]">Services</a>
            <Link href="/work" className="hover:text-[#D6B36A]">My Work</Link>
            <a href="#process" className="hover:text-[#D6B36A]">My Process</a>
            <a href="#contact" className="hover:text-[#D6B36A]">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-[#D6B36A] px-5 py-2.5 text-sm font-semibold text-[#D6B36A] transition hover:bg-[#D6B36A] hover:text-black"
          >
            Let's Talk
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#D6B36A]/10 blur-[120px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-28 md:grid-cols-2 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D6B36A]/30 bg-[#D6B36A]/5 px-4 py-2 text-xs tracking-widest text-[#E6C987]">
              <Sparkles size={14} />
              TIKTOK SHOP MANAGEMENT
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Helping Brands
              <br />
              Build Their
              <br />
              <span className="text-[#D6B36A]">TikTok Shop.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              I help e-commerce brands and online sellers with TikTok Shop
              operations, product listings, SEO optimization and store
              management.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#D6B36A] px-7 py-4 font-semibold text-black transition hover:bg-[#E6C987]"
              >
                Work With Me <ArrowUpRight size={18} />
              </a>
              <Link
                href="/work"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-[#D6B36A] hover:text-[#D6B36A]"
              >
                Explore My Work <ArrowRight size={18} />
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Product listing demonstrations · E-commerce support · TikTok Shop
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl border border-[#D6B36A]/30 bg-gradient-to-br from-[#211b10] via-[#111111] to-[#090909] p-8 shadow-2xl shadow-[#D6B36A]/5 md:p-12">
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm tracking-widest text-[#D6B36A]">MY FOCUS</span>
                <ShoppingBag className="text-[#D6B36A]" size={25} />
              </div>
              <div className="space-y-7">
                {[
                  "Product listing optimization",
                  "TikTok Shop operations",
                  "SEO titles & descriptions",
                  "Affiliate creator outreach",
                  "Store performance reporting",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 border-b border-white/10 pb-5">
                    <CheckCircle2 className="shrink-0 text-[#D6B36A]" size={20} />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-9 text-sm leading-6 text-gray-500">
                Practical support focused on better product presentation and
                organized shop operations.
              </p>
            </div>
            <div className="absolute -bottom-5 -left-4 -z-10 h-full w-full rounded-3xl border border-[#D6B36A]/20" />
          </motion.div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-[#0e0e0e]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-[#D6B36A]">ABOUT ME</p>
          <div className="grid gap-10 md:grid-cols-2">
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Practical e-commerce support for
              <span className="text-[#D6B36A]"> growing businesses.</span>
            </h2>
            <div className="space-y-5 leading-8 text-gray-400">
              <p>
                I'm Sohaib Khan, a TikTok Shop service provider focused on
                helping brands and sellers organize and improve their
                e-commerce operations.
              </p>
              <p>
                My practical work includes product listing creation, SEO
                titles and descriptions, product features, specifications
                and product image concepts.
              </p>
              <p>
                I aim to help businesses improve product presentation,
                streamline store activities and build a consistent approach
                to TikTok Shop management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-[#D6B36A]">WHAT I OFFER</p>
          <h2 className="text-4xl font-bold md:text-5xl">My Services</h2>
          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            Flexible TikTok Shop support for e-commerce brands and individual
            sellers, based on their business needs.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="rounded-2xl border border-white/10 bg-[#101010] p-7 transition hover:-translate-y-1 hover:border-[#D6B36A]/50"
              >
                <Icon className="mb-7 text-[#D6B36A]" size={30} />
                <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
                <p className="text-sm leading-7 text-gray-400">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0e0e0e]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-[#D6B36A]">PORTFOLIO</p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Work that demonstrates
              <span className="text-[#D6B36A]"> my approach.</span>
            </h2>
            <p className="mt-6 leading-8 text-gray-400">
              Explore product listing and presentation demonstrations
              covering different product categories and e-commerce needs.
            </p>
            <Link
              href="/work"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D6B36A] px-7 py-4 font-semibold text-black hover:bg-[#E6C987]"
            >
              View My Work <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="rounded-3xl border border-[#D6B36A]/30 bg-[#15120d] p-9">
            <ShoppingBag className="mb-7 text-[#D6B36A]" size={36} />
            <p className="text-3xl font-bold">Product</p>
            <p className="text-3xl font-bold text-[#D6B36A]">Listing</p>
            <p className="mt-2 text-3xl font-bold">Demonstrations</p>
            <p className="mt-7 text-sm leading-7 text-gray-400">
              Practical examples of product titles, descriptions, features
              and visual presentation. These are portfolio demonstrations,
              not client case studies or verified sales results.
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-[#D6B36A]">HOW I WORK</p>
        <h2 className="mb-14 text-4xl font-bold md:text-5xl">A clear working process.</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {process.map(([number, title, description]) => (
            <div key={number} className="border-t border-[#D6B36A]/50 pt-6">
              <p className="mb-6 text-3xl font-bold text-[#D6B36A]">{number}</p>
              <h3 className="mb-3 text-xl font-semibold">{title}</h3>
              <p className="text-sm leading-7 text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#0e0e0e]">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="mb-5 text-sm font-semibold tracking-[0.25em] text-[#D6B36A]">LET'S CONNECT</p>
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Ready to improve your
            <span className="text-[#D6B36A]"> TikTok Shop?</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl leading-8 text-gray-400">
            Let's discuss your products, store requirements and how I can
            support your e-commerce operations.
          </p>
          <a
            href="mailto:sohaibkhan.edu@gmail.com?subject=TikTok%20Shop%20Services%20Inquiry"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D6B36A] px-8 py-4 font-semibold text-black hover:bg-[#E6C987]"
          >
            <Mail size={18} /> Contact Me
          </a>
          <p className="mt-5 text-sm text-gray-500">sohaibkhan.edu@gmail.com</p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© 2026 Sohaib Khan. All rights reserved.</p>
          <p>TikTok Shop Management & E-commerce Support</p>
        </div>
      </footer>
    </main>
  );
}
