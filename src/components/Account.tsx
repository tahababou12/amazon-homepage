import { User, Package, Heart, CreditCard, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Account() {
  const sections = [
    {
      title: "Your Orders",
      icon: Package,
      description: "Track, return, or buy things again",
      link: "/orders"
    },
    {
      title: "Login & Security",
      icon: User,
      description: "Edit login, name, and mobile number",
      link: "/account/security"
    },
    {
      title: "Your Payments",
      icon: CreditCard,
      description: "Manage payment methods and settings",
      link: "/account/payments"
    },
    {
      title: "Your Lists",
      icon: Heart,
      description: "View, modify, and share your lists",
      link: "/lists"
    },
    {
      title: "Your Preferences",
      icon: Settings,
      description: "Manage your account preferences",
      link: "/account/preferences"
    }
  ]

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-3xl font-medium mb-6">Your Account</h1>

      <div className="grid grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.title}
            to={section.link}
            className="flex items-start p-4 border rounded-lg hover:bg-gray-50"
          >
            <section.icon size={24} className="mr-4 text-gray-600" />
            <div>
              <h2 className="text-lg font-medium">{section.title}</h2>
              <p className="text-sm text-gray-600">{section.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-medium mb-4">Account Settings</h2>
        <div className="bg-white p-6 border rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-medium">Personal Information</h3>
              <p className="text-sm text-gray-600">John Doe</p>
              <p className="text-sm text-gray-600">john.doe@example.com</p>
            </div>
            <button className="text-[#007185] hover:text-[#c7511f] hover:underline">
              Edit
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Password</h3>
              <p className="text-sm text-gray-600">Last changed 3 months ago</p>
            </div>
            <button className="text-[#007185] hover:text-[#c7511f] hover:underline">
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
