import { Package } from 'lucide-react'

interface Order {
  id: string
  date: string
  total: number
  status: string
  items: {
    id: number
    title: string
    price: number
    image: string
    quantity: number
  }[]
}

export function Orders() {
  const orders: Order[] = [
    {
      id: "114-3941689-8772232",
      date: "August 25, 2023",
      total: 129.94,
      status: "Delivered",
      items: [
        {
          id: 1,
          title: "Wireless Headphones",
          price: 79.99,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
          quantity: 1
        },
        {
          id: 2,
          title: "Smart Watch",
          price: 49.95,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
          quantity: 1
        }
      ]
    }
  ]

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-3xl font-medium mb-6">Your Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center py-8">
          <Package size={48} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-medium mb-2">No orders yet</h2>
          <p className="text-gray-600">
            When you place an order, it will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 grid grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-gray-600">ORDER PLACED</div>
                  <div>{order.date}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">TOTAL</div>
                  <div>${order.total.toFixed(2)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">STATUS</div>
                  <div>{order.status}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">ORDER # {order.id}</div>
                  <a href="#" className="text-[#007185] hover:text-[#c7511f] hover:underline">
                    View order details
                  </a>
                </div>
              </div>

              <div className="p-4 space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      <p>${item.price.toFixed(2)}</p>
                      <button className="mt-2 text-[#007185] hover:text-[#c7511f] hover:underline">
                        Buy it again
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
