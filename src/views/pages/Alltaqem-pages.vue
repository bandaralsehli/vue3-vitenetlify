<script setup>
import Navbar from "@/components/Nav-bar.vue";
import { useTaqemStore } from "@/stores";
import { storeToRefs } from "pinia";

const TaqemStore = useTaqemStore();



TaqemStore.fetchtaqemes();





</script>

/*SECTION - home bage

<template>
  <Navbar/>
  <div class="mb-20"></div>
<div class="overflow-x-auto relative shadow-md sm:rounded-lg mx-5">
    <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr class="text-base font-bold">
                <th scope="col" class="py-3 px-6">
                  العدد
                </th>
                <th scope="col" class="py-3 px-6">
                  أسم الإدارة
                </th>
                <th scope="col" class="py-3 px-6">
                  تاريخ التقييم
                </th>
                <th scope="col" class="py-3 px-6">
                  مستوى نظافة المكاتب
                </th>
                <th scope="col" class="py-3 px-6">
                  مستوى نظافة دورات المياة
                </th>
                <th scope="col" class="py-3 px-6">
                  مستوى التكييف
                </th>

                <th scope="col" class="py-3 px-6">
                  مستوى السباكة
                </th>
                <th scope="col" class="py-3 px-6">
                  مستوى الانارة
                </th>
                <th scope="col" class="py-3 px-6">
                  ملاحظات عامة
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="todo in TaqemStore.taqemes.results" :key="todo.objectId">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{todo.Idorder}}
                </th>
                <td class="py-4 px-6">
                  {{todo.adria}}
                </td>
                <td class="py-4 px-6">
                  {{todo.createdAt}}
                </td>
                <td class="py-4 px-6">
                  {{todo.q1}}
                </td>
                <td class="py-4 px-6">
                  {{todo.q2}}
                </td>
                <td class="py-4 px-6">
                  {{todo.q3}}
                </td>
                <td class="py-4 px-6">
                  {{todo.q4}}
                </td>
                <td class="py-4 px-6">
                  {{todo.q5}}
                </td>

                <td class="py-4 px-6">
                  {{todo.other}}
                </td>

            </tr>




        </tbody>
    </table>
</div>

</template>
