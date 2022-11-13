<!-- <template>
  <h1 class="my-20 mx-20 text-center text-3xl">
    معلومات عن الشركة والتواصل معها
  </h1>
    <div id="app">
    <h1>Using Font Awesome "Brand" icons in Vue.js</h1>
    <p>Have a phone call: <font-awesome-icon icon="phones" /></p>
    <p>Have a module of JavaScript: <font-awesome-icon icon="js" /></p>
    <p>Have a module of Vue.js: <font-awesome-icon icon="[ 'fab', 'vuejs' ]" size="4x" /></p>
  </div>

    <font-awesome-icon icon="wrench"  size="4x" />
<font-awesome-icon icon="ambulance"  size="4x" />
<font-awesome-icon icon="coffee"  size="4x" />
<font-awesome-icon icon="spinner" size="4x" />
  <font-awesome-icon :icon="['fab', 'instagram']" size="4x" />
  <font-awesome-icon :icon="['fab', 'twitter']" size="4x" />
  <font-awesome-icon :icon="['fab', 'vuejs']" rotation="270" size="4x" />

    <div class='mt-20'>
  <h1>Rotation</h1>
<font-awesome-icon icon="spinner" rotation="270" size="4x"  />
<font-awesome-icon :icon="[ 'fab', 'vuejs' ]" rotation="270" size="4x"  />
<font-awesome-icon  icon='fab' size="4x"/>
</div>
</template> -->


<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { useAuthStore } from "@/stores";

const schema = Yup.object().shape({
  q1: Yup.string().required("يجب الاختيار"),

});

async function onSubmit(values) {
  const authStore = useAuthStore();
  const { username, password } = values;
  await authStore.login(username, password);
}
</script>

/*SECTION - Taqem pages

<template>
  <div class="my-7 mx-14  text-2xl">



    <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h4
        class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl"
      >
        تقييم الإدارات التابعة للفرع
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
              >مستوى نظافة المكاتب ؟</label
            >

  <div class="flex rounded-md shadow-sm mt-6" role="group">
  <button type="button" class="py-2 px-4 text-sm w-20 font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    ممتاز
  </button>
  <button type="button" class="py-2 px-4 text-sm w-20 font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    جيد
  </button>
  <button type="button" class="py-2 px-4 text-sm  w-20 font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    ضعيف
  </button>
  <button type="button" class="py-2 px-4 text-sm w-20 font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    اخرى
  </button>
</div>

 <div class="invalid-feedback">{{ errors.q1 }}</div>
          </div>


          <!-- <a class="text-red-600" v-if="catcherror">تسجيل دخول خاطئ، الرجاء التحقق من اسم المستخدم وكلمة المرور</a> -->
          <div
            class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
          >
            <button :disabled="isSubmitting">
              <!-- <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span> -->
              إرسال تقييم
            </button>
          </div>

        </div>
      </Form>
    </div>
  </div>
    <!-- <div class="container">
      <div
        class="items-top relative flex min-h-screen justify-center dark:bg-gray-900 sm:items-center sm:pt-0"
      >
        <div class="mx-auto max-w-6xl sm:px-6 lg:px-8">
          <div
            class="mt-8 overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-lg"
          >
            <center><img src="@/assets/logom.png" /></center>
          </div>
          <div
            class="overflow-hidden bg-white text-center shadow dark:bg-gray-800 sm:rounded-lg"
          >
            <div>
              <div class="p-6">
                <div class="flex items-center">
                  <div class="ml-4 text-lg font-semibold leading-7">
                    <a
                      href="https://laravel.com/docs"
                      class="text-gray-900 underline dark:text-white"
                      >موقع تحت الانشاء
                    </a>
                  </div>
                </div>
                <div class="ml-12">
                  <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    خاص بمتابعة عقود الصيانة والنظافة بجميع العقود التابعة
                    للشركة
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
