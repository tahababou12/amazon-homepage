export function Registry() {
  return (
    <div className="max-w-[1500px] mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Registry</h1>

      {/* Registry Types */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg text-center">
          <img
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8"
            alt="Wedding Registry"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Wedding Registry</h2>
          <p className="text-gray-600 mb-4">Create or find a wedding registry</p>
          <button className="bg-[#ffd814] hover:bg-[#f7ca00] py-2 px-4 rounded-lg font-medium">
            Get Started
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg text-center">
          <img
            src="https://images.unsplash.com/photo-1519689680058-324335c77eba"
            alt="Baby Registry"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Baby Registry</h2>
          <p className="text-gray-600 mb-4">Create or find a baby registry</p>
          <button className="bg-[#ffd814] hover:bg-[#f7ca00] py-2 px-4 rounded-lg font-medium">
            Get Started
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg text-center">
          <img
            src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a"
            alt="Birthday Registry"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Birthday Registry</h2>
          <p className="text-gray-600 mb-4">Create or find a birthday registry</p>
          <button className="bg-[#ffd814] hover:bg-[#f7ca00] py-2 px-4 rounded-lg font-medium">
            Get Started
          </button>
        </div>
      </div>

      {/* Featured Registries */}
      <div className="bg-white p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Registries</h2>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border p-4 rounded-lg">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-2"></div>
              <h3 className="font-bold mb-1">Registry Name</h3>
              <p className="text-sm text-gray-600">Event Date: June 2024</p>
            </div>
          ))}
        </div>
      </div>

      {/* Registry Benefits */}
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Registry Benefits</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              title: "Group Gifting",
              description: "Friends and family can contribute together"
            },
            {
              title: "Completion Discount",
              description: "Save on remaining items after your event"
            },
            {
              title: "Universal Registry",
              description: "Add items from any website"
            }
          ].map((benefit) => (
            <div key={benefit.title} className="text-center">
              <h3 className="font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
