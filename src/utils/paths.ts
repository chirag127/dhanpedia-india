/**
 * Utility to generate base-path aware URLs for Dhanpedia India.
 * Handles GitHub Pages sub-path deployments seamlessly.
 */
export function url(path: string = '/'): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/' && base) {
    return `${base}/`;
  }
  return `${base}${cleanPath}`;
}
