# Drone Map 2 工作交接｜2026-10-27
建立時間：2026-10-27 08:21（Asia/Taipei）
用途：公司 PC 或其他電腦直接接續既有成果；本次只建立交接文件。

## 接手入口
- 專案：Drone Map 2（口述 Drawmap2／Draw 2.0／Draw Man 2.0）。
- 儲存庫：https://github.com/James-JJ2/drone-map-2
- 最新工作分支：`preview/huadong-rice-20261026`。
- 分支入口：https://github.com/James-JJ2/drone-map-2/tree/preview/huadong-rice-20261026
- 本文件：`WORK-HANDOFF-20261027.md`，位於上述分支。
- 前次交接：`WORK-HANDOFF-20261026.md`，本次已讀取；請保留作歷史紀錄。
- 已確認的程式備份基準：commit `401c5aabe191d7c2b67d05853519d9aa8a980d7a`，2026-10-26 13:54:09（台灣時間），訊息：fix: back up verified compact full-width layout and handoff。本次文件提交會在其後新增紀錄，不代表程式變更。

## 使用者最新指令與工作界線
J 已取消「從 drone_map2.htm 重建網站、修復兩張縮圖」的上一個指令；先找回並沿用昨天新版，確認更新、公司交接與可用網址。
本回合要求七分鐘內建立交接，供公司繼續修改。不要把本文件當作新一輪重建、改公開、更新正式站或自動改版的授權。
網站目前維持本人私人存取；本次沒有更改權限、停用驗證或重新部署。
既有正式版與昨天新版不同，不能用舊正式版覆蓋昨天新版，也不能將預覽描述為已取代正式站。

## 網站網址與發布證據
- 已在目前連線的 Chrome 實際讀到完整頁面之網址：
  https://drone-map-rice-preview-j-20261026.jamesfu88.chatgpt.site/layout-preview
- 昨天交接記載之樣稿檔案網址（檔名含副檔名）：
  https://drone-map-rice-preview-j-20261026.jamesfu88.chatgpt.site/layout-preview.html
- 私人預覽首頁（原版供對照）：
  https://drone-map-rice-preview-j-20261026.jamesfu88.chatgpt.site/
- 既有正式站：
  https://james-jj2.github.io/drone-map-2/
- Sites project_id：`appgprj_6adee73945e881919b570c77a1f34217`。
- 已查核 Sites 版本 2，部署狀態 `succeeded`，時間 2026-10-26 13:55:53（台灣時間）。
- deployment_id：`appgdep_6adeeb12eb2c81919646822a88ac181d`。
- Sites 版本 2 的來源 commit：`12becaedd7e626df98d301b5b901639c683fc723`。這屬 Sites 來源庫，與上方 GitHub 備份 commit 分開，不可互相當作相同版本 ID。
- 存取設定：custom，允許清單僅站主；不是公開網站。

## 2026-10-27 本次實際驗證
1. 已從 GitHub 讀取昨天工作分支、index.html、目錄與 10/26 交接，確認檔案存在且交接非空白。
2. 已確認工作分支的 index.html 標題為「Drone Map 2｜藍色方格整合預覽 v2.5」，46 個景點。
3. 已在目前連線的 Chrome 讀取 /layout-preview 頁面並擷取畫面：顯示 v2.5、全臺 46 處、花東稻浪 5 處、西部稻浪 2 處。
4. 畫面位於花東稻浪專區；「長濱金剛大道」已展開，能讀到「重點總覽／拍攝規劃／注意與來源」頁籤與詳情。
5. 本次畫面未出現登入或驗證碼要求，網站分頁已保留。只證明當前 Chrome 工作階段可瀏覽；不代表所有裝置、手機或未登入狀態皆已修復。
6. 本次未重新執行所有互動、手機尺寸、平板或圖片來源測試；不將昨天測試當成本次重測。
7. 公司 PC 本機檔案未直接讀取，無法排除其在 10/26 13:54 後另有尚未上傳的修改。

## 程式檔案與目前行為
- `index.html`：46 處整合預覽，保留原藍色方格；詳情仍於卡片內向下展開。
- `layout-preview.html`：獨立完整互動樣稿，CSS／JavaScript／資料內嵌；點景點後詳情填滿該列下方寬度，三欄重點與三個頁籤，限制高度並在內容區內捲動。
- `docs/wide-detail-prototype.js`、`docs/wide-detail-prototype.css`：全寬樣稿程式來源。
- `docs/WIDE-DETAIL-PROTOTYPE.md`：版型說明。
- 需求：保留一景點一藍色方格；金剛大道展開時填滿左右留白；控制面板高度，避免把下一列推得太遠。
- 昨天交接記載桌面面板寬 1308px、整體約 400px 高；桌面內容區最高 250px、平板 290px、手機 300px；換景點、收合、西部篩選、方向鍵頁籤、Escape 與 390px 手機寬測試通過。這些為 10/26 紀錄，正式採用尚待 J 確認。

## 公司端如何安全接續
1. 先讀本文件與 10/26 交接，查核工作分支目前 HEAD；不要只讀 main。
2. 找既有公司端專案與 `C:/Users/JamesFu/Documents/drone_map2.htm`。這是先前已知路徑，本次未確認仍存在；先檢查時間、內容與 Git 狀態。
3. 有本機未提交或較新修改時，先另存原檔與記錄 SHA-256，再比對來源；不要覆寫、reset、clean、force push 或在未確認的資料夾執行會覆蓋檔案的操作。
4. 優先沿用既有 checkout。若公司沒有此工作分支，將上述分支取到獨立資料夾，避免覆蓋公司的原始檔。
5. 以 `layout-preview.html` 接續全寬版型；`index.html` 保留作對照。依 J 新指定的修改項目工作，不從舊版重建。
6. 有程式修改時，驗證相關互動與桌面／手機版面，保存到工作分支並更新交接。需要維護私人預覽時沿用既有 Sites project_id；取得正確來源庫後再操作，不把 GitHub 備份庫直接當 Sites 來源庫。
7. 本文件交付後停止背景工作，等待下一次接手；不關閉電腦、不替 J 執行關機。

## 尚未完成
- J 視覺確認全寬樣稿，以及是否整合到 index.html。
- 六處新增景點的真實景點照片仍未取得，目前使用自製 Google 地圖入口圖示；不可冒稱為實景照片。
- 七處近期稻況仍待現地確認；2026-10-26 是資料整理日，不是現地觀察日。
- 平板實機驗證、其他裝置的登入可用性仍待確認。
- 權利人通知聲明尚未指定聯絡信箱。
- 原正式站的兩張縮圖曾有 10/23 修正提交；此次未重測，也未獲重新修圖或重新部署指令。

## 公司 Codex 可直接使用的接手指令
「請讀取 James-JJ2/drone-map-2 的 preview/huadong-rice-20261026 分支中 WORK-HANDOFF-20261027.md，再讀 WORK-HANDOFF-20261026.md。沿用昨天 v2.5 與 layout-preview.html 全寬樣稿，先檢查公司本機是否有更新，保留未提交資料並回報版本差異。接著依我指定的修改項目繼續；不要用 main 舊版覆蓋，不重新建站，不自行改公開或更新正式站。每個重要階段保存並更新交接。」

## 固定回覆偏好
一律繁體中文；工作時簡短回報「正在做什麼｜進度約 X%｜下一步」，盡量每 60 秒內更新；完成後提供三個可點選的具體選項及「其他」自由輸入欄。以本條取代昨天交接中「兩個選項」的舊記載。
