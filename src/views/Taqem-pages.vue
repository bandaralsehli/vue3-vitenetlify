
<script setup>
import { Form, Field } from "vee-validate";
import { useTaqemStore } from "@/stores";
import { useAlertStore } from "@/stores";
const taqemStore = useTaqemStore();

async function onSubmit() {
  await taqemStore.send_data() ;
  //  console.log('the onSubmit is run ');
  //   if(taqemStore.cheeckes()){
  //     await taqemStore.send_data() ;
  //   }else{
  //     const alertStore = useAlertStore();
  //       alertStore.error("التاكد من الاختيار في جميع ");
  //   }
}


function handleChange(e) {
    const xx =e.target.value ;
   taqemStore.sethandleChange(xx);
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
                      <label class=" mb-2 text-lg text-gray-800 sm:text-base">مستوى نظافة المكاتب ؟</label> <span class="text-sm"> تم اختيار {{taqemStore.q1}}</span>
                      <button type="button"   @click="taqemStore.setq1('ممتاز')" class=" group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active active:bg-blue-800 target:bg-blue-800 active:text-yellow-500 ">
                        <div class="relative flex items-center space-x-4 justify-center my-3  ">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ممتاز</span>
                        </div>
                      </button>
                      <button type="button" @click="taqemStore.setq1('جيد')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">جيد</span>
                        </div>
                      </button>
                      <button type="button"   @click="taqemStore.setq1('ضعيف')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ضعيف</span>
                        </div>
                      </button>
                      <button type="button"   @click="taqemStore.setq1('اخرى')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">اخرى</span>
                        </div>
                      </button>
                    </div>
                    <div class="mt-8 grid space-y-4">
                      <label class="mb-2 text-lg text-gray-800 sm:text-base">مستوى نظافة دورات المياة ؟</label> <span class="text-sm"> تم اختيار {{taqemStore.q2}}</span>
                      <button type="button"   @click="taqemStore.setq2('ممتاز')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ممتاز</span>
                        </div>
                      </button>
                      <button type="button"  @click="taqemStore.setq2('جيد')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">جيد</span>
                        </div>
                      </button>
                      <button type="button"   @click="taqemStore.setq2('ضعيف')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ضعيف</span>
                        </div>
                      </button>
                      <button type="button" @click="taqemStore.setq2('اخرى')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">اخرى</span>
                        </div>
                      </button>
                    </div>
                    <div class="mt-8 grid space-y-4">
                      <label class="mb-2 text-lg text-gray-800 sm:text-base">مستوى التكييف ؟</label> <span class="text-sm"> تم اختيار {{taqemStore.q3}}</span>
                      <button type="button" @click="taqemStore.setq3('ممتاز')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ممتاز</span>
                        </div>
                      </button>
                      <button type="button" @click="taqemStore.setq3('جيد')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">جيد</span>
                        </div>
                      </button>
                      <button type="button" @click="taqemStore.setq3('يعمل بشكل جزئي')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">يعمل
                            بشكل جزئي</span>
                        </div>
                      </button>
                      <button type="button" @click="taqemStore.setq3('لا يعمل')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">لا
                            يعمل</span>
                        </div>
                      </button>
                    </div>
                    <div class="mt-8 grid space-y-4">
                      <label class="mb-2 text-lg text-gray-800 sm:text-base">مستوى السباكة ؟</label>  <span class="text-sm"> تم اختيار {{taqemStore.q4}}</span>
                      <button type="button" @click="taqemStore.setq4('ممتاز')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ممتاز</span>
                        </div>
                      </button>
                      <button type="button"  @click="taqemStore.setq4('جيد')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">جيد</span>
                        </div>
                      </button>
                      <button type="button" @click="taqemStore.setq4('ضعيف')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ضعيف</span>
                        </div>
                      </button>
                      <button type="button" @click="taqemStore.setq4('اخرى')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">اخرى</span>
                        </div>
                      </button>
                    </div>
                    <div class="mt-8 grid space-y-4">
                      <label class="mb-2 text-lg text-gray-800 sm:text-base">مستوى الانارة ؟</label>  <span class="text-base"> تم اختيار {{taqemStore.q5}}</span>
                      <button type="button" @click="taqemStore.setq5('ممتاز')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ممتاز</span>
                        </div>
                      </button>
                      <button type="button" @click="taqemStore.setq5('جيد')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
 hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">جيد</span>
                        </div>
                      </button>
                      <button type="button" @click="taqemStore.setq5('ضعيف')"  class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">ضعيف</span>
                        </div>
                      </button>
                      <button type="button" @click="taqemStore.setq5('اخرى')" class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-300 focus:text-white active:bg-blue-800">
                        <div class="relative flex items-center space-x-4 justify-center my-3">
                          <span
                            class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-black sm:text-base">اخرى</span>
                        </div>
                      </button>
                    </div>
                    <div
                      class="block rounded-lg bg-gray-800 px-8 py-3 mt-20 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                      <button :disabled="isSubmitting">

                        <div v-show="isSubmitting" role="status">
    <svg class="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
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
