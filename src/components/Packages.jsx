function Packages() {
  const packages = [
    {
      title: "Open Trip 3D2N",
      price: "Rp 2.950.000",
      badge: "BEST SELLER",
      features: [
        "Island Hopping",
        "Explore Pulau Komodo",
        "Pink Beach",
        "Manta Point",
        "Free Dokumentasi",
      ],
    },
    {
      title: "Private Trip 3D2N",
      price: "Rp 4.950.000",
      badge: "FAVORITE",
      features: [
        "Private Boat",
        "Flexible Itinerary",
        "Pulau Padar",
        "Pink Beach",
        "Sunset Experience",
      ],
    },
    {
      title: "Honeymoon Package",
      price: "Rp 6.500.000",
      badge: "EXCLUSIVE",
      features: [
        "Private Cabin",
        "Romantic Dinner",
        "Sunset Sailing",
        "Premium Documentation",
        "Special Decoration",
      ],
    },
  ];

  return (
    <section id="paket" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold">PAKET WISATA</span>

          <h2 className="text-4xl font-bold mt-2">
            Pilih Paket Liburan Impianmu
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Mulai dari open trip hemat hingga private honeymoon eksklusif, semua
            sudah kami siapkan untuk perjalanan terbaikmu di Taman Nasional
            Komodo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
            >
              <span className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
                {item.badge}
              </span>

              <h3 className="text-2xl font-bold mt-6">{item.title}</h3>

              <div className="mt-4">
                <span className="text-4xl font-bold text-sky-600">
                  {item.price}
                </span>

                <p className="text-gray-500 mt-2">per orang</p>
              </div>

              <ul className="mt-8 space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span>✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-8 bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition"
              >
                Booking Sekarang
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
