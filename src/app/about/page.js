import Head from "next/head"
import Script from "next/script"

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Script>
        alert('hello')
      </Script>
      <h2>
        This is your 'about' page.
      </h2>
    </div>
  )
}
