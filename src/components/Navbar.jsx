import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuStyle = ({ isActive }) =>
    isActive
      ? "text-accent font-semibold"
      : "text-white font-medium hover:text-accent";

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-dark1/80 backdrop-blur border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-white font-semibold text-lg">
          Laundry Rizki
        </NavLink>

        {/* Wrapper untuk burger & menu */}
        <div className="flex items-center gap-3">

          {/* Inline Mobile Menu (Horizontal + Animated) */}
          <div
            className={`
              md:hidden flex items-center gap-4 text-sm
              transition-all duration-300
              ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3 pointer-events-none"}
            `}
          >
            <NavLink to="/" onClick={() => setOpen(false)} className={menuStyle}>Home</NavLink>
            <NavLink to="/produk" onClick={() => setOpen(false)} className={menuStyle}>Produk</NavLink>
            <NavLink to="/tentang" onClick={() => setOpen(false)} className={menuStyle}>Tentang</NavLink>
            <NavLink to="/kontak" onClick={() => setOpen(false)} className={menuStyle}>Kontak</NavLink>
          </div>

          {/* Hamburger (animate to X) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white flex flex-col justify-center space-y-1 transition-all"
          >
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`}
            ></span>
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
            ></span>
          </button>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={menuStyle}>Home</NavLink>
          <NavLink to="/produk" className={menuStyle}>Produk</NavLink>
          <NavLink to="/tentang" className={menuStyle}>Tentang</NavLink>
          <NavLink to="/kontak" className={menuStyle}>Kontak</NavLink>
        </div>

      </div>
    </nav>
  );
}
