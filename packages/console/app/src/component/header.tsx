import { A } from "@solidjs/router"
import logoLight from "../asset/world-wide-open-code-wordmark-light.svg"
import logoDark from "../asset/world-wide-open-code-wordmark-dark.svg"
import { config } from "~/config"
import { useLanguage } from "~/context/language"

export function Header(props: { zen?: boolean; go?: boolean; hideGetStarted?: boolean }) {
  void props
  const language = useLanguage()

  return (
    <section data-component="top">
      <A href={language.route("/")} aria-label="World Wide Open Code home">
        <img data-slot="logo light" src={logoLight} alt="World Wide Open Code" width="286" height="36" />
        <img data-slot="logo dark" src={logoDark} alt="World Wide Open Code" width="286" height="36" />
      </A>
      <nav data-component="nav-desktop" aria-label="Main navigation">
        <ul>
          <li><A href={language.route("/#discover")}>Discover</A></li>
          <li><A href={language.route("/#build")}>Build</A></li>
          <li><a href={`${config.github.repoUrl}/issues`} target="_blank" rel="noreferrer">Community</a></li>
          <li><a data-slot="cta-button" href={config.github.repoUrl} target="_blank" rel="noreferrer">Open source <span aria-hidden="true">↗</span></a></li>
        </ul>
      </nav>
      <nav data-component="nav-mobile" aria-label="Project links">
        <a href={config.github.repoUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>
    </section>
  )
}
