# UAS Pemrograman Web 2

## Sistem Manajemen Inventaris Barang (E-Inventory)

### Identitas Mahasiswa

* Nama : Aditya
* NIM : 312410264
* Mata Kuliah : Pemrograman Web 2
* Dosen Pengampu : Agung Nugroho, S.Kom., M.Kom., S.Kom., M. Kom
---

## Deskripsi Proyek

E-Inventory merupakan aplikasi manajemen inventaris barang berbasis web yang digunakan untuk mengelola data barang dan kategori barang. Sistem ini dibangun menggunakan arsitektur Decoupled Architecture dengan pemisahan antara Backend REST API dan Frontend Single Page Application (SPA).

Aplikasi menyediakan fitur autentikasi menggunakan Bearer Token, pengelolaan data kategori, pengelolaan data barang, serta dashboard administrator.

---

## Teknologi Yang Digunakan

### Backend

* PHP 8.x
* CodeIgniter 4
* RESTful API
* MySQL / MariaDB
* Bearer Token Authentication
* CORS Filter

### Frontend

* VueJS 3 (CDN)
* Vue Router
* Axios
* TailwindCSS

### Tools

* Visual Studio Code
* XAMPP
* phpMyAdmin
* Git
* GitHub
* Postman

---

## Struktur Folder

```text
UAS_Web2_NIM_Nama
│
├── backend-api
│
├── frontend-spa
│
└── README.md
```

---

## Fitur Aplikasi

### Pengunjung (Public)

* Melihat halaman beranda
* Mengakses halaman login

### Administrator

* Login sistem
* Logout sistem
* Melihat dashboard
* Menambah kategori
* Mengubah kategori
* Menghapus kategori
* Melihat data barang
* Menambah barang
* Mengubah barang
* Menghapus barang

---

## Struktur Database

Database yang digunakan bernama:

```sql
inventory_db
```

Tabel:

1. users
2. kategori
3. barang

### Relasi Database

kategori (1) ---- (N) barang

---

## Screenshot Database Designer

<img width="223" height="122" alt="Database" src="https://github.com/user-attachments/assets/d429ddb9-6981-445e-8a98-e94211232b87" />

<img width="924" height="157" alt="Database2" src="https://github.com/user-attachments/assets/852b225d-2841-4f5f-894e-a6e09574b487" />


---

## Endpoint API

### Login

```http
POST /login
```

### Kategori

```http
GET     /kategori
POST    /kategori
PUT     /kategori/{id}
DELETE  /kategori/{id}
```

### Barang

```http
GET     /barang
POST    /barang
PUT     /barang/{id}
DELETE  /barang/{id}
```

---

## Pengujian API 401 Unauthorized

Tambahkan screenshot hasil pengujian Postman ketika endpoint diakses tanpa Bearer Token.

<img width="712" height="526" alt="401 Unauthorized" src="https://github.com/user-attachments/assets/304e0385-3e62-4880-88e4-233dcbcb5141" />

---


### Halaman Login


<img width="728" height="544" alt="Screenshot_31" src="https://github.com/user-attachments/assets/e4dd6c0c-fc2a-46f9-aebc-6e8498016f22" />



<img width="506" height="313" alt="Login" src="https://github.com/user-attachments/assets/c3befc78-1f28-4412-a889-f04ff7d3baa4" />


### Dashboard Administrator


<img width="346" height="125" alt="Screenshot_33" src="https://github.com/user-attachments/assets/e6edc053-c3d2-4133-a0ad-eda245b72c38" />


### Tabel Data Barang

<img width="1249" height="546" alt="Barang" src="https://github.com/user-attachments/assets/8f32c4d5-06f8-447f-b3f9-c6a2df40eacc" />


### Tabel Data Kategori


<img width="1254" height="364" alt="Screenshot_34" src="https://github.com/user-attachments/assets/0f1d6872-0470-42dc-a882-b6ae4915a5b8" />
---

## Cara Menjalankan Backend

### 1. Clone Repository

```bash
git clone https://github.com/USERNAME/UAS_Web2_NIM_Nama.git
```

### 2. Masuk ke Folder Backend

```bash
cd backend-api
```

### 3. Install Dependency

```bash
composer install
```

### 4. Konfigurasi Database

Buat database:

```sql
inventory_db
```

Import file SQL yang telah disediakan.

### 5. Jalankan Server

```bash
php spark serve
```

Backend akan berjalan pada:

```text
http://localhost:8080
```

---

## Cara Menjalankan Frontend

Masuk ke folder:

```bash
cd frontend-spa
```

Jalankan menggunakan Live Server pada Visual Studio Code.

Frontend akan berjalan pada:

```text
http://127.0.0.1:5500
```

---

## Akun Login

```text
Username : admin
Password : admin123
```

---

## Link Repository GitHub

https://github.com/Addie8475/UAS_Web2_312410264_Aditya_Deza_Aulia

---

---

## Link Video Presentasi

https://youtu.be/k6oumC03ZPE
---

## Kesimpulan

Sistem Manajemen Inventaris Barang berhasil dibangun menggunakan arsitektur terpisah (Decoupled Architecture) dengan Backend REST API CodeIgniter 4 dan Frontend SPA VueJS. Sistem telah memenuhi kebutuhan pengelolaan inventaris dasar, autentikasi token, pengamanan endpoint, serta manajemen data barang dan kategori sesuai ketentuan tugas UAS Pemrograman Web 2.


## Screenshot



<img width="272" height="324" alt="Is Logged in" src="https://github.com/user-attachments/assets/a039c95a-92a6-4aea-a2d1-b01f9fe8f0a6" />








