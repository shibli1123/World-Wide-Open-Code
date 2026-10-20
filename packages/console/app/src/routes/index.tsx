import { Meta, Title } from "@solidjs/meta"
import { A } from "@solidjs/router"
import { useLanguage } from "~/context/language"
import "./index.css"
import "./nexgen-home.css"

const repository = "https://github.com/shibli1123/World-Wide-Open-Code"
const githubSearch = "https://github.com/search?type=repositories&q="

export default function Home() {
  const language = useLanguage()

  return (
    <main class="nexgen-home" data-page="nexgen">
      <Title>Nexgen — World Wide Code Hub</Title>
      <Meta
        name="description"
        content="Discover open source projects, connect your tools, and build with Nexgen's AI coding workspace."
      />
      <header class="nx-nav">
        <A class="nx-brand" href={language.route("/")} aria-label="Nexgen home">
          <img src="/nexgen.svg" alt="" width="36" height="36" />
          <span>Nexgen</span></A>
        <nav aria-label="Main navigation">
          <a href="#discover">Discover</a>
          <a href="#build">Build</a>
          <a href="#connect">Connect</a>
        </nav>
        <a class="nx-nav-cta" href={repository} target="_blank" rel="noreferrer">
          Open source <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section class="nx-hero" id="discover">
        <div class="nx-hero-copy">
          <p class="nx-eyebrow"><span class="nx-pulse" /> WORLD WIDE CODE HUB</p>
          <h1>Find code.<br />Build what’s next.</h1>
          <p class="nx-lede">
            Explore open source projects, then bring the ones you love into a workspace built for serious development.
          </p>
          <form class="nx-search" action={githubSearch} method="get" target="_blank">
            <span aria-hidden="true" class="nx-search-icon">⌕</span>
            <label class="nx-sr-only" for="repository-search">Search GitHub repositories</label>
            <input
              id="repository-search"
              type="search"
              name="q"
              placeholder="Search repositories, languages, or topics"
              autocomplete="off"
              required
            />
            <input type="hidden" name="type" value="repositories" />
            <button type="submit">Search code <span aria-hidden="true">↗</span></button>
          </form>
          <div class="nx-topics" aria-label="Popular repository searches">
            <span>Try:</span>
            <a href={`${githubSearch}${encodeURIComponent("topic:ai-agent language:typescript")}`} target="_blank" rel="noreferrer">AI agents</a>
            <a href={`${githubSearch}${encodeURIComponent("topic:developer-tools")}`} target="_blank" rel="noreferrer">Developer tools</a>
            <a href={`${githubSearch}${encodeURIComponent("topic:open-source")}`} target="_blank" rel="noreferrer">Open source</a>
          </div>
          <p class="nx-search-note">Search opens GitHub’s public repository index.</p>
        </div>

        <div class="nx-orbit-card" aria-label="Nexgen connects discovery, development, and community">
          <div class="nx-orbit nx-orbit-one" />
          <div class="nx-orbit nx-orbit-two" />
          <div class="nx-hub-core">
            <img src="/nexgen.svg" alt="" width="58" height="58" />
            <strong>NEXGEN</strong>
            <span>CODE · CREATE · CONNECT</span>
          </div>
          <div class="nx-orbit-node nx-node-code"><span>⌘</span><b>Code</b></div>
          <div class="nx-orbit-node nx-node-world"><span>◎</span><b>Open source</b></div>
          <div class="nx-orbit-node nx-node-ai"><span>✳</span><b>AI tools</b></div>
          <div class="nx-orbit-dot nx-dot-one" />
          <div class="nx-orbit-dot nx-dot-two" />
          <div class="nx-orbit-dot nx-dot-three" />
        </div>
      </section>

      <section class="nx-proof" aria-label="Project facts">
        <div><span class="nx-proof-mark">01</span><p>Explore public code<br /><b>through GitHub</b></p></div>
        <div><span class="nx-proof-mark">02</span><p>Build locally<br /><b>with AI assistance</b></p></div>
        <div><span class="nx-proof-mark">03</span><p>Open source<br /><b>MIT licensed</b></p></div>
      </section>

      <section class="nx-section" id="build">
        <div class="nx-section-head">
          <p class="nx-eyebrow">FROM FIRST SEARCH TO FIRST SHIP</p>
          <h2>One place to move<br />your ideas forward.</h2>
          <p>Nexgen combines a global project starting point with a capable development workspace.</p>
        </div>
        <div class="nx-feature-grid">
          <article class="nx-feature nx-feature-highlight">
            <span class="nx-feature-icon">⌕</span>
            <p class="nx-feature-label">01 / DISCOVER</p>
            <h3>Start with the world’s code.</h3>
            <p>Search public repositories by language, topic, or the problem you want to solve.</p>
            <a href={`${githubSearch}${encodeURIComponent("topic:open-source")}`} target="_blank" rel="noreferrer">Explore repositories <span aria-hidden="true">↗</span></a>
          </article>
          <article class="nx-feature">
            <span class="nx-feature-icon">⌘</span>
            <p class="nx-feature-label">02 / BUILD</p>
            <h3>Your AI coding workspace.</h3>
            <p>Open a local project and work with agents, tools, and model providers you choose.</p>
            <a href={repository} target="_blank" rel="noreferrer">See the source <span aria-hidden="true">↗</span></a>
          </article>
          <article class="nx-feature">
            <span class="nx-feature-icon">⌬</span>
            <p class="nx-feature-label">03 / CONNECT</p>
            <h3>Bring your stack with you.</h3>
            <p>Use terminal, desktop, browser, editors, GitHub, and a broad set of AI providers.</p>
            <a href={`${repository}/blob/main/README.md`}>Read the project guide <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section class="nx-build-panel" id="connect">
        <div>
          <p class="nx-eyebrow">OPEN SOURCE · BUILT IN PUBLIC</p>
          <h2>Make Nexgen part<br />of your workflow.</h2>
          <p>Run the workspace locally, explore the code, and help shape the next layer of the hub.</p>
          <a class="nx-primary-link" href={`${repository}/blob/main/CONTRIBUTING.md`}>Start contributing <span aria-hidden="true">↗</span></a>
        </div>
        <pre aria-label="Commands to run Nexgen locally"><code><span># Get the source</span>{"\n"}git clone {repository}.git{"\n"}cd World-Wide-Open-Code{"\n\n"}<span># Start the workspace</span>{"\n"}bun install{"\n"}bun run dev</code></pre>
      </section>

      <section class="nx-founder">
        <div class="nx-founder-mark">S<span>.</span></div>
        <div>
          <p class="nx-eyebrow">FOUNDER &amp; MAINTAINER</p>
          <h2>Built in the open by Shibli Sanjid Faheem.</h2>
          <p>Nexgen is an independent project. Its codebase builds on the OpenCode open source project, with original notices preserved.</p>
        </div>
        <a href="https://github.com/shibli1123" target="_blank" rel="noreferrer">Meet the maintainer <span aria-hidden="true">↗</span></a>
      </section>

      <footer class="nx-footer">
        <A class="nx-brand" href={language.route("/")}>
          <img src="/nexgen.svg" alt="" width="30" height="30" />
          <span>Nexgen</span></A>
        <p>Code is better when more people can build on it.</p>
        <div>
          <a href={repository} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`${repository}/issues`} target="_blank" rel="noreferrer">Issues</a>
          <a href={`${repository}/blob/main/LICENSE`}>MIT License</a>
        </div>
      </footer>
    </main>
  )
}
