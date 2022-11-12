<template>
  <div class="flex-auto">
    <div class="bg-gray-100">
      <nav
        class="container mx-auto px-6 py-8 md:flex md:items-center md:justify-between"
      >
        <div class="flex items-center justify-between">
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:text-gray-400 focus:outline-none"
            >
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="inline-grid">
            <span class="w-5">hh</span>
            <div class="w-20">hi bandar</div>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          :class="showMenu ? 'flex' : 'hidden'"
          class="mt-8 flex-col space-y-4 md:mt-0 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-10"
        >
        <div class="hover:bg-blue-500"> <RouterLink
            to="/"
            class="mx-8 text-sm font-bold text-gray-800   "
          >
            الرئيسية
          </RouterLink></div>

          <div class="hover:bg-blue-500">  <RouterLink
            to="/account/login"
            class="mx-8 text-sm font-bold text-gray-800  "
          >
            الدخول
          </RouterLink></div>

          <div class="hover:bg-blue-500">  <RouterLink
            to="/account/register"
            class="mx-8 text-sm font-bold text-gray-800  "
          >
            التسجيل
          </RouterLink></div>
          <div class="hover:bg-blue-500">  <RouterLink
            to="/about"
            class="mx-8 text-sm font-bold text-gray-800  "
          >
            التواصل
          </RouterLink></div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: true,
    };
  },
};
</script>
