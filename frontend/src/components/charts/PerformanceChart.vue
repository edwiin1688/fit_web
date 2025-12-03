<template>
  <el-card class="chart-card" shadow="never">
    <div class="chart-header">
      <div>
        <p class="chart-title">訓練績效趨勢 Performance Trend</p>
        <p class="chart-subtitle">心率區間、功率與步頻綜合分析</p>
      </div>
      <el-select v-model="selectedRange" size="small" class="range-select">
        <el-option label="最近 7 天" value="7d" />
        <el-option label="最近 30 天" value="30d" />
        <el-option label="最近 90 天" value="90d" />
      </el-select>
    </div>
    <v-chart class="chart" :option="chartOption" autoresize />
  </el-card>
</template>

<script setup>
import { ref, computed } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import { GridComponent, LegendComponent, TooltipComponent } from "echarts/components";
import VChart from "vue-echarts";

use([CanvasRenderer, LineChart, GridComponent, LegendComponent, TooltipComponent]);

const selectedRange = ref("7d");

const chartOption = computed(() => ({
  tooltip: { trigger: "axis" },
  legend: { data: ["心率 Heart Rate", "功率 Power", "步頻 Cadence"], textStyle: { color: "#475467" } },
  grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
  xAxis: { type: "category", boundaryGap: false, data: ["一", "二", "三", "四", "五", "六", "日"] },
  yAxis: { type: "value" },
  series: [
    { name: "心率 Heart Rate", type: "line", smooth: true, data: [148, 152, 146, 155, 150, 160, 158], areaStyle: {} },
    { name: "功率 Power", type: "line", smooth: true, data: [220, 240, 235, 245, 250, 260, 255], areaStyle: {} },
    { name: "步頻 Cadence", type: "line", smooth: true, data: [168, 170, 172, 169, 171, 173, 174], areaStyle: {} }
  ]
}));
</script>

<style scoped>
.chart-card {
  border-radius: 22px;
  border: none;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.chart-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.chart-subtitle {
  color: #475467;
  margin: 4px 0 0;
}

.chart {
  height: 320px;
}

.range-select {
  min-width: 140px;
}
</style>
