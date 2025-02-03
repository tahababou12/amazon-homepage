import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Trash2 } from 'lucide-react'

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

export function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "Sample Product 1",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      quantity: 2
    },
    {
      id: 2,
      title: "Sample Product 2",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      quantity: 1
    }
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-3xl font-medium mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <ShoppingCart size={48} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
          <Link to="/" className="text-[#007185] hover:text-[#c7511f] hover:underline">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 border-b">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-xl font-bold mt-2">${item.price}</p>
                  <div className="flex items-center mt-4 space-x-2">
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="border rounded p-1"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-[#007185] hover:text-[#c7511f] flex items-center"
                    >
                      <Trash2 size={16} className="mr-1" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 h-fit">
            <div className="text-lg mb-4">
              Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items):
              <span className="font-bold"> ${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] rounded-lg p-2 font-medium">
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
