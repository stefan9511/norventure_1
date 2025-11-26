import { useState } from 'react'

const Services = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: 'Financial Accounting',
      description:
        'We provide our Clients with comprehensive accounting services, ensuring accurate financial records and compliance with all regulatory requirements.',
      longDescription:
        'Our financial accounting services encompass everything from bookkeeping to financial statement preparation. We help businesses maintain accurate records, track expenses, manage accounts receivable and payable, and ensure compliance with accounting standards. Our team of certified accountants works closely with clients to provide timely and accurate financial information.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop&q=80',
      icon: (
        <svg
          width="48"
          height="48"
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      features: ['Bookkeeping', 'Financial Statements', 'Compliance', 'Record Management'],
    },
    {
      title: 'Tax Accounting',
      description:
        "We take care from Client's documentation, to keeping records of all of taxes, ensuring full compliance and optimization.",
      longDescription:
        'Our tax accounting services cover all aspects of tax preparation, planning, and compliance. We help businesses navigate complex tax regulations, identify deductions and credits, and ensure timely filing of all required returns. Our experts stay current with changing tax laws to maximize savings while maintaining full compliance.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop&q=80',
      icon: (
        <svg
          width="48"
          height="48"
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      features: ['Tax Preparation', 'Tax Planning', 'Compliance', 'Optimization'],
    },
    {
      title: 'Payroll and Personnel Records',
      description:
        'Our team of experts is fully committed to the needs of each of our Clients and their employees.',
      longDescription:
        'We handle all aspects of payroll processing, from calculating wages and deductions to managing employee benefits and tax withholdings. Our comprehensive payroll services ensure accurate and timely payments while maintaining detailed personnel records and ensuring compliance with labor regulations.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=800&fit=crop&q=80',
      icon: (
        <svg
          width="48"
          height="48"
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      features: ['Payroll Processing', 'Employee Benefits', 'Personnel Records', 'Compliance'],
    },
    {
      title: 'Accounting Consulting',
      description:
        'We provide our Clients with accounting services that we perform in accordance with the individual needs of each Client.',
      longDescription:
        'Our consulting services help businesses optimize their accounting processes, implement best practices, and make informed financial decisions. We provide strategic guidance on financial management, process improvement, and system implementation tailored to each client\'s unique requirements.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
      icon: (
        <svg
          width="48"
          height="48"
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      features: ['Strategic Planning', 'Process Optimization', 'Best Practices', 'Custom Solutions'],
    },
    {
      title: 'Tax Consulting',
      description:
        'With our diverse offer of consulting services, we help companies in all tax matters.',
      longDescription:
        'Our tax consulting services provide strategic tax planning and advisory to help businesses minimize tax liabilities while ensuring full compliance. We assist with tax structuring, entity selection, international tax matters, and provide ongoing tax strategy guidance.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
      icon: (
        <svg
          width="48"
          height="48"
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      features: ['Tax Strategy', 'Planning & Advisory', 'Entity Selection', 'International Tax'],
    },
  ]

  return (
    <section
      id="services"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-jpm-blue mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We help our clients unlock growth by focusing on five key solution areas
          </p>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Service Tabs */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`w-full text-left p-6 rounded-sm border-2 transition-all duration-300 ${
                  activeService === index
                    ? 'border-jpm-blue bg-jpm-light shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-3 rounded-sm ${
                    activeService === index ? 'bg-jpm-blue text-white' : 'bg-jpm-light text-jpm-blue'
                  } transition-colors`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${
                      activeService === index ? 'text-jpm-blue' : 'text-gray-800'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      activeService === index ? 'text-gray-700' : 'text-gray-600'
                    }`}>
                      {service.description}
                    </p>
                    {activeService === index && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-3 py-1 bg-jpm-blue text-white text-xs font-medium rounded-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {activeService === index && (
                    <svg
                      width="24"
                      height="24"
                      className="w-6 h-6 text-jpm-blue flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Right Side - Large Visual */}
          <div className="sticky top-24">
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-[600px] object-cover transition-opacity duration-500"
                key={activeService}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jpm-blue/90 via-jpm-blue/50 to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-sm mb-4">
                    <span className="text-sm font-medium">Service {activeService + 1} of {services.length}</span>
                  </div>
                  <h3 className="text-3xl font-semibold mb-4">
                    {services[activeService].title}
                  </h3>
                  <p className="text-gray-100 leading-relaxed mb-6">
                    {services[activeService].longDescription}
                  </p>
                </div>
                
                {/* Feature List */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <svg
                        width="20"
                        height="20"
                        className="w-5 h-5 text-jpm-accent flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-100">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center bg-white text-jpm-blue px-6 py-3 rounded-sm font-medium hover:bg-opacity-90 transition-all text-sm w-fit"
                >
                  Get Started
                  <svg
                    width="16"
                    height="16"
                    className="ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeService === index
                      ? 'w-8 bg-jpm-blue'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
