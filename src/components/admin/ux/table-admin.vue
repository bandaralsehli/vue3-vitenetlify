<script setup>

import { useTicketStore , useAdminshowStore } from "@/stores";
import { storeToRefs } from "pinia";
const TicketStore = useTicketStore();
TicketStore.fetchTickets();
TicketStore.fetchTicketswherenew();
TicketStore.fetchTicketswherepros();
TicketStore.fetchTicketswhereend();
TicketStore.fetchTicketswheredelet();

const Adminshow = useAdminshowStore();


</script>




<template>

 <!-- <p>fjhjkhgkjfhfhhfhfhfhfh</p> -->
  <!-- {{ TicketStore.ticket.results }} -->




 <!-- <div class="rounded-2xl flex-col dark:bg-slate-900/70 bg-white flex">
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

                <th> رقم الطلب</th>
                <th class="w-96">أسم المقدم</th>
                <th class="w-80">الجهة</th>
                <th class="w-20">نوع الصيانة</th>
                <th class="w-40">الاهمية</th>
                <th class="w-40">تاريخ التقديم</th>
                <th></th>
              </tr>
            </thead>
            <tbody>



              <tr v-for="todo in TicketStore.ticket.results" :key="todo.objectId">

                <td class="border-b-0 lg:w-6 before:hidden">
                  <div class="w-24 h-24 mx-auto lg:w-6 lg:h-6"><img
                      src="https://avatars.dicebear.com/api/avataaars/Howell-Hand.svg" alt="Howell Hand"
                      class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"></div>
                </td>
                <td data-label="Name">{{todo.No_Ticket}}</td>
                <td data-label="Name">{{todo.Service_REQ}}</td>
                <td data-label="Company">{{todo.name_loc}}</td>
                <td data-label="City">{{todo.Service_Ttype}}</td>
               <td data-label="Progress" class="lg:w-32"><progress class="flex w-2/5 self-center lg:w-full" max="100"
                    value="70">70</progress></td>
                <td data-label="Created" class="lg:w-1 whitespace-nowrap"><small
                    class="text-gray-500 dark:text-slate-400" title="Mar 3, 2021">{{todo.createdAt }}</small></td>
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

      </div> -->




<div class="overflow-x-auto relative shadow-md sm:rounded-lg"   :class="[
                  Adminshow.all
                    ? 'hidden'
                    : '',
                ]">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                   رقم الطلب
                </th>
                <th scope="col" class="py-3 px-6">
                    أسم المقدم
                </th>
                <th scope="col" class="py-3 px-6">
                    الجهة
                </th>
                <th scope="col" class="py-3 px-6">
                    نوع الصيانة
                </th>
                <th scope="col" class="py-3 px-6">
                    تاريخ التقديم
                </th>
                <th scope="col" class="py-3 px-6">
                    الاجراء
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"  v-for="todo in TicketStore.ticketnew.results" :key="todo.objectId">
                <td class="p-4 w-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{todo.No_Ticket}}
                </th>
                <td class="py-4 px-6">
                  {{todo.Service_REQ}}
                </td>
                <td class="py-4 px-6">
                  {{todo.name_loc}}
                </td>
                <td class="py-4 px-6">
                  {{todo.Service_Ttype}}
                </td>
                <td class="py-4 px-6">
                  {{todo.createdAt }}
                </td>
                <td class="py-4 px-6">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>


        </tbody>
    </table>
   <!-- <nav class="flex justify-between items-center pt-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">1-5</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul class="inline-flex items-center -space-x-px">
            <li>
                <a href="#" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </a>
            </li>
            <li>
                <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" class="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
             <li>
                <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
            </li>
            <li>
                <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
            </li>
        </ul>
    </nav>-->
</div>





</template>
