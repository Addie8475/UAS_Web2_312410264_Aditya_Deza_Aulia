import api from "../api.js";

export default {

data() {

    return {
        kategori: [],
        nama_kategori: "",
        error: ""
    }

},

async mounted() {

    this.loadData();

},

methods: {

    async loadData() {

        const res = await api.get("kategori");

        this.kategori = res.data;

    },

    async tambah() {

        // Validasi input kosong
        if (!this.nama_kategori.trim()) {
            this.error = "Nama kategori harus diisi!";
            return;
        }

        try {

            await api.post("kategori", {
                nama_kategori: this.nama_kategori
            });

            this.nama_kategori = "";
            this.error = "";

            this.loadData();

            alert("Kategori berhasil ditambahkan");

        } catch (err) {

            alert("Gagal menambahkan kategori");

        }

    }

},

template: `

<div class="p-5">

    <h1 class="text-2xl font-bold mb-4">
        Data Kategori
    </h1>

    <div class="mb-3">
        <input
            v-model="nama_kategori"
            placeholder="Nama Kategori"
            class="border p-2 rounded w-64"
        />

        <button
            @click="tambah"
            class="bg-blue-500 text-white px-3 py-2 ml-2 rounded hover:bg-blue-600"
        >
            Tambah
        </button>

        <p
            v-if="error"
            class="text-red-500 text-sm mt-2"
        >
            {{ error }}
        </p>
    </div>

    <table class="w-full mt-5 border border-gray-300">
        <tr class="bg-gray-200">
            <th class="border p-2">ID</th>
            <th class="border p-2">Nama</th>
        </tr>

        <tr
            v-for="k in kategori"
            :key="k.id"
        >
            <td class="border p-2">{{ k.id }}</td>
            <td class="border p-2">{{ k.nama_kategori }}</td>
        </tr>

    </table>

</div>

`

}