import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { CRESARD_URL } from "@/lib/site";
import { Container } from "./ui";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/#faq", label: "FAQ" },
  { href: "/download", label: "Download" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-slate-950 text-white">
        <Container className="flex items-center justify-center gap-2.5 py-1.5 sm:justify-start">
          <a
            href={CRESARD_URL}
            className="flex items-center gap-2.5 text-xs font-medium text-white hover:text-orange-200 sm:text-sm"
          >
            <Image
              src="/brand/cresard-logo.png"
              alt="Cresard"
              width={1200}
              height={260}
              className="h-4 w-auto brightness-0 invert sm:h-5"
            />
            <span>A product of Cresard Software Services</span>
          </a>
        </Container>
      </div>
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <Container className="flex h-16 items-center justify-between gap-4">
          <Link href="/" aria-label="Cheetah PC home" className="shrink-0">
            <Image
              src="/brand/cheetah-logo.png"
              alt="Cheetah PC"
              width={1086}
              height={362}
              priority
              className="h-14 w-auto"
            />
          </Link>
          <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-semibold text-slate-900 lg:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-orange-800">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/download"
              className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800"
            >
              Download
            </Link>
            <details className="relative lg:hidden">
              <summary
                aria-label="Open menu"
                className="grid size-10 cursor-pointer place-items-center rounded-lg border border-slate-300 text-slate-950"
              >
                <Menu className="size-5" aria-hidden />
              </summary>
              <nav
                aria-label="Mobile"
                className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
              >
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-100"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </Container>
      </div>
    </header>
  );
}
