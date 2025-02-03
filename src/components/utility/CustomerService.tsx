export function CustomerService() {
  return (
    <div className="max-w-[1500px] mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Customer Service</h1>

      {/* Help Topics */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Popular Topics</h2>
          <ul className="space-y-3">
            {[
              'Your Orders',
              'Returns & Refunds',
              'Shipping Rates & Policies',
              'Prime',
              'Managing Your Account',
              'Payment Methods'
            ].map((topic) => (
              <li key={topic}>
                <a href="#" className="text-[#007185] hover:text-[#c7511f] hover:underline">
                  {topic}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Digital Services and Device Support</h2>
          <ul className="space-y-3">
            {[
              'Amazon Music',
              'Kindle E-readers',
              'Fire Tablets',
              'Prime Video',
              'Echo & Alexa',
              'Digital Games'
            ].map((service) => (
              <li key={service}>
                <a href="#" className="text-[#007185] hover:text-[#c7511f] hover:underline">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Quick Solutions</h2>
          <div className="space-y-4">
            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-2 px-4 rounded-lg font-medium">
              Your Orders
            </button>
            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-2 px-4 rounded-lg font-medium">
              Returns & Refunds
            </button>
            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-2 px-4 rounded-lg font-medium">
              Prime
            </button>
            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-2 px-4 rounded-lg font-medium">
              Payment Settings
            </button>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="bg-white p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg text-center">
            <h3 className="font-bold mb-2">Chat with Us</h3>
            <p className="text-sm text-gray-600 mb-4">Available 24/7</p>
            <button className="bg-[#ffd814] hover:bg-[#f7ca00] py-2 px-4 rounded-lg font-medium">
              Start Chat
            </button>
          </div>
          <div className="border p-4 rounded-lg text-center">
            <h3 className="font-bold mb-2">Call Us</h3>
            <p className="text-sm text-gray-600 mb-4">24/7 customer support</p>
            <button className="bg-[#ffd814] hover:bg-[#f7ca00] py-2 px-4 rounded-lg font-medium">
              Call Now
            </button>
          </div>
          <div className="border p-4 rounded-lg text-center">
            <h3 className="font-bold mb-2">Email Us</h3>
            <p className="text-sm text-gray-600 mb-4">We'll respond within 24 hours</p>
            <button className="bg-[#ffd814] hover:bg-[#f7ca00] py-2 px-4 rounded-lg font-medium">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
