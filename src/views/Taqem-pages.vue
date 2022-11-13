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
  <div class="my-7 text-2xl">



    <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h4
        class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl"
      >
        تقييم الإدارات التابعة للفرع
      </h4>

      <Form
        class="mx-auto max-w-lg rounded-lg border "
        @submit="onSubmit"
        :validation-schema="schema"
      >
      <div class="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
    <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div class="rounded-xl bg-white shadow-xl">
                <div class="p-6 sm:p-16">

                    <div class="mt-8 grid space-y-4">
                      <label class="mb-2 text-lg text-gray-800 sm:text-base"
              >مستوى نظافة المكاتب ؟</label
            >
                        <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                                  <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">ممتاز</span>
                            </div>
                        </button>
                        <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">

                                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">جيد</span>
                            </div>
                        </button>
                        <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                                  <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">ضعيف</span>
                            </div>
                        </button>

                        <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                                  <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">اخرى</span>
                            </div>
                        </button>

                    </div>

                    <div
            class="block rounded-lg bg-gray-800 px-8 py-3 mt-20 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
          >
            <button :disabled="isSubmitting">
              <!-- <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span> -->
              إرسال تقييم
            </button>
          </div>


                </div>
            </div>
        </div>
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
