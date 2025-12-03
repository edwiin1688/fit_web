<template>
  <div class="analytics-view">
    <performance-chart />

    <el-row :gutter="20" class="analytics-grid">
      <el-col :span="12">
        <el-card shadow="never">
          <h3>速度與功率 Speed & Power</h3>
          <ul>
            <li>臨界功率 FTP：260W</li>
            <li>5km 平均配速：4'25"</li>
            <li>步頻 Cadence：173 spm</li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="never">
          <h3>心率 Heart Rate</h3>
          <ul>
            <li>平均心率：148 bpm</li>
            <li>心率區間時間：Z2 52%、Z3 28%</li>
            <li>恢復時間 Recovery：18h</li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import PerformanceChart from "../components/charts/PerformanceChart.vue";
</script>

<style scoped>
.analytics-view {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.analytics-grid ul {
  margin: 16px 0 0;
  padding-left: 16px;
  color: #475467;
}

.analytics-grid li {
  margin-bottom: 8px;
}
</style>
