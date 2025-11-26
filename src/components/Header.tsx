import { useState } from 'react'

interface HeaderProps {
  isScrolled: boolean
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    'Financial Accounting',
    'Tax Accounting',
    'Payroll and Personnel Records',
    'Accounting Consulting',
    'Tax Advisory'
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm py-2 md:py-3'
          : 'bg-white py-3 md:py-4'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-lg sm:text-xl font-semibold text-jpm-blue tracking-tight">
              Norventure Services
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <a
              href="#home"
              className="text-gray-800 hover:text-jpm-blue transition-colors text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-jpm-blue transition-colors text-sm font-medium"
            >
              About us
            </a>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-800 hover:text-jpm-blue transition-colors text-sm font-medium flex items-center">
                International services
                <svg
                  width="16"
                  height="16"
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white shadow-lg rounded-sm py-2 border border-gray-100">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`#services`}
                      className="block px-6 py-2.5 text-gray-700 hover:bg-jpm-light hover:text-jpm-blue transition-colors text-sm"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#careers"
              className="text-gray-800 hover:text-jpm-blue transition-colors text-sm font-medium"
            >
              Careers
            </a>
            <a
              href="#contact"
              className="bg-jpm-blue text-white px-6 py-2 rounded-sm hover:bg-opacity-90 transition-all text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 animate-in slide-in-from-top">
            <a
              href="#home"
              className="block py-3 text-gray-800 hover:text-jpm-blue text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-3 text-gray-800 hover:text-jpm-blue text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </a>
            <div className="py-3">
              <button
                className="text-gray-800 hover:text-jpm-blue flex items-center text-sm font-medium w-full"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                International services
                <svg
                  width="16"
                  height="16"
                  className={`ml-1 w-4 h-4 transition-transform ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`#services`}
                      className="block py-2 text-gray-600 hover:text-jpm-blue text-sm"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsServicesOpen(false)
                      }}
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#careers"
              className="block py-3 text-gray-800 hover:text-jpm-blue text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </a>
            <a
              href="#contact"
              className="block py-3 text-gray-800 hover:text-jpm-blue text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
