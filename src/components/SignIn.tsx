import { useState } from 'react'
import { Link } from 'react-router-dom'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle authentication logic here
    console.log('Sign in attempt:', { email, password })
  }

  return (
    <div className="min-h-screen flex flex-col items-center pt-8 bg-white">
      <Link to="/" className="mb-8">
        <div className="flex items-center">
          <span className="text-3xl font-bold">amazon</span>
          <span className="text-xs">.com</span>
        </div>
      </Link>

      <div className="w-[350px] p-6 border border-gray-300 rounded-lg">
        <h1 className="text-3xl font-normal mb-4">Sign in</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgb(228,121,17,50%)] outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgb(228,121,17,50%)] outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#f0c14b] border border-[#a88734] rounded-md py-1 px-2 hover:bg-[#f4d078]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-sm">
          <p className="text-gray-600">By continuing, you agree to Amazon's</p>
          <div className="space-x-1">
            <a href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
              Conditions of Use
            </a>
            <span>and</span>
            <a href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
              Privacy Notice
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 w-[350px]">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">New to Amazon?</span>
          </div>
        </div>

        <Link
          to="/register"
          className="mt-4 block w-full text-center border border-gray-300 rounded-md py-1 px-2 hover:bg-gray-100"
        >
          Create your Amazon account
        </Link>
      </div>
    </div>
  )
}
