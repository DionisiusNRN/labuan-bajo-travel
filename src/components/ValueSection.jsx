function ValueSection() {
  const values = [
    {
      icon: "💰",
      title: "Harga Transparan",
      description:
        "Tidak ada biaya tersembunyi. Semua harga dan fasilitas dijelaskan sejak awal.",
    },
    {
      icon: "🏝️",
      title: "Destinasi Terpopuler",
      description:
        "Pulau Padar, Pink Beach, Pulau Komodo, Manta Point dan banyak spot terbaik lainnya.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Untuk Semua Traveler",
      description:
        "Cocok untuk solo traveler, pasangan, honeymoon, keluarga maupun grup perusahaan.",
    },
  ];

  const destinations = [
    {
      name: "Pulau Padar",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      name: "Pink Beach",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    },
    {
      name: "Komodo Island",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    },
  ];

  return (
    <section id="destinasi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Kenapa Memilih Labuan Bajo Trip?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Kami menghadirkan pengalaman wisata yang aman, nyaman, dan penuh
            petualangan tanpa perlu repot mengatur perjalanan sendiri.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {values.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 p-8 rounded-3xl hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>

              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <span className="text-sky-600 font-semibold">DESTINASI FAVORIT</span>

          <h2 className="text-4xl font-bold mt-2">
            Tempat yang Akan Kamu Jelajahi
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueSection;
