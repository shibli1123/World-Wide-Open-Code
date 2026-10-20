import { app } from "electron"

type Channel = "local" | "dev" | "beta" | "prod"

const raw = import.meta.env.OPENCODE_CHANNEL

export const CHANNEL: Channel = raw === "local" || raw === "dev" || raw === "beta" || raw === "prod" ? raw : "dev"

export const VERSION = app.isPackaged ? app.getVersion() : (process.env.OPENCODE_VERSION ?? app.getVersion())

const appNames: Record<string, string> = {
  dev: "World Wide Open Code Dev",
  beta: "World Wide Open Code Beta",
  prod: "World Wide Open Code",
}

const appIDs: Record<string, string> = {
  dev: "io.github.shibli1123.wwoc.desktop.dev",
  beta: "io.github.shibli1123.wwoc.desktop.beta",
  prod: "io.github.shibli1123.wwoc.desktop",
}

// Local renderer/server mode keeps the dev application identity.
export const APP_NAME = app.isPackaged ? appNames[CHANNEL] : "World Wide Open Code Dev"

export const APP_ID = app.isPackaged ? appIDs[CHANNEL] : "io.github.shibli1123.wwoc.desktop.dev"
