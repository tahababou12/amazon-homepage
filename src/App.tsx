import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductGrid } from './components/ProductGrid'
import { ProductDetail } from './components/ProductDetail'
import { Footer } from './components/Footer'
import { SignIn } from './components/SignIn'
import { Cart } from './components/Cart'
import { Orders } from './components/Orders'
import { Account } from './components/Account'
import { TodaysDeals } from './components/utility/TodaysDeals'
import { CustomerService } from './components/utility/CustomerService'
import { Registry } from './components/utility/Registry'
import { GiftCards } from './components/utility/GiftCards'
import { Electronics } from './components/categories/Electronics'
import { Fashion } from './components/categories/Fashion'
import { HomeAndKitchen } from './components/categories/HomeAndKitchen'
import { Books } from './components/categories/Books'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="*"
            element={
              <>
                <Header />
                <main className="max-w-[1500px] mx-auto px-4">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <>
                          <Hero />
                          <ProductGrid />
                        </>
                      }
                    />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/account" element={<Account />} />
                    
                    {/* Utility Routes */}
                    <Route path="/deals" element={<TodaysDeals />} />
                    <Route path="/customer-service" element={<CustomerService />} />
                    <Route path="/registry" element={<Registry />} />
                    <Route path="/gift-cards" element={<GiftCards />} />
                    
                    {/* Category Routes */}
                    <Route path="/electronics" element={<Electronics />} />
                    <Route path="/fashion" element={<Fashion />} />
                    <Route path="/home-kitchen" element={<HomeAndKitchen />} />
                    <Route path="/books" element={<Books />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
