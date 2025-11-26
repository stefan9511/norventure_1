const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                alt="Professional team meeting"
                className="w-full h-auto rounded-sm shadow-lg object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-jpm-blue mb-4 md:mb-6 tracking-tight">
                About us
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 mb-6 md:mb-8">
                Synergy of expertise and dedication
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                  Our company was founded in 2013 by experts with decades of
                  experience in the fields of accounting and tax consulting.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                  In collaboration with corporate finance experts, Norventure
                  Services has grown into a consulting firm specializing in
                  providing comprehensive accounting and tax consulting, financial
                  and tax accounting, accounting monitoring and management services,
                  as well as payroll and all related taxes and fees.
                </p>
                <a
                  href="#services"
                  className="inline-flex items-center text-jpm-blue font-medium hover:text-jpm-accent transition-colors text-sm"
                >
                  Read more
                  <svg
                    width="16"
                    height="16"
                    className="ml-2 transform group-hover:translate-x-1 transition-transform"
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
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 pt-12 md:pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-jpm-blue mb-2">
                2013
              </div>
              <div className="text-gray-600 font-medium text-sm">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-jpm-blue mb-2">
                10+
              </div>
              <div className="text-gray-600 font-medium text-sm">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-jpm-blue mb-2">
                100+
              </div>
              <div className="text-gray-600 font-medium text-sm">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
