import { useEffect, useRef } from "react";

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.style.opacity = 0;
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = 1;
            element.style.transform = "translateY(0px)";
          }
        });
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, options]);

  return ref;
}
