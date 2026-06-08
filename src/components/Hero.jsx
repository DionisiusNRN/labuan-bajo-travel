function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
          ✨ Explore Surga Timur Indonesia
        </span>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Jelajahi Surga Timur Indonesia
          <br />
          <span className="text-sky-300">
            Liburan Tak Terlupakan di Labuan Bajo
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Nikmati pengalaman liburan yang praktis, aman, dan penuh petualangan
          tanpa repot mengatur itinerary sendiri.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
          <a
            href="#paket"
            className="bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-full font-semibold transition"
          >
            Pesan Sekarang
          </a>

          <a
            href="#itinerary"
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition"
          >
            Cek Jadwal Trip
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-16">
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-gray-300">Traveler</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">4.9★</h3>
            <p className="text-gray-300">Rating</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-gray-300">Transparan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
