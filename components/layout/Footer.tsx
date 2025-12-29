import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">VitalAssess</h3>
            <p className="text-gray-medium text-sm">
              AI-powered assessment platform for smarter hiring decisions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-dark mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-medium">
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-dark mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-medium">
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-dark mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-medium">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-medium">
          <p>&copy; {new Date().getFullYear()} VitalAssess. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

