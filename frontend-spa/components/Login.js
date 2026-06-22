import api from "../api.js";

export default {

data(){

    return{

        username:"",
        password:""
    }
},

methods:{

    async login(){

        try{

            const res = await api.post("login",{

                username:this.username,
                password:this.password

            });

            localStorage.setItem(
                "token",
                res.data.token
            );

            localStorage.setItem(
                "isLoggedIn",
                true
            );

            this.$router.push("/dashboard");

        }
        catch{

            alert("Login gagal");
        }
    }
},

template:`

<div class="flex justify-center mt-20">

<div class="bg-white p-6 shadow w-96">

<h1 class="text-2xl font-bold mb-4">
Login
</h1>

<input
v-model="username"
placeholder="Username"
class="border p-2 w-full mb-3"
/>

<input
v-model="password"
type="password"
placeholder="Password"
class="border p-2 w-full mb-3"
/>

<button
@click="login"
class="bg-green-500 text-white px-4 py-2 rounded w-full"
>
Login
</button>

</div>

</div>

`
}