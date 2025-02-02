export function Footer() {
  const footerLinks = [
    {
      title: "Get to Know Us",
      links: ["Careers", "Blog", "About Amazon", "Investor Relations", "Amazon Devices"],
    },
    {
      title: "Make Money with Us",
      links: ["Sell products on Amazon", "Sell on Amazon Business", "Become an Affiliate"],
    },
    {
      title: "Amazon Payment Products",
      links: ["Amazon Business Card", "Shop with Points", "Reload Your Balance"],
    },
    {
      title: "Let Us Help You",
      links: ["Your Account", "Your Orders", "Shipping Rates & Policies", "Help Center"],
    },
  ]

  return (
    <footer className="bg-[#232f3e] text-white mt-8">
      <div className="max-w-[1500px] mx-auto p-8">
        <div className="grid grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-2">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-300 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl font-bold">amazon</span>
            <span className="text-xs">.com</span>
          </div>
          <p className="text-sm text-gray-300">
            &copy; 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  )
}
