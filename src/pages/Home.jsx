import useScrollReveal from "../hooks/useScrollReveal";
import ProductCard from "../components/ProductCard";
import useConfig from "../hooks/useConfig";
import SimpleSlider from "../components/SimpleSlider";

export default function Home() {
  const config = useConfig();

  // Semua hooks harus dipanggil di atas kondisi apa pun untuk mematuhi Rules of Hooks.
  // Hooks tidak boleh dipanggil secara kondisional atau setelah early return.
  const heroTitle = useScrollReveal();
  const heroText = useScrollReveal();
  const heroButtons = useScrollReveal();
  const produkTitle = useScrollReveal();
  const produkDesc = useScrollReveal();
  const mapFrame = useScrollReveal({ transform: "translateY(20px)" });

  // Tambahkan semua useScrollReveal lainnya di sini
  const tentangTitle = useScrollReveal({ transform: "translateY(20px)" });
  const tentangDesc = useScrollReveal({ transform: "translateX(-20px)" });
  const jamOp = useScrollReveal({ transform: "translateY(20px)" });
  const alamat = useScrollReveal({ transform: "translateY(20px)" });
  const imageSide = useScrollReveal({ transform: "translateX(20px)" });
  const kontakTitle = useScrollReveal({ transform: "translateY(20px)" });
  const kontakPara = useScrollReveal({ transform: "translateY(20px)" });
  const infoKontak = useScrollReveal({ transform: "translateY(10px)" });
  const btnWA = useScrollReveal({ transform: "scale(0.9)" });
  const btnTG = useScrollReveal({ transform: "scale(0.9)" });

  const galleryImages = [
    "/img/foto1.jpg",
    "/img/foto2.jpg",
    "/img/foto3.jpg"
  ];

  if (!config) return <p className="text-white p-10">Memuat data...</p>;

  return (  
    <div className="bg-dark2 min-h-screen pt-24 text-white">

      {/* ============================
          HERO SECTION
      ============================ */}
      <section className="bg-dark1 text-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center md:text-left">

          {/* Title */}
          <h1
            ref={heroTitle}
            className="text-4xl md:text-5xl font-bold mb-4 flex gap-3 justify-center md:justify-start items-center"
          >
            {/* Static text */}
            <span className="text-white" style={{ fontFamily: "Montserrat" }}>
              RIZKI
            </span>
            
            {/* Animated text */}
            <span
              className="relative overflow-hidden h-[60px] inline-block"
              style={{ width: "270px" }}
            >
              <span
                className="absolute top-0 left-0 animate-verticalSlider text-accent font-light flex flex-col"
                style={{ fontFamily: "Poppins", lineHeight: "60px" }}
              >
                <span className="whitespace-nowrap">Laundry</span>
                <span className="whitespace-nowrap">Clean Care</span>
                <span className="whitespace-nowrap">Fresh Wash</span>
                <span className="whitespace-nowrap">Premium</span>
                <span className="whitespace-nowrap">Express</span>
              </span>
            </span>
           </h1>

          {/* Subtitle */}
          <p ref={heroText} className="text-lg text-gray-300 max-w-2xl mb-8">
            {config?.tagline}
          </p>

          {/* CTA Buttons */}
          <div
            ref={heroButtons}
            className="flex flex-col md:flex-row gap-4 md:gap-6"
          >
            {/* Button 1 - Scroll to Produk */}
            <button
              onClick={() => {
                document
                  .getElementById("produk-section")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-accent text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#00eab2] transition"
            >
              Lihat Layanan
            </button>

            {/* Button 2 - WhatsApp */}
            <a
              href={`https://wa.me/${config?.kontak?.whatsapp}`}
              target="_blank"
              className="border border-accent text-accent font-semibold py-3 px-6 rounded-lg hover:bg-accent hover:text-black transition"
            >
              Hubungi via WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* ============================
          PRODUK SECTION (Home)
      ============================ */}
      <section id="produk-section" className="bg-dark2 px-6 py-20">

        {/* Title */}
        <h2
          ref={produkTitle}
          className="text-3xl font-bold text-center mb-4"
        >
          Layanan Kami
        </h2>

        {/* Subtitle */}
        <p
          ref={produkDesc}
          className="text-gray-300 text-center max-w-2xl mx-auto mb-12"
        >
          Pilihan layanan terbaik yang kami sediakan untuk memenuhi kebutuhan laundry harian Anda.
        </p>

        {/* Grid Produk */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config?.layanan?.map((item, index) => (
            <ProductCard
              key={index}
              title={item.nama}
              desc={item.desc}
              price={item.harga}
              reveal
            />
          ))}
        </div>
      </section>

      {/* Tentang Section */}
      <section className="bg-dark3 text-white px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Text Side */}
          <div>
            <h2
              ref={tentangTitle}
              className="text-3xl font-bold mb-6"
            >
              Tentang {config?.namaLaundry}
            </h2>

            <div
              ref={tentangDesc}
              className="border-l-4 border-accent pl-4"
            >
              <p className="text-gray-300 leading-relaxed mb-4">
                {config?.tentang?.paragraf1} merupakan layanan laundry profesional yang berfokus pada
                kualitas cucian bersih, wangi, dan rapi. Kami melayani berbagai kebutuhan 
                laundry harian seperti pakaian, jas, selimut, hingga sepatu.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Dengan proses pencucian higienis dan tenaga berpengalaman, Laundry Rizki 
                selalu berusaha memberikan pelayanan terbaik untuk kepuasan pelanggan.
              </p>

              <p className="text-gray-300 leading-relaxed mb-4">
                Kami buka setiap hari — siap membantu kebutuhan laundry Anda kapan pun.
              </p>
            </div>

            {/* Card Info */}
            <div className="mt-8 space-y-4">
              {/* Jam Operasional */}
                <div
                  ref={jamOp}
                  className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-4"
                >
                  <p className="text-accent font-semibold">Jam Operasional</p>
                  <p className="text-gray-300 text-sm">
                    {config?.operasional?.hari}: {config?.operasional?.jam}
                  </p>
                </div>


              {/* Alamat */}
              <div
                ref={alamat}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-4"
              >
                <p className="text-accent font-semibold">Alamat</p>
                <p className="text-gray-300 text-sm">
                   {config?.kontak?.alamat}
                </p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div
            ref={imageSide}
            className="w-full max-w-sm h-64 overflow-hidden rounded-xl border border-white/10"
          >
            <SimpleSlider images={galleryImages} />
          </div>


        </div>
      </section>

      {/* Kontak Section */}
      <section className="w-full">
        <div className="grid md:grid-cols-2">

          {/* ======================================
              Kiri: Info Kontak
          ======================================= */}
          <div className="bg-dark2 text-white px-6 py-20 flex flex-col justify-center">

            {/* Judul */}
            <h2
              ref={kontakTitle}
              className="text-3xl font-bold mb-6"
            >
              Hubungi Kami
            </h2>

            {/* Paragraf */}
            <p
              ref={kontakPara}
              className="text-gray-300 mb-4"
            >
              {config?.namaLaundry} siap membantu kebutuhan laundry Anda setiap hari.
            </p>

            {/* Info Kontak */}
            <div
              ref={infoKontak}
              className="space-y-3 text-gray-300"
            >
              <p>
                <span className="text-accent font-semibold">Alamat:</span><br />
                {config?.kontak?.alamat}
              </p>

              <p>
                <span className="text-accent font-semibold">WhatsApp:</span><br />
                {config?.kontak?.whatsapp}
              </p>

              <p>
                <span className="text-accent font-semibold">Telegram:</span><br />
                {config?.kontak?.telegram}
              </p>
            </div>

            {/* Tombol CTA */}
            <div className="mt-8 space-y-4">

              {/* Tombol WhatsApp */}
              <a
                ref={btnWA}
                href={`https://wa.me/${config?.kontak?.whatsapp}`}
                target="_blank"
                className="w-full bg-accent text-black font-semibold py-3 px-6 rounded-lg 
                          shadow-md hover:bg-[#00eab2] transition inline-block text-center"
              >
                Hubungi via WhatsApp
              </a>

              {/* Tombol Telegram */}
              <a
                ref={btnTG}
                href={`https://t.me/${config?.kontak?.telegram.replace('@','')}`}
                target="_blank"
                className="w-full border border-accent text-accent font-semibold py-3 px-6 
                          rounded-lg hover:bg-accent hover:text-black transition inline-block text-center"
              >
                Hubungi via Telegram
              </a>
            </div>

          </div>

          {/* ======================================
              Kanan: Google Maps Embed
          ======================================= */}
          <div className="bg-dark3 px-6 py-20 flex items-center justify-center">
            <div
              ref={mapFrame}
              className="
                w-full 
                max-w-full md:max-w-md
                h-80 md:h-64
                bg-white/10 border border-white/10 rounded-xl 
                backdrop-blur flex items-center justify-center overflow-hidden
              "
            >
              {config?.kontak?.googleMapsEmbed ? (
                <iframe
                  src={config.kontak.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <p className="text-gray-300">Memuat peta...</p>
              )}
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}
