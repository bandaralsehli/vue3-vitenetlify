<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { useAuthStore } from "@/stores";

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
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h4
        class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl"
      >
        تسجيل الدخول
      </h4>
      <Form
        class="mx-auto max-w-lg rounded-lg border"
        @submit="onSubmit"
        :validation-schema="schema"
        v-slot="{ errors, isSubmitting }"
      >
        <div class="flex flex-col gap-4 p-4 md:p-8">
          <div>
            <label class="mb-2 text-sm text-gray-800 sm:text-base"
              >أسم المستخدم</label
            >
            <Field
              name="username"
              type="text"
              class="form-control w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              :class="{ 'is-invalid': errors.username }"
            />
            <div class="invalid-feedback">{{ errors.username }}</div>
          </div>
          <div>
            <label class="mb-2 text-sm text-gray-800 sm:text-base"
              >كلمة السر</label
            >
            <Field
              name="password"
              type="password"
              class="form-control w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              :class="{ 'is-invalid': errors.password }"
            />
            <div class="invalid-feedback">{{ errors.password }}</div>
          </div>
          <div
            class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
          >
            <button :disabled="isSubmitting">
              <!-- <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span> -->
              تسجيل الدخول
            </button>
          </div>
          <router-link to="register">مستخدم جديد ؟ </router-link>
        </div>
      </Form>
    </div>
  </div>
</template>
