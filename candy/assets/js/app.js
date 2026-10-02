/* =============================================================================
   «Мир биотехнологий» — интерактив сайта
   Без зависимостей. Каждый блок самодостаточен: если разметки нет, модуль молчит.
   ========================================================================== */
(function () {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rub = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 });
  const money = (n) => rub.format(Math.round(n)).replace(/\s/g, " ");

  /* ── Данные культур ────────────────────────────────────────────────── */
  const CULTURES = [
    { slug: "saccharomyces",   num: "01", name: "Saccharomyces",   latin: "Saccharomyces cerevisiae",   group: "yeast",    groupLabel: "Дрожжи" },
    { slug: "rhodosporidium",  num: "02", name: "Rhodosporidium",  latin: "Rhodosporidium toruloides",  group: "yeast",    groupLabel: "Дрожжи" },
    { slug: "chlorella",       num: "03", name: "Chlorella",       latin: "Chlorella vulgaris",         group: "algae",    groupLabel: "Микроводоросли" },
    { slug: "pseudomonas",     num: "04", name: "Pseudomonas",     latin: "Pseudomonas putida",    group: "bacteria", groupLabel: "Бактерии" },
    { slug: "rhodococcus",     num: "05", name: "Rhodococcus",     latin: "Rhodococcus erythropolis",   group: "bacteria", groupLabel: "Бактерии" },
    { slug: "fusarium",        num: "06", name: "Fusarium",        latin: "Fusarium sp.",               group: "fungi",    groupLabel: "Микрогрибы" }
  ];

  const img = (c, view) => view === "micro" ? `assets/img/micro-${c.slug}.jpg` : `assets/img/dish-${c.slug}.png`;

  /* ── Тема ──────────────────────────────────────────────────────────── */
  (function theme() {
    const btn = $("#theme-toggle");
    const apply = (mode) => {
      document.documentElement.setAttribute("data-theme", mode);
      try { localStorage.setItem("mb-theme", mode); } catch (e) {}
    };
    if (btn) btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
      toast(next === "dark" ? "Тёмная тема" : "Светлая тема");
    });
  })();

  /* ── Шапка, прогресс, кнопка «наверх» ──────────────────────────────── */
  (function chrome() {
    const header = $("#header");
    const bar = $(".scroll-progress i");
    const top = $("#to-top");
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (header) header.classList.toggle("is-stuck", y > 12);
      if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      if (top) { top.hidden = false; top.classList.toggle("is-on", y > 700); }
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    onScroll();

    if (top) top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }));
  })();

  /* ── Мобильное меню ────────────────────────────────────────────────── */
  (function menu() {
    const burger = $("#burger"), panel = $("#mobile-menu");
    if (!burger || !panel) return;
    const close = () => {
      panel.hidden = true;
      burger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("is-locked");
    };
    burger.addEventListener("click", () => {
      const open = burger.getAttribute("aria-expanded") === "true";
      if (open) return close();
      panel.hidden = false;
      burger.setAttribute("aria-expanded", "true");
      document.body.classList.add("is-locked");
    });
    $$("a", panel).forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) close(); });
  })();

  /* ── Плавная прокрутка по якорям ───────────────────────────────────── */
  (function anchors() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const offset = ($("#header") ? $("#header").offsetHeight : 0) + 14;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: reduced ? "auto" : "smooth" });
      if (history.replaceState) history.replaceState(null, "", id);
    });
  })();

  /* ── Появление блоков + счётчики ───────────────────────────────────── */
  (function reveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach((i) => i.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        io.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: .08 });
    items.forEach((el, i) => {
      const sameRow = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.setProperty("--d", Math.min(sameRow, 4) * 90 + "ms");
      io.observe(el);
    });

    // счётчики: финальное значение уже стоит в разметке, анимация лишь «докручивает» его
    const counters = $$("[data-count]");
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        cio.unobserve(el);
        const target = parseFloat(el.dataset.count) || 0;
        const suffix = el.dataset.suffix || "";
        if (reduced || target === 0) { el.textContent = target + suffix; return; }
        const dur = 1100, t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: .6 });
    counters.forEach((c) => cio.observe(c));
  })();

  /* ── Параллакс героя ───────────────────────────────────────────────── */
  (function parallax() {
    const stage = $("#hero-visual");
    if (!stage || reduced || window.matchMedia("(pointer: coarse)").matches) return;
    const layers = $$("[data-depth]", stage);
    let raf = null, tx = 0, ty = 0;
    stage.addEventListener("mousemove", (e) => {
      const r = stage.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - .5;
      ty = (e.clientY - r.top) / r.height - .5;
      if (!raf) raf = requestAnimationFrame(() => {
        layers.forEach((l) => {
          const d = parseFloat(l.dataset.depth) || 10;
          const base = l.classList.contains("hero-box-photo") ? "translateX(-50%) " : "";
          l.style.transform = base + `translate3d(${-tx * d}px, ${-ty * d}px, 0)`;
        });
        raf = null;
      });
    });
    stage.addEventListener("mouseleave", () => {
      layers.forEach((l) => {
        l.style.transform = l.classList.contains("hero-box-photo") ? "translateX(-50%)" : "";
      });
    });
  })();

  /* ── Комплектация: список ↔ сцена ──────────────────────────────────── */
  (function kit() {
    const list = $("#kit-list"), stage = $("#kit-stage"), caption = $("#kit-caption");
    if (!list || !stage) return;
    const items = $$("li", list);
    const show = (li) => {
      items.forEach((i) => i.classList.toggle("is-active", i === li));
      $$(".hot", stage).forEach((h) => h.classList.toggle("is-shown", h.classList.contains("hot-" + li.dataset.hot)));
      if (caption) caption.textContent = $("h3", li).textContent;
    };
    items.forEach((li) => {
      li.addEventListener("mouseenter", () => show(li));
      li.addEventListener("click", () => show(li));
      li.setAttribute("tabindex", "0");
      li.addEventListener("focus", () => show(li));
    });
    show(items[0]);
  })();

  /* ── Каталог культур ───────────────────────────────────────────────── */
  (function cultures() {
    const grid = $("#culture-grid");
    if (!grid) return;

    grid.innerHTML = CULTURES.map((c, i) => `
      <article class="culture-card" data-slug="${c.slug}" data-group="${c.group}" style="animation-delay:${i * 60}ms">
        <span class="culture-dish">
          <img src="${img(c, "dish")}" alt="Чашка Петри с культурой ${c.name}" width="500" height="500" loading="lazy" decoding="async">
          <span class="culture-zoom" aria-hidden="true">↗</span>
        </span>
        <p class="culture-meta"><em>${c.num}</em><span>${c.groupLabel}</span></p>
        <h3><button class="culture-open" type="button" aria-haspopup="dialog">${c.name}</button></h3>
        <p class="latin">${c.latin}</p>
      </article>`).join("");

    $$(".chip[data-filter]").forEach((chip) => {
      chip.addEventListener("click", () => {
        const f = chip.dataset.filter;
        $$(".chip[data-filter]").forEach((c) => {
          c.classList.toggle("is-active", c === chip);
          c.setAttribute("aria-selected", String(c === chip));
        });
        $$(".culture-card", grid).forEach((card, i) => {
          const on = f === "all" || card.dataset.group === f;
          card.classList.toggle("is-hidden", !on);
          if (on) { card.style.animation = "none"; void card.offsetWidth; card.style.animation = ""; card.style.animationDelay = i * 45 + "ms"; }
        });
      });
    });

    /* ── модалка ── */
    const modal = $("#culture-modal"), body = $("#modal-body"), counter = $("#modal-counter");
    let index = 0, lastFocus = null;

    const render = (i) => {
      index = (i + CULTURES.length) % CULTURES.length;
      const c = CULTURES[index];
      body.innerHTML = `
        <div class="mv">
          <div class="mv-stage" id="mv-stage">
            <img id="mv-img" src="${img(c, "dish")}" alt="${c.latin}: вид чашки Петри" width="500" height="500">
            <span class="mv-lens" aria-hidden="true"></span>
          </div>
          <div class="mv-switch" role="group" aria-label="Вид образца">
            <button type="button" class="is-active" data-view="dish">Чашка Петри</button>
            <button type="button" data-view="micro">Под микроскопом</button>
          </div>
          <p class="mv-hint">Нажмите на изображение, чтобы приблизить</p>
        </div>
        <div class="mc">
          <p class="mc-group">${c.num} · ${c.groupLabel}</p>
          <h2 id="modal-title">${c.name}</h2>
          <p class="latin">${c.latin}</p>
        </div>`;
      if (counter) counter.textContent = `${c.num} / 0${CULTURES.length}`;
      wireModalBody(c);
    };

    const wireModalBody = (c) => {
      const stage = $("#mv-stage", body), image = $("#mv-img", body);
      $$(".mv-switch button", body).forEach((b) => b.addEventListener("click", () => {
        $$(".mv-switch button", body).forEach((x) => x.classList.toggle("is-active", x === b));
        image.style.opacity = "0";
        setTimeout(() => {
          image.src = img(c, b.dataset.view);
          image.alt = c.latin + (b.dataset.view === "micro" ? ": вид под микроскопом" : ": вид чашки Петри");
          image.style.opacity = "1";
        }, 180);
      }));

      stage.addEventListener("click", () => stage.classList.toggle("is-zoom"));
      stage.addEventListener("mousemove", (e) => {
        const r = stage.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100, y = ((e.clientY - r.top) / r.height) * 100;
        stage.style.setProperty("--lx", x + "%");
        stage.style.setProperty("--ly", y + "%");
        image.style.transformOrigin = `${x}% ${y}%`;
      });
      stage.addEventListener("mouseleave", () => stage.classList.remove("is-zoom"));
    };

    const open = (slug) => {
      lastFocus = document.activeElement;
      render(CULTURES.findIndex((c) => c.slug === slug));
      modal.hidden = false;
      document.body.classList.add("is-locked");
      const close = $(".modal-close", modal);
      if (close) close.focus();
    };
    const close = () => {
      modal.hidden = true;
      document.body.classList.remove("is-locked");
      if (lastFocus) lastFocus.focus();
    };

    grid.addEventListener("click", (e) => {
      const card = e.target.closest(".culture-card");
      if (card) open(card.dataset.slug);
    });
    $$("[data-close]", modal).forEach((el) => el.addEventListener("click", close));
    const prev = $("#modal-prev"), next = $("#modal-next");
    if (prev) prev.addEventListener("click", () => render(index - 1));
    if (next) next.addEventListener("click", () => render(index + 1));
    document.addEventListener("keydown", (e) => {
      if (modal.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") render(index - 1);
      if (e.key === "ArrowRight") render(index + 1);
      if (e.key === "Tab") {
        const focusables = $$('button, [href], input, [tabindex]:not([tabindex="-1"])', modal).filter((el) => el.offsetParent !== null);
        if (!focusables.length) return;
        const first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  })();

  /* ── Процесс: шаги ↔ визуал ────────────────────────────────────────── */
  (function process() {
    const steps = $$("#process-steps li");
    if (!steps.length) return;
    const stageImg = $("#pv-stage img"), num = $("#pv-num"), label = $("#pv-label"), bar = $("#pv-bar");
    const pics = ["process-strain", "process-medium", "process-culture", "process-fix", "process-kit"];

    const activate = (i) => {
      steps.forEach((s, k) => s.classList.toggle("is-active", k === i));
      if (stageImg) stageImg.src = `assets/img/${pics[i] || pics[0]}.jpg`;
      if (num) num.textContent = steps[i].dataset.step;
      if (label) label.textContent = steps[i].dataset.label;
      if (bar) bar.style.width = ((i + 1) / steps.length) * 100 + "%";
    };

    steps.forEach((s, i) => {
      s.setAttribute("tabindex", "0");
      s.setAttribute("role", "button");
      const select = () => activate(i);
      s.addEventListener("click", select);
      s.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(); }
      });
    });
    activate(0);
  })();

  /* ── Слайдер отзывов ───────────────────────────────────────────────── */
  (function reviews() {
    const slider = $("#reviews-slider"), track = $("#reviews-track"), dots = $("#reviews-dots");
    if (!slider || !track) return;
    const slides = $$(".review", track);
    let i = 0, timer = null;

    const perView = () => (window.innerWidth <= 620 ? 1 : window.innerWidth <= 1180 ? 2 : 3);
    const maxIndex = () => Math.max(0, slides.length - perView());

    const go = (n) => {
      i = Math.max(0, Math.min(n, maxIndex()));
      const step = slides[0].getBoundingClientRect().width + 18;
      track.style.transform = `translateX(${-i * step}px)`;
      $$("button", dots).forEach((d, k) => d.classList.toggle("is-active", k === i));
    };

    const build = () => {
      dots.innerHTML = "";
      for (let k = 0; k <= maxIndex(); k++) {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", `Отзыв ${k + 1}`);
        b.addEventListener("click", () => { go(k); restart(); });
        dots.appendChild(b);
      }
      go(Math.min(i, maxIndex()));
    };

    const restart = () => {
      if (reduced) return;
      clearInterval(timer);
      timer = setInterval(() => go(i >= maxIndex() ? 0 : i + 1), 6000);
    };

    const prev = $("#rev-prev"), next = $("#rev-next");
    if (prev) prev.addEventListener("click", () => { go(i - 1); restart(); });
    if (next) next.addEventListener("click", () => { go(i + 1); restart(); });
    slider.addEventListener("mouseenter", () => clearInterval(timer));
    slider.addEventListener("mouseleave", restart);

    let x0 = null;
    slider.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1);
      x0 = null;
    });

    window.addEventListener("resize", build);
    build();
    restart();
  })();

  /* ── Конфигуратор набора ───────────────────────────────────────────── */
  const config = (function configurator() {
    const wrap = $("#config-summary");
    if (!wrap) return null;

    const EDITIONS = {
      base:  { title: "Базовый набор",     price: 3906 },
      plus:  { title: "Расширенный набор", price: 6490 },
      class: { title: "Классный комплект", price: 17900 }
    };
    const TIERS = [{ min: 20, rate: .18 }, { min: 10, rate: .12 }, { min: 5, rate: .07 }];

    const qty = $("#qty"), range = $("#qty-range"), lines = $("#sum-lines"),
          totalEl = $("#sum-total"), hint = $("#sum-hint"), formSum = $("#form-summary");

    const state = { edition: "base", addons: [], qty: 1, total: 0, text: "" };

    const compute = () => {
      const ed = EDITIONS[state.edition];
      const addons = $$("#cfg-addons input:checked").map((a) => ({
        title: a.closest("label").querySelector("b").textContent,
        price: +a.dataset.price
      }));
      const unit = ed.price + addons.reduce((s, a) => s + a.price, 0);
      const subtotal = unit * state.qty;
      const tier = TIERS.find((t) => state.qty >= t.min);
      const discount = tier ? subtotal * tier.rate : 0;
      const total = subtotal - discount;

      state.addons = addons;
      state.total = total;
      state.text = `${ed.title} × ${state.qty}${addons.length ? " + " + addons.map((a) => a.title.toLowerCase()).join(", ") : ""} - ${money(total)}`;

      if (lines) {
        lines.innerHTML =
          `<li><span>${ed.title} × ${state.qty}</span><b>${money(ed.price * state.qty)}</b></li>` +
          addons.map((a) => `<li><span>${a.title} × ${state.qty}</span><b>${money(a.price * state.qty)}</b></li>`).join("") +
          (tier ? `<li class="is-discount"><span>Скидка за объём (${Math.round(tier.rate * 100)}%)</span><b>−${money(discount)}</b></li>` : "");
      }
      if (totalEl) totalEl.textContent = money(total);
      if (hint) hint.textContent = total >= 15000
        ? "Доставка по России бесплатно · счёт для организаций"
        : "Доставка по России от 350 ₽ · бесплатно от 15 000 ₽";
      $$("#discount-scale li").forEach((li) => li.classList.toggle("is-on", state.qty >= +li.dataset.min));
      if (formSum) formSum.textContent = state.text;
    };

    $$('#cfg-editions input[name="edition"]').forEach((r) => r.addEventListener("change", () => {
      state.edition = r.value;
      $$(".cfg-option").forEach((o) => o.classList.toggle("is-active", o.contains(r)));
      compute();
    }));
    $$("#cfg-addons input").forEach((c) => c.addEventListener("change", compute));

    const setQty = (v) => {
      state.qty = Math.max(1, Math.min(200, parseInt(v, 10) || 1));
      if (qty) qty.value = state.qty;
      if (range) range.value = Math.min(state.qty, +range.max);
      compute();
    };
    if (qty) qty.addEventListener("input", () => setQty(qty.value));
    if (range) range.addEventListener("input", () => setQty(range.value));
    const minus = $("#qty-minus"), plus = $("#qty-plus");
    if (minus) minus.addEventListener("click", () => setQty(state.qty - 1));
    if (plus) plus.addEventListener("click", () => setQty(state.qty + 1));

    compute();
    return state;
  })();

  /* ── Форма заявки ──────────────────────────────────────────────────── */
  (function leadForm() {
    const form = $("#lead-form");
    if (!form) return;
    const orgField = $(".org-only", form);

    $$('input[name="buyer"]', form).forEach((r) => r.addEventListener("change", () => {
      const isOrg = $('input[name="buyer"]:checked', form).value === "org";
      if (orgField) orgField.hidden = !isOrg;
      const orgInput = $("#f-org");
      if (orgInput) orgInput.required = isOrg;
    }));

    const setError = (input, msg) => {
      const field = input.closest(".field") || input.closest("label");
      const err = form.querySelector(`.err[data-for="${input.id}"]`);
      if (field) field.classList.toggle("has-error", !!msg);
      if (err) err.textContent = msg || "";
      return !msg;
    };

    const validate = () => {
      let ok = true;
      const name = $("#f-name"), email = $("#f-email"), phone = $("#f-phone"), agree = $("#f-agree"), org = $("#f-org");
      ok = setError(name, name.value.trim().length < 2 ? "Укажите, как к вам обращаться" : "") && ok;
      ok = setError(email, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()) ? "" : "Проверьте адрес почты") && ok;
      if (phone.value.trim()) {
        ok = setError(phone, phone.value.replace(/\D/g, "").length < 10 ? "Проверьте номер телефона" : "") && ok;
      } else setError(phone, "");
      if (org && org.required && !org.hidden) {
        ok = setError(org, org.value.trim().length < 2 ? "Укажите организацию" : "") && ok;
      }
      ok = setError(agree, agree.checked ? "" : "Нужно согласие на обработку данных") && ok;
      return ok;
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validate()) {
        const bad = form.querySelector(".has-error input, .has-error textarea");
        if (bad) bad.focus();
        toast("Проверьте отмеченные поля");
        return;
      }
      const data = {
        name: $("#f-name").value.trim(),
        org: $("#f-org") ? $("#f-org").value.trim() : "",
        email: $("#f-email").value.trim(),
        phone: $("#f-phone").value.trim(),
        note: $("#f-note").value.trim(),
        order: config ? config.text : ""
      };
      const bodyText =
        `Заявка с сайта «Мир биотехнологий»\n\n` +
        `Имя: ${data.name}\n` +
        (data.org ? `Организация: ${data.org}\n` : "") +
        `Почта: ${data.email}\n` +
        (data.phone ? `Телефон: ${data.phone}\n` : "") +
        `Заказ: ${data.order}\n` +
        (data.note ? `Комментарий: ${data.note}\n` : "");

      const success = $("#form-success"), text = $("#fs-text"), mail = $("#fs-mail");
      if (text) text.textContent = `${data.name}, ваш заказ: ${data.order}. Демо-режим - данные никуда не отправлены. Нажмите «Отправить письмом», чтобы передать заявку на почту.`;
      if (mail) mail.href = "mailto:info@mirbiotech.ru?subject=" + encodeURIComponent("Заявка на набор «Мир биотехнологий»") + "&body=" + encodeURIComponent(bodyText);
      if (success) success.hidden = false;
      toast("Заявка сформирована");
    });

    const reset = $("#fs-reset");
    if (reset) reset.addEventListener("click", () => {
      const success = $("#form-success");
      if (success) success.hidden = true;
      form.reset();
      $$(".has-error", form).forEach((f) => f.classList.remove("has-error"));
      $$(".err", form).forEach((e) => (e.textContent = ""));
    });
  })();

  /* ── Подписка в подвале ────────────────────────────────────────────── */
  (function subscribe() {
    const form = $("#subscribe-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = $("#sub-email");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim())) { toast("Проверьте адрес почты"); input.focus(); return; }
      try { localStorage.setItem("mb-subscriber", input.value.trim()); } catch (err) {}
      const note = $("#sub-note");
      if (note) note.hidden = false;
      input.value = "";
      toast("Спасибо! Мы на связи");
    });
  })();

  /* ── FAQ: аккордеон и поиск ────────────────────────────────────────── */
  (function faq() {
    const list = $("#faq-list");
    if (!list) return;

    $$("details", list).forEach((d) => {
      const summary = $("summary", d), panel = $("div", d);
      if (!summary || !panel) return;
      summary.addEventListener("click", (e) => {
        e.preventDefault();
        if (reduced) { d.open = !d.open; return; }
        if (d.open) {
          panel.animate([{ height: panel.scrollHeight + "px" }, { height: "0px" }], { duration: 260, easing: "cubic-bezier(.22,.68,.3,1)" })
            .onfinish = () => { d.open = false; panel.style.height = ""; };
        } else {
          d.open = true;
          panel.animate([{ height: "0px" }, { height: panel.scrollHeight + "px" }], { duration: 300, easing: "cubic-bezier(.22,.68,.3,1)" })
            .onfinish = () => { panel.style.height = ""; };
        }
      });
    });

    const search = $("#faq-search"), empty = $("#faq-empty");
    if (!search) return;
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      let shown = 0;
      $$("details", list).forEach((d) => {
        const hit = !q || d.textContent.toLowerCase().includes(q);
        d.hidden = !hit;
        if (hit) shown++;
        if (!hit) d.open = false;
      });
      if (empty) empty.hidden = shown > 0;
    });
  })();

  /* ── Активный пункт меню ───────────────────────────────────────────── */
  (function navSpy() {
    const links = $$(".main-nav a");
    if (!links.length || !("IntersectionObserver" in window)) return;
    const map = new Map();
    links.forEach((a) => {
      const sec = document.querySelector(a.getAttribute("href"));
      if (sec) map.set(sec, a);
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((l) => l.classList.remove("is-current"));
        const link = map.get(en.target);
        if (link) link.classList.add("is-current");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    map.forEach((_, sec) => io.observe(sec));
  })();

  /* ── Мелочи ────────────────────────────────────────────────────────── */
  let toastTimer = null;
  function toast(msg) {
    const el = $("#toast");
    if (!el) return;
    el.hidden = false;
    el.textContent = msg;
    requestAnimationFrame(() => el.classList.add("is-on"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.classList.remove("is-on");
      setTimeout(() => { el.hidden = true; }, 400);
    }, 2600);
  }

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
})();
