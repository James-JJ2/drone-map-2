# Drone Map 2：2026-10-28 備份與交接

本分支只備份及驗收，沒有部署、沒有改動網站存取權限。不要把根目錄的歷史首頁當成最新預覽。

## 最新版本與來源

- 最新來源：v2.5.9未發布預覽，Sites來源提交cdf8c6203113f3dbbd18b8831a5696223fe49050（2026-10-27 14:27:43 +08:00）；保存在latest-preview/，網站入口latest-preview/dist/index.html。
- 公司PC原接續專案：C:\Users\JamesFu\Documents\Codex\2026-10-27\new-chat\work\drone-map-2-resume-20261027。分支resume/46-spots-20261027、本機提交a4fafd7，原來源83d0bbe，沒有remote；不是最後修改的Sites來源。本次原檔及Git已先封存，另保留於snapshots/pc-resume-20261027/。
- 本機最新整理工作目錄：C:\Users\JamesFu\Documents\Codex\2026-10-27\pc-windows-github-codex-pc\work\drone-v7-audit-20261028。
- 指定C:\Users\JamesFu\Documents\drone_map2.htm目前不存在。其他技能庫內的Drone Map HTML為舊參照版本，已另存，不拿來覆蓋最新版。
- GitHub：https://github.com/James-JJ2/drone-map-2，維持既有public狀態。
- 本次分支：backup/latest-pc-20261028，基於d201c62643162e0c65e9273333f44908c08fbc28；不覆寫main、preview/huadong-rice-20261026或backup/sites-v7-20261027。
- 本次程式快照提交：提交後填入；含本CURRENT的最終交接提交以分支HEAD／git log -1 -- CURRENT.md及本機最終驗證報告為準，避免文件自我引用自身雜湊。

## 地點與功能驗收

實際46處、不重複；原40處名稱與7筆稻浪ID保留（池上原有卡轉為稻浪項目，因此40+7-1=46）。花東稻浪5處、西部2處。資料另存data/flight-points-46.json，原始完整資料仍在HTML與rice-data JSON。

| 要求 | 本次實際結果 |
|---|---|
| 金剛大道填滿左右留白 | 最新預覽通過；46處均逐一點開，面板寬度等於格網寬度，三頁籤存在 |
| 背景與資訊區一致 | 外面板#233a58、內資訊格#0c1729；仍是兩色，不宣稱完全同色，待本人確認 |
| 野柳／三仙台縮圖 | 本機JPEG存在，瀏覽器載入成功，來源與授權保留；線上v11也載入成功 |
| 權利聲明縮小、非粗體、無黃框、右下 | 最新預覽通過：內文8px、標題及內文400字重、邊框0、靠右下；線上v11仍為舊的有框較大字版本 |
| 登入／驗證碼暫停 | 最新HTML未見captcha/password門檻；Sites目前access_mode=public，實際瀏覽未要求登入；本次未變更任何權限 |
| 花東／西部稻浪 | 篩選實測分別5、2處；切換時收合舊面板 |

本機兩頁共8份執行腳本通過Node語法檢查；8個在地圖片檔都存在。當前瀏覽器46張卡片縮圖可載入，部分原圖為外部Unsplash一般示意圖，不宣稱全46處均已換成景點實景照片。14個外部縮圖URL另存offline-image-cache與SOURCES.json，未改寫原HTML連結。

## 線上版本與部署

- Sites正式頁：https://drone-map-rice-preview-j-20261026.jamesfu88.chatgpt.site/ ，v2.5.8／Sites v11，來源a45a0ed182341d8b989b5fd156d94ccab033ffc0；查得既有部署succeeded、46處。完整對照來源另存snapshots/deployed-v11/。
- 原GitHub Pages：https://james-jj2.github.io/drone-map-2/ ，HTTP200，仍是40處舊站。
- 本次沒有同步更新任一正式網站，也不執行Sites來源push、save version、deploy或Pages main更新。v2.5.9仍待視覺確認與發布核准。
- Sites的CLI直接讀取回403，但正常瀏覽器可開啟，且平台存取模式為public；不將機器請求403誤判為登入機制仍開啟，也沒有使用繞過登入Token。

## 家用Windows還原

Clone本分支，在儲存庫根目錄執行 `py -3 -m http.server 8892 --bind 127.0.0.1 --directory latest-preview/dist`，開啟http://127.0.0.1:8892/；不需npm建置、API Key或登入帳密。Node僅用於語法驗證。完整步驟見RESTORE-WINDOWS.md。

離線圖片副本是封存用途，來源HTML仍引用Unsplash；完全離線時外部縮圖不保證顯示。Google地圖及來源連結需要網路。新筆電與實機手機尚未驗收。

## 下一步

1. 本人確認v2.5.9聲明字體、位置與內外底色是否符合要求。
2. 取得正式部署核准後，才將已確認來源發布到指定網站；不要直接覆寫GitHub Pages的40處舊站。
3. 手機／平板實機驗收、近期稻況與空域／場地許可逐項另查；備份成功不等於飛行可行或稻況已確認。
