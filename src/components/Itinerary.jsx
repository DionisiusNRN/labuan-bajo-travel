function Itinerary() {
  const days = [
    {
      day: "Hari 1",
      title: "Kedatangan & Island Hopping",
      activities: [
        "Meeting Point Labuan Bajo",
        "Kelor Island",
        "Manjarite Snorkeling",
        "Sunset di Kalong Island",
      ],
    },
    {
      day: "Hari 2",
      title: "Explore Komodo National Park",
      activities: [
        "Trekking Pulau Padar",
        "Pink Beach",
        "Komodo Island",
        "Manta Point",
      ],
    },
    {
      day: "Hari 3",
      title: "Relax & Pulang",
      activities: [
        "Breakfast On Boat",
        "Dokumentasi Terakhir",
        "Kembali ke Labuan Bajo",
        "Trip Selesai",
      ],
    },
  ];

  return (
    <section id="itinerary" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold">ITINERARY</span>

          <h2 className="text-4xl font-bold mt-2">Gambaran Perjalananmu</h2>

          <p className="text-gray-600 mt-4">
            Jadwal dapat menyesuaikan kondisi cuaca dan operasional di lapangan.
          </p>
        </div>

        <div className="space-y-8">
          {days.map((item, index) => (
            <div key={item.day} className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                {index !== days.length - 1 && (
                  <div className="w-1 h-40 bg-sky-200 mt-2"></div>
                )}
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 flex-1 shadow-sm">
                <h3 className="text-2xl font-bold">{item.day}</h3>

                <p className="text-sky-600 font-medium mt-1">{item.title}</p>

                <ul className="mt-5 space-y-2">
                  {item.activities.map((activity) => (
                    <li key={activity} className="flex gap-2">
                      <span>📍</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Itinerary;
