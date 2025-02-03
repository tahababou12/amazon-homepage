import { products } from '../../data/products'
import { Link } from 'react-router-dom'

export function HomeAndKitchen() {
  return (
    <div className="max-w-[1500px] mx-auto p-4">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-8">
        <img
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba"
          alt="Home & Kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="text-white p-8">
            <h1 className="text-4xl font-bold mb-2">Home & Kitchen</h1>
            <p className="text-xl">Everything for your home</p>
          </div>
        </div>
      </div>

      {/* Shop by Room */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Shop by Room</h2>
        <div className="grid grid-cols-4 gap-4">
          {['Kitchen', 'Living Room', 'Bedroom', 'Bathroom'].map((room) => (
            <div key={room} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-2">{room}</h3>
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba"
                alt={room}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <Link to="#" className="text-[#007185] hover:text-[#c7511f] hover:underline">
                Shop {room}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Categories */}
      <div className="bg-white p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
        <div className="grid grid-cols-6 gap-4">
          {[
            'Furniture',
            'Kitchen & Dining',
            'Bedding',
            'Bath',
            'Home Décor',
            'Storage & Organization'
          ].map((category) => (
            <div key={category} className="text-center">
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-2"></div>
              <p className="text-sm">{category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Deals */}
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Featured Deals</h2>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border p-4 rounded-lg">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-2"></div>
              <div className="bg-red-100 text-red-800 text-sm font-bold px-2 py-1 rounded mb-2 inline-block">
                Limited Time Deal
              </div>
              <p className="text-sm text-gray-600">Save up to 30%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
