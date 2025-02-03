import { products } from '../../data/products'
import { Link } from 'react-router-dom'

export function Electronics() {
  // Filter electronics products
  const electronicsProducts = products.filter(p => p.category === 'Electronics')

  return (
    <div className="max-w-[1500px] mx-auto p-4">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-8">
        <img
          src="https://images.unsplash.com/photo-1498049794561-7780e7231661"
          alt="Electronics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="text-white p-8">
            <h1 className="text-4xl font-bold mb-2">Electronics</h1>
            <p className="text-xl">Discover the latest in technology</p>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {['Headphones', 'Laptops', 'Smartphones', 'Accessories'].map((category) => (
          <div key={category} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">{category}</h3>
            <img
              src={`https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500`}
              alt={category}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <Link to="#" className="text-[#007185] hover:text-[#c7511f] hover:underline">
              Shop {category}
            </Link>
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-4">
        {electronicsProducts.map((product) => (
          <Link 
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[200px] object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
            <div className="flex items-center mb-2">
              <span className="text-lg font-bold">${product.price}</span>
              <div className="ml-2 flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-${i < Math.floor(product.rating) ? 'yellow' : 'gray'}-400`}>★</span>
                ))}
              </div>
            </div>
            <span className="text-[#007185] hover:text-[#c7511f] hover:underline">
              {product.deal}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
