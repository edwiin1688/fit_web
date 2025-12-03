<template>
  <div class="health-view">
    <header class="health-header">
      <div>
        <h2>健康指標 Health Metrics</h2>
        <p>追蹤體態、睡眠與恢復狀態</p>
      </div>
      <el-button type="primary" plain>新增健康紀錄 Add Entry</el-button>
    </header>

    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="never">
          <p class="metric-label">體脂肪 Body Fat</p>
          <p class="metric-value">18.2%</p>
          <p class="metric-change positive">↓ 0.6% (30 天)</p>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <p class="metric-label">肌肉率 Muscle Mass</p>
          <p class="metric-value">42.5%</p>
          <p class="metric-change">↑ 0.3% (30 天)</p>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <p class="metric-label">睡眠 Sleep Score</p>
          <p class="metric-value">84 分</p>
          <p class="metric-change">平均 7 小時 35 分</p>
        </el-card>
      </el-col>
    </el-row>

    <el-table :data="healthLogs" stripe>
      <el-table-column prop="date" label="日期 Date" width="140" />
      <el-table-column prop="weight" label="體重 Weight" />
      <el-table-column prop="bodyFat" label="體脂肪 Body Fat" />
      <el-table-column prop="muscle" label="肌肉率 Muscle" />
      <el-table-column prop="sleep" label="睡眠 Sleep" />
    </el-table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const healthLogs = ref([
  { date: "2025-12-02", weight: "68.3 kg", bodyFat: "18.2%", muscle: "42.5%", sleep: "7h 40m" },
  { date: "2025-11-30", weight: "68.5 kg", bodyFat: "18.5%", muscle: "42.3%", sleep: "7h 10m" },
  { date: "2025-11-27", weight: "68.8 kg", bodyFat: "18.8%", muscle: "42.1%", sleep: "6h 55m" }
]);
</script>

<style scoped>
.health-view {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.health-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.metric-label {
  color: #667085;
  margin-bottom: 4px;
}

.metric-value {
  font-size: 32px;
  font-weight: 600;
  margin: 0;
}

.metric-change {
  color: #475467;
}

.metric-change.positive {
  color: #22c55e;
}
</style>
