import Head from 'next/head'
import Header from './(components)/Header'
import HeroSection from './(components)/HeroSection'
import Footer from './(components)/Footer'
import Feature from './(components)/Feature'
export default function Home() {
  return (
    <>
      <Head>
        <title>Chat Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-100 pt-16"> {/* Added top padding to avoid overlap */}
        <HeroSection />
      </main>
      <Feature/>
      <Footer />
    </>
  )
}
