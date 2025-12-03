<template>
  <div class="exercise-view">
    <header>
      <h2>運動記錄管理 Exercise Logging</h2>
      <el-button type="primary" plain>紀錄新訓練 Log Workout</el-button>
    </header>

    <el-table :data="recentWorkouts" stripe>
      <el-table-column prop="date" label="日期 Date" width="140" />
      <el-table-column prop="type" label="類型 Type" width="160" />
      <el-table-column prop="duration" label="時長 Duration" />
      <el-table-column prop="calories" label="卡路里 Calories" />
      <el-table-column prop="status" label="狀態 Status" />
    </el-table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const recentWorkouts = ref([
  { date: "2025-12-02", type: "間歇跑 Intervals", duration: "45 分", calories: "520 kcal", status: "完成 Done" },
  { date: "2025-12-01", type: "肌力 Strength", duration: "60 分", calories: "480 kcal", status: "完成 Done" },
  { date: "2025-11-30", type: "游泳 Swim", duration: "50 分", calories: "430 kcal", status: "完成 Done" }
]);
</script>

<style scoped>
.exercise-view {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
