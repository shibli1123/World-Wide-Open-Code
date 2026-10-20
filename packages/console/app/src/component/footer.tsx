import { config } from "~/config"

export function Footer() {
  return (
    <footer data-component="footer">
      <div data-slot="cell"><a href={config.github.repoUrl} target="_blank" rel="noreferrer">GitHub</a></div>
      <div data-slot="cell"><a href={`${config.github.repoUrl}/issues`} target="_blank" rel="noreferrer">Issues</a></div>
      <div data-slot="cell"><a href={`${config.github.repoUrl}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noreferrer">Contribute</a></div>
      <div data-slot="cell"><a href={`${config.github.repoUrl}/blob/main/LICENSE`} target="_blank" rel="noreferrer">MIT License</a></div>
      <div data-slot="cell"><a href="https://github.com/shibli1123" target="_blank" rel="noreferrer">Shibli Sanjid Faheem</a></div>
    </footer>
  )
}
