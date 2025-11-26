const Careers = () => {
  return (
    <section
      id="careers"
      className="py-16 md:py-24 bg-jpm-blue text-white relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-jpm-blue opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 md:mb-4 tracking-tight">
              New opportunities on your way
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 md:mb-12 text-gray-200">
              Start your career with us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-sm p-6 md:p-8 border border-white border-opacity-20">
              <h4 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Work</h4>
              <p className="text-gray-200 leading-relaxed mb-5 md:mb-6 text-sm">
                Are you looking for a professional career in our field? We
                expect hard work and dedication and offer exciting opportunities
                and invaluable learning experience in return.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-jpm-blue px-5 md:px-6 py-2.5 md:py-3 rounded-sm font-medium hover:bg-opacity-90 transition-all text-sm w-full md:w-auto text-center"
              >
                See Open Positions
              </a>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-sm p-6 md:p-8 border border-white border-opacity-20">
              <h4 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Internship</h4>
              <p className="text-gray-200 leading-relaxed mb-5 md:mb-6 text-sm">
                We encourage young, ambitious and enthusiastic people to apply
                for the internship position at Norventure and gain the
                opportunity to expand their knowledge and experience in the
                business world.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-jpm-blue px-5 md:px-6 py-2.5 md:py-3 rounded-sm font-medium hover:bg-opacity-90 transition-all text-sm w-full md:w-auto text-center"
              >
                See Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Careers
