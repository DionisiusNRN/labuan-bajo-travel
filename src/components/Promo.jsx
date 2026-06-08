function Promo() {
  return (
    <section className="py-24 bg-sky-600 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-white/20">
          🔥 PROMO TERBATAS
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-6">
          Diskon Hingga 20% Untuk Booking Bulan Ini
        </h2>

        <p className="mt-6 text-lg text-sky-100 max-w-3xl mx-auto">
          Jangan lewatkan kesempatan menikmati keindahan Labuan Bajo dengan
          harga spesial. Kuota trip terbatas setiap keberangkatan.
        </p>

        <div className="mt-10">
          <a
            href="#paket"
            className="inline-block bg-white text-sky-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Lihat Paket Promo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Promo;
