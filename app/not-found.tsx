import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-24">
      <Container className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-800">Error 404</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
          That page ran off
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-slate-900">
          We could not find the page you asked for. Try the home page or the download page.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="rounded-lg bg-slate-950 px-6 py-3 font-bold text-white hover:bg-slate-800">
            Home
          </Link>
          <Link
            href="/download"
            className="rounded-lg border border-slate-900 px-6 py-3 font-bold text-slate-950 hover:bg-white"
          >
            Download
          </Link>
        </div>
      </Container>
    </section>
  );
}
