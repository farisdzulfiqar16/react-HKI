import { useEffect, useState } from "react";

export default function useConfig() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    // Default fetch path (relative) — ini akan membaca /settings.json
    // - saat dev React -> akan mengambil public/settings.json (React local)
    // - saat di-deploy di CI4 (ketika kamu copy build ke folder public CI4),
    //   CI4 juga punya settings.json sehingga /settings.json akan merujuk ke file CI4
    const url = "/settings.json";

    fetch(url, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setConfig(data))
      .catch((err) => {
        console.error("Config Load Error:", err);
        // sebagai fallback, bisa set default minimal agar UI tetap tampil
        setConfig(null);
      });
  }, []);

  return config;
}
