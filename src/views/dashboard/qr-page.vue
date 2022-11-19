<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { useAuthStore } from "@/stores";
import theOverview from '@/components/admin/sections/Overview-dash.vue';

const schema = Yup.object().shape({
  username: Yup.string().required("لم يتم إدخال اسم المستخدم"),
  password: Yup.string().required("لم يتم إدخال كلمة السر"),
});

async function onSubmit(values) {
  const authStore = useAuthStore();
  const { username, password } = values;
  await authStore.login(username, password);
}
</script>

<template>
  dfd
<!-- <div class="mt-60">
  <div
    class="xl:pl-60 pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100">




     <div class="container mx-20">

        <div class="row">
            <div class="col-sm-8 offset-sm-2 mt-5">
                <div class="xl:pl-60 pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
                    url :  https://aquamarine-cat-c6edf5.netlify.app/
                    <p>the QR is</p>
                    <vue-qrcode value="https://aquamarine-cat-c6edf5.netlify.app/" tag="img" :options="{ width: 300 ,height:300 }"></vue-qrcode>
                    <vue-qrcode value="https://aquamarine-cat-c6edf5.netlify.app" tag="img" :options="{ width: 300 ,height:300 }"></vue-qrcode>
                    <vue-qrcode value="https://aquamarine-cat-c6edf5.netlify.app" tag="svg" :options="{ width: 300 ,height:300 }"></vue-qrcode>
                    <vue-qrcode value="https://aquamarine-cat-c6edf5.netlify.app/" tag="svg" :options="{ width: 300 ,height:300 }"></vue-qrcode>
                </div>

            </div>
        </div>
     </div>




  </div>
</div> -->
</template>
