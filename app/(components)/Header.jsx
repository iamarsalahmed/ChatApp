import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md w-full">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300">
          Chat App
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
