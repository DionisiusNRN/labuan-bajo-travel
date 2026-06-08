function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-sky-400">LabuanBajoTrip</h3>

            <p className="mt-4 text-gray-400">
              Partner perjalanan terpercaya untuk menjelajahi keindahan Taman
              Nasional Komodo dan destinasi terbaik di Labuan Bajo.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Destinasi Populer</h4>

            <ul className="space-y-2 text-gray-400">
              <li>Pulau Padar</li>
              <li>Pink Beach</li>
              <li>Komodo Island</li>
              <li>Manta Point</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Hubungi Kami</h4>

            <ul className="space-y-2 text-gray-400">
              <li>📞 +62 812-3456-7890</li>
              <li>✉️ info@labuanbajotrip.com</li>
              <li>📍 Labuan Bajo, Flores</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 LabuanBajoTrip. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
