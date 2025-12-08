import useScrollReveal from "../hooks/useScrollReveal";

export default function ProductCard({ title, desc, price, reveal = false }) {
  // Hook harus tetap dipanggil
  const ref = useScrollReveal();

  return (
    <div
      ref={reveal ? ref : null}   // gunakan ref hanya jika reveal = true
      className="bg-dark1 p-6 rounded-xl border border-white/10 shadow hover:-translate-y-1 transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-3">{desc}</p>
      <p className="text-accent font-semibold">{price}</p>
    </div>
  );
}
