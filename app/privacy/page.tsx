import type { Metadata } from "next";
import { Check } from "lucide-react";
import { CONTACT_URL, FULL_PRIVACY_URL, FULL_TERMS_URL } from "@/lib/site";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy summary",
  description: "A short summary of how Cheetah PC treats your data. The full terms are on cresard.com.",
  alternates: { canonical: "/privacy" },
};

const points = [
  "Cheetah PC reads only your own PC: its sensors and Windows' own records.",
  "Nothing is uploaded until you allow it.",
  "There is no sample or fake data. Every reading comes from your machine.",
  "If your PC does not report a reading, such as fan speed, the app shows it as not measured.",
  "When you allow it, reports are kept safely under your account on cresard.com.",
  "Gmail alerts and PDF reports are things you choose to use.",
  "This website has no analytics and loads no third-party scripts.",
];

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Eyebrow>Privacy</Eyebrow>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950">Privacy summary</h1>
        <p className="mt-4 rounded-xl border border-orange-300 bg-orange-50 p-4 text-slate-950">
          This page is a short summary. It is not the legal text. The full terms and privacy information on
          cresard.com are the ones that apply.
        </p>
        <ul className="mt-8 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex gap-3 text-slate-900">
              <Check className="mt-0.5 size-5 shrink-0 text-emerald-800" aria-hidden />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={FULL_TERMS_URL}
            className="inline-block rounded-lg bg-slate-950 px-6 py-3 text-center font-bold text-white hover:bg-slate-800"
          >
            Read the full terms
          </a>
          <a
            href={FULL_PRIVACY_URL}
            className="inline-block rounded-lg border border-slate-900 px-6 py-3 text-center font-bold text-slate-950 hover:bg-slate-100"
          >
            Cresard privacy policy
          </a>
        </div>
        <p className="mt-6 text-slate-900">
          Questions about your data?{" "}
          <a href={CONTACT_URL} className="font-bold underline underline-offset-2">Contact Cresard</a>.
        </p>
      </Container>
    </section>
  );
}
