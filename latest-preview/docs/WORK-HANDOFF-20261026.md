# 空拍景點地圖工作接手｜2026-10-26（台灣時間）

## 目標與現況
使用者要求：保留藍色一景點一方格；點金剛大道後，詳情填滿該列下方整個寬度，避免左右留洞；限制高度，不把下方其他方格推到很遠。
已建立可點選的獨立樣稿 layout-preview.html，使用原有稻浪資料，三個頁籤與三欄內容。桌面內容區最高250px、平板最高290px、手機最高300px，短內容自動縮小，超出時內部捲動。只開一處，換篩選收合，縮放後重新定位。初始花東專區、金剛大道展開。
目前已完成樣稿驗證：桌面面板寬1308px等於格線寬，內容三欄、總高度約400px，下方富里/關山方格可見；換景點、收合、西部模式、方向鍵換頁籤及Escape收合通過；390px手機框內clientWidth與scrollWidth均375px，面板351px無橫向溢出，內容區最高300px。修正預設花東入口data-mode值後已重新驗證。尚待使用者視覺確認，不代表正式採用。

## 檔案與接手
GitHub repository: James-JJ2/drone-map-2
備份分支: preview/huadong-rice-20261026
layout-preview.html: 可獨立開啟的完整互動樣稿，CSS/JS與資料皆內嵌。
index.html: 原藍色方格整合預覽（46處，花東5、西部2），仍是卡片內向下展開。
docs/wide-detail-prototype.js、docs/wide-detail-prototype.css: 新版型程式來源。
docs/WIDE-DETAIL-PROTOTYPE.md: 簡要設計。
WORK-HANDOFF.md: 完整歷程與來源紀錄。
可於另一台電腦下載此分支，開啟layout-preview.html查看。若需測試路由，從儲存庫根目錄啟動靜態伺服器，使用/layout-preview.html。

## 線上與正式站
私人預覽基址: https://drone-map-rice-preview-j-20261026.jamesfu88.chatgpt.site
原預覽首頁保留；新樣稿入口為/layout-preview.html。發布狀態以Sites成功結果為準。
Sites project_id: appgprj_6adee73945e881919b570c77a1f34217
Sites本地checkout: /workspace/scratch/424a174177b9/drone-map-rice-online-preview
正式站: https://james-jj2.github.io/drone-map-2/
正式站main未修改；不得把原預覽或樣稿說成已更新正式站。
不要再提供terminal.local給使用者，此網址只有工作環境內可用。

## 尚未完成與下一步
1. 主要桌面、手機與互動驗證已完成；平板實機尚未測試。使用者檢視新版畫面。
2. 修正觀察到的問題，再更新此GitHub分支備份並發布私人預覽的新樣稿頁；index.html保留供對照。
3. 使用者看過再決定是否採用到整合版。切勿自行更新正式站。
4. 六張Google地圖實景照片仍未取得。現有六處是本站自製地圖入口圖示；Google官方Place Photos需要尚未設定的API金鑰及作者署名。右上方權利人通知後立即下架聲明已加，但未指定聯絡信箱。
5. 七處近期稻況仍待確認，資料查閱日不是觀察日。

## 使用者固定偏好
繁體中文、簡短進度回報，工作中約60秒內更新；完成後兩個可點選項與自由輸入欄，系統表單使用最短標題「選擇」。標題列、輸入欄高度、語音與提交箭頭不能由助理修改；貼圖片請回一般聊天輸入框。
