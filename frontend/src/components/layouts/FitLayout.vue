<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="brand">
        <span class="brand-mark">Sport</span>
        <div>
          <p class="brand-title">Fit</p>
          <p class="brand-subtitle">運動與生活紀錄</p>
        </div>
      </div>
      <nav class="nav">
        <RouterLink v-for="item in menu" :key="item.path" :to="item.path" class="nav-item">
          <component :is="item.icon" class="nav-icon" />
          <span>{{ item.label }}</span>
        </RouterLink>
      </nav>
    </aside>

    <main class="content">
      <header class="content-header">
        <div>
          <p class="greeting">歡迎回來</p>
          <p class="subtitle">即時掌握你的訓練、健康與團隊表現</p>
        </div>
        <el-button type="primary" round>
          新增運動記錄
        </el-button>
      </header>
      <section class="content-body">
        <RouterView />
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import { Monitor, TrendCharts, Suitcase, DataAnalysis, User } from "@element-plus/icons-vue";

const route = useRoute();

const menu = computed(() => [
  { path: "/", label: "儀表板 Dashboard", icon: Monitor },
  { path: "/exercise", label: "運動記錄 Exercise", icon: TrendCharts },
  { path: "/analytics", label: "數據分析 Analytics", icon: DataAnalysis },
  { path: "/health", label: "健康追蹤 Health", icon: Suitcase },
  { path: "/groups", label: "群組系統 Groups", icon: TrendCharts },
  { path: "/profile", label: "個人設定 Profile", icon: User }
]);
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: #0f172a;
  color: #f8fafc;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
}

.brand {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 32px;
}

.brand-mark {
  background: linear-gradient(135deg, #34d399, #38bdf8);
  padding: 10px;
  border-radius: 12px;
  font-weight: 700;
}

.brand-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.brand-subtitle {
  font-size: 12px;
  color: #94a3b8;
  margin: 0;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  color: #e2e8f0;
  text-decoration: none;
  transition: background 0.2s ease;
}

.nav-item.router-link-active {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.nav-icon {
  font-size: 18px;
}

.content {
  padding: 32px;
  background: #f8fafc;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.greeting {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.subtitle {
  color: #475467;
  margin: 4px 0 0;
}

.content-body {
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  min-height: 70vh;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.1);
}
</style>
