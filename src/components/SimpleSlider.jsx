import { useRef, useEffect, useState } from "react";
import "./slider.css";

export default function SimpleSlider({ images = [] }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  // simpan posisi awal swipe
  const startX = useRef(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Update posisi slide
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  // Touch gesture
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) setIndex((i) => (i + 1) % images.length);        // Geser kiri
    if (diff < -50) setIndex((i) => (i - 1 + images.length) % images.length); // Geser kanan
  };

  return (
    <div className="slider-container"
         onTouchStart={onTouchStart}
         onTouchEnd={onTouchEnd}
    >
      <div className="slider-track" ref={trackRef}>
        {images.map((img, i) => (
          <div className="slider-item" key={i}>
            <img src={img} alt={`Slide ${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
