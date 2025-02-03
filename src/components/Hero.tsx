export function Hero() {
  return (
    <div className="relative mt-2">
      <div className="absolute w-full h-full bg-gradient-to-t from-gray-100 to-transparent z-10" />
      <img
        src="https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg"
        alt="Hero"
        className="w-full h-[600px] object-cover"
      />
      
      <div className="absolute bottom-0 w-full p-4 z-20">
        <div className="grid grid-cols-4 gap-4">
          {[
            {
              title: "Electronics",
              image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
            },
            {
              title: "Fashion",
              image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418608878_.jpg",
            },
            {
              title: "Home & Kitchen",
              image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg",
            },
            {
              title: "Books",
              image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Books_1X._SY304_CB417582228_.jpg",
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
