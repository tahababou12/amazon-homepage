import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Gift, Mail, CreditCard, HelpCircle, ChevronRight, Clock, Star } from 'lucide-react'

export function GiftCards() {
  const [selectedAmount, setSelectedAmount] = useState('25')
  const [selectedDesign, setSelectedDesign] = useState('')

  const giftAmounts = ['25', '50', '75', '100', '150', '200']

  return (
    <div className="max-w-[1500px] mx-auto p-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">Amazon Gift Cards</h1>
        <p className="text-xl text-gray-600 mb-8">Give the perfect gift with Amazon Gift Cards</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-[#232f3e] rounded-lg flex items-center justify-center mb-4">
              <Mail className="text-white w-20 h-20" />
            </div>
            <h2 className="text-xl font-bold mb-2">eGift Cards</h2>
            <p className="text-gray-600 mb-4">Send instantly via email</p>
            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-2 px-4 rounded-lg font-medium">
              Send an eGift
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-[#232f3e] rounded-lg flex items-center justify-center mb-4">
              <Gift className="text-white w-20 h-20" />
            </div>
            <h2 className="text-xl font-bold mb-2">Physical Gift Cards</h2>
            <p className="text-gray-600 mb-4">Free one-day shipping</p>
            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-2 px-4 rounded-lg font-medium">
              Mail a Gift Card
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-[#232f3e] rounded-lg flex items-center justify-center mb-4">
              <CreditCard className="text-white w-20 h-20" />
            </div>
            <h2 className="text-xl font-bold mb-2">Reload Your Balance</h2>
            <p className="text-gray-600 mb-4">Add to your Amazon Balance</p>
            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-2 px-4 rounded-lg font-medium">
              Reload Balance
            </button>
          </div>
        </div>
      </div>

      {/* Gift Card Creator */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Create Your Gift Card</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Card Preview */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="bg-[#232f3e] h-64 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white text-6xl">Gift</span>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold mb-2">Selected Amount: ${selectedAmount}</p>
              <p className="text-gray-600">Preview your gift card above</p>
            </div>
          </div>

          {/* Right Column - Options */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Select Amount</h3>
              <div className="grid grid-cols-3 gap-3">
                {giftAmounts.map((amount) => (
                  <button
                    key={amount}
                    className={`p-3 rounded-lg font-medium ${
                      selectedAmount === amount
                        ? 'bg-[#ffd814] hover:bg-[#f7ca00]'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedAmount(amount)}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Delivery Options</h3>
              <div className="space-y-3">
                <label className="flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer">
                  <input type="radio" name="delivery" className="mr-3" defaultChecked />
                  <div>
                    <p className="font-medium">Email Delivery</p>
                    <p className="text-sm text-gray-600">Send instantly</p>
                  </div>
                </label>
                <label className="flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer">
                  <input type="radio" name="delivery" className="mr-3" />
                  <div>
                    <p className="font-medium">Print at Home</p>
                    <p className="text-sm text-gray-600">Ready in minutes</p>
                  </div>
                </label>
              </div>
            </div>

            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-3 px-6 rounded-lg font-medium">
              Continue to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border">
          <h2 className="text-xl font-bold mb-4">Already have a gift card?</h2>
          <div className="flex gap-4">
            <button className="flex-1 bg-[#ffd814] hover:bg-[#f7ca00] py-2 px-4 rounded-lg font-medium">
              Redeem a Gift Card
            </button>
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium">
              Check Balance
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h2 className="text-xl font-bold mb-4">Gift Card Settings</h2>
          <div className="flex gap-4">
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium">
              Auto-Reload
            </button>
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium">
              View History
            </button>
          </div>
        </div>
      </div>

      {/* Featured Designs */}
      <div className="bg-white p-6 rounded-lg mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Gift Card Designs</h2>
          <button className="text-blue-600 hover:text-blue-700 flex items-center">
            View all <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Birthday Celebration', category: 'Birthday', rating: 4.8 },
            { name: 'Wedding Bells', category: 'Wedding', rating: 4.9 },
            { name: 'Congratulations', category: 'Achievement', rating: 4.7 },
            { name: 'Thank You', category: 'Gratitude', rating: 4.9 },
          ].map((design) => (
            <div 
              key={design.name}
              className="group cursor-pointer"
              onClick={() => setSelectedDesign(design.name)}
            >
              <div className="bg-gray-100 h-48 rounded-lg mb-2 overflow-hidden group-hover:shadow-lg transition-shadow">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-4xl">{design.name[0]}</span>
                </div>
              </div>
              <h3 className="font-medium">{design.name}</h3>
              <div className="flex items-center text-sm text-gray-600">
                <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                <span>{design.rating}</span>
                <span className="mx-2">•</span>
                <span>{design.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="bg-white p-6 rounded-lg mb-8">
        <div className="flex items-center mb-6">
          <Clock className="w-6 h-6 mr-2" />
          <h2 className="text-2xl font-bold">Recently Viewed Designs</h2>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-100 h-24 rounded-lg hover:shadow-md transition-shadow" />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white p-6 rounded-lg mb-8">
        <div className="flex items-center mb-6">
          <HelpCircle className="w-6 h-6 mr-2" />
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "How do I redeem my gift card?",
              a: "Enter your claim code on the Amazon Gift Cards page or during checkout."
            },
            {
              q: "Can I use my gift card internationally?",
              a: "Gift cards can only be redeemed on the Amazon website for the country where they were purchased."
            },
            {
              q: "Do Amazon Gift Cards expire?",
              a: "No, Amazon Gift Cards never expire and can be used anytime."
            }
          ].map((faq) => (
            <details key={faq.q} className="bg-gray-50 rounded-lg p-4">
              <summary className="font-medium cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Special Offer!</h2>
            <p className="mb-4">Get a $10 promotional credit when you buy $100 in gift cards</p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 py-2 px-6 rounded-lg font-medium">
              Learn More
            </button>
          </div>
          <div className="hidden md:block">
            <div className="text-6xl">🎁</div>
          </div>
        </div>
      </div>

      {/* Corporate Gift Cards */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl p-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Business Gift Cards</h2>
            <p className="text-gray-600 mb-4">Perfect for employee rewards and business gifts</p>
            <button className="bg-[#232f3e] text-white hover:bg-[#374357] py-2 px-6 rounded-lg font-medium">
              Learn More
            </button>
          </div>
          <div className="w-1/3">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="font-bold mb-2">Business Benefits</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Bulk ordering available</li>
                <li>• Corporate discounts</li>
                <li>• Customization options</li>
                <li>• Detailed reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Help & Support */}
      <div className="bg-white p-6 rounded-lg mt-8">
        <h2 className="text-xl font-bold mb-4">Need Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 p-4 rounded-lg">
            <HelpCircle className="w-5 h-5" />
            <span>Contact Support</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 p-4 rounded-lg">
            <Mail className="w-5 h-5" />
            <span>Email Us</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 p-4 rounded-lg">
            <Clock className="w-5 h-5" />
            <span>Check Status</span>
          </button>
        </div>
      </div>
    </div>
  )
}
