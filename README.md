Sistem Informasi Laundry Rizki (React Demo)
Dokumen ini menjelaskan versi React murni dari Sistem Informasi Laundry Rizki, siap untuk demo dan publikasi akademik. Backend CI4 bersifat opsional untuk versi produksi atau integrasi lebih lanjut.

1. Pendahuluan
Website ini dibuat menggunakan ReactJS + Vite untuk memberikan UI/UX interaktif dan responsif. Semua data bersifat mock JSON, sehingga tidak memerlukan backend untuk demo awal.

2. Tujuan
Menyediakan demo website interaktif tanpa setup backend.
Memudahkan tim Etika Profesi melihat UI/UX langsung.
Menyediakan dasar integrasi backend CI4 untuk versi produksi.
3. Teknologi
ReactJS + Vite → UI/UX interaktif
JSON (Mock Data) → Data dinamis untuk demo
Opsional: CI4 → Backend untuk produksi
4. Struktur Proyek

Copy code
Laundry-React/
├─ public/
│ ├─ settings.json # Data dinamis
│ └─ index.html
├─ src/
│ ├─ components/ # Komponen React
│ ├─ pages/ # Halaman React
│ └─ App.jsx
├─ package.json
└─ vite.config.js
Versi CI4 menambahkan folder app/ dan public/assets/ dari hasil build React.

5. Instalasi & Menjalankan
Clone repository:

bash

Copy code
git clone https://github.com/<username>/Laundry-React.git
cd Laundry-React
Install dependensi:

bash

Copy code
npm install
Jalankan dev server React:

bash

Copy code
npm run dev
Buka browser:


Copy code
http://localhost:5173
Website berjalan penuh menggunakan React tanpa backend. Semua data berasal dari public/settings.json.

6. Contoh Data (public/settings.json)
json
12 lines
Copy code
Download code
Click to expand
{
"namaLaundry": "Laundry Rizki",
...
Edit JSON ini untuk melihat perubahan langsung di React tanpa rebuild.

7. Opsional Integrasi CI4
Untuk versi produksi:

Build React:

bash

Copy code
npm run build
Pindahkan folder dist/ ke:


Copy code
CI4/public/
CI4 akan melayani index.html dan assets React. API CI4 dapat digunakan untuk data dinamis lebih lanjut.

8. Keunggulan
Standalone → Bisa dijalankan hanya dengan React.
Editable → Data dapat diubah via JSON.
Siap demo/publikasi → Tim Etika Profesi langsung bisa jalankan.
Fleksibel → Mudah dikembangkan ke CI4 untuk produksi atau HKI.
9. Penyusun
Nama: Faris Dzulfiqar dan tim Etika Profesi
Program Studi: Teknik Informatika
Proyek: Sistem Informasi Laundry Rizki
Tahun: 2025
