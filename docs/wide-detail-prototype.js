(() => {
  'use strict';
  const grid = document.getElementById('cardGrid');
  const spots = JSON.parse(document.getElementById('rice-data').textContent);
  const cards = [...grid.querySelectorAll('.card')];
  const originalToggle = window.toggleCard;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const list = values => `<ul>${values.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
  const box = (title, content, tone = '') => `<section class="wide-box ${tone}"><h3>${esc(title)}</h3>${content}</section>`;
  const panel = document.createElement('section');
  panel.className = 'wide-detail';
  panel.id = 'wide-detail';
  panel.hidden = true;
  panel.setAttribute('aria-labelledby', 'wide-detail-title');
  grid.append(panel);
  let active = null;
  let selectedTab = 'overview';

  function close(returnFocus = false) {
    const previous = active;
    cards.forEach(c => {
      c.classList.remove('wide-selected', 'expanded');
      const b = c.querySelector('.rice-summary');
      if (b) { b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-controls', `details-${c.dataset.riceId}`); }
    });
    panel.hidden = true;
    active = null;
    if (returnFocus) previous?.querySelector('.rice-summary')?.focus({preventScroll:true});
  }

  function placePanel() {
    if (!active || active.hidden) return close();
    const visible = cards.filter(c => !c.hidden && c.style.display !== 'none');
    const columns = getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length;
    const index = visible.indexOf(active);
    const rowEnd = Math.min(visible.length - 1, (Math.floor(index / columns) + 1) * columns - 1);
    visible[rowEnd].after(panel);
  }

  function content(spot) {
    if (selectedTab === 'shooting') return [
      box('取景與運鏡', list(spot.shots), 'blue'),
      box('光線與構圖', `<p>${esc(spot.light)}</p><p class="wide-muted">依地景整理的本站提案；並非現場飛行核准。</p>`, 'blue'),
      box('起降前勘查', `<p>${esc(spot.launch)}</p><p class="wide-muted">導航點不代表可起降，須另確認場地許可。</p>`, 'amber')
    ].join('');
    if (selectedTab === 'safety') return [
      box('現場注意', list(spot.cautions), 'amber'),
      box('飛行條件尚未查證', '<p>尚未核實指定位置、日期與高度的空域及場地限制。先查民航局空域、現場公告與管理方要求，再決定是否飛行。</p><a href="https://drone.caa.gov.tw/" target="_blank" rel="noopener noreferrer">民航局空域查詢 ↗</a>', 'red'),
      box('資料來源與日期', `<ul>${spot.sources.map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.name)} ↗</a><small>查閱 ${esc(s.accessed)}</small></li>`).join('')}</ul><p class="wide-muted">查閱日不代表拍攝日或稻況觀察日。</p>`)
    ].join('');
    return [
      box('稻況與季節', `<div class="wide-status">近期稻況：${esc(spot.status)}</div><p>${esc(spot.season)}</p><p class="wide-muted">無可核實的現地觀察日期；2026-10-26 為資料整理日。</p>`, 'amber'),
      box('拍攝重點', `<p>${esc(spot.intro)}</p><p>${esc(spot.shots[0])}</p><p class="wide-muted">切換「拍攝規劃」可看完整運鏡與光線資訊。</p>`, 'blue'),
      box('出發前先確認', `<p>${esc(spot.verify)}</p><p>${esc(spot.cautions[0])}</p><p class="wide-alert">空域與場地許可尚未確認。</p>`, 'amber')
    ].join('');
  }

  function render(spot) {
    const url = spot.mapEntry?.url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name)}`;
    panel.innerHTML = `<div class="wide-heading"><div><span class="wide-eyebrow">景點詳情</span><h2 id="wide-detail-title">${esc(spot.name)}</h2><p>${esc(spot.location)}</p></div><button type="button" class="wide-close" aria-label="收合景點詳情">收合 ×</button></div>
      <div class="wide-tabs" role="tablist" aria-label="景點資訊分類">${[['overview','重點總覽'],['shooting','拍攝規劃'],['safety','注意與來源']].map(([key,label])=>`<button type="button" role="tab" id="wide-tab-${key}" aria-selected="${selectedTab===key}" aria-controls="wide-body" tabindex="${selectedTab===key?0:-1}" data-tab="${key}">${label}</button>`).join('')}</div>
      <div class="wide-body" id="wide-body" role="tabpanel" tabindex="0" aria-labelledby="wide-tab-${selectedTab}">${content(spot)}</div>
      <div class="wide-bottom"><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">開啟 Google 地圖與相片 ↗</a><button type="button" class="wide-done">收合，繼續看其他景點 ↓</button></div>`;
    panel.querySelector('.wide-close').addEventListener('click', () => close(true));
    panel.querySelector('.wide-done').addEventListener('click', () => close(true));
    const tabs = [...panel.querySelectorAll('[role=tab]')];
    tabs.forEach((button, index) => {
      button.addEventListener('click', () => { selectedTab=button.dataset.tab; render(spot); panel.querySelector(`[data-tab="${selectedTab}"]`).focus({preventScroll:true}); });
      button.addEventListener('keydown', e => {
        let next;
        if (e.key==='ArrowRight') next=(index+1)%tabs.length;
        if (e.key==='ArrowLeft') next=(index+tabs.length-1)%tabs.length;
        if (e.key==='Home') next=0;
        if (e.key==='End') next=tabs.length-1;
        if (next!==undefined) { e.preventDefault(); tabs[next].click(); }
      });
    });
  }

  window.toggleCard = element => {
    const card = element.closest('.card');
    const spot = spots.find(s => s.id===card.dataset.riceId);
    if (!spot) { close(); return originalToggle(element); }
    if (active===card) return close();
    close();
    active=card; selectedTab='overview';
    card.classList.add('wide-selected');
    const summary=card.querySelector('.rice-summary');
    summary.setAttribute('aria-expanded','true'); summary.setAttribute('aria-controls','wide-detail');
    render(spot); panel.hidden=false; placePanel();
  };
  document.querySelectorAll('.filter-btn,.mode-btn,#rice-county,#rice-status').forEach(el => {
    el.addEventListener(el.tagName==='SELECT'?'change':'click',()=>close());
  });
  panel.addEventListener('keydown', e=>{if(e.key==='Escape')close(true);});
  window.addEventListener('resize', placePanel);
  document.querySelector('[data-mode="rice"]').click();
  window.toggleCard(document.querySelector('[data-rice-id="changbin"] .rice-summary'));
})();
