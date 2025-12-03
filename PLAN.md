# Fit 運動與生活紀錄平台 - 專案規劃

## 專案概述
Fit 是一個整合個人、健身房、企業健康管理的運動紀錄與分析平台，支援穿戴裝置、手機應用、IoT健身器材的數據整合。

## 系統定位
- 提供個人運動紀錄與分析
- 健身房管理系統
- 企業健康管理方案
- IoT 裝置數據整合

## 核心功能模組

### 1. 運動資料收集 (Exercise Data Collection)
- 跑步配速 (Running Pace)
- 騎乘功率 (Cycling Power)
- 重訓肌力 (Strength Training)
- 游泳泳姿 (Swimming Strokes)
- 有氧卡路里 (Cardio Calories)
- 心率監測 (Heart Rate)
- 睡眠品質 (Sleep Quality)
- 步數計算 (Step Count)

### 2. 雲端同步模組 (Cloud Sync Module)
- 運動記錄保存
- 長期數據追蹤
- 跨裝置資料存取
- 即時同步機制

### 3. 數據分析與視覺化 (Data Analytics & Visualization)
- 心率區間分析 (Heart Rate Zones)
- 速度趨勢圖 (Speed Trends)
- 功率輸出分析 (Power Output)
- 步頻統計 (Cadence Analysis)
- 象限分析 (Quadrant Analysis)
- 長期報告生成 (Long-term Reports)

### 4. 團體訓練系統 (Group Training System)
- 多人即時數據收集
- 教練端分析介面
- 團隊績效追蹤
- 訓練計畫管理

### 5. 健康管理 (Health Management)
- 體脂肪率 (Body Fat Percentage)
- 肌肉率 (Muscle Mass)
- 水分率 (Body Water)
- 睡眠品質分析
- BMI 計算與追蹤

### 6. 群組系統 (Group System)
- 成員運動數據分析
- 球隊管理功能
- 企業健康推動
- 社群互動功能

## 技術架構

### 前端技術棧 (Frontend Stack)
- **框架**: Vue 3
- **建構工具**: Vite
- **狀態管理**: Pinia
- **數據視覺化**: ECharts / D3.js
- **UI 組件**: Element Plus
- **樣式框架**: Tailwind CSS
- **路由管理**: Vue Router
- **HTTP 客戶端**: Axios

### 後端技術棧 (Backend Stack)
- **執行環境**: Node.js
- **Web 框架**: Express.js
- **API 設計**: RESTful API
- **認證機制**: JWT + Supabase Auth
- **數據驗證**: Joi / Yup
- **文件生成**: Swagger/OpenAPI

### 資料庫與儲存 (Database & Storage)
- **主資料庫**: Supabase (PostgreSQL)
- **即時功能**: Supabase Realtime
- **認證服務**: Supabase Auth
- **檔案儲存**: Supabase Storage
- **備份策略**: 自動化備份

### IoT 整合 (IoT Integration)
- **藍牙連接**: Web Bluetooth API
- **感應器數據**: Sensor APIs
- **裝置通訊**: MQTT / WebSocket
- **數據格式**: JSON / Protocol Buffers

### 雲端服務 (Cloud Services)
- **抽象化設計**: 支援多雲端平台
- **可替換性**: AWS / Azure / GCP / Supabase
- **同步機制**: 跨雲端數據同步
- **報告生成**: 雲端報告服務

## 專案結構

