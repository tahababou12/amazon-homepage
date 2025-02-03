import { products } from '../../data/products'
import { Link } from 'react-router-dom'

export function Books() {
  return (
    <div className="max-w-[1500px] mx-auto p-4">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-8">
        <img
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
          alt="Books"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="text-white p-8">
            <h1 className="text-4xl font-bold mb-2">Books</h1>
            <p className="text-xl">Discover your next great read</p>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {['Fiction', 'Non-Fiction', 'Children\'s', 'Textbooks'].map((category) => (
          <div key={category} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">{category}</h3>
            <img
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
              alt={category}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <Link to="#" className="text-[#007185] hover:text-[#c7511f] hover:underline">
              Explore {category}
            </Link>
          </div>
        ))}
      </div>

      {/* Best Sellers */}
      <div className="bg-white p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Best Sellers</h2>
        <div className="grid grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="text-center">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-2"></div>
              <p className="text-sm font-bold">Best Seller #{item}</p>
              <p className="text-sm text-gray-600">Category</p>
            </div>
          ))}
        </div>
      </div>

      {/* Kindle eBooks */}
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Kindle eBooks</h2>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border p-4 rounded-lg">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-2"></div>
              <div className="bg-blue-100 text-blue-800 text-sm font-bold px-2 py-1 rounded mb-2 inline-block">
                Kindle Unlimited
              </div>
              <p className="text-sm text-gray-600">Starting at $0.99</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
