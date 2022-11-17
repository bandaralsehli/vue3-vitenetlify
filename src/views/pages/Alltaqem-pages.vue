<script setup>

import { useTaqemStore } from "@/stores";
import { storeToRefs } from "pinia";

const TaqemStore = useTaqemStore();



TaqemStore.fetchtaqemes();



</script>

/*SECTION - home bage

<template>
  <div class="mt-72 mx-6 text-center align-middle">
    <!-- <h1>الصفحة الرئيسية للموقع</h1> -->

    <div>
      <div>
        <div>
          <table class="shadow-lg bg-white border-collapse">
            <thead>
              <tr class="h-12">

                <th class="w-1/12 border">العدد</th>
                <th class="w-1/12 border">أسم الإدارة</th>
                <th class="w-2/12 border">تاريخ التقييم</th>
                <th class="w-2/12 border">مستوى نظافة المكاتب</th>
                <th class="w-1/12 border">مستوى نظافة دورات المياة</th>
                <th class="w-1/12 border">مستوى التكييف</th>
                <th class="w-1/12 border">مستوى السباكة</th>
                <th class="w-1/12 border">مستوى الانارة</th>
                <th class="w-2/12 border">ملاحظات عامة</th>

              </tr>
            </thead>
            <tbody>



              <tr class="h-10" v-for="todo in TaqemStore.taqemes.results" :key="todo.objectId">


                <td data-label="Name" class="border">{{todo.Idorder}}</td>
                <td data-label="Name" class="border">{{todo.adria}}</td>
                <td data-label="Name" class="border">{{todo.createdAt}}</td>
                <td data-label="Company" class="border">{{todo.q1}}</td>
                <td data-label="Company" class="border">{{todo.q2}}</td>
                <td data-label="Company" class="border">{{todo.q3}}</td>
                <td data-label="Company" class="border">{{todo.q4}}</td>
                <td data-label="Company" class="border">{{todo.q5}}</td>
                <td data-label="Company" class="border">{{todo.other}}</td>




              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>
