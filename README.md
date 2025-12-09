# Sistem Informasi Laundry Rizki
## Frontend ReactJS (Versi Demo) dengan Opsional Integrasi CI4

Dokumen ini disusun sebagai bagian dari dokumentasi proyek akademik
pada pengembangan Sistem Informasi Laundry Rizki. Versi ini **React murni**
untuk keperluan demo dan publikasi awal. Backend CI4 bersifat opsional
untuk pengembangan lanjutan atau versi produksi.

---

## 1. Pendahuluan
Sistem Informasi Laundry Rizki dirancang untuk memberikan layanan informasi yang
dinamis dan interaktif. Frontend menggunakan **ReactJS** untuk UI/UX
yang responsif. Versi ini dapat dijalankan tanpa backend, menggunakan
**mock JSON** sebagai sumber data.

---

## 2. Tujuan Pengembangan
1. Membuat website interaktif dan responsif menggunakan ReactJS.  
2. Mempermudah tim melihat antarmuka tanpa harus setup backend.  
3. Memberikan versi awal untuk publikasi atau demo akademik.  
4. Menyediakan dasar untuk integrasi lebih lanjut dengan CI4 jika diperlukan.  

---

## 3. Teknologi yang Digunakan
- **ReactJS + Vite** – Untuk membangun UI/UX interaktif.  
- **JSON (Mock Data)** – Data dinamis untuk demo tanpa backend.  
- **Opsional: CodeIgniter 4** – Bisa digunakan untuk versi produksi atau integrasi backend.  

---

## 4. Struktur Proyek (React)

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

## 5. Cara Menjalankan Sistem

### 5.1 Instalasi
1. Clone repository:
    `git clone https://github.com/<username>/Laundry-React.git`
2. Masuk ke direktori proyek:

   `cd Laundry-React`

3. Install dependensi:

    `npm install`
   
## 5.2 Menjalankan React Dev Server
    `npm run dev`

Akses:

http://localhost:5173

 (atau port yang muncul di terminal)

>Sistem berjalan penuh di React tanpa backend. Untuk demo publik, semua data
berasal dari public/settings.json.


---

## 6. Mekanisme Pembaruan Data
Semua informasi website bisa diedit melalui:

`public/settings.json`
    
Perubahan akan langsung terlihat di React tanpa rebuild.
Contoh:

       {
      "namaLaundry": "Laundry Rizki",
      "tagline": "Cepat, bersih, wangi — layanan laundry profesional untuk Anda.",
      "kontak": {
        "whatsapp": "6281234567890",
        "telegram": "@laundry_rizki"
      },
      "layanan": [
        { "nama": "Cuci Kering", "harga": "Rp15.000" }
      ]
    }

---

## 7. Opsional Integrasi dengan CI4
Untuk versi produksi atau deployment:

1. Build React:
   
    `npm run build`
   
2. Pindahkan folder dist/ ke:

    `CI4/public/`

3. CI4 akan melayani index.html dan static assets React.
4. API CI4 dapat digunakan untuk data dinamis lebih lanjut.


---

## 8. Keunggulan Sistem

1. Standalone – Bisa dijalankan hanya dengan React.
2. Editable – Semua data bisa diubah via JSON.
3. Demo siap publikasi – Tim Etika Profesi langsung bisa menjalankan.
4. Integrasi fleksibel – Bisa dikembangkan untuk HKI dengan backend CI4.

---

## 9. Kesimpulan
Versi ini menekankan React murni untuk demo dan publikasi akademik.
CI4 hanya bersifat opsional untuk versi produksi atau pengembangan lanjutan.
Pendekatan ini memudahkan tim melihat UI/UX tanpa setup backend kompleks.

---

## 10. Informasi Penyusun

# Nama: Faris Dzulfiqar dan tim Etika Profesi
# Program Studi: Teknik Informatika
# Proyek: Sistem Informasi Laundry Rizki
# Tahun: 2025
