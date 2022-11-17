

<script setup>
</script>


<template>
<aside id="aside"
      class="lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden -left-60 lg:left-0 lg:hidden xl:flex">
      <div class="bg-gray-800 lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900">
        <div class="bg-gray-900 text-white flex flex-row h-14 items-center justify-between dark:bg-slate-900">
          <div class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0"><b class="font-black">One</b>
          </div><button class="hidden lg:inline-block xl:hidden p-3"><span
              class="inline-flex justify-center items-center w-6 h-6"><svg viewBox="0 0 24 24" width="16" height="16"
                class="inline-block">
                <path fill="currentColor"
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">
                </path>
              </svg></span></button>
        </div>
        <div class="aside-scrollbars-gray flex-1 overflow-y-auto overflow-x-hidden">
          <ul>
            <li><a aria-current="page"
                class="router-link-active router-link-exact-active flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white"><span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none font-bold text-white"><svg
                    viewBox="0 0 24 24" width="18" height="18" class="inline-block">
                    <path fill="currentColor"
                      d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z">
                    </path>
                  </svg></span><span class="grow text-ellipsis line-clamp-1 pr-12 font-bold text-white">Dashboard</span>

              </a>

            </li>
            <li><a href="/dashboard/QR"
                class="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white"><span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"><svg viewBox="0 0 24 24" width="18"
                    height="18" class="inline-block">
                    <path fill="currentColor"
                      d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z">
                    </path>
                  </svg></span><span class="grow text-ellipsis line-clamp-1 pr-12">Qr linkes</span>

              </a>

            </li>
            <li><a
                class="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white"><span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"><svg viewBox="0 0 24 24" width="18"
                    height="18" class="inline-block">
                    <path fill="currentColor"
                      d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z">
                    </path>
                  </svg></span><span class="grow text-ellipsis line-clamp-1 pr-12">Tables</span>

              </a>

            </li>
            <li><a
                class="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white"><span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"><svg viewBox="0 0 24 24" width="18"
                    height="18" class="inline-block">
                    <path fill="currentColor"
                      d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z">
                    </path>
                  </svg></span><span class="grow text-ellipsis line-clamp-1 pr-12">Forms</span>

              </a>

            </li>
            <li><a
                class="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white"><span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"><svg viewBox="0 0 24 24" width="18"
                    height="18" class="inline-block">
                    <path fill="currentColor"
                      d="M21,17V5H3V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H16V21H8V19H3A2,2 0 0,1 1,17V5A2,2 0 0,1 3,3H21M5,7H11V11H5V7M5,13H11V15H5V13M13,7H19V9H13V7M13,11H19V15H13V11Z">
                    </path>
                  </svg></span><span class="grow text-ellipsis line-clamp-1 pr-12">UI</span>

              </a>

            </li>
            <li><a
                class="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white"><span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"><svg viewBox="0 0 24 24" width="18"
                    height="18" class="inline-block">
                    <path fill="currentColor"
                      d="M4,6V16H9V12A2,2 0 0,1 11,10H16A2,2 0 0,1 18,12V16H20V6H4M0,20V18H4A2,2 0 0,1 2,16V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V16A2,2 0 0,1 20,18H24V20H18V20C18,21.11 17.1,22 16,22H11A2,2 0 0,1 9,20H9L0,20M11.5,20A0.5,0.5 0 0,0 11,20.5A0.5,0.5 0 0,0 11.5,21A0.5,0.5 0 0,0 12,20.5A0.5,0.5 0 0,0 11.5,20M15.5,20A0.5,0.5 0 0,0 15,20.5A0.5,0.5 0 0,0 15.5,21A0.5,0.5 0 0,0 16,20.5A0.5,0.5 0 0,0 15.5,20M13,20V21H14V20H13M11,12V19H16V12H11Z">
                    </path>
                  </svg></span><span class="grow text-ellipsis line-clamp-1 pr-12">Responsive</span>

              </a>

            </li>
            <li><a
                class="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white"><span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"><svg viewBox="0 0 24 24" width="18"
                    height="18" class="inline-block">
                    <path fill="currentColor"
                      d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z">
                    </path>
                  </svg></span><span class="grow text-ellipsis line-clamp-1 pr-12">Styles</span>

              </a>

            </li>
            <li><a
                class="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white"><span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"><svg viewBox="0 0 24 24" width="18"
                    height="18" class="inline-block">
                    <path fill="currentColor"
                      d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z">
                    </path>
                  </svg></span><span class="grow text-ellipsis line-clamp-1 pr-12">Profile</span>

              </a>

            </li>
            <li><a
                class="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white"><span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"><svg viewBox="0 0 24 24" width="18"
                    height="18" class="inline-block">
                    <path fill="currentColor"
                      d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z">
                    </path>
                  </svg></span><span class="grow text-ellipsis line-clamp-1 pr-12">Login</span>

              </a>

            </li>
            <li><a
                class="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white"><span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"><svg viewBox="0 0 24 24" width="18"
                    height="18" class="inline-block">
                    <path fill="currentColor"
                      d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z">
                    </path>
                  </svg></span><span class="grow text-ellipsis line-clamp-1 pr-12">Error</span>

              </a>

            </li>
            <li><a
                class="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white"><span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"><svg viewBox="0 0 24 24" width="18"
                    height="18" class="inline-block">
                    <path fill="currentColor"
                      d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z"></path>
                  </svg></span><span class="grow text-ellipsis line-clamp-1">Dropdown</span><span
                  class="inline-flex justify-center items-center w-12 h-6 flex-none"><svg viewBox="0 0 24 24" width="16"
                    height="16" class="inline-block">
                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                  </svg></span></a>
              <ul class="bg-gray-700/50 hidden">
                <li><a
                    class="flex cursor-pointer py-3 px-6 text-sm text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white">
                   <span class="grow text-ellipsis line-clamp-1 pr-12">Item One</span>

                  </a>

                </li>
                <li><a
                    class="flex cursor-pointer py-3 px-6 text-sm text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white">
                   <span class="grow text-ellipsis line-clamp-1 pr-12">Item Two</span>

                  </a>

                </li>
              </ul>
            </li>
            <li><a href="https://github.com/justboil/admin-one-vue-tailwind" target="_blank"
                class="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white"><span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"><svg viewBox="0 0 24 24" width="18"
                    height="18" class="inline-block">
                    <path fill="currentColor"
                      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z">
                    </path>
                  </svg></span><span class="grow text-ellipsis line-clamp-1 pr-12">GitHub</span>

              </a>

            </li>
            <li><a href="https://github.com/justboil/admin-one-react-tailwind" target="_blank"
                class="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white"><span
                  class="inline-flex justify-center items-center w-16 h-6 flex-none"><svg viewBox="0 0 24 24" width="18"
                    height="18" class="inline-block">
                    <path fill="currentColor"
                      d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z">
                    </path>
                  </svg></span><span class="grow text-ellipsis line-clamp-1 pr-12">React version</span>

              </a>

            </li>
          </ul>
        </div>
        <ul>
          <li><a
              class="flex cursor-pointer py-3 border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600"><span
                class="inline-flex justify-center items-center w-16 h-6 flex-none"><svg viewBox="0 0 24 24" width="18"
                  height="18" class="inline-block">
                  <path fill="currentColor"
                    d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z">
                  </path>
                </svg></span><span class="grow text-ellipsis line-clamp-1 pr-12">Logout</span>

            </a>

          </li>
        </ul>
      </div>
    </aside>

</template>