```
fit/
├── frontend/                 # Vue.js 前端應用
│   ├── src/
│   │   ├── components/       # 可重用組件
│   │   │   ├── charts/       # 圖表組件
│   │   │   ├── forms/        # 表單組件
│   │   │   └── common/       # 通用組件
│   │   ├── views/           # 頁面組件
│   │   │   ├── Dashboard/    # 儀表板
│   │   │   ├── Exercise/     # 運動記錄
│   │   │   ├── Analytics/    # 數據分析
│   │   │   ├── Health/       # 健康管理
│   │   │   ├── Groups/       # 群組管理
│   │   │   └── Profile/      # 個人檔案
│   │   ├── stores/          # Pinia 狀態管理
│   │   │   ├── auth.js       # 認證狀態
│   │   │   ├── exercise.js   # 運動數據
│   │   │   ├── health.js     # 健康數據
│   │   │   └── groups.js     # 群組數據
│   │   ├── utils/           # 工具函數
│   │   │   ├── api.js        # API 配置
│   │   │   ├── chart.js      # 圖表工具
│   │   │   └── date.js       # 日期處理
│   │   ├── assets/          # 靜態資源
│   │   └── styles/          # 樣式檔案
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Node.js 後端 API
│   ├── src/
│   │   ├── controllers/     # 路由控制器
│   │   │   ├── auth.js       # 認證控制器
│   │   │   ├── exercise.js   # 運動數據控制器
│   │   │   ├── health.js     # 健康數據控制器
│   │   │   └── groups.js     # 群組控制器
│   │   ├── models/          # 數據模型
│   │   │   ├── User.js       # 使用者模型
│   │   │   ├── Exercise.js   # 運動模型
│   │   │   └── Health.js     # 健康模型
│   │   ├── routes/          # API 路由
│   │   │   ├── auth.js       # 認證路由
│   │   │   ├── exercises.js  # 運動路由
│   │   │   ├── health.js     # 健康路由
│   │   │   └── groups.js     # 群組路由
│   │   ├── middleware/      # Express 中介層
│   │   │   ├── auth.js       # 認證中介層
│   │   │   ├── validation.js # 驗證中介層
│   │   │   └── errorHandler.js # 錯誤處理
│   │   ├── services/        # 業務邏輯服務
│   │   │   ├── analytics.js  # 數據分析服務
│   │   │   ├── notification.js # 通知服務
│   │   │   └── sync.js       # 同步服務
│   │   ├── utils/           # 輔助函數
│   │   │   ├── database.js   # 資料庫工具
│   │   │   ├── logger.js     # 日誌工具
│   │   │   └── validator.js  # 驗證工具
│   │   └── config/          # 配置檔案
│   │       ├── database.js   # 資料庫配置
│   │       └── supabase.js   # Supabase 配置
│   ├── package.json
│   └── server.js
├── docs/                     # 文件目錄
│   ├── api.md               # API 文件
│   ├── architecture.md      # 系統架構文件
│   ├── database.md          # 資料庫架構
│   ├── deployment.md        # 部署指南
│   └── user-guide.md        # 使用者指南
├── docker-compose.yml        # 開發環境配置
├── .env.example             # 環境變數範例
├── README.md                # 專案說明
└── LICENSE                  # 授權檔案
```

## API 設計

### 認證與使用者管理 (Authentication & User Management)
- `POST /api/auth/register` - 使用者註冊
- `POST /api/auth/login` - 使用者登入
- `POST /api/auth/logout` - 使用者登出
- `GET /api/auth/profile` - 獲取使用者檔案
- `PUT /api/auth/profile` - 更新使用者檔案
- `POST /api/auth/refresh` - 刷新存取權杖

### 運動數據管理 (Exercise Data Management)
- `POST /api/exercises` - 記錄運動數據
- `GET /api/exercises` - 獲取運動歷史記錄
- `GET /api/exercises/:id` - 獲取特定運動記錄
- `PUT /api/exercises/:id` - 更新運動記錄
- `DELETE /api/exercises/:id` - 刪除運動記錄
- `GET /api/exercises/summary` - 獲取運動統計摘要

### 健康指標管理 (Health Metrics Management)
- `POST /api/health/metrics` - 記錄健康數據
- `GET /api/health/metrics` - 獲取健康歷史記錄
- `GET /api/health/summary` - 獲取健康統計摘要
- `GET /api/health/trends` - 獲取健康趨勢分析

### 群組管理 (Group Management)
- `GET /api/groups` - 獲取使用者群組列表
- `POST /api/groups` - 建立新群組
- `GET /api/groups/:id` - 獲取群組詳情
- `PUT /api/groups/:id` - 更新群組資訊
- `DELETE /api/groups/:id` - 刪除群組
- `GET /api/groups/:id/members` - 獲取群組成員
- `POST /api/groups/:id/members` - 新增群組成員
- `GET /api/groups/:id/analytics` - 獲取群組分析數據

### 數據分析 (Analytics)
- `GET /api/analytics/exercise` - 運動數據分析
- `GET /api/analytics/health` - 健康數據分析
- `GET /api/analytics/performance` - 績效分析
- `GET /api/analytics/reports` - 生成報告

## 資料庫架構設計

### 主要資料表 (Main Tables)

#### users (使用者表)
```sql
- id: UUID (主鍵)
- email: VARCHAR (唯一)
- username: VARCHAR (唯一)
- display_name: VARCHAR
- avatar_url: TEXT
- date_of_birth: DATE
- gender: VARCHAR
- height: DECIMAL
- weight: DECIMAL
- activity_level: VARCHAR
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

#### exercises (運動記錄表)
```sql
- id: UUID (主鍵)
- user_id: UUID (外鍵)
- exercise_type: VARCHAR (跑步、騎行、重訓等)
- start_time: TIMESTAMP
- end_time: TIMESTAMP
- duration: INTEGER (秒)
- distance: DECIMAL (公尺)
- calories: INTEGER
- avg_heart_rate: INTEGER
- max_heart_rate: INTEGER
- power_data: JSONB (功率數據)
- pace_data: JSONB (配速數據)
- elevation_gain: INTEGER (公尺)
- notes: TEXT
- created_at: TIMESTAMP
```

#### health_metrics (健康指標表)
```sql
- id: UUID (主鍵)
- user_id: UUID (外鍵)
- metric_type: VARCHAR (體重、體脂肪、肌肉率等)
- value: DECIMAL
- unit: VARCHAR
- measurement_date: DATE
- notes: TEXT
- created_at: TIMESTAMP
```

#### groups (群組表)
```sql
- id: UUID (主鍵)
- name: VARCHAR
- description: TEXT
- group_type: VARCHAR (個人、健身房、企業)
- creator_id: UUID (外鍵)
- is_active: BOOLEAN
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

