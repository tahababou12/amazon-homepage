import { products } from '../../data/products'
import { Link } from 'react-router-dom'

export function Fashion() {
  return (
    <div className="max-w-[1500px] mx-auto p-4">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-8">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050"
          alt="Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="text-white p-8">
            <h1 className="text-4xl font-bold mb-2">Fashion</h1>
            <p className="text-xl">Shop the latest trends</p>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {['Women', 'Men', 'Kids', 'Accessories'].map((category) => (
          <div key={category} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">{category}</h3>
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050"
              alt={category}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <Link to="#" className="text-[#007185] hover:text-[#c7511f] hover:underline">
              Shop {category}
            </Link>
          </div>
        ))}
      </div>

      {/* Trending Now */}
      <div className="bg-white p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
        <div className="grid grid-cols-6 gap-4">
          {['Summer Dresses', 'Sneakers', 'Activewear', 'Bags', 'Jewelry', 'Watches'].map((item) => (
            <div key={item} className="text-center">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-2"></div>
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Deals Section */}
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Today's Deals in Fashion</h2>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border p-4 rounded-lg">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-2"></div>
              <div className="bg-red-100 text-red-800 text-sm font-bold px-2 py-1 rounded mb-2 inline-block">
                Up to 50% off
              </div>
              <p className="text-sm text-gray-600">Deal of the Day</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
