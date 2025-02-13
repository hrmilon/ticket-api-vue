<script setup>
import { ref } from 'vue';
let email = ref('')
let password = ref('')

let localAuth = () => {
    let LocalAuthData = {
        email: email.value,
        password: password.value
    }
}


</script>
<template>
    <div class="flex flex-col p-10 items-center justify-center gap-y-5 outline-black/5">
        <div class=" bg-gray-800 p-20 rounded">
            <form @submit.prevent="localAuth">
                <div class="flex flex-col">
                    <label for="email">Email</label>
                    <input
                        class="block border-1 border-white rounded min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="name@gmail.com" type="text" v-model="email">
                </div>
                <div class="flex flex-col">
                    <label for="email">password</label>
                    <input
                        class="block border-1 border-white rounded min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        placeholder="***" type="password" v-model="password">
                </div>
                <div class="flex justify-center items-center">
                    <button
                        class="bg-blue-800 text-white font-bold p-1 rounded mt-2 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">Login</button>
                </div>
            </form>
        </div>
    </div>

</template>