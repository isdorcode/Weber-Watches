'use client';

const AboutUs = () => {
  const features = [
    {
      title: "Premium Quality",
      description: "Our shoes are made with the finest materials to ensure durability, comfort, and style for every step."
    },
    {
      title: "Fast Shipping",
      description: "Enjoy reliable and quick delivery to get your favorite pairs to you in no time."
    },
    {
      title: "Satisfaction Guaranteed",
      description: "We are committed to your happiness with a hassle-free return policy and top-notch customer service."
    },
    {
      title: "Exclusive Styles",
      description: "Discover unique designs that set you apart and keep you ahead in fashion trends."
    }
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative w-full h-60 md:h-80 mb-12 rounded-xl overflow-hidden bg-gradient-to-r from-yellow-600 to-slate-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              About Us
            </h1>
          </div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-6">
            Why Shop With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Weber Watches, we believe in delivering the perfect blend of quality, style, and convenience. Here&apos;s what makes us stand out:
          </p>
        </div>

        {/* Features List */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon or Number */}
                <div className="w-12 h-12 rounded-full bg-yellow-600 text-white flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
