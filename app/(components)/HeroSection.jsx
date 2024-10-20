import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-b from-blue-100 to-purple-200">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1583364486567-ce2e045676e9?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
      </div>

      {/* Overlay for Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-6 leading-tight">
            Welcome to Our Chat Application
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Seamlessly connect with people across the globe!
          </p>
    <Link href={'/users'}>
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
            Start Chatting
          </button></Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
