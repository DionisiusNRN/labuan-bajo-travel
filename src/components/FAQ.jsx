import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Kapan waktu terbaik ke Labuan Bajo?",
      answer:
        "April hingga November biasanya menjadi periode favorit karena cuaca cenderung cerah dan laut lebih tenang.",
    },
    {
      question: "Apa saja yang perlu dibawa?",
      answer:
        "Sunblock, pakaian ganti, topi, sandal outdoor, obat pribadi, dan kamera untuk mengabadikan momen perjalanan.",
    },
    {
      question: "Apakah trip aman untuk solo traveler?",
      answer:
        "Ya. Banyak peserta open trip berasal dari solo traveler sehingga mudah berkenalan dan berbagi pengalaman.",
    },
    {
      question: "Bagaimana kebijakan refund?",
      answer:
        "Refund mengikuti ketentuan yang berlaku dan bergantung pada waktu pembatalan sebelum tanggal keberangkatan.",
    },
    {
      question: "Apakah tersedia dokumentasi?",
      answer:
        "Ya. Paket tertentu sudah termasuk dokumentasi foto dan video selama perjalanan.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold">FAQ</span>

          <h2 className="text-4xl font-bold mt-2">
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>

                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
