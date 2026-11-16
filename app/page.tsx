import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Box,
  Check,
  ChevronDown,
  Cloud,
  FileText,
  Monitor,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  Download as DownloadIcon,
  Eye,
} from "lucide-react";
import { getRelease } from "@/lib/release";
import { CONTACT_URL, SITE_URL } from "@/lib/site";
import { DownloadButton } from "@/components/DownloadButton";
import { ReleaseLine } from "@/components/ReleaseFacts";
import { Container, Eyebrow, SafeBadge, SectionStripes, UnsafeBadge, WarmBadge } from "@/components/ui";

export const revalidate = 3600;

const features = [
  {
    icon: Activity,
    title: "Live hardware health",
    body: "Processor, graphics, memory, storage, fans, and battery are each marked Safe, Warm, or Unsafe, with a sentence that says why and what to do.",
    badges: true,
  },
  {
    icon: Box,
    title: "3D and 2D model of your own PC",
    body: "A model of your machine in 3D or flat 2D, with readings placed on the parts they belong to. Rotate it, zoom in, and click a part to see its state.",
  },
  {
    icon: ShieldCheck,
    title: "Crash-proof flight recorder",
    body: "Cheetah PC keeps recording while Windows runs, so after a freeze or an unexpected shutdown you can open an incident report and see what happened just before.",
  },
  {
    icon: FileText,
    title: "PDF health report and Gmail alerts",
    body: "Download a clear PDF report of your PC, and choose to get alerts by Gmail when something needs attention.",
  },
  {
    icon: Stethoscope,
    title: "Diagnostics in plain language",
    body: "Checks for Windows, BIOS, graphics, power, memory, processor, cooling, and storage. Each finding says what was found and the steps to fix it, in order.",
  },
  {
    icon: Cloud,
    title: "Reports kept under your account",
    body: "When you allow it, your reports are saved safely under your account on cresard.com, so they are still there if the PC is not.",
  },
];

const steps = [
  { icon: DownloadIcon, title: "Install", body: "Download the installer and run it. Installing needs administrator rights, because it sets up a small background service that keeps the flight recorder running." },
  { icon: UserCheck, title: "Sign in and accept the terms", body: "Sign in with your Cresard account and accept the terms. This is also what lets reports be kept under your account." },
  { icon: Monitor, title: "See your PC", body: "Your own PC appears as a live model with plain-language health for every part, starting from the first reading." },
];

const honesty = [
  "It reads only your own PC.",
  "Nothing is uploaded until you allow it.",
  "No sample data. Every number comes from your machine.",
  "If your PC does not report fan speed, the app says \"not measured\" instead of guessing.",
  "Readings Windows hides without administrator rights are left out, not made up.",
  "Diagnostics only read. They never change anything on your PC.",
];

const requirements = [
  { title: "Windows", body: "64-bit Windows 10 or 11." },
  { title: "Administrator rights", body: "Needed once, to install the background service." },
  { title: "Internet", body: "For sign-in and for the cloud copy of your reports." },
  { title: "Microsoft Edge", body: "Used to create PDF reports. It is already part of Windows 10 and 11." },
];

const faqs = [
  {
    q: "Windows shows a SmartScreen warning when I run the installer. Is that normal?",
    a: (
      <>
        Yes, for now. The installer is not code-signed yet, so Windows SmartScreen says it does not recognise
        the app. Choose <strong>More info</strong>, then <strong>Run anyway</strong>. If you want to be sure
        the file is the one we published, compare its SHA-256 checksum with the one shown on the{" "}
        <Link href="/download#verify" className="font-semibold underline">download page</Link>.
      </>
    ),
  },
  {
    q: "Why does the installer ask for administrator rights?",
    a: "To install the background service that records your PC while it runs. Without administrator rights some readings, such as processor temperature, are hidden by Windows. Cheetah PC leaves those out and says so, rather than guessing.",
  },
  {
    q: "Does Cheetah PC change anything on my PC?",
    a: "No. Diagnostics read Windows' own records and the PC's current state. They never change settings, files, or drivers.",
  },
  {
    q: "What is uploaded, and when?",
    a: "Nothing is uploaded until you allow it. When you do, reports are saved under your account on cresard.com. See the privacy summary for details.",
  },
  {
    q: "Why does a part show \"not measured\"?",
    a: "Some PCs do not report certain sensors, such as fan speed. Cheetah PC shows that honestly instead of inventing a number.",
  },
  {
    q: "Does it run on Mac or Linux?",
    a: "No. Cheetah PC is for 64-bit Windows 10 and 11 only.",
  },
  {
    q: "How do I uninstall it?",
    a: "Open Windows Settings, go to Apps, then Installed apps, find Cheetah PC, and choose Uninstall.",
  },
];

function Window({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-2xl shadow-slate-900/20">
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-red-300" />
        <span className="size-2.5 rounded-full bg-amber-300" />
        <span className="size-2.5 rounded-full bg-emerald-300" />
        <span className="ml-2 truncate text-xs font-semibold text-slate-900">{label}</span>
      </div>
      {children}
    </div>
  );
}