#### group_members (群組成員表)
```sql
- id: UUID (主鍵)
- group_id: UUID (外鍵)
- user_id: UUID (外鍵)
- role: VARCHAR (成員、管理員、教練)
- joined_at: TIMESTAMP
```

## 前端 UI 規劃

### 主要頁面 (Main Views)

#### 1. 儀表板 (Dashboard)
- 今日活動摘要
- 本週運動統計
- 健康指標快速檢視
- 最近群組活動
- 目標達成進度

#### 2. 運動記錄 (Exercise Tracking)
- 新增運動記錄表單
- 運動歷史列表
- 詳細運動數據檢視
- 運動類型篩選
- 日曆檢視模式

#### 3. 數據分析 (Analytics)
- 運動趨勢圖表
- 健康指標變化
- 績效分析報告
- 個人最佳記錄
- 目標設定與追蹤

#### 4. 健康管理 (Health Management)
- 健康數據記錄
- 身體組成分析
- 睡眠品質報告
- 健康建議
- 醫療報告整合

#### 5. 群組管理 (Groups)
- 群組列表與管理
- 成員績效比較
- 團體訓練計畫
- 排行榜與競賽
- 社群互動功能

#### 6. 個人檔案 (Profile)
- 基本資料編輯
- 目標設定
- 裝置管理
- 隱私設定
- 通知偏好

### 核心組件 (Core Components)

#### 圖表組件 (Chart Components)
- **ExerciseChart** - 運動數據圖表
- **HealthChart** - 健康指標圖表
- **TrendChart** - 趨勢分析圖表
- **ComparisonChart** - 比較分析圖表

#### 表單組件 (Form Components)
- **ExerciseForm** - 運動記錄表單
- **HealthForm** - 健康數據表單
- **ProfileForm** - 個人資料表單
- **GroupForm** - 群組設定表單

#### 通用組件 (Common Components)
- **MetricCard** - 指標卡片
- **DataTable** - 數據表格
- **DatePicker** - 日期選擇器
- **DeviceConnector** - 裝置連接器

## 開發階段規劃

### 第一階段：基礎架構 (Phase 1: Infrastructure)
- [x] 專案規劃與文件建立
- [ ] 前端 Vue.js 專案初始化
- [ ] 後端 Node.js 專案初始化
- [ ] Supabase 資料庫設定
- [ ] 基本路由與頁面結構

### 第二階段：核心功能 (Phase 2: Core Features)
- [ ] 使用者認證系統
- [ ] 運動數據記錄功能
- [ ] 基本數據視覺化
- [ ] 健康指標記錄
- [ ] 個人儀表板

### 第三階段：進階功能 (Phase 3: Advanced Features)
- [ ] 群組管理系統
- [ ] 進階數據分析
- [ ] IoT 裝置整合
- [ ] 即時同步功能
- [ ] 行動端適配

### 第四階段：優化與部署 (Phase 4: Optimization & Deployment)
- [ ] 效能優化
- [ ] 安全性強化
- [ ] 測試覆蓋
- [ ] 部署配置
- [ ] 文件完善

## 技術決策說明

### 為何選擇 Vue 3？
- Composition API 提供更好的邏輯組織
- 優秀的 TypeScript 支援
- 豐富的生態系統
- 輕量且高效能

### 為何選擇 Supabase？
- 提供完整的 BaaS (Backend as a Service)
- 內建認證、資料庫、儲存功能
- 支援即時數據同步
- PostgreSQL 基礎，功能強大

### 為何選擇 ECharts？
- 功能豐富的圖表庫
- 優秀的效能表現
- 豐富的圖表類型
- 良好的 Vue 整合

## 風險評估與應對策略

### 技術風險
- **IoT 裝置相容性**: 採用標準化 API 設計
- **數據同步延遲**: 實作增量同步機制
- **大量數據處理**: 使用分頁與快取策略

### 業務風險
- **用戶採用率**: 提供直觀的使用者介面
- **數據隱私**: 遵循 GDPR 規範
- **競爭壓力**: 專注於獨特功能開發

## 成功指標

### 技術指標
- 頁面載入時間 < 2 秒
- API 回應時間 < 500ms
- 99.9% 服務可用性
- 90% 測試覆蓋率

### 業務指標
- 用戶註冊轉換率 > 15%
- 月活躍用戶成長率 > 20%
- 用戶留存率 > 60%
- 裝置連接成功率 > 95%

---

*本規劃文件將隨專案進度持續更新*
