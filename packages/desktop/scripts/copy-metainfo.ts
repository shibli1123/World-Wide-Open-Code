import { resolveChannel } from "./utils"

const arg = process.argv[2]

const channel = arg === "dev" || arg === "beta" || arg === "prod" ? arg : resolveChannel()

const appId = channel === "prod" ? "io.github.shibli1123.nexgen.desktop" : `io.github.shibli1123.nexgen.desktop.${channel}`

const productName = channel === "prod" ? "Nexgen" : `Nexgen ${channel.charAt(0).toUpperCase() + channel.slice(1)}`

const summary = `Open source code collaboration workspace${channel !== "prod" ? ` (${channel})` : ""}`

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<component type="desktop-application">
  <id>${appId}</id>

  <metadata_license>CC0-1.0</metadata_license>
  <project_license>MIT</project_license>

  <name>${productName}</name>
  <summary>${summary}</summary>

  <developer id="io.github.shibli1123">
    <name>Shibli Sanjid Faheem</name>
  </developer>

  <description>
    <p>
      Nexgen is an open source code hub and AI-assisted development workspace maintained by Shibli Sanjid Faheem.
    </p>
  </description>

  <launchable type="desktop-id">${appId}.desktop</launchable>

  <content_rating type="oars-1.1" />

  <url type="bugtracker">https://github.com/shibli1123/World-Wide-Open-Code/issues</url>
  <url type="homepage">https://github.com/shibli1123/World-Wide-Open-Code</url>
  <url type="vcs-browser">https://github.com/shibli1123/World-Wide-Open-Code</url>

  <screenshots>
    <screenshot type="default">
      <image>https://raw.githubusercontent.com/shibli1123/World-Wide-Open-Code/main/packages/web/src/assets/lander/screenshot.png</image>
    </screenshot>
  </screenshots>
</component>
`

await Bun.write(`resources/${appId}.metainfo.xml`, xml)

console.log(`Generated metainfo for ${channel} at resources/${appId}.metainfo.xml`)
