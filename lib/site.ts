// Single place to change the repository, the installer name, and the public URLs.
export const REPO_OWNER = "AntoJebi7";
export const REPO_NAME = "cheetah-pc-website";
export const INSTALLER_ASSET = "Cheetah-PC-Setup.exe";

export const SITE_URL = "https://cheetahpc.cresard.com";
export const REPO_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;
export const RELEASES_URL = `${REPO_URL}/releases`;

// Stable link: always points at the installer attached to the newest release.
export const DOWNLOAD_URL = `${REPO_URL}/releases/latest/download/${INSTALLER_ASSET}`;
export const RELEASE_API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`;

export const CRESARD_URL = "https://www.cresard.com";
export const CONTACT_URL = "https://www.cresard.com/contact";
export const FULL_TERMS_URL = "https://www.cresard.com/terms#cheetah-pc";
export const FULL_PRIVACY_URL = "https://www.cresard.com/privacy";

export const SITE_NAME = "Cheetah PC";
export const DESCRIPTION =
  "Cheetah PC is a Windows desktop app that shows live hardware health in plain language, a 3D and 2D model of your own PC, a crash-proof flight recorder, PDF health reports, and Gmail alerts. For 64-bit Windows 10 and 11.";
