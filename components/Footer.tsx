import Image from "next/image";
import Link from "next/link";
import { CONTACT_URL, CRESARD_URL, FULL_TERMS_URL, RELEASES_URL } from "@/lib/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <Container className="relative z-10 pt-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/cheetah-icon.png"
              alt="Cheetah PC"
              width={512}
              height={512}
              className="size-14"
            />
            <p className="mt-4 max-w-sm text-slate-100">
              Cheetah PC shows the real health of your own Windows PC, in plain language, from your own
              machine.
            </p>
            <a
              href={CRESARD_URL}
              className="mt-6 inline-flex items-center gap-3 rounded-lg border border-white/25 px-4 py-3 text-sm font-semibold text-white hover:border-orange-300"
            >
              <Image
                src="/brand/cresard-logo.png"
                alt="Cresard"
                width={1200}
                height={260}
                className="h-6 w-auto brightness-0 invert"
              />
              <span>A product of Cresard Software Services</span>
            </a>
          </div>
          <nav aria-label="Product">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-orange-300">Product</h2>
            <ul className="mt-4 space-y-2.5 text-slate-100">
              <li><Link href="/download" className="hover:text-white hover:underline">Download for Windows</Link></li>
              <li><a href={RELEASES_URL} className="hover:text-white hover:underline">All releases</a></li>
              <li><Link href="/#features" className="hover:text-white hover:underline">Features</Link></li>
              <li><Link href="/#faq" className="hover:text-white hover:underline">FAQ</Link></li>
            </ul>
          </nav>
          <nav aria-label="Legal and contact">
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-orange-300">Legal and contact</h2>
            <ul className="mt-4 space-y-2.5 text-slate-100">
              <li><Link href="/terms" className="hover:text-white hover:underline">Terms summary</Link></li>
              <li><Link href="/privacy" className="hover:text-white hover:underline">Privacy summary</Link></li>
              <li><a href={FULL_TERMS_URL} className="hover:text-white hover:underline">Full terms on cresard.com</a></li>
              <li><a href={CONTACT_URL} className="hover:text-white hover:underline">Contact Cresard</a></li>
            </ul>
          </nav>
        </div>
        <p className="mt-12 border-t border-white/15 pt-6 text-sm text-slate-100">
          &copy; {new Date().getFullYear()} Cresard Software Services. All rights reserved. Cheetah PC is a
          product of Cresard Software Services.
        </p>
      </Container>
      <div
        aria-hidden
        className="pointer-events-none select-none whitespace-nowrap text-center text-[19vw] font-black leading-[0.8] tracking-tighter text-white/[0.07] min-[1440px]:text-[270px]"
      >
        CRESARD
      </div>
    </footer>
  );
}
