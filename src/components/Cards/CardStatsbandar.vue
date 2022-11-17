<template>
  <div
    class="rounded-2xl flex-col dark:bg-slate-900/70 bg-white flex"
  >


<div class="flex-1 p-6">
  <div class="justify-between items-center flex mb-3">
    <div class="flex items-center justify-center">
      <div
        class="inline-flex items-center capitalize leading-none text-xs border rounded-full py-1 px-3 bg-emerald-500 border-emerald-500 text-white">
        <span class="inline-flex justify-center items-center w-4 h-4 mr-1"><svg viewBox="0 0 24 24" width="14"
            height="14" class="inline-block">
            <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
          </svg></span><span>{{ statSubtitle }}</span></div>
    </div>
    <div class="flex items-center justify-center"><button
        class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-gray-100 dark:border-slate-800 ring-gray-200 dark:ring-gray-500 bg-gray-100 text-black dark:bg-slate-800 dark:text-white hover:bg-gray-200 hover:dark:bg-slate-700 p-1"
        type="button" icon-w="w-4" icon-h="h-4"><span class="inline-flex justify-center items-center w-6 h-6"><svg
            viewBox="0 0 24 24" width="16" height="16" class="inline-block">
            <path fill="currentColor"
              d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
            </path>
          </svg></span></button></div>
  </div>
  <div class="justify-between items-center flex">
    <div class="flex items-center justify-center">
      <div>
        <h3 class="text-lg leading-tight text-gray-500 dark:text-slate-400"></h3>
        <h1 class="text-1xl leading-tight font-semibold">
          <div> {{ statTitle }} </div>
          <div class="text-center mt-3">{{ statTitle_number }}</div>
        </h1>
      </div>
    </div>
    <div class="flex items-center justify-center"><span
        class="inline-flex justify-center items-center h-16 text-emerald-500"><svg viewBox="0 0 24 24" width="48"
          height="48" class="inline-block">
          <path fill="currentColor"
            d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z">
          </path>
        </svg></span></div>
  </div>
</div>
  </div>
</template>
<script>
export default {
  name: "card-bandar",
  props: {
    statTitle: {
      type: String,
      default: "Traffic",
    },
    statTitle_number: {
      type: String,
      default: "Traffic",
    },
    statSubtitle: {
      type: String,
      default: "Traffic",
    },
  },
};
</script>
