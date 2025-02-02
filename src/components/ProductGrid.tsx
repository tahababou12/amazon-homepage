import { Link } from 'react-router-dom'
import { products } from '../data/products'

export function ProductGrid() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {products.map((product) => (
        <Link 
          to={`/product/${product.id}`} 
          key={product.id} 
          className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[200px] object-cover rounded-lg"
          />
          <div className="mt-2">
            <span className="text-lg font-bold">${product.price}</span>
            <div className="flex items-center mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-${i < Math.floor(product.rating) ? 'yellow' : 'gray'}-400`}>★</span>
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
            </div>
            <a className="text-[#007185] mt-2 inline-block hover:text-[#c7511f] hover:underline">
              {product.deal}
            </a>
          </div>
        </Link>
      ))}
    </div>
  )
}
