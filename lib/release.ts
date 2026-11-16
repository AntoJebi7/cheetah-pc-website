import { RELEASE_API_URL, INSTALLER_ASSET } from "./site";

export type ReleaseInfo =
  | {
      status: "ok";
      tag: string;
      publishedAt: string | null;
      sizeBytes: number | null;
      sha256: string | null;
    }
  | { status: "none" };

type GitHubAsset = { name?: string; size?: number; digest?: string | null };
type GitHubRelease = {
  tag_name?: string;
  published_at?: string | null;
  assets?: GitHubAsset[];
};

/**
 * Reads the latest public release from the GitHub API (no token, cached for an hour).
 * Any failure, a 404 before the first release, or a missing installer asset all return
 * { status: "none" } so the page never shows invented numbers.
 */
export async function getRelease(): Promise<ReleaseInfo> {
  try {
    const res = await fetch(RELEASE_API_URL, {
      headers: { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return { status: "none" };
    const data = (await res.json()) as GitHubRelease;
    const asset = data.assets?.find((a) => a.name === INSTALLER_ASSET);
    if (!data.tag_name || !asset) return { status: "none" };
    const digest = asset.digest ?? null;
    const sha = digest && digest.startsWith("sha256:") ? digest.slice(7).toLowerCase() : null;
    return {
      status: "ok",
      tag: data.tag_name,
      publishedAt: data.published_at ?? null,
      sizeBytes: typeof asset.size === "number" ? asset.size : null,
      sha256: sha && /^[0-9a-f]{64}$/.test(sha) ? sha : null,
    };
  } catch {
    return { status: "none" };
  }
}

export function formatSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
