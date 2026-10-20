import { app } from "electron"

type Channel = "local" | "dev" | "beta" | "prod"

const raw = import.meta.env.OPENCODE_CHANNEL

export const CHANNEL: Channel = raw === "local" || raw === "dev" || raw === "beta" || raw === "prod" ? raw : "dev"

export const VERSION = app.isPackaged ? app.getVersion() : (process.env.OPENCODE_VERSION ?? app.getVersion())

const appNames: Record<string, string> = {
  dev: "Nexgen Dev",
  beta: "Nexgen Beta",
  prod: "Nexgen",
}

const appIDs: Record<string, string> = {
  dev: "io.github.shibli1123.nexgen.desktop.dev",
  beta: "io.github.shibli1123.nexgen.desktop.beta",
  prod: "io.github.shibli1123.nexgen.desktop",
}

// Local renderer/server mode keeps the dev application identity.
export const APP_NAME = app.isPackaged ? appNames[CHANNEL] : "Nexgen Dev"

export const APP_ID = app.isPackaged ? appIDs[CHANNEL] : "io.github.shibli1123.nexgen.desktop.dev"
