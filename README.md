# Sistem Informasi Laundry Rizki (React Demo)

Dokumen ini menjelaskan versi **React murni** dari Sistem Informasi Laundry Rizki,  
siap untuk demo dan publikasi akademik. Backend CI4 bersifat **opsional** untuk versi produksi atau integrasi lebih lanjut.

---

## 1. Pendahuluan
Website ini dibuat menggunakan **ReactJS + Vite** untuk memberikan UI/UX interaktif dan responsif.  
Semua data bersifat **mock JSON**, sehingga tidak memerlukan backend untuk demo awal.

---

## 2. Tujuan
- Menyediakan demo website interaktif tanpa setup backend.  
- Memudahkan tim Etika Profesi melihat UI/UX langsung.  
- Menyediakan dasar integrasi backend CI4 untuk versi produksi.  

---

## 3. Teknologi
- **ReactJS + Vite** → UI/UX interaktif  
- **JSON (Mock Data)** → Data dinamis untuk demo  
- **Opsional: CI4** → Backend untuk produksi  

---

## 4. Struktur Proyek
    Laundry-React/
    	public/
    		img/
    	settings.json
    	src/
    		components/
    			pages/ 
    		hooks/
    		pages/
    index.html
    App.jsx
    vite.config.js


> Versi CI4 menambahkan folder `app/` dan `public/assets/` dari hasil build React.

---

## 5. Instalasi & Menjalankan
1. Clone repository:

  - git clone https://github.com/<username>/Laundry-React.git
  - cd Laundry-React

2. Install dependensi:

  npm install

3. Jalankan dev server React:

  npm run dev

4. Buka browser:

  http://localhost:5173

Website berjalan penuh menggunakan React tanpa backend.
Semua data berasal dari public/settings.json.

Contoh Data (public/settings.json)

    {
      "namaLaundry": "Laundry Rizki",
      "tagline": "Cepat, bersih, wangi — layanan laundry profesional untuk Anda.",
      "kontak": {
        "whatsapp": "6281234567890",
        "telegram": "@laundry_rizki"
      },
      "layanan": [
        { "nama": "Cuci Kering", "harga": "Rp15.000" },
        { "nama": "Setrika Saja", "harga": "Rp10.000" }
      ]
    }

Edit JSON ini untuk melihat perubahan langsung di React tanpa rebuild.

---

## 7. Opsional Integrasi CI4
Untuk versi produksi:

1. Build React:
   
  npm run build
  
2. Pindahkan folder dist/ ke:

  CI4/public/

CI4 akan melayani index.html dan assets React.
API CI4 dapat digunakan untuk data dinamis lebih lanjut.

---

## 8. Keunggulan

- Standalone → Bisa dijalankan hanya dengan React.
- Editable → Data dapat diubah via JSON.
- Siap demo/publikasi → Tim Etika Profesi langsung bisa jalankan.
- Fleksibel → Mudah dikembangkan ke CI4 untuk produksi atau HKI.

---

## 9. Penyusun
- Nama: Faris Dzulfiqar dan tim Etika Profesi
- Program Studi: Teknik Informatika
- Proyek: Sistem Informasi Laundry Rizki
- Tahun: 2025
