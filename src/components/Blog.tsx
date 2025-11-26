const Blog = () => {
  const blogPosts = [
    {
      title: 'Short Guide to Accounting Terminology',
      excerpt:
        'Understanding key accounting terms is essential for business success. Learn the fundamentals.',
      category: 'Financial Tips',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop&q=80',
    },
    {
      title: '5 Payroll Tips for Small Businesses',
      excerpt:
        'Streamline your payroll process with these essential tips for small business owners.',
      category: 'Business Insights',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
    },
    {
      title: 'How to Choose Your Tax Advisor',
      excerpt:
        'Selecting the right tax advisor can make all the difference. Here is what to look for.',
      category: 'Tax Advisory',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
    },
  ]

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-jpm-blue mb-4 tracking-tight">
            Blog stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Everything from financial tips to industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-sm overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-jpm-accent font-semibold uppercase tracking-wide">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-jpm-blue mt-3 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-jpm-blue font-medium hover:text-jpm-accent transition-colors text-sm"
                >
                  Read more
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
