import useScrollReveal from "../hooks/useScrollReveal";
import ProductCard from "../components/ProductCard";

export default function Produk() {

  // Reveal untuk judul & paragraf
  const titleRef = useScrollReveal();
  const descRef = useScrollReveal();

  return (
    <div className="pt-24 px-6 pb-20 text-white">

      {/* Judul */}
      <h1
        ref={titleRef}
        className="text-3xl font-bold mb-6 text-center"
      >
        Layanan Laundry
      </h1>

      {/* Deskripsi */}
      <p
        ref={descRef}
        className="text-gray-300 text-center max-w-2xl mx-auto mb-12"
      >
        Pilihan layanan laundry terbaik untuk kebutuhan pakaian dan perawatan harian Anda.
      </p>

      {/* Grid Produk */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 */}
        <ProductCard
          title="Laundry Kiloan"
          desc="Pakaian bersih, wangi, dan rapi."
          price="Mulai 7.000/kg"
          reveal
        />

        {/* Card 2 */}
        <ProductCard
          title="Setrika"
          desc="Setrika rapi dan licin."
          price="Mulai 4.000/kg"
          reveal
        />

        {/* Card 3 */}
        <ProductCard
          title="Express"
          desc="Selesai 3–6 jam."
          price="Tambah 5.000/kg"
          reveal
        />

        {/* Card 4 */}
        <ProductCard
          title="Laundry Sepatu"
          desc="Deep cleaning sepatu."
          price="Mulai 20.000/pasang"
          reveal
        />

      </div>

    </div>
  );
}
