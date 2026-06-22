export default {

methods:{

    logout(){

        localStorage.clear();

        this.$router.push("/login");
    }
},

template:`

<div class="p-5">

<h1 class="text-3xl font-bold">
Dashboard
</h1>

<div class="mt-5 space-x-2">

<router-link
to="/kategori"
class="bg-blue-500 text-white px-3 py-2 rounded"
>
Kategori
</router-link>

<router-link
to="/barang"
class="bg-green-500 text-white px-3 py-2 rounded"
>
Barang
</router-link>

<button
@click="logout"
class="bg-red-500 text-white px-3 py-2 rounded"
>
Logout
</button>

</div>

</div>

`
}