<script setup>
import { Form, Field } from "vee-validate";
// import * as Yup from "yup";

// import { useUsersStore, useAlertStore } from "@/stores";
import router from "@/router";

// const schema = Yup.object().shape({
//   firstName: Yup.string().required("First Name is required"),
//   lastName: Yup.string().required("Last Name is required"),
//   username: Yup.string().required("Username is required"),
//   password: Yup.string()
//     .required("Password is required")
//     .min(6, "Password must be at least 6 characters"),
// });

// async function onSubmit(values) {
//   const usersStore = useUsersStore();
//   const alertStore = useAlertStore();
//   try {
//     await usersStore.register(values);
//     await router.push("/account/login");
//     alertStore.success("Registration successful");
//   } catch (error) {
//     alertStore.error(error);
//   }
// }
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h4
        class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl"
      >
        انشاء حساب
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
              >أسم الاول</label
            >
            <Field
              name="firstName"
              type="text"
              class="form-control w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              :class="{ 'is-invalid': errors.firstName }"
            />
            <div class="invalid-feedback">{{ errors.username }}</div>
          </div>
          <div>
            <label class="mb-2 text-sm text-gray-800 sm:text-base"
              >أسم الاخير</label
            >
            <Field
              name="lastName"
              type="text"
              class="form-control w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              :class="{ 'is-invalid': errors.lastName }"
            />
            <div class="invalid-feedback">{{ errors.username }}</div>
          </div>
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
              التسجيل
            </button>
          </div>

          <router-link to="login" class="btn btn-link"
            >الغاء التسجيل</router-link
          >
        </div>
      </Form>
    </div>
  </div>
</template>
