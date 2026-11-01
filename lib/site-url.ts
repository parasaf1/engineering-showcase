const explicitSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

function normalizeExplicitUrl(value: string): string {
  return new URL(value).origin;
}

export const siteUrl = explicitSiteUrl
  ? normalizeExplicitUrl(explicitSiteUrl)
  : vercelProductionHost
    ? `https://${vercelProductionHost}`
    : "http://localhost:3000";
