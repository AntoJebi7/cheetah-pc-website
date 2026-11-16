import { Download } from "lucide-react";
import { DOWNLOAD_URL } from "@/lib/site";
import type { ReleaseInfo } from "@/lib/release";

export function DownloadButton({
  release,
  size = "lg",
  tone = "brand",
}: {
  release: ReleaseInfo;
  size?: "md" | "lg";
  tone?: "brand" | "light";
}) {
  const pad = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-2.5 text-sm";
  const base = `inline-flex items-center justify-center gap-2.5 rounded-lg font-bold transition ${pad}`;

  if (release.status !== "ok") {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        className={`${base} cursor-not-allowed bg-slate-200 text-slate-900 opacity-80`}
      >
        <Download className="size-5" aria-hidden />
        Download for Windows
      </button>
    );
  }
  const color =
    tone === "light"
      ? "bg-white text-slate-950 hover:bg-orange-100"
      : "bg-slate-950 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800";
  return (
    <a href={DOWNLOAD_URL} className={`${base} ${color}`}>
      <Download className="size-5" aria-hidden />
      Download for Windows
    </a>
  );
}