export default async function HomePage() {
  const release = await getRelease();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cheetah PC",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Windows 10, Windows 11 (64-bit)",
    url: SITE_URL,
    publisher: { "@type": "Organization", name: "Cresard Software Services", url: "https://www.cresard.com" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">
        <div aria-hidden className="hero-band pointer-events-none absolute right-0 top-0 h-[78%] w-[62%] overflow-hidden">
          <div className="hero-band-gradient absolute inset-0" />
          <div className="hero-stripe hero-stripe-1" />
          <div className="hero-stripe hero-stripe-2" />
          <div className="hero-stripe hero-stripe-3" />
          <div className="hero-stripe hero-stripe-4" />
          <div className="hero-stripe hero-stripe-5" />
        </div>
        <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1.2fr] lg:py-24">
          <div className="hero-rise">
            <Eyebrow>For Windows 10 and 11</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl xl:text-6xl">
              See the real health of{" "}
              <span className="hero-gradient-text">your own PC</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-900">
              Cheetah PC turns your PC&apos;s sensors and Windows records into plain language. Live Safe, Warm,
              and Unsafe badges, a 3D model of your machine, and a flight recorder that survives crashes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <DownloadButton release={release} />
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-lg border border-slate-900 px-6 py-4 text-base font-bold text-slate-950 hover:bg-white"
              >
                Install steps and checksum
              </Link>
            </div>
            <ReleaseLine release={release} />
          </div>
          <div className="hero-rise hero-rise-delay">
            <Window label="Cheetah PC, Overview, PC tower model">
              <Image
                src="/shots/tower-3d.webp"
                alt="Cheetah PC Overview screen showing a 3D PC tower model, an overall health score, and Safe, Warm, and Info badges for each component"
                width={1440}
                height={900}
                priority
                sizes="(min-width: 1440px) 760px, (min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full"
              />
            </Window>
          </div>
        </Container>
      </section>

      {/* What it does */}
      <section id="features" className="relative overflow-hidden bg-white py-20 sm:py-24">
        <SectionStripes side="left" />
        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow>What it does</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Everything about your PC&apos;s health, in words you can act on
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-orange-100 text-orange-900">
                  <f.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-900">{f.body}</p>
                {f.badges && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <SafeBadge />
                    <WarmBadge />
                    <UnsafeBadge />
                  </div>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Screens */}
      <section className="bg-slate-100 py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Real screens</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Captured from a real PC
            </h2>
            <p className="mt-4 text-lg text-slate-900">
              These are screenshots of the app running on a real laptop, in limited mode (without administrator
              rights). The values are that laptop&apos;s own and will differ on your PC.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <figure>
              <Window label="Overview, laptop model">
                <Image
                  src="/shots/laptop-3d.webp"
                  alt="Cheetah PC Overview showing a 3D laptop model with a processor marked Unsafe and a health score of 80"
                  width={1440}
                  height={900}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full"
                />
              </Window>
              <figcaption className="mt-3 text-sm text-slate-900">
                The 3D model follows your PC. This one is a laptop, and a busy processor is flagged Unsafe with
                a plain explanation.
              </figcaption>
            </figure>
            <figure>
              <Window label="Diagnostics">
                <div className="relative aspect-[1440/900] overflow-hidden">
                  <Image
                    src="/shots/diagnostics.webp"
                    alt="Cheetah PC Diagnostics page listing what was found and what to do, in order"
                    width={1440}
                    height={1260}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="absolute left-0 top-0 h-auto w-full"
                  />
                </div>
              </Window>
              <figcaption className="mt-3 text-sm text-slate-900">
                Diagnostics says what was found and what to do, step by step. The page is cropped here to fit.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section id="how" className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
        <Container className="relative">
          <Eyebrow dark>How it works</Eyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Three steps from download to your first reading
          </h2>
          <div className="relative mt-14 grid gap-8 md:grid-cols-3">
            <div aria-hidden className="process-line absolute left-0 right-0 top-7 hidden h-1 rounded md:block" />
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                <span className="relative grid size-14 place-items-center rounded-full bg-white text-slate-950 ring-4 ring-slate-950">
                  <s.icon className="size-6" aria-hidden />
                </span>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-orange-300">Step {i + 1}</p>
                <h3 className="mt-1 text-2xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-100">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Privacy and honesty */}
      <section id="privacy" className="bg-white py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <Eyebrow>Privacy and honesty</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              It only tells you what it can actually see
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-900">
              A health tool is only useful if you can trust it. Cheetah PC shows real readings from your own
              machine and says so plainly when it cannot measure something.
            </p>
            <Link href="/privacy" className="mt-6 inline-flex items-center gap-2 font-bold text-slate-950 underline underline-offset-4">
              <Eye className="size-5" aria-hidden /> Read the privacy summary
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {honesty.map((h) => (
              <li key={h} className="flex gap-3 rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-slate-950">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-800" aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Requirements */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-orange-50 to-white py-20 sm:py-24">
        <Container>
          <Eyebrow>Requirements</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            What you need
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {requirements.map((r) => (
              <div key={r.title} className="rounded-2xl border-l-4 border-orange-600 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">{r.title}</h3>
                <p className="mt-2 text-slate-900">{r.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Questions people ask
            </h2>
            <p className="mt-4 text-slate-900">
              Something else?{" "}
              <a href={CONTACT_URL} className="font-bold underline underline-offset-2">
                Contact Cresard
              </a>
              .
            </p>
          </div>
          <div className="divide-y divide-slate-300 rounded-2xl border border-slate-300">
            {faqs.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-bold text-slate-950">
                  {f.q}
                  <ChevronDown className="faq-chevron mt-1 size-5 shrink-0 transition" aria-hidden />
                </summary>
                <div className="mt-3 leading-relaxed text-slate-900">{f.a}</div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
        <div aria-hidden className="hero-band pointer-events-none absolute right-0 top-0 h-full w-[70%] overflow-hidden opacity-80">
          <div className="hero-band-gradient absolute inset-0" />
          <div className="hero-stripe hero-stripe-1" />
          <div className="hero-stripe hero-stripe-3" />
          <div className="hero-stripe hero-stripe-5" />
        </div>
        <Container className="relative">
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Find out what your PC has been trying to tell you
          </h2>
          <div className="mt-8">
            <DownloadButton release={release} tone="light" />
            <ReleaseLine release={release} dark />
          </div>
        </Container>
      </section>
    </>
  );
}
