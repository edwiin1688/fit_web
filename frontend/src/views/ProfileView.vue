<template>
  <div class="profile-view">
    <el-card shadow="never" class="profile-card">
      <h2>個人設定 Profile Settings</h2>
      <el-form :model="profile" label-width="120px">
        <el-form-item label="顯示名稱 Display Name">
          <el-input v-model="profile.displayName" />
        </el-form-item>
        <el-form-item label="運動目標 Goals">
          <el-select v-model="profile.goal" placeholder="選擇目標">
            <el-option label="全馬 Sub-4" value="sub4" />
            <el-option label="Triathlon 70.3" value="tri703" />
            <el-option label="體態雕塑 Body Shaping" value="shape" />
          </el-select>
        </el-form-item>
        <el-form-item label="通知設定 Notifications">
          <el-switch v-model="profile.notifications" active-text="開啟" inactive-text="關閉" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">儲存設定 Save</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const profile = reactive({
  displayName: "Eli Liao",
  goal: "tri703",
  notifications: true
});
</script>

<style scoped>
.profile-card {
  max-width: 720px;
}
</style>
