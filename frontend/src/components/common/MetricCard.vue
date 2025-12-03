<template>
  <el-card class="metric-card" shadow="never">
    <p class="metric-title">{{ title }}</p>
    <p class="metric-value">{{ value }}</p>
    <p
      class="metric-trend"
      :class="{ positive: trend?.includes('↑'), negative: trend?.includes('↓') }"
    >
      {{ trend }}
    </p>
  </el-card>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  value: { type: String, required: true },
  trend: { type: String, default: "" }
});
</script>

<style scoped>
.metric-card {
  border-radius: 18px;
  border: none;
  padding: 20px;
  background: #0f172a;
  color: #fff;
}

.metric-title {
  font-size: 14px;
  color: #cbd5f5;
}

.metric-value {
  font-size: 30px;
  font-weight: 600;
  margin: 8px 0;
}

.metric-trend {
  font-size: 14px;
  color: #94a3b8;
}

.metric-trend.positive {
  color: #34d399;
}

.metric-trend.negative {
  color: #f87171;
}
</style>
