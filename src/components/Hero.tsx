export function Hero() {
  return (
    <div className="relative mt-2">
      <div className="absolute w-full h-full bg-gradient-to-t from-gray-100 to-transparent z-10" />
      <img
        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2070"
        alt="Hero"
        className="w-full h-[600px] object-cover"
      />
      
      <div className="absolute bottom-0 w-full p-4 z-20">
        <div className="grid grid-cols-4 gap-4">
          {[
            {
              title: "Electronics",
              image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=500",
            },
            {
              title: "Fashion",
              image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=500",
            },
            {
              title: "Home & Kitchen",
              image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=500",
            },
            {
              title: "Books",
              image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=500",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <a href="#" className="text-[#007185] mt-2 inline-block hover:text-[#c7511f] hover:underline">
                Shop now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
