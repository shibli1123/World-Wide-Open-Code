/**
 * Application-wide constants and configuration
 */
export const config = {
  consoleMarketingEnabled: import.meta.env.VITE_CONSOLE_MARKETING_ENABLED === "true",

  // Base URL
  baseUrl: import.meta.env.VITE_SITE_URL ?? "",

  // GitHub
  github: {
    repoUrl: "https://github.com/shibli1123/World-Wide-Open-Code",
    starsFormatted: {
      compact: "0",
      full: "0",
    },
  },

  // Social links
  social: {
    twitter: "https://github.com/shibli1123",
    discord: "https://github.com/shibli1123/World-Wide-Open-Code/discussions",
  },

  // Static stats (used on landing page)
  stats: {
    contributors: "1",
    commits: "1",
    monthlyUsers: "0",
  },
} as const
