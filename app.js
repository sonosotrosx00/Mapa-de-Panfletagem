(function () {
  'use strict';

  const SEMANAS = window.SEMANAS || [];
  const REGIOES = window.REGIOES || [];
  const byId = Object.fromEntries(REGIOES.map(r => [r.id, r]));
  const app = document.getElementById('app');
  const fmt = n => Number(n).toLocaleString('pt-BR');
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const MAPA_GERAL = 'https://www.google.com/maps/d/viewer?hl=pt-BR&mid=1jOZWB-L2m4NR5YbadMuEtsVGRU69oVY&ll=-1.3636809913152586%2C-48.36876460782378&z=12';
  const MAPA_GERAL_EMBED = 'https://www.google.com/maps/d/embed?hl=pt-BR&mid=1jOZWB-L2m4NR5YbadMuEtsVGRU69oVY&ll=-1.3636809913152586%2C-48.36876460782378&z=11';

  const ICON = {
    chev: '<svg viewBox="0 0 24 24" class="chev"><path d="M9 6l6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>',
    zoom: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
    pdf: '<svg viewBox="0 0 24 24"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M12 12v6m0 0l-3-3m3 3l3-3"/></svg>',
    img: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5L5 20"/></svg>',
    ext: '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  };

  const turnoTxt = t => t === 'NOTURNO' ? 'Noturno' : 'Diurno';

  const semanaDe = n => SEMANAS.find(s => s.n === n);
  const mapImg = (id, preview) => `mapas/regiao-${id}${preview ? '-p' : ''}.jpg`;
  const pdfUrl = id => `pdf/Regiao-${id}.pdf`;
  const soma = (regs, k) => regs.reduce((a, r) => a + (r[k] || 0), 0);

  const card = (r, comSemana) => `
    <a class="rcard" href="#/regiao/${r.id}">
      <span class="rnum">${esc(r.id)}</span>
      <div>
        <h3>${esc(r.nome)}</h3>
        <div class="rmeta">${comSemana ? `Dia ${r.semana} · ` : ''}${turnoTxt(r.turno)} · ${esc(r.frequencia)}</div>
      </div>
      ${ICON.chev}
    </a>`;

  const totais = regs => `
    <div class="totals">
      <div><b>${regs.length}</b><span>Regiões</span></div>
      <div><b>${fmt(soma(regs, 'domicilios'))}</b><span>Domicílios</span></div>
      <div><b>${fmt(soma(regs, 'panfletos'))}</b><span>Panfletos</span></div>
    </div>`;

  /* ---------------- Telas ---------------- */

  let busca = '';

  function montarInicio(atual) {
    app.innerHTML = `
      <section class="hero"><h1>Mapa de Panfletagem</h1></section>

      <div class="search">
        ${ICON.search}
        <input id="q" type="search" placeholder="Buscar região, diurno ou noturno" autocomplete="off" value="${esc(busca)}" aria-label="Buscar região">
      </div>

      <div id="semanaView">
        <div class="section-label" id="lblSemanas">Dias</div>
        <nav class="weeks" aria-labelledby="lblSemanas">
          <a class="week" href="#/visao-geral" aria-current="${atual === 'geral'}">
            <b>Visão geral</b>
            <span class="w-date">Todas</span>
            <span class="w-count">${REGIOES.length} regiões</span>
          </a>
          ${SEMANAS.map(s => `
            <a class="week" href="#/dia/${s.n}" aria-current="${s.n === atual}">
              <b>Dia ${s.n}</b>
              <span class="w-date">${esc(s.dia)} · ${esc(s.data)}</span>
              <span class="w-count">${s.regioes.length} regiões</span>
            </a>`).join('')}
        </nav>
        <div id="corpo"></div>
      </div>
      <div id="buscaView" hidden></div>`;

    const q = document.getElementById('q');
    q.addEventListener('input', () => { busca = q.value; aplicarBusca(); });
    aplicarBusca();
    const cur = app.querySelector('.week[aria-current="true"]');
    if (cur) cur.scrollIntoView({ block: 'nearest', inline: 'center' });
    return document.getElementById('corpo');
  }

  function renderHome(semanaN) {
    const sem = semanaDe(semanaN);
    const regs = sem.regioes.map(id => byId[id]).filter(Boolean);
    document.title = `Dia ${sem.n} — Mapa de Panfletagem`;
    montarInicio(sem.n).innerHTML = `
      <div class="week-head">
        <div class="top"><h2>Dia ${sem.n}</h2><span>${esc(sem.diaNome)}, ${esc(sem.data)}</span></div>
        ${totais(regs)}
      </div>
      <div class="list">${regs.map(r => card(r)).join('')}</div>`;
  }

  function renderVisaoGeral() {
    document.title = 'Visão geral — Mapa de Panfletagem';
    montarInicio('geral').innerHTML = `
      <div class="week-head">
        <div class="top"><h2>Visão geral</h2></div>
        ${totais(REGIOES)}
      </div>
      <div class="card">
        <iframe class="overview-frame" src="${MAPA_GERAL_EMBED}" title="Mapa geral" loading="lazy" allowfullscreen></iframe>
        <div class="overview-actions"><a class="btn" href="${MAPA_GERAL}" target="_blank" rel="noopener">${ICON.ext}Abrir no Google Maps</a></div>
      </div>`;
  }

  function aplicarBusca() {
    const termo = busca.trim().toLowerCase().replace(/^regi[aã]o\s*/, '');
    const sv = document.getElementById('semanaView');
    const bv = document.getElementById('buscaView');
    if (!termo) { sv.hidden = false; bv.hidden = true; return; }
    const num = termo.replace(/\D/g, '');
    const turnoBusca = 'diurno'.startsWith(termo) ? 'DIURNO' : 'noturno'.startsWith(termo) ? 'NOTURNO' : null;
    const res = REGIOES.filter(r => num
      ? (num.length === 1 ? String(+r.id).startsWith(num) : r.id.startsWith(num))
      : (turnoBusca && termo.length >= 2 ? r.turno === turnoBusca : r.nome.toLowerCase().includes(termo))
    ).sort((a, b) => +a.id - +b.id);
    sv.hidden = true; bv.hidden = false;
    bv.innerHTML = `<div class="section-label">${res.length} ${res.length === 1 ? 'região' : 'regiões'}</div>` + (res.length
      ? `<div class="list">${res.map(r => card(r, true)).join('')}</div>`
      : `<div class="empty">Nenhuma região encontrada.</div>`);
  }

  function renderRegiao(id) {
    const r = byId[id];
    if (!r) {
      app.innerHTML = `<div class="notfound"><p>Região não encontrada.</p><a class="btn" href="#/visao-geral">Voltar ao início</a></div>`;
      return;
    }
    const sem = semanaDe(r.semana);
    document.title = `${r.nome} — Mapa de Panfletagem`;
    const logs = Array.isArray(r.logradouros) ? r.logradouros : [];

    app.innerHTML = `
      <a class="back" href="#/dia/${r.semana}">${ICON.back}Dia ${r.semana}</a>
      <div class="dhead">
        <span class="rnum">${esc(r.id)}</span>
        <div>
          <h1>${esc(r.nome)}</h1>
          <p>Dia ${sem.n} · ${esc(sem.diaNome)}, ${esc(sem.data)}</p>
        </div>
      </div>

      <div class="detail-grid">
        <div class="card">
          <button class="map-thumb" id="openMap" aria-label="Ampliar mapa da ${esc(r.nome)}">
            <img src="${mapImg(r.id, true)}" alt="Mapa da ${esc(r.nome)}">
          </button>
          <div class="map-actions">
            <button class="btn btn-primary" id="openMap2">${ICON.zoom}<span>Ampliar</span></button>
            <a class="btn" href="${pdfUrl(r.id)}" download="Regiao-${r.id}.pdf">${ICON.pdf}<span>Baixar PDF</span></a>
            <a class="btn" href="${mapImg(r.id)}" download="Regiao-${r.id}.jpg">${ICON.img}<span>Baixar imagem</span></a>
          </div>
        </div>

        <div class="card">
          <div class="info">
            <div class="it full"><div class="k">Setor</div><div class="v">${esc(r.nome)}</div></div>
            <div class="it"><div class="k">Turno</div><div class="v">${turnoTxt(r.turno)}</div></div>
            <div class="it"><div class="k">Frequência</div><div class="v">${esc(r.frequencia)}</div></div>
            <div class="it full"><div class="k">Categoria</div><div class="v">${esc(r.categoria)}</div></div>
            <div class="it full"><div class="k">Dias de Serviço</div><div class="v">${esc(r.dias)}</div></div>
            <div class="it full"><div class="k">Horário</div><div class="v">${esc(r.horario)}</div></div>
            <div class="it pair-last"><div class="k">Nº de Domicílios</div><div class="v big">${fmt(r.domicilios)}</div></div>
            <div class="it"><div class="k">Nº de Panfletos</div><div class="v big">${fmt(r.panfletos)}</div></div>
          </div>
        </div>
      </div>

      ${logs.length ? `
        <div class="section-label">Logradouros e perímetros</div>
        <div class="card">
          <div class="table-wrap">
            <table>
              <thead><tr><th>#</th><th>Logradouro</th><th>Perímetro</th></tr></thead>
              <tbody>
                ${logs.map((l, i) => `<tr><td class="n">${i + 1}</td><td><b>${esc(l.logradouro)}</b></td><td>${esc(l.perimetro)}</td></tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>` : ''}`;

    const open = () => Viewer.open(mapImg(r.id), mapImg(r.id, true), r.nome, `Regiao-${r.id}.jpg`);
    document.getElementById('openMap').addEventListener('click', open);
    document.getElementById('openMap2').addEventListener('click', open);
  }

  /* ---------------- Rotas ---------------- */

  function route() {
    const h = location.hash.replace(/^#\/?/, '');
    const [a, b] = h.split('/');
    if (Viewer.isOpen()) Viewer.close();
    if (a === 'regiao' && b) renderRegiao(b.padStart(2, '0'));
    else if (a === 'visao-geral') renderVisaoGeral();
    else if ((a === 'dia' || a === 'semana') && semanaDe(parseInt(b, 10))) renderHome(parseInt(b, 10));
    else renderVisaoGeral(); // início padrão (também para rotas vazias ou inválidas)
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  /* ---------------- Visualizador com zoom ---------------- */

  const Viewer = (() => {
    const el = document.getElementById('viewer');
    const stage = document.getElementById('viewerStage');
    const img = document.getElementById('viewerImg');
    const title = document.getElementById('viewerTitle');
    const dl = document.getElementById('viewerDl');
    const loading = document.getElementById('viewerLoading');
    let s = 1, x = 0, y = 0, minS = 1, maxS = 6;
    let natW = 0, natH = 0;
    const pts = new Map();
    let last = null, pinch = null, lastTap = 0, opened = false;

    const apply = () => { img.style.transform = `translate(${x}px,${y}px) scale(${s})`; };

    function clamp() {
      const W = stage.clientWidth, H = stage.clientHeight, w = natW * s, h = natH * s;
      x = w <= W ? (W - w) / 2 : Math.min(0, Math.max(W - w, x));
      y = h <= H ? (H - h) / 2 : Math.min(0, Math.max(H - h, y));
    }
    function fit() {
      if (!natW) return;
      const W = stage.clientWidth, H = stage.clientHeight;
      minS = Math.min(W / natW, H / natH);
      maxS = Math.max(minS * 8, 1.5);
      s = minS; x = (W - natW * s) / 2; y = (H - natH * s) / 2; apply();
    }
    function zoomAt(ns, cx, cy) {
      ns = Math.min(maxS, Math.max(minS, ns));
      x = cx - (cx - x) * (ns / s); y = cy - (cy - y) * (ns / s); s = ns; clamp(); apply();
    }
    const rel = e => { const r = stage.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };

    stage.addEventListener('pointerdown', e => {
      stage.setPointerCapture(e.pointerId);
      pts.set(e.pointerId, rel(e));
      if (pts.size === 1) {
        last = rel(e); stage.classList.add('dragging');
        const now = Date.now();
        if (now - lastTap < 300) { const [cx, cy] = rel(e); zoomAt(s > minS * 1.5 ? minS : s * 2.5, cx, cy); lastTap = 0; }
        else lastTap = now;
      } else if (pts.size === 2) {
        const [p1, p2] = [...pts.values()];
        pinch = { d: Math.hypot(p1[0] - p2[0], p1[1] - p2[1]), s };
      }
    });
    stage.addEventListener('pointermove', e => {
      if (!pts.has(e.pointerId)) return;
      pts.set(e.pointerId, rel(e));
      if (pts.size === 2 && pinch) {
        const [p1, p2] = [...pts.values()];
        const d = Math.hypot(p1[0] - p2[0], p1[1] - p2[1]);
        zoomAt(pinch.s * d / pinch.d, (p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2);
      } else if (pts.size === 1 && last) {
        const p = rel(e); x += p[0] - last[0]; y += p[1] - last[1]; last = p; clamp(); apply();
      }
    });
    const up = e => {
      pts.delete(e.pointerId);
      if (pts.size < 2) pinch = null;
      if (pts.size === 1) last = [...pts.values()][0];
      if (pts.size === 0) { last = null; stage.classList.remove('dragging'); }
    };
    stage.addEventListener('pointerup', up);
    stage.addEventListener('pointercancel', up);
    stage.addEventListener('wheel', e => {
      e.preventDefault();
      const [cx, cy] = rel(e);
      zoomAt(s * Math.exp(-e.deltaY * 0.0015), cx, cy);
    }, { passive: false });

    el.addEventListener('click', e => {
      const b = e.target.closest('[data-act]'); if (!b) return;
      const W = stage.clientWidth / 2, H = stage.clientHeight / 2;
      ({ close: () => history.back(), in: () => zoomAt(s * 1.6, W, H), out: () => zoomAt(s / 1.6, W, H), fit })[b.dataset.act]();
    });
    window.addEventListener('resize', () => { if (opened) fit(); });
    document.addEventListener('keydown', e => { if (opened && e.key === 'Escape') history.back(); });

    function setSrc(src, done) {
      const pre = new Image();
      pre.onload = () => {
        if (!opened) return;
        const oldW = natW, W = stage.clientWidth, H = stage.clientHeight;
        const cx = oldW ? (W / 2 - x) / s : 0, cy = oldW ? (H / 2 - y) / s : 0, relS = oldW ? s / minS : 1;
        img.src = src; natW = pre.naturalWidth; natH = pre.naturalHeight;
        img.style.width = natW + 'px'; img.style.height = natH + 'px';
        if (!oldW) fit();
        else {
          // troca a prévia pela imagem em alta mantendo o enquadramento
          const ratio = natW / oldW;
          minS = Math.min(W / natW, H / natH); maxS = Math.max(minS * 8, 1.5);
          s = relS * minS;
          x = W / 2 - cx * ratio * s; y = H / 2 - cy * ratio * s; clamp(); apply();
        }
        done && done();
      };
      pre.onerror = () => done && done();
      pre.src = src;
    }

    return {
      isOpen: () => opened,
      open(full, preview, name, file) {
        opened = true;
        title.textContent = name; dl.href = full; dl.setAttribute('download', file);
        el.hidden = false; document.body.style.overflow = 'hidden';
        natW = 0; img.removeAttribute('src'); loading.hidden = false;
        history.pushState({ viewer: true }, '');
        setSrc(preview, () => setSrc(full, () => { loading.hidden = true; }));
      },
      close() {
        opened = false; el.hidden = true; document.body.style.overflow = '';
      },
    };
  })();

  window.addEventListener('popstate', () => { if (Viewer.isOpen()) Viewer.close(); });

  /* ---------------- Tema ---------------- */

  const btnTheme = document.getElementById('btnTheme');
  const menu = document.getElementById('themeMenu');
  const getTema = () => { try { return localStorage.getItem('tema') || 'sistema'; } catch (e) { return 'sistema'; } };
  function setTema(t) {
    if (t === 'sistema') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = t;
    try { localStorage.setItem('tema', t); } catch (e) {}
    menu.querySelectorAll('[data-theme]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.theme === t)));
  }
  setTema(getTema());
  const fecharMenu = () => { menu.hidden = true; btnTheme.setAttribute('aria-expanded', 'false'); };
  btnTheme.addEventListener('click', e => {
    e.stopPropagation();
    menu.hidden = !menu.hidden; btnTheme.setAttribute('aria-expanded', String(!menu.hidden));
  });
  menu.addEventListener('click', e => {
    const b = e.target.closest('[data-theme]'); if (!b) return;
    setTema(b.dataset.theme); fecharMenu();
  });
  document.addEventListener('click', e => { if (!menu.hidden && !e.target.closest('.theme')) fecharMenu(); });

  /* ---------------- Instalação (PWA) ---------------- */

  const btnInstall = document.getElementById('btnInstall');
  const iosSheet = document.getElementById('iosSheet');
  const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  let deferred = null;

  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferred = e; btnInstall.hidden = false; });
  window.addEventListener('appinstalled', () => { deferred = null; btnInstall.hidden = true; });
  if (isIOS && !isStandalone()) btnInstall.hidden = false;

  btnInstall.addEventListener('click', async () => {
    if (deferred) {
      deferred.prompt();
      await deferred.userChoice.catch(() => null);
      deferred = null; btnInstall.hidden = true;
    } else if (isIOS) {
      iosSheet.hidden = false;
    }
  });
  iosSheet.addEventListener('click', e => { if (e.target === iosSheet || e.target.closest('[data-close]')) iosSheet.hidden = true; });

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }

  route();
})();
