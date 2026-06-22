import api from "../api.js";

export default {

data() {
    return {

        barang: [],
        kategori: [],

        form: {
            kategori_id: "",
            nama_barang: "",
            stok: 0
        }
    }
},

async mounted() {

    await this.loadKategori();
    await this.loadBarang();
},

methods: {

    async loadKategori() {

        try {

            const res = await api.get("kategori");

            this.kategori = res.data;

        } catch (err) {

            console.error(err);
        }
    },

    async loadBarang() {

        try {

            const res = await api.get("barang");

            this.barang = res.data;

        } catch (err) {

            console.error(err);
        }
    },

    async tambahBarang() {

        try {

            await api.post("barang", this.form);

            alert("Barang berhasil ditambahkan");

            this.form = {
                kategori_id: "",
                nama_barang: "",
                stok: 0
            };

            this.loadBarang();

        } catch (err) {

            console.error(err);

            alert("Gagal menambahkan barang");
        }
    },

    async hapusBarang(id) {

        const konfirmasi = confirm(
            "Yakin ingin menghapus barang ini?"
        );

        if (!konfirmasi) return;

        try {

            await api.delete(`barang/${id}`);

            alert("Barang berhasil dihapus");

            this.loadBarang();

        } catch (err) {

            console.error(err);

            alert("Gagal menghapus barang");
        }
    }
},

template: `

<div class="p-5">

    <h1 class="text-2xl font-bold mb-4">
        Data Barang
    </h1>

    <!-- FORM TAMBAH -->

    <div class="bg-white shadow rounded p-4 mb-5">

        <h2 class="text-lg font-bold mb-3">
            Tambah Barang
        </h2>

        <!-- Dropdown Kategori -->

        <select
            v-model="form.kategori_id"
            class="border p-2 w-full mb-3 rounded"
        >

            <option value="">
                Pilih Kategori
            </option>

            <option
                v-for="k in kategori"
                :key="k.id"
                :value="k.id"
            >
                {{ k.nama_kategori }}
            </option>

        </select>

        <input
            v-model="form.nama_barang"
            placeholder="Nama Barang"
            class="border p-2 w-full mb-3 rounded"
        />

        <input
            v-model="form.stok"
            type="number"
            placeholder="Jumlah Stok"
            class="border p-2 w-full mb-3 rounded"
        />

        <button
            @click="tambahBarang"
            class="bg-green-500 text-white px-4 py-2 rounded"
        >
            Tambah Barang
        </button>

    </div>

    <!-- TABEL -->

    <table class="w-full border border-gray-300">

        <thead>

            <tr class="bg-gray-200">

                <th class="border p-2">ID</th>
                <th class="border p-2">Nama Barang</th>
                <th class="border p-2">Kategori</th>
                <th class="border p-2">Stok</th>
                <th class="border p-2">Aksi</th>

            </tr>

        </thead>

        <tbody>

            <tr
                v-for="b in barang"
                :key="b.id"
            >

                <td class="border p-2">
                    {{ b.id }}
                </td>

                <td class="border p-2">
                    {{ b.nama_barang }}
                </td>

                <td class="border p-2">
                    {{ b.nama_kategori }}
                </td>

                <td class="border p-2">
                    {{ b.stok }}
                </td>

                <td class="border p-2">

                    <button
                        @click="hapusBarang(b.id)"
                        class="bg-red-500 text-white px-3 py-1 rounded"
                    >
                        Hapus
                    </button>

                </td>

            </tr>

        </tbody>

    </table>

</div>

`
}