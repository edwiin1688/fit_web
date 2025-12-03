<template>
  <div class="groups-view">
    <header>
      <div>
        <h2>群組系統 Group Training</h2>
        <p>追蹤球隊/企業健康推動成效</p>
      </div>
      <el-button type="primary" plain>建立新群組 Create Group</el-button>
    </header>

    <el-row :gutter="20">
      <el-col v-for="group in groups" :key="group.id" :span="8">
        <el-card shadow="hover" class="group-card">
          <h3>{{ group.name }}</h3>
          <p>{{ group.description }}</p>
          <ul>
            <li>成員 Members：{{ group.members }}</li>
            <li>平均訓練時間 Avg Training：{{ group.training }}</li>
            <li>活躍度 Active：{{ group.activity }}</li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

const groups = ref([
  { id: 1, name: "企業 A 健康推動", description: "企業活力挑戰 12 週計畫", members: 32, training: "5.6h/週", activity: "88%" },
  { id: 2, name: "TriClub 三鐵隊", description: "IRONMAN 140.6 訓練週期", members: 18, training: "8.2h/週", activity: "93%" },
  { id: 3, name: "Fit Studio 團課", description: "團體核心訓練與恢復", members: 24, training: "4.1h/週", activity: "81%" }
]);
</script>

<style scoped>
.groups-view {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.group-card ul {
  margin: 12px 0 0;
  padding-left: 16px;
  color: #475467;
}

.group-card li {
  margin-bottom: 6px;
}
</style>
