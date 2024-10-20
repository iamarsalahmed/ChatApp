import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 shadow-inner">
      <div className="container mx-auto px-6">
        <ul className="flex justify-center space-x-4 text-gray-600">
          <li><Link href="/terms" className="hover:text-blue-600">Terms of Service</Link></li>
          <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600">Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
