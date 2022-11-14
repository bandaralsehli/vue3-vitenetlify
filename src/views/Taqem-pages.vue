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
import { useTaqemStore } from "@/stores";
import { useAlertStore } from "@/stores";
const taqemStore = useTaqemStore();
async function onSubmit() {
  // const {cc} = values;
  // console.log(cc);
  if (localStorage.getItem("adria") == null && localStorage.getItem("q1") == null &&  localStorage.getItem("q2") == null &&  localStorage.getItem("q3") == null &&  localStorage.getItem("q4") == null &&  localStorage.getItem("q5") == null) {
    const alertStore = useAlertStore();
    alertStore.error("التاكد من الاختيار في جميع البنود");
} else{
    await taqemStore.send_data()
  }




 ;
}

function q1(values) {
    // console.log('q1 is ');
    // console.log(values);
    //taqemStore.$state = { q1: values }
   this.taqemStore.q1(values);
  // const authStore = useAuthStore();
  // const { username, password } = values;
  // await authStore.login(username, password);
}
function q2(values) {
    // console.log('q2 is ');
    // console.log(values);
    this.taqemStore.q2(values);
  // const authStore = useAuthStore();
  // const { username, password } = values;
  // await authStore.login(username, password);
}
function q3(values) {
    // console.log('q3 is ');
    // console.log(values);
    this.taqemStore.q3(values);
  // const authStore = useAuthStore();
  // const { username, password } = values;
  // await authStore.login(username, password);
}
function q4(values) {
    // console.log('q4 is ');
    // console.log(values);
    this.taqemStore.q4(values);
  // const authStore = useAuthStore();
  // const { username, password } = values;
  // await authStore.login(username, password);
}
function q5(values) {
    // console.log('q5 is ');
    // console.log(values);
    this.taqemStore.q5(values);
  // const authStore = useAuthStore();
  // const { username, password } = values;
  // await authStore.login(username, password);
}

function handleChange(e) {
    // console.log('mm is ');
    // console.log(e.target.value);
    const xx =e.target.value ;
   taqemStore.handleChange(xx);
  // const authStore = useAuthStore();
  // const { username, password } = values;
  // await authStore.login(username, password);
}

</script>
/*SECTION - Taqem pages
<template>
  <div class="my-7 text-2xl">
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h4 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          تقييم الإدارات التابعة للفرع
        </h4>
        <Form class="mx-auto max-w-lg rounded-lg border " @submit="onSubmit">
          <div class="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
            <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
              <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div class="rounded-xl bg-white shadow-xl mb-6">
                  <div class="p-6 sm:p-16">
                    <div class="mt-8 grid space-y-4">
                      <label for="Section" class="mb-2 text-lg text-gray-800 sm:text-base"> الإدارة </label>
                      <select @change="handleChange"  id="Section" name="Section" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <option value="المدير العام" class="text-center">المدير العام</option>
                        <option value="القسم النسائي" class="text-center">القسم النسائي</option>
                        <option value="إدارة شؤون الموظفين" class="text-center">إدارة شؤون الموظفين</option>
                        <option value="إدارة المتابعة" class="text-center">إدارة المتابعة</option>
                        <option value="الإدارة الاقليمية للتقنية" class="text-center">الإدارة الاقليمية للتقنية</option>
                        <option value="إدارة الخدمات" class="text-center">إدارة الخدمات</option>
                        <option value="الإدارة المالية" class="text-center">الإدارة المالية</option>
                        <option value="قسم المستودع" class="text-center">قسم المستودع</option>
                        <option value="قسم الأجور والمباني" class="text-center">قسم الأجور والمباني</option>
                        <option value="مساعد المدير" class="text-center">مساعد المدير</option>
                        <option value="قسم التحقيقات" class="text-center">قسم التحقيقات</option>
                        <option value="إدارة الأمن والسلامة" class="text-center">إدارة الأمن والسلامة</option>
                        <option value="الاتصالات الإدارية" class="text-center">الاتصالات الإدارية</option>
                        <option value="الثروة العقارية" class="text-center">الثروة العقارية</option>
                        <option value="اخرى" class="text-center">اخرى</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="rounded-xl bg-white shadow-xl ">
                  <div class="p-6 sm:p-16">
                    <div class="mt-8 grid space-y-4">
                      <label class="mb-2 text-lg text-gray-800 sm:text-base">مستوى نظافة المكاتب ؟</label>
                      <a @click="q1('ممتاز')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-800  focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3 ">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ممتاز</span>
                        </div>
                      </a>
                      <a @click="q1('جيد')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">جيد</span>
                        </div>
                      </a>
                      <a @click="q1('ضعيف')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ضعيف</span>
                        </div>
                      </a>
                      <a @click="q1('اخرى')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">اخرى</span>
                        </div>
                      </a>
                    </div>
                    <div class="mt-8 grid space-y-4">
                      <label class="mb-2 text-lg text-gray-800 sm:text-base">مستوى نظافة دورات المياة ؟</label>
                      <a @click="q2('ممتاز')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ممتاز</span>
                        </div>
                      </a>
                      <a @click="q2('جيد')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">جيد</span>
                        </div>
                      </a>
                      <a @click="q2('ضعيف')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ضعيف</span>
                        </div>
                      </a>
                      <a @click="q2('اخرى')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">اخرى</span>
                        </div>
                      </a>
                    </div>
                    <div class="mt-8 grid space-y-4">
                      <label class="mb-2 text-lg text-gray-800 sm:text-base">مستوى التكييف ؟</label>
                      <a @click="q3('ممتاز')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ممتاز</span>
                        </div>
                      </a>
                      <a @click="q3('جيد')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">جيد</span>
                        </div>
                      </a>
                      <a @click="q3('يعمل بشكل جزئي')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">يعمل
                            بشكل جزئي</span>
                        </div>
                      </a>
                      <a @click="q3('لا يعمل')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">لا
                            يعمل</span>
                        </div>
                      </a>
                    </div>
                    <div class="mt-8 grid space-y-4">
                      <label class="mb-2 text-lg text-gray-800 sm:text-base">مستوى السباكة ؟</label>
                      <a @click="q4('ممتاز')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ممتاز</span>
                        </div>
                      </a>
                      <a @click="q4('جيد')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">جيد</span>
                        </div>
                      </a>
                      <a @click="q4('ضعيف')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ضعيف</span>
                        </div>
                      </a>
                      <a @click="q4('اخرى')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">اخرى</span>
                        </div>
                      </a>
                    </div>
                    <div class="mt-8 grid space-y-4">
                      <label class="mb-2 text-lg text-gray-800 sm:text-base">مستوى الانارة ؟</label>
                      <a @click="q5('ممتاز')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ممتاز</span>
                        </div>
                      </a>
                      <a @click="q5('جيد')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">جيد</span>
                        </div>
                      </a>
                      <a @click="q5('ضعيف')"  class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ضعيف</span>
                        </div>
                      </a>
                      <a @click="q5('اخرى')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">اخرى</span>
                        </div>
                      </a>
                    </div>
                    <div
                      class="block rounded-lg bg-gray-800 px-8 py-3 mt-20 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
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
  </div>
</template>
