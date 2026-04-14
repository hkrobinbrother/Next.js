export const metadata = {
  title: "About Us",
  description: "Learn more about our website",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6">
          About Us
        </h1>

        {/* Intro */}
        <p className="text-lg text-center mb-10 text-gray-600">
          Welcome to our platform! We are passionate about building modern web
          applications using Next.js and delivering great user experiences.
        </p>

        {/* Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Team"
            className="rounded-2xl shadow-lg"
          />

          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              We are a team of developers who love building fast, scalable,
              and beautiful web applications. Our focus is on performance,
              design, and user experience.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to help developers and users by creating simple,
              effective, and modern solutions using the latest technologies
              like Next.js, React, and Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-2">⚡ Fast</h3>
              <p className="text-gray-600">
                Optimized performance using Next.js features.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-2">🎨 Modern Design</h3>
              <p className="text-gray-600">
                Clean and responsive UI with Tailwind CSS.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-2">🔒 Secure</h3>
              <p className="text-gray-600">
                Built with best practices for security and scalability.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}