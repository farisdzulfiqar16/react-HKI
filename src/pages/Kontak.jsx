import useConfig from "../hooks/useConfig";

export default function Kontak() {

  const config = useConfig();
  if (!config) return <p className="text-white p-10">Loading...</p>;

  return (
    <div className="pt-24 px-6 pb-20 text-white max-w-5xl mx-auto fade-in">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">Hubungi Kami</h1>

      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
        Silakan hubungi kami melalui WhatsApp atau Telegram untuk layanan cepat.
      </p>

      {/* ========================
          Tombol Kontak
      ========================= */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${config.kontak.whatsapp}`}
          target="_blank"
          className="bg-accent text-black font-semibold py-3 px-6 rounded-lg 
                     shadow-md hover:bg-[#00eab2] transition text-center"
        >
          WhatsApp
        </a>

        {/* Telegram */}
        <a
          href={`https://t.me/${config.kontak.telegram.replace("@", "")}`}
          target="_blank"
          className="border border-accent text-accent font-semibold py-3 px-6 
                     rounded-lg hover:bg-accent hover:text-black transition text-center"
        >
          Telegram
        </a>
      </div>

      {/* ========================
          Google Maps
      ========================= */}
      <div className="w-full h-64 bg-white/10 border border-white/10 rounded-xl 
                      backdrop-blur overflow-hidden">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4481.048934127361!2d110.4074783!3d-6.9813728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b65a321385d%3A0x4104880f566102b3!2sRIZKY%20LAUNDRY!5e1!3m2!1sid!2sid!4v1764981447058!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
}
