import { Search, ShoppingCart, Menu, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-[#131921] text-white">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-center p-2 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">amazon</span>
            <span className="text-xs">.com</span>
          </Link>

          {/* Deliver To */}
          <div className="flex items-center text-sm hover:border border-white p-2 rounded-sm cursor-pointer">
            <MapPin size={20} />
            <div className="ml-1">
              <p className="text-gray-300 text-xs">Deliver to</p>
              <p className="font-bold">United States</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex flex-1">
            <div className="flex items-center flex-1 bg-white rounded-lg">
              <select className="text-black p-2 bg-gray-100 border-r rounded-l-lg">
                <option>All</option>
              </select>
              <input
                type="text"
                className="flex-1 p-2 text-black outline-none"
                placeholder="Search Amazon"
              />
              <button className="bg-[#febd69] p-3 rounded-r-lg hover:bg-[#f3a847]">
                <Search className="text-black" />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link to="/signin" className="hover:border border-white p-2 rounded-sm">
              <p className="text-xs">Hello, sign in</p>
              <p className="font-bold text-sm">Account & Lists</p>
            </Link>

            <Link to="/orders" className="hover:border border-white p-2 rounded-sm">
              <p className="text-xs">Returns</p>
              <p className="font-bold text-sm">& Orders</p>
            </Link>

            <Link to="/cart" className="flex items-center hover:border border-white p-2 rounded-sm">
              <ShoppingCart size={30} />
              <span className="font-bold">Cart</span>
            </Link>
          </div>
        </div>

        {/* Sub Header */}
        <div className="flex items-center bg-[#232f3e] p-2 text-sm gap-4">
          <div className="flex items-center gap-1 hover:border border-white p-1 rounded-sm cursor-pointer">
            <Menu size={20} />
            <span>All</span>
          </div>
          
          {/* Category Links */}
          <Link to="/electronics" className="hover:border border-white p-1 rounded-sm">
            Electronics
          </Link>
          <Link to="/fashion" className="hover:border border-white p-1 rounded-sm">
            Fashion
          </Link>
          <Link to="/home-kitchen" className="hover:border border-white p-1 rounded-sm">
            Home & Kitchen
          </Link>
          <Link to="/books" className="hover:border border-white p-1 rounded-sm">
            Books
          </Link>

          {/* Utility Links */}
          <Link to="/deals" className="hover:border border-white p-1 rounded-sm">
            Today's Deals
          </Link>
          <Link to="/customer-service" className="hover:border border-white p-1 rounded-sm">
            Customer Service
          </Link>
          <Link to="/registry" className="hover:border border-white p-1 rounded-sm">
            Registry
          </Link>
          <Link to="/gift-cards" className="hover:border border-white p-1 rounded-sm">
            Gift Cards
          </Link>
          <div className="hover:border border-white p-1 rounded-sm cursor-pointer">
            Sell
          </div>
        </div>
      </div>
    </header>
  )
}
