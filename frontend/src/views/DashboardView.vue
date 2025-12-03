<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :span="6">
        <metric-card title="本週訓練時數 Weekly Training" value="12.5 小時" trend="↑ 8%" />
      </el-col>
      <el-col :span="6">
        <metric-card title="心率區間達成 Heart Rate" value="92%" trend="↑ 5%" />
      </el-col>
      <el-col :span="6">
        <metric-card title="群組活躍度 Group Active" value="87%" trend="↑ 12%" />
      </el-col>
      <el-col :span="6">
        <metric-card title="睡眠品質 Sleep Quality" value="83 分" trend="↑ 3%" />
      </el-col>
    </el-row>

    <div class="charts">
      <el-row :gutter="20">
        <el-col :span="16">
          <performance-chart />
        </el-col>
        <el-col :span="8">
          <el-card class="planning-card">
            <h3>訓練計畫 Training Plan</h3>
            <ul>
              <li>週一：間歇跑 Intervals</li>
              <li>週三：肌力訓練 Strength</li>
              <li>週五：游泳訓練 Swim</li>
              <li>週末：團體課程 Group Session</li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import MetricCard from "../components/common/MetricCard.vue";
import PerformanceChart from "../components/charts/PerformanceChart.vue";
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.charts {
  margin-top: 24px;
}

.planning-card ul {
  margin: 16px 0 0;
  padding-left: 18px;
  color: #475467;
}

.planning-card li {
  margin-bottom: 12px;
}
</style>
