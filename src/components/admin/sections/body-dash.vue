

<script setup>
</script>


<template>

 <!-- / body/ -->
 <section class="p-6 xl:max-w-6xl xl:mx-auto">
      <div class="text-center"> <RouterLink to="/dashboard/QR" class="text-black"> QR</RouterLink></div>
       <!-- / start bage// /!SECTION the Overview-->
      <theOverview/>


    <!-- new talbat -->

      <section class="pt-6 mb-6 flex items-center justify-between">
        <div class="flex items-center justify-start"><span
            class="inline-flex justify-center items-center w-6 h-6 mr-2"><svg viewBox="0 0 24 24" width="20" height="20"
              class="inline-block">
              <path fill="currentColor"
                d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z">
              </path>
            </svg></span>

          <h1 class="text-2xl leading-tight">الطلبات  الجديدة</h1>


        </div><button
          class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 p-1"
          type="button"><span class="inline-flex justify-center items-center w-6 h-6"><svg viewBox="0 0 24 24"
              width="16" height="16" class="inline-block">
              <path fill="currentColor"
                d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
              </path>
            </svg></span>

        </button>
      </section>

      <div class="rounded-2xl flex-col dark:bg-slate-900/70 bg-white flex">
        <div class="flex-1">
          <div class="flex z-50 items-center flex-col justify-center overflow-hidden fixed inset-0"
            style="display: none;">
            <div
              class="absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700 from-gray-700 via-gray-900 to-gray-700">
            </div>
            <div
              class="rounded-2xl flex-col dark:bg-slate-900 bg-white flex shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
              style="display: none;">
              <div class="flex-1 p-6">
                <div class="flex items-center justify-between mb-3">
                  <h1 class="text-2xl">Sample modal</h1>
                </div>
                <div class="space-y-3">
                  <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
                  <p>This is sample modal</p>
                </div>
              </div>
              <footer class="p-6">
                <div class="flex items-center justify-start flex-wrap -mb-3"><button
                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
                    type="button">
                   <span class="px-2">Done</span>
                  </button>

                </div>
              </footer>
            </div>
          </div>
          <div class="flex z-50 items-center flex-col justify-center overflow-hidden fixed inset-0"
            style="display: none;">
            <div
              class="absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700 from-gray-700 via-gray-900 to-gray-700">
            </div>
            <div
              class="rounded-2xl flex-col dark:bg-slate-900 bg-white flex shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
              style="display: none;">
              <div class="flex-1 p-6">
                <div class="flex items-center justify-between mb-3">
                  <h1 class="text-2xl">Please confirm</h1><button
                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-full border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 p-1"
                    type="button"><span class="inline-flex justify-center items-center w-6 h-6"><svg viewBox="0 0 24 24"
                        width="16" height="16" class="inline-block">
                        <path fill="currentColor"
                          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">
                        </path>
                      </svg></span>

                  </button>
                </div>
                <div class="space-y-3">
                  <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
                  <p>This is sample modal</p>
                </div>
              </div>
              <footer class="p-6">
                <div class="flex items-center justify-start flex-wrap -mb-3"><button
                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-red-600 dark:border-red-500 ring-red-300 dark:ring-red-700 bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600 py-2 px-3 mr-3 last:mr-0 mb-3"
                    type="button">
                   <span class="px-2">Done</span>
                  </button><button
                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-red-600 dark:border-red-500 ring-red-300 dark:ring-red-700 text-red-600 dark:text-red-500 hover:bg-red-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-red-600 py-2 px-3 mr-3 last:mr-0 mb-3"
                    type="button">
                   <span class="px-2">Cancel</span>
                  </button></div>
              </footer>
            </div>
          </div>

          <table>
            <thead>
              <tr>

                <!-- <th></th> -->
                <th class="w-80">أسم المقدم</th>
                <th class="w-80">الجهة</th>
                <th class="w-20">نوع الصيانة</th>
                <th class="w-40">الاهمية</th>
                <th class="w-40">تاريخ التقديم</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <!-- <td class="border-b-0 lg:w-6 before:hidden">
                  <div class="w-24 h-24 mx-auto lg:w-6 lg:h-6"><img
                      src="https://avatars.dicebear.com/api/avataaars/Howell-Hand.svg" alt="Howell Hand"
                      class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"></div>
                </td> -->
                <td data-label="Name">Howell Hand</td>
                <td data-label="Company">Kiehn-Green</td>
                <td data-label="City">Emelyside</td>
                <td data-label="Progress" class="lg:w-32"><progress class="flex w-2/5 self-center lg:w-full" max="100"
                    value="70">70</progress></td>
                <td data-label="Created" class="lg:w-1 whitespace-nowrap"><small
                    class="text-gray-500 dark:text-slate-400" title="Mar 3, 2021">Mar 3, 2021</small></td>
                <td class="before:hidden lg:w-1 whitespace-nowrap">
                  <div class="flex items-center justify-start lg:justify-end flex-nowrap -mb-3"><button
                      class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 p-1 mr-3 last:mr-0 mb-3"
                      type="button"><span class="inline-flex justify-center items-center w-6 h-6"><svg
                          viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                          <path fill="currentColor"
                            d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z">
                          </path>
                        </svg></span>

                    </button><button
                      class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-red-600 dark:border-red-500 ring-red-300 dark:ring-red-700 bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600 p-1 mr-3 last:mr-0 mb-3"
                      type="button"><span class="inline-flex justify-center items-center w-6 h-6"><svg
                          viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                          <path fill="currentColor"
                            d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z">
                          </path>
                        </svg></span>

                    </button></div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
            <div class="justify-between items-center block md:flex">
              <div class="flex items-center justify-center mb-6 md:mb-0">
                <div class="flex items-center justify-start flex-wrap -mb-3"><button
                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-gray-100 dark:border-slate-800 ring-gray-200 dark:ring-gray-500 bg-gray-200 dark:bg-slate-700 hover:bg-gray-200 hover:dark:bg-slate-700 text-sm p-1 mr-3 last:mr-0 mb-3"
                    type="button">
                   <span class="px-2">1</span>
                  </button><button
                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 text-sm p-1 mr-3 last:mr-0 mb-3"
                    type="button">
                   <span class="px-2">2</span>
                  </button><button
                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 text-sm p-1 mr-3 last:mr-0 mb-3"
                    type="button">
                   <span class="px-2">3</span>
                  </button><button
                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white dark:border-slate-900 ring-gray-200 dark:ring-gray-500 bg-white text-black dark:bg-slate-900 dark:text-white hover:bg-gray-100 hover:dark:bg-slate-800 text-sm p-1 mr-3 last:mr-0 mb-3"
                    type="button">
                   <span class="px-2">4</span>
                  </button></div>
              </div>
              <div class="flex items-center justify-center"><small>Page 1 of 4</small></div>
            </div>
          </div>
        </div>

      </div>
    </section>

</template>