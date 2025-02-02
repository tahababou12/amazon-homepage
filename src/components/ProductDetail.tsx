import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react'
import { products } from '../data/products'

export function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return <div className="text-center py-10">Product not found</div>
  }

  return (
    <div className="py-8">
      <div className="grid grid-cols-12 gap-8">
        {/* Image Gallery */}
        <div className="col-span-7">
          <div className="flex gap-4">
            <div className="w-20 space-y-4">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.title} ${idx + 1}`}
                  className={`w-full h-20 object-cover cursor-pointer rounded-lg ${
                    selectedImage === idx ? 'border-2 border-[#007185]' : ''
                  }`}
                  onClick={() => setSelectedImage(idx)}
                />
              ))}
            </div>
            <div className="flex-1">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="col-span-5">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
              <span className="ml-2 text-[#007185]">{product.reviews} ratings</span>
            </div>
          </div>

          <div className="border-t border-b py-4 my-4">
            <div className="text-3xl mb-2">
              <span className="text-sm align-top">$</span>
              {product.price}
            </div>
            <div className="text-sm text-gray-600">
              FREE delivery tomorrow by 10 PM. Order within 22 hrs 55 mins
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold mb-2">About this item:</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <ul className="list-disc pl-5 space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-3 rounded-full">
              Add to Cart
            </button>
            <button className="w-full bg-[#ffa41c] hover:bg-[#fa8900] py-3 rounded-full">
              Buy Now
            </button>
          </div>

          <div className="flex justify-between mt-6 text-[#007185]">
            <button className="flex items-center gap-2 hover:text-[#c7511f]">
              <Share2 size={20} />
              Share
            </button>
            <button className="flex items-center gap-2 hover:text-[#c7511f]">
              <Heart size={20} />
              Add to Wish List
            </button>
          </div>
        </div>
      </div>

      {/* Additional Product Details */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Product Details</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-2">Specifications</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">Category</td>
                  <td className="py-2">{product.category}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">Stock</td>
                  <td className="py-2">{product.stock} units</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">Rating</td>
                  <td className="py-2">{product.rating} out of 5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="font-bold mb-2">Shipping Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Free delivery on eligible orders</li>
              <li>• Express delivery available</li>
              <li>• Easy 30-day returns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
