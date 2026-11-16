import type { Metadata } from "next";
import { CONTACT_URL, FULL_TERMS_URL } from "@/lib/site";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms summary",
  description: "A short summary of the Cheetah PC terms. The full terms are on cresard.com.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Eyebrow>Terms</Eyebrow>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950">Terms summary</h1>
        <p className="mt-4 rounded-xl border border-orange-300 bg-orange-50 p-4 text-slate-950">
          This page is a short summary to help you understand the terms. It is not the legal text. The full terms
          on cresard.com are the ones that apply.
        </p>
        <div className="mt-8 space-y-6 leading-relaxed text-slate-900">
          <p>
            Cheetah PC is a Windows desktop app, a product of Cresard Software Services. When you first open the
            app, you sign in with your Cresard account and accept the terms before you can use it.
          </p>
          <p>
            Cheetah PC reports on the health of your own PC. Its readings and advice are there to help you, and
            they do not replace a technician where a fault could cause data loss or harm.
          </p>
          <p>
            All rights in the app and this website belong to Cresard Software Services unless stated otherwise.
          </p>
        </div>
        <a
          href={FULL_TERMS_URL}
          className="mt-8 inline-block rounded-lg bg-slate-950 px-6 py-3 font-bold text-white hover:bg-slate-800"
        >
          Read the full terms on cresard.com
        </a>
        <p className="mt-6 text-slate-900">
          Questions about the terms?{" "}
          <a href={CONTACT_URL} className="font-bold underline underline-offset-2">Contact Cresard</a>.
        </p>
      </Container>
    </section>
  );
}
