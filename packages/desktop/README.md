# World Wide Open Code Desktop

World Wide Open Code Desktop is the cross-platform development workspace in the World Wide Open Code code hub. It is built with Electron and uses the local World Wide Open Code CLI runtime.

## Development

From the repository root:

```sh
bun install
bun run dev:desktop
```

Build or package the desktop app from this directory with `bun run build` and `bun run package`.

## Channels

The desktop build supports `dev`, `beta`, and `prod` channels. Package updates are configured for GitHub Releases in `shibli1123/World-Wide-Open-Code`. Release artifacts must be published there before automatic updates are available.

The CLI command and internal environment names retain their `opencode` identifiers for compatibility. New Desktop links use `wwoc://`; the previous `opencode://` callback scheme remains accepted.
