import { Link } from 'react-router-dom'

export function TodaysDeals() {
  return (
    <div className="max-w-[1500px] mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Today's Deals</h1>

      {/* Featured Deals */}
      <div className="bg-white p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Deals</h2>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border p-4 rounded-lg">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-2"></div>
              <div className="bg-red-100 text-red-800 text-sm font-bold px-2 py-1 rounded mb-2 inline-block">
                Up to 70% off
              </div>
              <p className="text-sm text-gray-600">Deal of the Day</p>
              <div className="mt-2 h-2 bg-red-200 rounded-full">
                <div className="h-full w-3/4 bg-red-500 rounded-full"></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">75% claimed</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Shop Deals by Category</h2>
        <div className="grid grid-cols-6 gap-4">
          {[
            'Electronics',
            'Home & Kitchen',
            'Fashion',
            'Beauty',
            'Sports',
            'Books'
          ].map((category) => (
            <Link
              key={category}
              to="#"
              className="bg-white p-4 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-2"></div>
              <p className="text-sm font-medium">{category}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Lightning Deals */}
      <div className="bg-white p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Lightning Deals</h2>
          <p className="text-sm text-gray-600">Ending soon</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border p-4 rounded-lg">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-2"></div>
              <div className="flex items-center justify-between mb-2">
                <div className="bg-yellow-100 text-yellow-800 text-sm font-bold px-2 py-1 rounded">
                  Lightning Deal
                </div>
                <div className="text-sm text-red-600 font-bold">2:45:30</div>
              </div>
              <p className="text-sm text-gray-600">Original: $99.99</p>
              <p className="text-lg font-bold text-red-600">Deal: $49.99</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
