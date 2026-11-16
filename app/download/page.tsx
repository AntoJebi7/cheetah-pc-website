import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import { getRelease } from "@/lib/release";
import { CONTACT_URL, INSTALLER_ASSET, RELEASES_URL } from "@/lib/site";
import { DownloadButton } from "@/components/DownloadButton";
import { ReleaseTable } from "@/components/ReleaseFacts";
import { Container, Eyebrow, SectionStripes } from "@/components/ui";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Download for Windows",
  description:
    "Download the Cheetah PC installer for 64-bit Windows 10 and 11, with install steps, uninstall steps, and the SHA-256 checksum to verify the file.",
  alternates: { canonical: "/download" },
  openGraph: { title: "Download Cheetah PC for Windows", url: "/download", images: ["/og.png"] },
};

function Steps({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="mt-6 space-y-4">
      {items.map((it, i) => (
        <li key={i} className="flex gap-4">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white">
            {i + 1}
          </span>
          <div className="pt-1 leading-relaxed text-slate-900">{it}</div>
        </li>
      ))}
    </ol>
  );
}

export default async function DownloadPage() {
  const release = await getRelease();
  const code = "rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-950";

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-16 sm:py-20">
        <SectionStripes />
        <Container className="relative">
          <Eyebrow>Download</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Download Cheetah PC for Windows
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-900">
            One installer for 64-bit Windows 10 and 11. The button always fetches the installer from the newest
            release.
          </p>
          <div className="mt-8">
            <DownloadButton release={release} />
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-950">This release</h2>
            <div className="mt-5">
              <ReleaseTable release={release} />
            </div>
            <a
              href={RELEASES_URL}
              className="mt-4 inline-block font-bold text-slate-950 underline underline-offset-4"
            >
              View all releases
            </a>
          </div>
          <aside className="rounded-2xl border border-orange-300 bg-orange-50 p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-950">
              <ShieldAlert className="size-6" aria-hidden /> Windows SmartScreen
            </h2>
            <p className="mt-3 leading-relaxed text-slate-900">
              The installer is not code-signed yet, so Windows SmartScreen may show a blue &quot;Windows
              protected your PC&quot; window. Choose <strong>More info</strong>, then <strong>Run anyway</strong>.
              To be sure the file is the one we published, verify the checksum below first.
            </p>
          </aside>
        </Container>
      </section>

      <section className="bg-slate-100 py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-950">Requirements</h2>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-900">
              <li>64-bit Windows 10 or 11.</li>
              <li>Administrator rights, to install the background service.</li>
              <li>Internet, for sign-in and the cloud copy of your reports.</li>
              <li>Microsoft Edge, for PDF reports.</li>
            </ul>

            <h2 className="mt-12 text-2xl font-extrabold text-slate-950">Install</h2>
            <Steps
              items={[
                <>Download <code className={code}>{INSTALLER_ASSET}</code> with the button above.</>,
                <>Optional but recommended: verify the checksum (see below).</>,
                <>Double-click the installer and approve the administrator prompt.</>,
                <>If SmartScreen appears, choose <strong>More info</strong>, then <strong>Run anyway</strong>.</>,
                <>Open Cheetah PC, sign in with your Cresard account, and accept the terms.</>,
              ]}
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-950">Uninstall</h2>
            <Steps
              items={[
                <>Open Windows <strong>Settings</strong>, then <strong>Apps</strong>, then <strong>Installed apps</strong>.</>,
                <>Find <strong>Cheetah PC</strong>, open its menu, and choose <strong>Uninstall</strong>.</>,
                <>Follow the prompts and approve the administrator request.</>,
              ]}
            />

            <h2 id="verify" className="mt-12 text-2xl font-extrabold text-slate-950">
              Verify the checksum
            </h2>
            <p className="mt-3 leading-relaxed text-slate-900">
              A SHA-256 checksum is a fingerprint of the file. If yours matches the one on this page, the file
              was not changed or damaged on the way. In PowerShell, run:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm leading-relaxed text-slate-50">
              <code>{`Get-FileHash "$env:USERPROFILE\\Downloads\\${INSTALLER_ASSET}" -Algorithm SHA256`}</code>
            </pre>
            <p className="mt-3 leading-relaxed text-slate-900">
              Compare the <code className={code}>Hash</code> value it prints with the SHA-256 shown above. They
              must match exactly. If they do not, delete the file and download it again. If you saved the file
              somewhere else, change the path.
            </p>
            {release.status === "ok" && !release.sha256 && (
              <p className="mt-3 text-slate-900">
                This release has no checksum in the file listing. Look for a CHECKSUMS line in the release notes
                on the <a href={RELEASES_URL} className="font-semibold underline">releases page</a>.
              </p>
            )}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container>
          <p className="text-slate-900">
            Problems installing?{" "}
            <a href={CONTACT_URL} className="font-bold underline underline-offset-2">
              Contact Cresard
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
