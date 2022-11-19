<script setup>
import theOverview from '@/components/admin/ux/Overview-dash.vue';
import theNavsAdmin from '@/components/admin/ux/navs-admin.vue';
import thesectionsname from '@/components/admin/ux/section-name.vue';
import thetableadmin from '@/components/admin/ux/table-admin.vue';
</script>
<template>
    <div class="">
        <div class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
            <theNavsAdmin/>
            <div class="flex z-30 items-center flex-col justify-center overflow-hidden fixed inset-0" style="display: none;">
                <div class="absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700 from-gray-700 via-gray-900 to-gray-700">
                </div>
            </div>
            <section class="mt-44 p-6">
                <div class="text-center">
                    <RouterLink to="/dashboard/QR" class="text-black"> QR</RouterLink>
                </div>
                <theOverview/>
                <thesectionsname/>
                <thetableadmin/>
            </section>
        </div>
    </div>
</template>