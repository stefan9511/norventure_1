const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-white"
    >
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-jpm-light text-jpm-blue text-sm font-medium rounded-sm mb-6">
                Trusted Since 2013
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-jpm-blue leading-tight mb-6 tracking-tight">
              We speak in numbers
              <br />
              <span className="text-jpm-accent">you can understand</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
              For more than a decade, Norventure Services has championed the essential role of accounting and tax consulting in helping businesses grow and succeed.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    width="24"
                    height="24"
                    className="w-6 h-6 text-jpm-accent"
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
                </div>
                <div>
                  <h3 className="font-semibold text-jpm-blue mb-1">Expert Team</h3>
                  <p className="text-sm text-gray-600">Decades of combined experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    width="24"
                    height="24"
                    className="w-6 h-6 text-jpm-accent"
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
                </div>
                <div>
                  <h3 className="font-semibold text-jpm-blue mb-1">Comprehensive Services</h3>
                  <p className="text-sm text-gray-600">Full accounting & tax solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    width="24"
                    height="24"
                    className="w-6 h-6 text-jpm-accent"
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
                </div>
                <div>
                  <h3 className="font-semibold text-jpm-blue mb-1">100+ Clients</h3>
                  <p className="text-sm text-gray-600">Trusted by businesses</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    width="24"
                    height="24"
                    className="w-6 h-6 text-jpm-accent"
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
                </div>
                <div>
                  <h3 className="font-semibold text-jpm-blue mb-1">10+ Years</h3>
                  <p className="text-sm text-gray-600">Proven track record</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-jpm-blue text-white px-8 py-3.5 rounded-sm font-medium hover:bg-opacity-90 transition-all inline-flex items-center justify-center text-sm shadow-sm"
              >
                Explore Our Services
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
              <a
                href="#contact"
                className="bg-transparent border border-gray-300 text-jpm-blue px-8 py-3.5 rounded-sm font-medium hover:bg-jpm-light transition-all inline-flex items-center justify-center text-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=1000&fit=crop&q=80"
                  alt="Professional accounting and finance services"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jpm-blue/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-sm shadow-xl border border-gray-100 hidden lg:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-jpm-light p-4 rounded-sm">
                    <svg
                      width="32"
                      height="32"
                      className="w-8 h-8 text-jpm-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold text-jpm-blue">100+</div>
                    <div className="text-sm text-gray-600">Satisfied Clients</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 -right-6 bg-jpm-accent text-white p-4 rounded-sm shadow-lg hidden lg:block">
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-jpm-blue transition-colors">
          <span className="text-xs mb-2 font-medium">Scroll</span>
          <svg
            width="20"
            height="20"
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero
