<template>


    <div class="flex-auto">
      <div class="bg-gray-100">
        <nav
          class="
            container
            px-6
            py-8
            mx-auto
            md:flex md:justify-between md:items-center
          "
        >
          <div class="flex items-center justify-between">

            <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
              <button
                type="button"
                class="
                  text-gray-800
                  hover:text-gray-400
                  focus:outline-none focus:text-gray-400
                "
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="inline-grid"><span class="w-5">hh</span><div class="w-20"> hi bandar</div></div>


          </div>


          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <div
            :class="showMenu ? 'flex' : 'hidden'"
            class="
              flex-col
              mt-8
              space-y-4
              md:flex
              md:space-y-0
              md:flex-row
              md:items-center
              md:space-x-10
              md:mt-0
            "
          >

            <RouterLink to='/' class="ml-8 text-sm font-bold text-gray-800 hover:text-blue-400">
            الرئيسية
            </RouterLink>
             <RouterLink  to='/about' class="text-sm font-bold text-gray-800 hover:text-blue-400">
                 الدخول
             </RouterLink>

            <RouterLink  to='/' class="text-sm font-bold text-gray-800 hover:text-blue-400">
              التسجيل
            </RouterLink>
            <RouterLink  to='/' class="text-sm font-bold text-gray-800 hover:text-blue-400">
              التواصل
            </RouterLink>
        </div>
        </nav>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        showMenu: false,
      };
    },
  };
  </script>