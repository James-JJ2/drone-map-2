# Windows還原Drone Map 2

## 取得備份與啟動

在新的空資料夾執行，不覆寫既有網站：

```powershell
git clone --single-branch --branch backup/latest-pc-20261028 https://github.com/James-JJ2/drone-map-2.git Drone-Map-2
Set-Location Drone-Map-2
git log -1 --format="%H %s"
py -3 -m http.server 8892 --bind 127.0.0.1 --directory latest-preview/dist
```

開啟http://127.0.0.1:8892/，應顯示v2.5.9、全臺46處、花東5處、西部2處。Python只用於靜態伺服器，不需套件安裝。建議透過HTTP而非直接file://驗收。

## 檔案界線

- latest-preview/：最新Sites來源逐檔副本，含dist、圖片、CSS/JS來源與修改紀錄；未發布。
- snapshots/deployed-v11/：當前Sites正式來源a45a0ed的對照副本，不以它覆蓋最新預覽。
- snapshots/pc-resume-20261027/：公司PC原接續副本，保留全部11檔；Git歷史另外保存於本機原始ZIP。
- 根目錄index.html、layout-preview.html及既有backups/：原GitHub歷史內容保留，不是最新版入口。
- data/flight-points-46.json：驗收時由頁面DOM及rice-data擷取的46處資料；完整原始HTML及JSON同時保存。
- offline-image-cache/：既有外部縮圖封存與URL雜湊表，未自動重寫原頁面路徑。8個專屬JPEG在latest-preview/dist/assets/。
- .openai/hosting.json：既有Sites身分與靜態目錄設定，不含Token。還原瀏覽不必使用Sites；不得拿它直接建立新站、推送來源或部署。

## 驗收

檢查46張卡片、花東5及西部2篩選，點開金剛大道、野柳及三仙台，確認照片與三個頁籤，收合後可再開其他景點。照片權利聲明應無框、非粗體且靠右下。不要將預覽視為已同步上線。

比對BACKUP-MANIFEST.json的逐檔SHA-256；本次已在公司PC由GitHub重新Clone後核對，家用筆電及手機仍須實際驗收。外部Unsplash縮圖、Google地圖與來源頁需要網路；離線封存圖片可用於後續另行調整，但本次不改原程式。
