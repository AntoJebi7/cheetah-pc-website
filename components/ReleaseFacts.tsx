import { formatDate, formatSize, type ReleaseInfo } from "@/lib/release";
import { INSTALLER_ASSET, RELEASES_URL } from "@/lib/site";

/** One compact line under a download button. Shows only values the release API returned. */
export function ReleaseLine({ release, dark = false }: { release: ReleaseInfo; dark?: boolean }) {
  const text = dark ? "text-slate-100" : "text-slate-800";
  if (release.status !== "ok") {
    return (
      <p className={`mt-3 text-sm ${text}`}>
        The first installer has not been published yet. Please check back soon.{" "}
        <a href={RELEASES_URL} className="font-semibold underline underline-offset-2">
          View all releases
        </a>
      </p>
    );
  }
  const bits = [
    release.tag,
    release.publishedAt ? formatDate(release.publishedAt) : null,
    release.sizeBytes ? formatSize(release.sizeBytes) : null,
    "64-bit Windows 10 or 11",
  ].filter(Boolean);
  return (
    <p className={`mt-3 text-sm ${text}`}>
      {bits.join(" · ")}
      {" · "}
      <a href={RELEASES_URL} className="font-semibold underline underline-offset-2">
        View all releases
      </a>
    </p>
  );
}

/** Full fact table for the download page. */
export function ReleaseTable({ release }: { release: ReleaseInfo }) {
  if (release.status !== "ok") {
    return (
      <div className="rounded-2xl border border-slate-300 bg-white p-6">
        <h3 className="text-lg font-bold text-slate-950">The first installer has not been published yet</h3>
        <p className="mt-2 text-slate-800">
          There is no version, size, or checksum to show because no release exists yet. The download button
          turns on as soon as the first release is published. Nothing on this page is a placeholder.
        </p>
        <a
          href={RELEASES_URL}
          className="mt-4 inline-block font-semibold text-slate-950 underline underline-offset-2"
        >
          View all releases
        </a>
      </div>
    );
  }
  const rows: [string, string | null][] = [
    ["Version", release.tag],
    ["Published", release.publishedAt ? formatDate(release.publishedAt) : null],
    ["File", INSTALLER_ASSET],
    ["Size", release.sizeBytes ? formatSize(release.sizeBytes) : null],
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white">
      <dl className="divide-y divide-slate-200">
        {rows
          .filter(([, v]) => v)
          .map(([k, v]) => (
            <div key={k} className="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr]">
              <dt className="text-sm font-bold uppercase tracking-wide text-slate-900">{k}</dt>
              <dd className="font-medium text-slate-950">{v}</dd>
            </div>
          ))}
        <div className="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr]">
          <dt className="text-sm font-bold uppercase tracking-wide text-slate-900">SHA-256</dt>
          <dd>
            {release.sha256 ? (
              <code className="block break-all rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-950">
                {release.sha256}
              </code>
            ) : (
              <span className="text-slate-800">
                GitHub did not return a checksum for this file. Check the release notes for a CHECKSUMS line.
              </span>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
}
