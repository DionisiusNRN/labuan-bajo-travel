function Navbar() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Destinasi", href: "#destinasi" },
    { name: "Paket", href: "#paket" },
    { name: "Itinerary", href: "#itinerary" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold text-sky-600">
            LabuanBajoTrip
          </a>

          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-sky-600 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#paket"
            className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full transition"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
