import { Link, Meta } from "@solidjs/meta"

export const Favicon = () => {
  return (
    <>
      <Link rel="icon" type="image/svg+xml" href="/world-wide-open-code.svg" />
      
      <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-v3.png" />
      <Link rel="manifest" href="/site.webmanifest" />
      <Meta name="apple-mobile-web-app-title" content="World Wide Open Code" />
    </>
  )
}
