// Utility function to resolve image paths correctly for i18n routing
export function getImagePath(imageName: string): string {
  // Use import.meta.env.BASE_URL to ensure correct base path resolution
  const baseUrl = import.meta.env.BASE_URL || '/';
  return `${baseUrl}${imageName}`;
}

// Get base URL for the site
export function getBaseUrl(): string {
  return import.meta.env.BASE_URL || '/';
}
