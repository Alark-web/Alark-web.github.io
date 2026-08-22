# Alark-web.github.io
<!DOCTYPE html>

<html lang="ru">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<title>Не звони маме — Путеводитель по взрослой жизни</title>
<style>
:root{
  --bg:#f6f8fb;--card:#ffffff;--ink:#172033;--muted:#667085;--line:#d9e1eb;
  --accent:#5b4cf0;--soft:#eef3ff;--success:#e7f7ee;--danger:#fff0ef;--yellow:#fff7d6;--blue:#eaf4ff;
}
*{box-sizing:border-box} body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:radial-gradient(circle at 10% 0%,#ffffff 0,#f6f8fb 38%,#eef2f7 100%);color:var(--ink)}
button{font:inherit;color:inherit}.app{max-width:1280px;margin:auto;padding:28px}
.top{display:flex;justify-content:space-between;gap:20px;align-items:flex-start;margin-bottom:28px}.eyebrow{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
h1{font-size:clamp(34px,5vw,68px);line-height:.98;margin:8px 0 12px;letter-spacing:-.045em}.lead{max-width:700px;color:#55534e;font-size:17px;line-height:1.5}.badge{padding:10px 14px;border:1px solid var(--line);border-radius:999px;background:var(--card);font-size:13px}
.layout{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(340px,.8fr);gap:22px;align-items:start}.machine,.panel{background:rgba(255,255,255,.92);border:1px solid var(--line);border-radius:28px;box-shadow:0 18px 50px rgba(44,62,90,.08);backdrop-filter:blur(10px)}
.machine{padding:28px}.machine-top{display:flex;justify-content:space-between;align-items:center;padding-bottom:20px;border-bottom:1px solid var(--line)}.brand{font-weight:700;letter-spacing:.08em;font-size:13px}.model{font-size:12px;color:var(--muted)}
.control-zone{display:grid;grid-template-columns:1fr 190px;gap:25px;padding:28px 0}.display{background:linear-gradient(135deg,#24304a,#141c2e);color:#f4f7ff;border-radius:18px;min-height:150px;padding:18px;display:flex;flex-direction:column;justify-content:space-between}.display-title{font-size:24px;font-weight:700}.display-row{display:flex;justify-content:space-between;gap:10px;font-size:13px;color:#c9c7c0}.display-value{font-size:16px;color:#fff}
.knob-wrap{display:flex;flex-direction:column;align-items:center;gap:13px}.knob{width:160px;height:160px;border-radius:50%;border:1px solid #c7c4bd;background:radial-gradient(circle at 35% 30%,#ffffff,#dce7f4 68%,#c3d0df);box-shadow:inset 0 0 0 14px #ece9e2,0 12px 30px rgba(0,0,0,.12);position:relative;transform:rotate(var(--angle,-40deg));transition:transform .18s ease;cursor:grab}.knob:active{cursor:grabbing}.knob:before{content:"";position:absolute;left:50%;top:15px;width:5px;height:34px;background:#25324a;border-radius:5px;transform:translateX(-50%)}.knob-label{font-size:12px;color:var(--muted);text-align:center}
.modes{position:relative;height:46px;margin:0 4px}.mode-dot{position:absolute;top:0;transform:translateX(-50%);font-size:11px;color:var(--muted);white-space:nowrap;text-align:center}.mode-dot button{width:12px;height:12px;border:2px solid #8c8982;background:var(--card);border-radius:50%;padding:0;display:block;margin:0 auto 6px}.mode-dot.active{color:var(--ink);font-weight:650}.mode-dot.active button{background:var(--ink);border-color:var(--ink)}
.options{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}.opt{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:11px 9px;cursor:pointer;font-size:12px}.opt.active{background:linear-gradient(135deg,#5b4cf0,#7c6df5);color:white;border-color:#5b4cf0;box-shadow:0 8px 16px rgba(91,76,240,.18)}
.section{padding:23px 0;border-top:1px solid var(--line)}.section h2{font-size:18px;margin:0 0 9px}.section .micro{font-size:12px;color:var(--muted);margin-top:7px}.section p{margin:0;color:#5e5b55;font-size:14px;line-height:1.55}
.side{display:flex;flex-direction:column;gap:18px}.panel{padding:22px}.panel h3{margin:0 0 14px;font-size:20px;letter-spacing:-.02em}.facts{display:grid;grid-template-columns:1fr 1fr;gap:9px}.fact{padding:14px;background:linear-gradient(135deg,#eef3ff,#f7fbff);border-radius:14px}.fact b{display:block;font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px}.fact span{font-size:14px;line-height:1.35}
.quiz .q{font-weight:650;margin:16px 0 9px}.choices{display:flex;flex-wrap:wrap;gap:7px}.choice{border:1px solid var(--line);background:var(--card);border-radius:999px;padding:9px 12px;font-size:13px;cursor:pointer}.choice.selected{background:#172033;color:white;border-color:#172033;box-shadow:0 5px 12px rgba(23,32,51,.14)}.result{margin-top:15px;padding:16px;border-radius:16px;background:var(--success);display:none}.result.show{display:block}.result strong{display:block;margin-bottom:5px}.hint{margin-top:8px;color:#555;line-height:1.45;font-size:13px}
.symbol-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:9px}.symbol{padding:12px 8px;text-align:left;border:1px solid var(--line);border-radius:14px;background:#fbfdff;font-size:12px}.symbol-icon{font-size:24px;font-weight:700;margin-bottom:7px}.symbol b{display:block;margin-bottom:4px}.symbol small{display:block;color:var(--muted);line-height:1.35}

.det-grid,.care-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.det-card,.care-card{border:1px solid var(--line);border-radius:15px;padding:14px;background:#fff}.det-card h4,.care-card h4{margin:0 0 5px;font-size:14px}.det-card p,.care-card p{margin:0;color:#5e6a7b;font-size:12px;line-height:1.45}.tag{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:5px 8px;border-radius:999px;background:var(--blue);color:#41678d;margin-bottom:8px}.notice{margin-top:12px;padding:13px 14px;background:var(--yellow);border:1px solid #f1df8d;border-radius:14px;color:#6d5a16;font-size:12px;line-height:1.45}

.stain-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.stain-card{border:1px solid var(--line);border-radius:16px;padding:15px;background:#fff}.stain-card h4{margin:0 0 6px;font-size:14px}.stain-card .stain-meta{font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#5968a8;margin-bottom:7px}.stain-card p{margin:0;color:#5e6a7b;font-size:12px;line-height:1.48}.stain-card ol{margin:8px 0 0 18px;padding:0;color:#4e5a6b;font-size:12px;line-height:1.5}.stain-warn{margin-top:12px;padding:13px 14px;background:#fff4e8;border:1px solid #f0cfae;border-radius:14px;color:#7a5229;font-size:12px;line-height:1.45}
.clean-hero{padding:30px 0 10px}.clean-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:16px 0 18px}.clean-tab{border:1px solid var(--line);background:#fff;border-radius:999px;padding:9px 13px;font-size:13px;cursor:pointer}.clean-tab.active{background:#5b4cf0;color:#fff;border-color:#5b4cf0}.clean-pane{display:none}.clean-pane.active{display:block}.clean-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:18px}.clean-card{background:#fff;border:1px solid var(--line);border-radius:22px;padding:20px;box-shadow:0 12px 35px rgba(44,62,90,.06)}.clean-card h2{margin:0 0 8px;font-size:22px}.clean-card h3{margin:16px 0 7px;font-size:15px}.clean-card p{margin:0;color:var(--muted);line-height:1.5;font-size:14px}.clean-list{margin:10px 0 0 18px;color:#5c6878;font-size:13px;line-height:1.55}.surface-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.surface-card{border:1px solid var(--line);border-radius:16px;padding:15px;background:linear-gradient(135deg,#fbfdff,#f4f7ff)}.surface-card h3{margin:0 0 6px;font-size:14px}.surface-card p{font-size:12px;line-height:1.45}.surface-card .frequency{display:inline-block;margin-top:9px;padding:5px 8px;background:#eef3ff;color:#4f5eab;border-radius:999px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em}.calendar-box{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}.task{padding:14px;border:1px solid var(--line);border-radius:16px;background:#fff}.task b{display:block;font-size:13px;margin-bottom:5px}.task small{display:block;color:var(--muted);line-height:1.4}.task .due{margin-top:8px;font-size:11px;color:#4f5eab;font-weight:700}.check-row{display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-bottom:1px solid var(--line)}.check-row:last-child{border-bottom:0}.check-row input{margin-top:3px;width:17px;height:17px}.reminder-strip{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:14px 15px;background:#edf9f1;border:1px solid #cce8d5;border-radius:16px;color:#286840;font-size:12px;line-height:1.45}.reminder-strip button{border:1px solid #b8d9c0;background:#fff;border-radius:10px;padding:8px 10px;cursor:pointer;color:#286840}.calendar-input{border:1px solid var(--line);padding:9px 10px;border-radius:10px;font:inherit;background:#fff}
@media(max-width:560px){.stain-grid,.surface-grid,.calendar-box{grid-template-columns:1fr}}

.nav{position:sticky;top:12px;z-index:20;display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:22px;padding:10px;background:rgba(255,255,255,.92);border:1px solid var(--line);border-radius:18px;box-shadow:0 10px 30px rgba(44,62,90,.07);backdrop-filter:blur(12px)}.nav button{border:0;background:transparent;padding:10px 13px;border-radius:12px;font-size:13px;cursor:pointer;color:var(--muted)}.nav button.active{background:#172033;color:#fff}.view{display:none}.view.active{display:block}.home-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:24px}.home-card{border:1px solid var(--line);border-radius:24px;padding:22px;background:#fff;min-height:160px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 12px 35px rgba(44,62,90,.06)}.home-card h2{font-size:22px;margin:0 0 8px}.home-card p{margin:0;color:var(--muted);font-size:14px;line-height:1.5}.home-card button{align-self:flex-start;margin-top:16px;border:0;background:#5b4cf0;color:white;padding:10px 14px;border-radius:12px;cursor:pointer}.home-hero{padding:34px 0 8px}.home-hero .lead{max-width:780px}.section-label{display:inline-block;padding:6px 9px;border-radius:999px;background:#eef3ff;color:#4d57a3;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:10px}.home-note{margin-top:18px;padding:16px 18px;background:#fff7d6;border:1px solid #f1df8d;border-radius:16px;color:#6d5a16;font-size:13px;line-height:1.5}@media(max-width:800px){.home-grid{grid-template-columns:1fr}}
.footer{margin-top:22px;padding:18px 4px;color:var(--muted);font-size:12px}
@media(max-width:900px){.layout{grid-template-columns:1fr}.control-zone{grid-template-columns:1fr}.knob-wrap{order:-1}.options{grid-template-columns:repeat(3,1fr)}}
@media(max-width:560px){.app{padding:15px}.machine,.panel{border-radius:20px}.machine{padding:18px}.facts{grid-template-columns:1fr}.options{grid-template-columns:repeat(2,1fr)}.top{display:block}.badge{display:inline-block;margin-top:12px}}

.cook-hero{padding:30px 0 10px}.cook-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:18px;margin-top:20px}.cook-card{background:#fff;border:1px solid var(--line);border-radius:22px;padding:20px;box-shadow:0 12px 35px rgba(44,62,90,.06)}.cook-card h2{margin:0 0 8px;font-size:22px}.cook-card p{margin:0;color:var(--muted);line-height:1.5;font-size:14px}.cook-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:16px 0 18px}.cook-tab{border:1px solid var(--line);background:#fff;border-radius:999px;padding:9px 13px;font-size:13px;cursor:pointer}.cook-tab.active{background:#5b4cf0;color:#fff;border-color:#5b4cf0}.cook-pane{display:none}.cook-pane.active{display:block}.board-grid,.micro-grid,.oil-grid,.neighbor-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.info-tile{border:1px solid var(--line);border-radius:16px;padding:15px;background:linear-gradient(135deg,#fbfdff,#f4f7ff)}.info-tile h3,.info-tile h4{margin:0 0 6px}.info-tile p{margin:0;color:#5f6b7b;font-size:13px;line-height:1.5}.board-swatch{height:10px;border-radius:999px;margin-bottom:10px;background:#8dc66c}.board-swatch.red{background:#e56b6f}.board-swatch.blue{background:#6da8e8}.board-swatch.brown{background:#b88357}.board-swatch.yellow{background:#e2c34c}.tag-safe{background:#e8f7ee;color:#2d7447}.tag-no{background:#fff0ef;color:#a84444}.measure-table{width:100%;border-collapse:collapse;font-size:13px}.measure-table th,.measure-table td{padding:11px 9px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}.measure-table th{font-size:11px;text-transform:uppercase;letter-spacing:.07em;color:var(--muted)}.measure-pill{display:inline-block;padding:4px 8px;border-radius:999px;background:#eef3ff;font-size:11px}.microwave-list{display:grid;grid-template-columns:1fr 1fr;gap:10px}.micro-box{padding:14px;border-radius:16px;border:1px solid var(--line)}.micro-box.ok{background:#edf9f1}.micro-box.no{background:#fff1ef}.oil-card{min-height:150px}.oil-use{font-size:12px;color:#4c57a3;font-weight:700;margin-top:8px}.callout{margin-top:14px;padding:14px 15px;border-radius:16px;background:#fff7d6;border:1px solid #f1df8d;color:#6d5a16;font-size:13px;line-height:1.5}.cook-mini{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px}.cook-mini .info-tile{background:#fff}.source-note{margin-top:12px;font-size:11px;color:var(--muted);line-height:1.45}@media(max-width:800px){.cook-grid{grid-template-columns:1fr}.board-grid,.micro-grid,.oil-grid,.neighbor-grid,.microwave-list{grid-template-columns:1fr}.cook-mini{grid-template-columns:1fr}}

.recipe-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.recipe-card{border:1px solid var(--line);border-radius:18px;padding:17px;background:linear-gradient(135deg,#fffdfb,#f7f9ff)}.recipe-card h3{margin:0 0 7px;font-size:18px}.recipe-card p{margin:0;color:#5f6b7b;font-size:13px;line-height:1.5}.recipe-meta{display:flex;gap:7px;flex-wrap:wrap;margin:10px 0 12px}.recipe-pill{padding:5px 8px;border-radius:999px;background:#eef3ff;color:#4452a2;font-size:10px;font-weight:700}.step-list{margin:0;padding-left:20px;color:#4f5e70;font-size:13px;line-height:1.6}.step-list li{margin:6px 0}.ingredient-table{width:100%;border-collapse:collapse;font-size:13px}.ingredient-table th,.ingredient-table td{padding:9px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}.ingredient-table th{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}.shop-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:11px}.shop-card{border:1px solid var(--line);border-radius:16px;padding:15px;background:#fff}.shop-card h3{margin:0 0 7px;font-size:16px}.shop-card p{margin:0;color:#5f6b7b;font-size:12.5px;line-height:1.5}.check-list{margin:0;padding-left:18px;color:#4f5e70;font-size:13px;line-height:1.55}.storage-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.storage-card{border:1px solid var(--line);border-radius:16px;padding:14px;background:#fbfdff}.storage-card h4{margin:0 0 5px}.storage-card p{margin:0;color:#5f6b7b;font-size:12.5px;line-height:1.45}.recipe-tip{margin-top:14px;padding:14px 15px;border-radius:16px;background:#edf9f1;border:1px solid #cdebd7;color:#2f6742;font-size:13px;line-height:1.5}
@media(max-width:800px){.recipe-grid,.shop-grid,.storage-grid{grid-template-columns:1fr}}

.health-grid,.money-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.health-card,.money-card{border:1px solid var(--line);border-radius:22px;padding:20px;background:#fff;box-shadow:0 10px 28px rgba(44,62,90,.05)}.health-card h2,.money-card h2,.health-tool-card h2{margin:0 0 12px;font-size:20px;font-weight:700;line-height:1.2}.health-card h3,.money-card h3,.health-tool-card h3{margin:18px 0 8px;font-size:15px;font-weight:700;line-height:1.3}.health-card p,.health-card li,.money-card p,.money-card li{color:#5e5b55;font-size:14px;line-height:1.55}.health-card ul,.money-card ul{margin:9px 0 0;padding-left:20px}.danger-box{background:#fff1f0;border:1px solid #f0c7c3;border-radius:18px;padding:16px 18px;color:#6a2a24}.source-box{font-size:12px;line-height:1.5;color:#67645d;background:#f7f8fb;border:1px solid var(--line);border-radius:14px;padding:11px 13px;margin-top:14px}.source-box a{color:#4d57a3;text-decoration:none}.money-kpi{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:14px}.kpi{padding:14px;border-radius:16px;background:#f5f2ff}.kpi b{display:block;font-size:22px;color:#3f35c9}.mini-table{width:100%;border-collapse:collapse;margin-top:10px;font-size:13px}.mini-table th,.mini-table td{padding:9px 8px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}.action-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}.action-row button{border:0;border-radius:12px;padding:10px 14px;background:#5b4cf0;color:#fff;cursor:pointer}.pillline{display:flex;gap:8px;flex-wrap:wrap;margin-top:9px}.pillline span{padding:6px 9px;border-radius:999px;background:#eef3ff;color:#4d57a3;font-size:12px}.money-inputs{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}.money-inputs label{font-size:12px;color:#6a675f}.money-inputs input{width:100%;box-sizing:border-box;padding:10px;border:1px solid #dcdde5;border-radius:12px;margin-top:5px}.result-box{margin-top:14px;padding:15px;border-radius:16px;background:#f8fafc}.health-banner,.money-banner{padding:18px 20px;border-radius:18px;background:linear-gradient(135deg,#eef3ff,#fff4e9);border:1px solid #dfe4f7;margin-top:18px}@media(max-width:800px){.health-grid,.money-grid{grid-template-columns:1fr}.money-kpi,.money-inputs{grid-template-columns:1fr}}

    .pill-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:14px}.pill-card{border:1px solid rgba(26,35,54,.10);border-radius:18px;padding:16px;background:#fff}.pill-card h3{margin:0 0 8px}.pill-card p{margin:0 0 8px;color:#586579}.callout{margin:14px 0 0;padding:14px 16px;border-radius:16px;background:#f2f7ff;border:1px solid #d7e6ff}.source-box a{color:inherit;text-decoration:underline;text-underline-offset:2px}

.life-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.life-card{background:#fff;border:1px solid var(--line);border-radius:22px;padding:20px;box-shadow:0 12px 35px rgba(44,62,90,.06)}.life-card h2{margin:0 0 8px;font-size:21px}.life-card h3{margin:16px 0 7px;font-size:15px}.life-card p,.life-card li{color:#5e6a7b;font-size:13px;line-height:1.55}.life-card ul,.life-card ol{margin:8px 0 0 18px}.life-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:16px 0 18px}.life-tab{border:1px solid var(--line);background:#fff;border-radius:999px;padding:9px 13px;font-size:13px;cursor:pointer}.life-tab.active{background:#5b4cf0;color:#fff;border-color:#5b4cf0}.life-pane{display:none}.life-pane.active{display:block}.object-layout{display:grid;grid-template-columns:230px 1fr;gap:18px;align-items:start}.object-menu{display:grid;gap:8px}.object-btn{border:1px solid var(--line);background:#f9fbff;border-radius:14px;padding:12px;text-align:left;cursor:pointer}.object-btn.active{background:#eef3ff;border-color:#bfc9ff}.object-visual{background:linear-gradient(145deg,#f7f9fc,#edf2f8);border:1px solid var(--line);border-radius:20px;padding:18px;min-height:260px}.object-title{font-size:20px;font-weight:750;margin-bottom:8px}.parts{display:grid;grid-template-columns:repeat(2,1fr);gap:9px;margin-top:14px}.part{border:1px dashed #cdd6e1;border-radius:13px;padding:11px;background:#fff;cursor:pointer}.part:hover{border-color:#8b83f4}.part b{display:block;font-size:12px;margin-bottom:4px}.part small{color:var(--muted);line-height:1.35}.emergency-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.emergency-card{padding:15px;border-radius:16px;border:1px solid var(--line);background:#fff}.emergency-card h3{margin:0 0 7px;font-size:15px}.contact-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}.contact-row label{font-size:12px;color:var(--muted)}.contact-row input{width:100%;box-sizing:border-box;margin-top:5px;padding:10px;border:1px solid var(--line);border-radius:10px}.meter-box{background:#f8fbff;border:1px solid #dbe6f3;border-radius:16px;padding:15px}.meter-display{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:27px;letter-spacing:.08em;background:#25304a;color:#fff;padding:14px 16px;border-radius:12px;display:inline-block;margin:8px 0}.clog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.clog-step{padding:14px;border:1px solid var(--line);border-radius:16px;background:linear-gradient(135deg,#fff,#f8fbff)}.clog-step b{display:block;margin-bottom:6px}.do-not{margin-top:12px;padding:13px 14px;background:#fff1f0;border:1px solid #f0c7c3;border-radius:14px;color:#6a2a24;font-size:12px;line-height:1.45}@media(max-width:800px){.life-quick{grid-template-columns:1fr 1fr!important}.life-grid,.object-layout,.emergency-grid{grid-template-columns:1fr}.clog-grid{grid-template-columns:1fr}.contact-row{grid-template-columns:1fr}}

/* Interaction polish: modes around the knob */
.knob-stage{position:relative;width:310px;height:310px;display:grid;place-items:center}
.knob-stage .knob{position:relative;z-index:2}
.knob-stage .modes{position:absolute;inset:0;height:100%;margin:0;z-index:3;pointer-events:none}
.knob-stage .mode-dot{top:auto;left:auto;transform:translate(-50%,-50%);width:78px;min-width:0;display:flex;flex-direction:column;align-items:center;gap:3px;pointer-events:none}
.knob-stage .mode-dot button{pointer-events:auto;width:16px;height:16px;margin:0;border-width:2px;box-shadow:0 2px 6px rgba(23,32,51,.08)}
.knob-stage .mode-dot .mode-symbol{width:26px;height:26px;display:grid;place-items:center;pointer-events:none}
.knob-stage .mode-dot .mode-symbol svg{width:24px;height:24px}
.knob-stage .mode-dot .mode-label{max-width:86px;padding:4px 7px;border-radius:10px;background:rgba(255,255,255,.94);border:1px solid #e5e9f0;box-shadow:0 5px 12px rgba(44,62,90,.08);font-size:10px;line-height:1.15;text-align:center}
.knob-stage .mode-dot.active .mode-label{background:#172033;color:#fff;border-color:#172033}
.mode-dot.active .mode-symbol svg{stroke:#172033}
.knob-stage .mode-dot.active .mode-symbol svg{stroke:#5b4cf0}

/* DIY / lamp */
.diy-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.diy-card{border:1px solid var(--line);border-radius:18px;padding:16px;background:linear-gradient(135deg,#fbfdff,#f6f8ff)}
.diy-card h3{margin:0 0 8px;line-height:1.22}
.diy-card p{margin:0;color:#5e6a7b;font-size:13px;line-height:1.55}
.bulb-picker{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.bulb-option{border:1px solid var(--line);border-radius:16px;padding:14px;background:#fff;cursor:pointer;text-align:left}
.bulb-option.active{border-color:#7d72ff;background:#f4f2ff}
.bulb-result{margin-top:12px;padding:15px;border-radius:16px;background:#f8fafc;border:1px solid #e2e6ee;color:#546176;line-height:1.5;font-size:13px}


/* Finance trainer: use the same visual language as the rest of the app */
.budget-soft,.finance-soft{background:#fff;border:1px solid var(--line);border-radius:22px;padding:20px;box-shadow:0 10px 28px rgba(44,62,90,.05)}
.budget-soft h3,.finance-soft h3{margin:0 0 10px;line-height:1.22}
.budget-soft p,.finance-soft p{color:#5e6a7b;line-height:1.6;font-size:14px}
.budget-kpi,.finance-kpi{background:#f8fbff;border-color:var(--line)}
.budget-tone,.finance-tone{background:#f7f8fb;border-color:var(--line);color:#566276}

/* Soft finance trainer */
.finance-sim{display:grid;grid-template-columns:1.05fr .95fr;gap:18px}
.finance-soft{background:linear-gradient(135deg,#fbfcff,#f3f8ff);border:1px solid #dfe6f4;border-radius:22px;padding:20px}
.finance-soft h3{margin:0 0 8px;line-height:1.2}.finance-soft p{margin:0;color:#647084;line-height:1.55;font-size:13px}
.finance-fields{display:grid;gap:12px;margin-top:14px}.finance-fields label{font-size:12px;color:#647084}.finance-fields input[type=number],.finance-fields select{width:100%;margin-top:6px;padding:10px 12px;border:1px solid #d9deea;border-radius:12px;font:inherit;background:#fff}
.finance-checks{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px}.finance-check{padding:10px;border:1px solid #dfe5ef;border-radius:12px;background:#fff;font-size:12px;color:#5e6a7b}.finance-check input{margin-right:7px}
.finance-kpis{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:14px}.finance-kpi{padding:14px;border:1px solid #e0e5ef;border-radius:15px;background:#fff}.finance-kpi b{display:block;font-size:19px;margin-bottom:4px}.finance-kpi span{font-size:11px;color:#6b7280;line-height:1.35}
.finance-tone{margin-top:14px;padding:14px 15px;border-radius:16px;background:#fff;border:1px solid #e0e5ef;color:#566276;line-height:1.5;font-size:13px}.finance-tone.good{background:#eefaf1;border-color:#cde5d3;color:#2e6240}.finance-tone.warn{background:#fff8eb;border-color:#eed7a4;color:#75561f}.finance-tone.neutral{background:#f7f8fb;border-color:#e0e5ee;color:#566276}

/* Readability guard */
h2{line-height:1.18} h3{line-height:1.25} h2 + p,h3 + p,h2 + .lead,h3 + .lead{margin-top:0} .home-hero h1{margin-bottom:16px}.home-hero .lead{margin-top:0}
@media(max-width:800px){.knob-stage{width:300px;height:300px}.diy-grid,.finance-sim{grid-template-columns:1fr}.bulb-picker,.finance-checks{grid-template-columns:1fr}}


/* Washing subsections and tray */
.wash-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:20px 0 14px}
.wash-tab{border:1px solid var(--line);background:#fff;border-radius:999px;padding:10px 14px;font:inherit;font-weight:700;color:#5d6878;cursor:pointer;transition:.18s}
.wash-tab:hover{border-color:#b7c4d9;transform:translateY(-1px)}
.wash-tab.active{background:#f3f0ff;border-color:#8c7dff;color:#4c3ff0}
.wash-layout.wash-learning-mode{display:block}
.wash-layout.wash-learning-mode .machine{display:none}
.wash-layout.wash-learning-mode .side{max-width:none}
.wash-pane-content{display:none}
.wash-pane-content.active{display:block}
.wash-learning-mode .side{display:block}
.detergent-tray{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:14px}
.tray-slot{background:#fff;border:1px solid var(--line);border-radius:16px;padding:14px;text-align:left;cursor:pointer;min-height:150px;transition:.18s}
.tray-slot:hover{transform:translateY(-1px);border-color:#b9c5d8}
.tray-slot.active{background:#f6f4ff;border-color:#8779ff;box-shadow:0 8px 22px rgba(91,76,240,.09)}
.tray-mark{display:grid;place-items:center;width:40px;height:40px;border-radius:12px;background:#f4f6fa;border:1px solid var(--line);font-weight:800;margin-bottom:10px}
.tray-slot b{display:block;margin-bottom:6px}.tray-slot small{display:block;color:var(--muted);line-height:1.45}
.handwash-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:14px}
.handwash-step{padding:16px;border:1px solid var(--line);border-radius:16px;background:#fff}.handwash-step p{margin:7px 0 0;color:var(--muted);line-height:1.55}
@media(max-width:800px){.detergent-tray,.handwash-grid{grid-template-columns:1fr 1fr}}
@media(max-width:520px){.detergent-tray,.handwash-grid{grid-template-columns:1fr}}


.finance-sim{background:var(--card);border:1px solid var(--line);border-radius:22px;box-shadow:var(--shadow);padding:18px}
.finance-soft{background:var(--card)!important;border:1px solid var(--line)!important;border-radius:18px!important;box-shadow:none!important;padding:18px}
.finance-soft h3{margin:0 0 10px!important}.finance-soft p{margin:0 0 12px!important;line-height:1.6}
.finance-kpi,.budget-kpi{box-shadow:none!important}


/* Clothing + money tabs */
.topic-illustration{width:72px;height:72px;display:flex;align-items:center;justify-content:center;border:1px solid var(--line);border-radius:16px;background:linear-gradient(145deg,#f7f9ff,#eef4ff);margin-bottom:10px}.topic-illustration svg{width:50px;height:50px;stroke:#4d57a3;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.instruction-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:12px}.instruction-card{padding:14px;border:1px solid var(--line);border-radius:14px;background:#fbfcff}.instruction-card h3{margin:0 0 7px;font-size:15px}.instruction-card p,.instruction-card li{color:var(--muted);font-size:13px;line-height:1.5}.instruction-card ol{margin:8px 0 0 18px;padding:0}@media(max-width:650px){.instruction-grid{grid-template-columns:1fr}} .clothing-tabs,.money-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:18px 0}.clothing-tab,.money-tab{background:#fff;border:1px solid var(--line);color:var(--ink);padding:10px 14px;border-radius:12px;cursor:pointer;font:inherit}.clothing-tab.active,.money-tab.active{background:#eef5ff;border-color:#c7dcff;color:#1459b8}.clothing-pane,.money-pane{display:none}.clothing-pane.active,.money-pane.active{display:block}.clothing-grid,.scam-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:16px}.clothing-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:20px;box-shadow:var(--shadow)}.care-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.iron-scale{display:flex;gap:10px;margin:16px 0}.iron-level{flex:1;border:1px solid var(--line);background:#fff;border-radius:14px;padding:14px;cursor:pointer;font-size:20px}.iron-level span{display:block;font-size:12px;color:var(--muted);margin-top:5px}.iron-level.active{border-color:#8fb6ff;background:#eef5ff}.repair-grid,.problem-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.repair-card,.problem-card{border:1px solid var(--line);background:#fff;border-radius:14px;padding:14px;text-align:left;cursor:pointer}.repair-card span,.problem-card span{display:block;color:var(--muted);font-size:12px;line-height:1.45;margin-top:5px}.repair-card.active,.problem-card.active{border-color:#8fb6ff;background:#eef5ff}.scam-checks{display:grid;gap:10px}.scam-checks label{display:flex;gap:10px;align-items:flex-start;background:#f8fafc;border:1px solid var(--line);border-radius:12px;padding:11px;line-height:1.45}.scenario-card{background:#f8fafc;border:1px solid var(--line);border-radius:16px;padding:16px}.scenario-label{font-size:12px;color:var(--muted);margin-bottom:6px}.scenario-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}.scam-answer{border:1px solid var(--line);background:#fff;border-radius:12px;padding:12px;cursor:pointer}@media(max-width:900px){.clothing-grid,.scam-grid{grid-template-columns:1fr}}@media(max-width:650px){.care-cards,.repair-grid,.problem-grid,.scenario-actions{grid-template-columns:1fr}}

/* Pets */
.pet-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:18px 0}.pet-tab,.pet-choice{border:1px solid var(--line);background:#fff;color:var(--ink);border-radius:999px;padding:10px 14px;cursor:pointer}.pet-tab.active,.pet-choice.active{background:#eef4ff;border-color:#bdd0ff}.pet-pane{display:none}.pet-pane.active{display:block}.pet-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.pet-card{background:#fff;border:1px solid var(--line);border-radius:22px;padding:20px;box-shadow:0 12px 35px rgba(44,62,90,.06)}.pet-card h2{margin:0 0 10px}.pet-card h3{margin:18px 0 8px}.pet-card p,.pet-card li{line-height:1.6}.pet-card ul,.pet-card ol{padding-left:20px}.pet-choices{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.pet-choice{border-radius:14px}.pet-result{margin-top:14px;padding:14px 16px;background:#f8fafc;border:1px solid var(--line);border-radius:16px;line-height:1.6}.pet-warning{margin-top:14px;padding:14px 16px;border-radius:16px;background:#fff7ed;border:1px solid #fed7aa}.pet-safe{margin-top:14px;padding:14px 16px;border-radius:16px;background:#eefbf3;border:1px solid #b7e4c7}.pet-species{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:14px}.pet-species .pet-card{padding:16px}.pet-icon{width:44px;height:44px;border-radius:14px;background:#f3f6fb;display:flex;align-items:center;justify-content:center;font-weight:800;margin-bottom:10px}.pet-budget{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin-top:14px}.pet-budget .kpi{background:#f8fafc;border:1px solid var(--line);padding:14px;border-radius:16px}.pet-budget .kpi b{display:block;font-size:18px}.pet-budget .kpi span{display:block;color:var(--muted);font-size:12px;margin-top:4px}@media(max-width:900px){.pet-grid,.pet-species{grid-template-columns:1fr}.pet-budget{grid-template-columns:repeat(2,minmax(0,1fr))}
}

.pet-food-columns{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:14px}.pet-food-list{display:grid;gap:8px;margin-top:10px}.pet-food-choice{width:100%;text-align:left;padding:11px 12px;border:1px solid var(--line,#ddd);background:#fff;border-radius:12px;cursor:pointer}.pet-food-choice:hover{border-color:#9b8af6;transform:translateY(-1px)}.pet-food-choice.danger{border-left:4px solid #e28b8b}.pet-food-choice.active{border-color:#7a63e8;background:#f5f2ff}.pet-food-section h3{margin:0;font-size:16px}.pet-food-section .pet-result{margin-top:14px}@media(max-width:760px){.pet-food-columns{grid-template-columns:1fr}}

/* V2 visual direction: warm, editorial, calm */
:root{--bg:#f7f5ef;--card:#fffdfa;--ink:#20231f;--muted:#6c7169;--line:#e3e0d8;--accent:#5e56d8;--soft:#f0efff}
body{background:radial-gradient(circle at 8% 0%,#fffdf8 0,#f7f5ef 45%,#f1efe9 100%);color:var(--ink)}
.app{max-width:1340px;padding:26px 30px 50px}
.nav{background:rgba(255,253,248,.93);border:1px solid #e5e2da;box-shadow:0 10px 30px rgba(38,42,36,.05);border-radius:16px;padding:8px}
.nav button{color:#6f746b;border-radius:10px;font-weight:650}.nav button:hover{background:#f1efe8;color:#2f332e}.nav button.active{background:#20231f;color:#fff}
.home-hero-v2{padding:28px 0 10px}.hero-kicker{font-size:12px;letter-spacing:.16em;font-weight:800;color:#5e56d8;margin-bottom:18px}.hero-grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr);gap:24px;align-items:end}.hero-grid h1{font-size:clamp(42px,6.3vw,76px);line-height:.95;margin:0;letter-spacing:-.055em}.hero-grid h1 span{color:#5e56d8}.hero-copy{max-width:760px;margin:20px 0 0;font-size:18px;line-height:1.55;color:#64675f}.hero-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:22px}.hero-primary,.hero-secondary{border-radius:13px;padding:12px 16px;font:inherit;font-weight:750;cursor:pointer}.hero-primary{border:1px solid #5e56d8;background:#5e56d8;color:#fff;box-shadow:0 8px 20px rgba(94,86,216,.18)}.hero-secondary{border:1px solid #d8d5cb;background:#fffdfa;color:#2f332e}.hero-note-v2{background:#20231f;color:#fff;padding:22px;border-radius:22px;box-shadow:0 18px 35px rgba(32,35,31,.12)}.hero-note-label{font-size:10px;letter-spacing:.13em;color:#b9bbaf;margin-bottom:10px}.hero-note-v2 strong{font-size:20px;line-height:1.15;display:block}.hero-note-v2 p{margin:10px 0 0;color:#d5d7cf;line-height:1.55;font-size:14px}.home-problem{margin-top:30px;background:#fffdfa;border:1px solid #e3e0d8;border-radius:22px;padding:22px;display:grid;grid-template-columns:.85fr 1.15fr;gap:20px;box-shadow:0 12px 28px rgba(38,42,36,.05)}.home-problem h2,.home-section-head h2{margin:4px 0 8px;font-size:28px;letter-spacing:-.025em}.home-problem p{margin:0;color:var(--muted);line-height:1.5}.problem-chips{display:flex;flex-wrap:wrap;gap:8px;align-content:flex-start}.problem-chips button{border:1px solid #ddd9cf;background:#f8f6f0;color:#343832;border-radius:999px;padding:10px 13px;cursor:pointer}.problem-chips button:hover{border-color:#aaa6f3;background:#f2f0ff}.home-section-head{display:flex;justify-content:space-between;align-items:end;gap:20px;margin:36px 0 14px}.home-section-caption{color:var(--muted);font-size:13px}.home-grid-v2{display:grid;grid-template-columns:repeat(4,1fr);gap:13px}.home-card-v2{position:relative;min-height:260px;background:#fffdfa;border:1px solid #e2dfd6;border-radius:22px;padding:20px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 12px 28px rgba(38,42,36,.045);cursor:pointer;transition:transform .16s ease,box-shadow .16s ease,border-color .16s ease}.home-card-v2:hover{transform:translateY(-2px);border-color:#d3d0c5;box-shadow:0 18px 35px rgba(38,42,36,.07)}.home-icon{width:54px;height:54px;border-radius:15px;background:#f0efff;border:1px solid #dfdcff;display:grid;place-items:center;color:#5e56d8}.home-icon svg{width:32px;height:32px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.home-card-kicker{margin-top:16px;font-size:10px;letter-spacing:.14em;color:#8b8f86}.home-card-v2 h3{font-size:22px;margin:5px 0 8px;letter-spacing:-.02em}.home-card-v2 p{margin:0;color:var(--muted);font-size:13px;line-height:1.5}.home-card-v2 button{align-self:flex-start;margin-top:16px;border:0;background:#20231f;color:#fff;padding:9px 12px;border-radius:10px;font-weight:700;cursor:pointer}.home-bottom-note{margin-top:18px;padding:17px 18px;border-top:1px solid #dedbd2;color:#686c64;font-size:13px;line-height:1.55}.home-bottom-note strong{color:#2c302b}
.top .badge{background:#fffdfa;border-color:#dfdcd4}.section-label{background:#f0efff;color:#544bd1}.home-hero{padding:28px 0 8px}.home-hero h1{letter-spacing:-.04em}.cook-hero,.clean-hero{padding-top:28px}.view>.home-hero .lead,.view>.cook-hero .lead,.view>.clean-hero .lead{max-width:760px}.life-card,.pet-card,.clothing-card,.money-card,.health-card,.cook-card,.clean-card,.panel,.machine{background:#fffdfa}
@media(max-width:1050px){.home-grid-v2{grid-template-columns:repeat(2,1fr)}.hero-grid,.home-problem{grid-template-columns:1fr}.home-section-head{align-items:flex-start;flex-direction:column;gap:4px}}
@media(max-width:700px){.app{padding:16px}.hero-grid h1{font-size:48px}.home-grid-v2{grid-template-columns:1fr}.home-problem{padding:18px}.home-section-head{margin-top:28px}.nav{overflow-x:auto;flex-wrap:nowrap}.nav button{white-space:nowrap}}

.health-tool-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:16px}.health-tool-card{border:1px solid var(--line);border-radius:22px;padding:20px;background:#fffdfa;box-shadow:0 10px 28px rgba(44,62,90,.05)}.health-tool-card p,.health-tool-card li{color:#5e5b55;font-size:14px;line-height:1.58}.health-tool-card ul{margin:8px 0 0;padding-left:19px}.exercise-list{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}.exercise-chip{padding:11px 12px;border:1px solid var(--line);border-radius:14px;background:#f7f8fb}.exercise-chip b{display:block;color:#272722;margin-bottom:3px}.health-note{margin-top:12px;padding:12px 14px;border-radius:14px;background:#f0efff;color:#443bb1;font-size:13px;line-height:1.5}.mood-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}.mood-btn{border:1px solid var(--line);background:#fff;border-radius:12px;padding:14px 15px;cursor:pointer;text-align:left;display:flex;flex-direction:column;align-items:flex-start;gap:6px;line-height:1.35}.mood-btn b{display:block;margin:0;color:#272722;font-size:14px;font-weight:700;line-height:1.35}.mood-btn span{display:block;margin:0;color:#6a675f;font-size:12.5px;line-height:1.45}.mood-btn:hover{border-color:#6d63e8}.mood-result{margin-top:12px;padding:12px 14px;border-radius:14px;background:#f7f8fb;color:#55524c;font-size:13px;line-height:1.5}@media(max-width:900px){.health-tool-grid{grid-template-columns:1fr}.exercise-list,.mood-grid{grid-template-columns:1fr 1fr}}@media(max-width:600px){.exercise-list,.mood-grid{grid-template-columns:1fr}}

/* Fine-tuning: psychological health spacing */
#health-mental .health-tool-card h2 {
  margin-bottom: 18px !important;
}
#health-mental .health-tool-card h3 {
  margin-top: 24px !important;
  margin-bottom: 10px !important;
}
#health-mental .health-tool-card > p {
  margin-bottom: 16px !important;
}
#health-mental .mood-grid {
  margin-top: 14px !important;
  margin-bottom: 22px !important;
}
#health-mental .mood-result {
  margin-top: 14px !important;
  margin-bottom: 22px !important;
  padding: 18px 20px !important;
  font-size: 17px !important;
  line-height: 1.7 !important;
  color: var(--ds-text) !important;
}
#health-mental .mood-btn b {
  font-size: 16px !important;
  line-height: 1.45 !important;
}
#health-mental .mood-btn span {
  font-size: 14px !important;
  line-height: 1.55 !important;
}
#health-mental .health-tool-card > p,
#health-mental .health-tool-card li {
  font-size: 15px !important;
  line-height: 1.65 !important;
}
#health-mental .health-note,
#health-mental .source-box {
  margin-top: 18px !important;
}
#health-mental .health-tool-card ul {
  margin-top: 12px !important;
}


/* =========================================================
   GLOBAL DESIGN SYSTEM — one visual language for the whole app
   ========================================================= */
:root{
  --ds-bg:#f7f8fb;
  --ds-surface:#ffffff;
  --ds-surface-soft:#f6f7fb;
  --ds-ink:#202633;
  --ds-text:#394150;
  --ds-muted:#6f7786;
  --ds-line:#dfe4ec;
  --ds-line-strong:#cfd6e1;
  --ds-accent:#5b4cf0;
  --ds-accent-soft:#f1efff;
  --ds-success-bg:#eef8f1;
  --ds-success-line:#cfe7d5;
  --ds-success-text:#2f6b43;
  --ds-warn-bg:#fff8ea;
  --ds-warn-line:#ecdba9;
  --ds-warn-text:#765b24;
  --ds-danger-bg:#fff1f0;
  --ds-danger-line:#efcfcc;
  --ds-danger-text:#7a342f;
  --ds-radius-sm:10px;
  --ds-radius-md:14px;
  --ds-radius-lg:18px;
  --ds-radius-xl:22px;
  --ds-shadow:0 10px 28px rgba(37,48,68,.055);
}

html,body{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif !important;background:var(--ds-bg) !important;color:var(--ds-ink) !important;}
body{font-size:16px !important;line-height:1.5 !important;}

/* Type scale */
h1,.home-hero h1{font-size:clamp(34px,5vw,60px) !important;line-height:1.02 !important;letter-spacing:-.035em !important;font-weight:760 !important;color:var(--ds-ink) !important;margin:0 0 16px !important;}
h2,.section h2,.clean-card h2,.life-card h2,.home-card h2{font-size:22px !important;line-height:1.2 !important;letter-spacing:-.02em !important;font-weight:700 !important;color:var(--ds-ink) !important;margin:0 0 10px !important;}
h3,.panel h3,.clean-card h3,.life-card h3,.det-card h4,.care-card h4,.stain-card h4,.diy-card h3,.pill-card h3,.budget-soft h3,.finance-soft h3,.emergency-card h3{font-size:16px !important;line-height:1.3 !important;letter-spacing:-.01em !important;font-weight:700 !important;color:var(--ds-ink) !important;margin:0 0 8px !important;}
h4{font-size:15px !important;line-height:1.32 !important;font-weight:700 !important;color:var(--ds-ink) !important;}
p,li,.clean-card p,.life-card p,.life-card li,.section p,.lead,.hint{font-size:14px !important;line-height:1.58 !important;color:var(--ds-text) !important;}
small,.micro,.model,.eyebrow,.tag,.fact b,.source-box,.stain-card .stain-meta{color:var(--ds-muted) !important;}
strong,b{font-weight:700 !important;color:inherit !important;}

/* Consistent spacing around headings */
h1 + .lead{margin-top:0 !important;}
h2 + p,h2 + .lead,h3 + p,h3 + .lead,h4 + p{margin-top:0 !important;}
.section,.clean-card,.life-card,.panel,.home-card,.pill-card,.budget-soft,.finance-soft,.diy-card,.det-card,.care-card,.stain-card,.emergency-card,.task,.clog-step,.handwash-step,.surface-card,.tray-slot,.bulb-option,.object-visual,.object-btn,.part{font-family:inherit !important;}
.section h2 + .micro{margin-top:0 !important;}

/* Unified surfaces */
.panel,.machine,.clean-card,.life-card,.home-card,.budget-soft,.finance-soft,.pill-card,.diy-card,.det-card,.care-card,.stain-card,.emergency-card,.task,.clog-step,.handwash-step,.surface-card,.tray-slot,.bulb-option,.object-visual,.object-btn,.part,.fact,.calendar-box .task{
  border-color:var(--ds-line) !important;
  box-shadow:var(--ds-shadow) !important;
}
.panel,.machine,.clean-card,.life-card,.home-card,.budget-soft,.finance-soft,.pill-card,.diy-card,.det-card,.care-card,.stain-card,.emergency-card,.task,.clog-step,.handwash-step,.surface-card,.tray-slot,.bulb-option,.object-visual,.object-btn,.part{
  background:var(--ds-surface) !important;
}

/* Unified controls */
button,input,select,textarea{font-family:inherit !important;}
button{font-size:14px !important;}
.nav button,.clean-tab,.life-tab,.wash-tab{font-size:13px !important;line-height:1.2 !important;font-weight:600 !important;color:var(--ds-muted) !important;}
.nav button.active{background:var(--ds-ink) !important;color:#fff !important;}
.clean-tab.active,.life-tab.active,.wash-tab.active{background:var(--ds-accent) !important;color:#fff !important;border-color:var(--ds-accent) !important;}
.choice,.clean-tab,.life-tab,.wash-tab,.nav button,.home-card button,.reminder-strip button,.calendar-input,.finance-fields input[type=number],.finance-fields select,.contact-row input{font-size:13px !important;line-height:1.25 !important;}

/* Unified callouts */
.notice{background:var(--ds-warn-bg) !important;border-color:var(--ds-warn-line) !important;color:var(--ds-warn-text) !important;}
.do-not{background:var(--ds-danger-bg) !important;border-color:var(--ds-danger-line) !important;color:var(--ds-danger-text) !important;}
.reminder-strip{background:var(--ds-success-bg) !important;border-color:var(--ds-success-line) !important;color:var(--ds-success-text) !important;}

/* Unified muted text */
.home-card p,.fact span,.det-card p,.care-card p,.stain-card p,.stain-card ol,.surface-card p,.task small,.object-btn,.part small,.bulb-result,.finance-soft p,.budget-soft p,.pill-card p{color:var(--ds-text) !important;}

/* Standardise borders and radii */
.home-card{border-radius:var(--ds-radius-xl) !important;}
.panel,.machine,.clean-card,.life-card,.budget-soft,.finance-soft{border-radius:var(--ds-radius-xl) !important;}
.pill-card,.diy-card,.det-card,.care-card,.stain-card,.emergency-card,.task,.clog-step,.handwash-step,.surface-card,.tray-slot,.bulb-option,.object-visual,.object-btn,.part{border-radius:var(--ds-radius-lg) !important;}

/* Keep special technical displays monospaced but normalize the rest */
.meter-display,.display{font-family:ui-monospace,SFMono-Regular,Menlo,monospace !important;}
.display-title{font-size:24px !important;line-height:1.1 !important;font-weight:700 !important;}
.display-row{font-size:13px !important;line-height:1.4 !important;}

/* Home and section intros */
.top{margin-bottom:28px !important;}
.clean-hero{padding:30px 0 10px !important;}
.eyebrow{font-size:12px !important;line-height:1.2 !important;font-weight:700 !important;letter-spacing:.1em !important;}
.lead{max-width:720px !important;font-size:16px !important;line-height:1.55 !important;color:var(--ds-text) !important;}

/* Keep interactive knob readable without making labels drift */
.knob-stage .mode-dot .mode-label{font-family:inherit !important;font-size:10px !important;line-height:1.2 !important;color:var(--ds-ink) !important;}
.knob-stage .mode-dot.active .mode-label{color:#fff !important;}

/* Mobile consistency */
@media(max-width:800px){
  h1,.home-hero h1{font-size:clamp(32px,9vw,46px) !important;}
  h2,.section h2,.clean-card h2,.life-card h2,.home-card h2{font-size:20px !important;}
  h3,.panel h3,.clean-card h3,.life-card h3,.diy-card h3,.pill-card h3{font-size:15px !important;}
  p,li,.clean-card p,.life-card p,.life-card li,.section p,.lead,.hint{font-size:14px !important;}
}
<style>.hero-white,.hero-white *{color:#fff !important;}
/* Unified section numbering */
.section-label,.section-label.eyebrow{color:var(--accent) !important;font-weight:700 !important;letter-spacing:.02em;}

.plant-anatomy{display:grid;grid-template-columns:minmax(220px,320px) 1fr;gap:24px;align-items:center;margin-top:18px}.plant-visual{position:relative;min-height:290px;border:1px solid var(--border,#e5e7eb);border-radius:18px;background:#fafbff;overflow:hidden}.plant-pot{position:absolute;left:50%;bottom:28px;transform:translateX(-50%);width:128px;height:76px;background:#d9c1aa;border-radius:10px 10px 22px 22px}.plant-pot:before{content:"";position:absolute;left:8px;right:8px;top:-8px;height:18px;border-radius:50%;background:#5b4637}.plant-stem{position:absolute;left:50%;bottom:95px;width:10px;height:135px;transform:translateX(-50%);background:#6e8e5d;border-radius:8px}.plant-root{position:absolute;left:50%;bottom:70px;width:110px;height:68px;transform:translateX(-50%);border-bottom:4px solid #7d5a43;border-radius:0 0 60px 60px}.plant-leaf{position:absolute;width:72px;height:38px;background:#7da56d;border-radius:72px 8px 72px 8px}.leaf-left{left:calc(50% - 72px);bottom:170px;transform:rotate(-18deg)}.leaf-right{left:calc(50% + 4px);bottom:192px;transform:rotate(24deg)}.leaf-top{left:calc(50% - 30px);bottom:225px;transform:rotate(-3deg)}@media(max-width:760px){.plant-anatomy{grid-template-columns:1fr}.plant-visual{min-height:250px}}
</style></style>
<style>

.wash-color-note{margin:10px 0 0 !important;color:var(--muted,#6f7180) !important;line-height:1.6 !important;}

.stove-demo{display:grid;grid-template-columns:1.15fr 1fr;gap:18px;align-items:stretch}.stove-face{position:relative;min-height:250px;border-radius:24px;background:linear-gradient(145deg,#fff,#f3f5fb);border:1px solid #d9dce6;padding:18px;overflow:hidden}.stove-display{font-weight:700;font-size:14px;color:#3f3b54}.stove-zone{position:absolute;inset:56px 30px 24px;display:flex;align-items:center;justify-content:center}.gas-flame,.electric-glow{width:150px;height:150px;border-radius:50%;opacity:0;transition:opacity .25s,transform .25s,filter .25s}.gas-flame{background:radial-gradient(circle at 50% 65%,#fff9c8 0 14%,#ffd34f 15% 31%,#ff8f3d 32% 52%,#5fc4ff 53% 70%,transparent 71%);filter:drop-shadow(0 0 calc(8px + var(--heat)*2px) rgba(255,153,63,.6));transform:scale(calc(.72 + var(--heat)*.045));}.electric-glow{background:radial-gradient(circle,#fff8d2 0 14%,#ffc04d 35%,#f06a3a 55%,#e44634 70%,transparent 72%);box-shadow:0 0 calc(12px + var(--heat)*3px) rgba(238,94,57,.48);transform:scale(calc(.7 + var(--heat)*.04));}.stove-controls{border:1px solid #e0e2e9;border-radius:22px;padding:16px;background:#fff}.stove-type-row,.intensity-row{display:flex;gap:8px;flex-wrap:wrap}.stove-type-row{margin-bottom:16px}.heat-meter{height:10px;background:#ececf3;border-radius:999px;overflow:hidden;margin-top:14px}.heat-meter-fill{height:100%;width:0;background:linear-gradient(90deg,#8ad08f,#ffd263,#f06a3a);transition:width .25s}.burner.active{background:#f4f2ff;border-color:#7d72ff}.heat-knob.active{background:#f4f2ff;border-color:#7d72ff}@media(max-width:800px){.stove-demo{grid-template-columns:1fr}}
.stove-card,.fridge-card,.tool-card,.sim-card{border:1px solid var(--line);border-radius:22px;padding:20px;background:#fff;box-shadow:0 10px 28px rgba(44,62,90,.05)}
.stove-layout,.fridge-layout,.sim-grid{display:grid;grid-template-columns:minmax(300px,1.1fr) minmax(280px,.9fr);gap:18px}
.stove{background:#f5f6fb;border:1px solid #dfe3ef;border-radius:24px;padding:18px}.stove-top{height:90px;border-radius:18px;background:#222;display:flex;align-items:center;justify-content:center;color:#fff;font-size:18px;letter-spacing:.04em}.burners{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:14px}.burner{aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,#444 0 22%,#161616 23% 35%,#aaa 36% 39%,#1c1c1c 40% 100%);border:8px solid #d7dae3;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;transition:.2s}.burner.active{transform:scale(1.03);box-shadow:0 0 0 4px rgba(91,76,240,.18)}.knob-row{display:flex;gap:12px;flex-wrap:wrap;margin-top:14px}.heat-knob{width:64px;height:64px;border-radius:50%;background:linear-gradient(#fff,#e9ebf2);border:1px solid #cfd3df;display:grid;place-items:center;font-weight:800;cursor:pointer;position:relative}.heat-knob.active{box-shadow:0 0 0 4px rgba(91,76,240,.15)}
.food-select{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.food-btn,.shelf-btn,.sim-option{border:1px solid #d9dce6;background:#fff;border-radius:14px;padding:12px;text-align:left;cursor:pointer}.food-btn.active,.shelf-btn.active,.sim-option.active{border-color:#7d72ff;background:#f4f2ff}.fridge{background:linear-gradient(180deg,#eef2f8,#fff);border:1px solid #d8dce6;border-radius:24px;padding:16px}.fridge-door{border-radius:18px;background:#fafbfe;border:1px solid #dfe2ea;padding:12px}.fridge-shelf{min-height:64px;border-bottom:1px solid #d7dbe5;display:flex;gap:8px;align-items:center;justify-content:center}.fridge-shelf:last-child{border-bottom:0}.fridge-item{padding:9px 10px;border-radius:12px;background:#fff;border:1px solid #d9dce6;cursor:pointer;font-size:12px}.fridge-item.correct{background:#eefaf1;border-color:#9fd0aa}.fridge-item.wrong{background:#fff0f0;border-color:#e6a6a6}.meter-bar{height:12px;border-radius:999px;background:#ececf3;overflow:hidden}.meter-fill{height:100%;background:#5b4cf0;width:0;transition:.25s}.slider-row{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center}.clean-selector{display:flex;gap:8px;flex-wrap:wrap}.clean-selector button{border:1px solid #d9dce6;border-radius:12px;padding:10px 12px;background:#fff;cursor:pointer}.clean-selector button.active{background:#f4f2ff;border-color:#7d72ff}.sim-controls{display:grid;gap:12px}.sim-result{padding:16px;border-radius:16px;background:#f8fafc;border:1px solid #e4e7ef}.sim-result.good{background:#eefaf1;border-color:#b9dbbf}.sim-result.warn{background:#fff7ea;border-color:#eed39b}.sim-result.bad{background:#fff0f0;border-color:#e4aeae}
@media(max-width:800px){.stove-layout,.fridge-layout,.sim-grid{grid-template-columns:1fr}.medicine-drawer{grid-template-columns:1fr}.burners{grid-template-columns:repeat(2,1fr)}}
/* Manual-style detail illustrations */
.object-detail-layout{display:grid;grid-template-columns:1.1fr .9fr;gap:16px;align-items:start}
.object-detail-figure{margin:0;background:#f7f8fa;border:1px solid var(--line);border-radius:18px;padding:12px}
.object-detail-figure img{display:block;width:100%;max-height:440px;object-fit:contain;border-radius:12px;background:#fff}
.object-detail-figure figcaption{margin-top:9px;font-size:11px;line-height:1.45;color:var(--muted)}
.object-image-link{display:inline-block;margin-top:8px;font-size:11px}
.object-part-thumb{width:66px;height:52px;flex:0 0 66px;border-radius:10px;border:1px solid var(--line);background:#fff;display:grid;place-items:center;overflow:hidden}
.object-part-thumb img{width:100%;height:100%;object-fit:contain}
.object-part-art{display:none!important}
.part{display:flex;align-items:center;gap:10px}
@media(max-width:800px){.object-detail-layout{grid-template-columns:1fr}.object-detail-figure img{max-height:320px}}

/* Typography/readability pass */
.cook-card h2,.money-card h2,.clean-card h2,.life-card h2,.panel h3{margin-top:0;margin-bottom:16px;line-height:1.22}
.cook-card h3,.money-card h3,.clean-card h3,.life-card h3{margin-top:20px;margin-bottom:9px;line-height:1.3}
.cook-card p,.money-card p,.clean-card p,.life-card p{line-height:1.6}
.callout,.notice,.source-note,.result-box,.sim-result{line-height:1.55}
.symbol{min-height:136px}.symbol-icon{height:46px;display:flex;align-items:center}.symbol-icon svg{width:42px;height:42px;overflow:visible;stroke:#172033;fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
.modes{height:100%}.mode-dot .mode-symbol{display:block;width:22px;height:22px;margin:0 auto 4px}.mode-dot .mode-symbol svg{width:22px;height:22px;stroke:#667085;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.mode-dot.active .mode-symbol svg{stroke:#172033}
.mode-label{display:block;font-size:10px;line-height:1.1;white-space:normal;max-width:68px}
.freeze-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.freeze-card{border:1px solid var(--line);border-radius:18px;padding:16px;background:linear-gradient(135deg,#fbfdff,#f4f8ff)}.freeze-card h3{margin:0 0 8px}.freeze-card p{margin:0;color:#5e6a7b;line-height:1.5;font-size:13px}.freeze-card .tag{margin-top:10px}
.budget-sim{display:grid;grid-template-columns:1.1fr .9fr;gap:18px}.budget-soft{background:linear-gradient(135deg,#fbfcff,#f3f8ff);border:1px solid #dfe6f4;border-radius:22px;padding:20px}.budget-soft h3{margin-top:0}.budget-control{display:grid;gap:12px}.budget-control label{font-size:12px;color:#647084}.budget-control input[type=number],.budget-control input[type=range]{width:100%;margin-top:5px}.budget-control input[type=number]{padding:10px 12px;border:1px solid #d9deea;border-radius:12px;font:inherit}.budget-range{display:grid;grid-template-columns:1fr auto;align-items:center;gap:10px}.budget-range output{min-width:78px;text-align:center;padding:8px 10px;border-radius:12px;background:#fff;border:1px solid #d9deea;font-weight:700}.budget-meter{height:14px;border-radius:999px;background:#e9edf5;overflow:hidden;margin:12px 0}.budget-meter-fill{height:100%;width:0;background:linear-gradient(90deg,#91c7ff,#7f74f4,#6fc58d);transition:width .25s}.budget-kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}.budget-kpi{padding:13px;border:1px solid #e0e5ef;border-radius:15px;background:#fff}.budget-kpi b{display:block;font-size:18px;margin-bottom:4px}.budget-kpi span{font-size:11px;color:#6b7280;line-height:1.35}.budget-tone{margin-top:14px;padding:14px 15px;border-radius:16px;background:#fff;border:1px solid #e0e5ef;color:#566276;line-height:1.5;font-size:13px}.budget-tone.good{background:#eefaf1;border-color:#cde5d3;color:#2e6240}.budget-tone.warn{background:#fff8eb;border-color:#eed7a4;color:#75561f}.budget-tone.bad{background:#fff2f1;border-color:#efc5c1;color:#7a312b}@media(max-width:800px){.freeze-grid,.budget-sim{grid-template-columns:1fr}.budget-kpis{grid-template-columns:1fr}}


.object-part-art{width:74px;height:74px;border-radius:16px;background:linear-gradient(145deg,#f8fbff,#eef3fb);border:1px solid #dce3ee;display:grid;place-items:center;flex:0 0 auto;overflow:hidden}
.object-part-art svg{width:58px;height:58px;stroke:#263449;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.part{display:grid!important;grid-template-columns:74px 1fr;gap:12px;align-items:center}
.part small{display:block;line-height:1.45}

/* Final visual consistency overrides */
.budget-soft,.finance-soft{background:#fff !important;border:1px solid var(--line) !important;border-radius:22px !important;box-shadow:0 12px 35px rgba(44,62,90,.06) !important}
.budget-soft h3,.finance-soft h3{color:var(--ink);margin:0 0 12px !important}
.budget-soft p,.finance-soft p{color:var(--muted) !important;font-size:14px !important;line-height:1.6 !important}
.finance-check,.budget-kpi,.finance-kpi{background:#fff !important;border-color:var(--line) !important}
.finance-tone,.budget-tone{background:#f8fafc;border-color:var(--line)}
.knob-stage{user-select:none;-webkit-user-select:none;touch-action:none}
.life-quick .life-card{min-height:0}
</style>
<style>
/* Consistent subsection navigation */
.health-tabs,.money-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:18px 0 16px}
.health-tab,.money-tab{border:1px solid var(--line,#e7e7ea);background:#fff;border-radius:999px;padding:10px 14px;font:inherit;font-weight:700;cursor:pointer;color:inherit;transition:.18s ease}
.health-tab.active,.money-tab.active{background:var(--accent,#5b5bf7);border-color:var(--accent,#5b5bf7);color:#fff}
.health-pane,.money-pane{display:none}
.health-pane.active,.money-pane.active{display:block}
.money-grid-single{grid-template-columns:1fr!important}
.health-pane > .health-grid,.health-pane > .health-tool-grid{margin-top:0}
.health-pane > .health-card{margin-top:0}
.health-tool-grid{margin-top:0!important}
</style><style>
/* Unified visual system */
:root{--radius-card:22px;--radius-control:12px;--section-gap:18px}
body,button,input,select,textarea{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif!important}
.view>.home-hero,.view>.cook-hero,.view>.clean-hero,.view>.clothing-hero{margin-bottom:4px}
/* One heading hierarchy across content cards */
.cook-card h2,.clean-card h2,.clothing-card h2,.money-card h2,.health-card h2,.health-tool-card h2,.life-card h2,.pet-card h2,.wash-pane-content h3,.panel h3,.machine .section h2,.section h2{font-size:20px!important;font-weight:700!important;line-height:1.28!important;letter-spacing:-.015em!important;margin:0 0 14px!important}
.cook-card h3,.clean-card h3,.clothing-card h3,.money-card h3,.health-card h3,.health-tool-card h3,.life-card h3,.pet-card h3,.stain-card h4,.det-card h4,.care-card h4{font-size:15px!important;font-weight:700!important;line-height:1.32!important;margin:20px 0 8px!important}
.cook-card p,.clean-card p,.clothing-card p,.money-card p,.health-card p,.health-tool-card p,.life-card p,.pet-card p,.wash-pane-content p,.section p{font-size:14px!important;line-height:1.62!important;margin:0 0 10px!important}
.cook-card ul,.cook-card ol,.clean-card ul,.clean-card ol,.clothing-card ul,.clothing-card ol,.money-card ul,.money-card ol,.health-card ul,.health-card ol,.health-tool-card ul,.health-tool-card ol,.life-card ul,.life-card ol,.pet-card ul,.pet-card ol{margin:10px 0 0!important;padding-left:20px!important;line-height:1.62!important}
.cook-card,.clean-card,.clothing-card,.money-card,.health-card,.health-tool-card,.life-card,.pet-card,.panel,.machine{border-radius:var(--radius-card)!important}
.cook-card,.clean-card,.clothing-card,.money-card,.health-card,.health-tool-card,.life-card,.pet-card{padding:20px!important}
.source-box,.health-note,.notice,.callout,.result-box,.sim-result,.budget-tone,.mood-result{margin-top:14px!important;line-height:1.55!important}
/* Consistent space below section headings, including pages that used inline styles */
.view > * h2 + p,.view > * h2 + ul,.view > * h2 + ol,.view > * h3 + p,.view > * h3 + ul,.view > * h3 + ol{margin-top:0!important}
/* Prevent text from visually sticking to headings and controls */
.health-tool-card > h2 + p,.health-card > h2 + p,.money-card > h2 + p,.cook-card > h2 + p,.clean-card > h2 + p,.clothing-card > h2 + p,.life-card > h2 + p,.pet-card > h2 + p{padding-top:2px}
/* Health exercise details */
.health-steps{color:#5e5b55;font-size:14px}
.exercise-detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}
.exercise-detail{display:grid;grid-template-columns:36px 1fr;gap:10px;border:1px solid var(--line);border-radius:16px;background:#f9fafc;padding:14px}
.exercise-no{width:36px;height:36px;border-radius:11px;display:grid;place-items:center;background:#f0efff;color:#554bd1;font-weight:800;font-size:12px}
.exercise-detail h4{margin:0 0 7px!important;font-size:15px;font-weight:700;line-height:1.3}
.exercise-detail p{font-size:13px!important;line-height:1.5!important;margin:0 0 5px!important}
.week-plan{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;margin-top:12px}
.week-plan>div{min-height:78px;border:1px solid var(--line);border-radius:14px;background:#fff;padding:10px}
.week-plan b{display:block;font-size:12px;margin-bottom:6px}
.week-plan span{display:block;font-size:11px;line-height:1.4;color:var(--muted)}
.micro-note{font-size:12px!important;color:var(--muted)!important}
@media(max-width:900px){.exercise-detail-grid{grid-template-columns:1fr}.week-plan{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.week-plan{grid-template-columns:1fr}.cook-card,.clean-card,.clothing-card,.money-card,.health-card,.health-tool-card,.life-card,.pet-card{padding:17px!important}.nav{gap:6px}.nav button{padding:9px 11px}}
</style>
<style id="final-design-system">
/* FINAL GLOBAL DESIGN SYSTEM — applies uniformly to every section */
:root{
  --ui-bg:#f6f7fb;
  --ui-surface:#ffffff;
  --ui-surface-2:#fbfbfe;
  --ui-ink:#1b2130;
  --ui-muted:#697386;
  --ui-line:#e2e6ee;
  --ui-accent:#5b4cf0;
  --ui-accent-soft:#eeecff;
  --ui-radius:20px;
  --ui-radius-sm:14px;
  --ui-shadow:0 10px 28px rgba(35,42,66,.055);
  --ui-space:16px;
}

html{background:var(--ui-bg)}
body{
  background:var(--ui-bg)!important;
  color:var(--ui-ink)!important;
  font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif!important;
  font-size:15px!important;
  line-height:1.6!important;
}

/* consistent page shell */
.app{max-width:1280px!important;padding:24px!important}
.view{min-width:0}
.view > * + *{margin-top:18px}

/* one typography system */
h1,h2,h3,h4,h5,h6{
  font-family:inherit!important;
  color:var(--ui-ink)!important;
}
h1{
  font-size:clamp(34px,5vw,60px)!important;
  line-height:1.02!important;
  font-weight:800!important;
  letter-spacing:-.04em!important;
  margin:0 0 14px!important;
}
h2{
  font-size:21px!important;
  line-height:1.28!important;
  font-weight:750!important;
  letter-spacing:-.015em!important;
  margin:0 0 14px!important;
}
h3{
  font-size:16px!important;
  line-height:1.34!important;
  font-weight:700!important;
  letter-spacing:-.005em!important;
  margin:20px 0 8px!important;
}
h4,h5,h6{
  font-size:14px!important;
  line-height:1.35!important;
  font-weight:700!important;
  margin:16px 0 8px!important;
}
p,li,label,small{font-family:inherit!important}
p{margin:0 0 12px!important;line-height:1.65!important}
ul,ol{margin:10px 0 14px!important;padding-left:20px!important;line-height:1.65!important}
strong{font-weight:700!important}

/* neutralize legacy page-specific card typography */
.cook-card h2,.cook-card h3,.cook-card h4,
.clean-card h2,.clean-card h3,.clean-card h4,
.clothing-card h2,.clothing-card h3,.clothing-card h4,
.money-card h2,.money-card h3,.money-card h4,
.health-card h2,.health-card h3,.health-card h4,
.health-tool-card h2,.health-tool-card h3,.health-tool-card h4,
.life-card h2,.life-card h3,.life-card h4,
.pet-card h2,.pet-card h3,.pet-card h4,
.wash-pane-content h2,.wash-pane-content h3,.wash-pane-content h4,
.section h2,.section h3,.section h4,
.panel h2,.panel h3,.panel h4{
  font-family:inherit!important;
}

/* one surface language */
.cook-card,.clean-card,.clothing-card,.money-card,
.health-card,.health-tool-card,.life-card,.pet-card,
.wash-pane-content,.section,.panel,.machine,
.stove-card,.fridge-card,.tool-card,.sim-card{
  background:var(--ui-surface)!important;
  border:1px solid var(--ui-line)!important;
  border-radius:var(--ui-radius)!important;
  box-shadow:var(--ui-shadow)!important;
}
.cook-card,.clean-card,.clothing-card,.money-card,
.health-card,.health-tool-card,.life-card,.pet-card,
.wash-pane-content,.section{
  padding:20px!important;
}

/* consistent secondary text */
.lead,.muted,.hint,.subtitle,.eyebrow,.model,.source-box,.small-note{
  color:var(--ui-muted)!important;
}
.lead{font-size:17px!important;line-height:1.58!important}

/* tabs: identical everywhere */
.health-tabs,.money-tabs,.cook-tabs,.clean-tabs,.clothing-tabs,.life-tabs,.pet-tabs,
.wash-tabs,.subtabs,.tabs,
.health-tabs,.money-tabs{
  display:flex!important;
  flex-wrap:wrap!important;
  gap:8px!important;
  margin:0 0 18px!important;
  padding:0!important;
}
.health-tab,.money-tab,.cook-tab,.clean-tab,.clothing-tab,.life-tab,.pet-tab,
.wash-tab,.subtab,.tab,
.health-tabs button,.money-tabs button,.cook-tabs button,.clean-tabs button,
.clothing-tabs button,.life-tabs button,.pet-tabs button{
  min-height:42px!important;
  padding:9px 14px!important;
  border:1px solid var(--ui-line)!important;
  border-radius:12px!important;
  background:var(--ui-surface)!important;
  color:var(--ui-ink)!important;
  font:inherit!important;
  font-size:14px!important;
  line-height:1.2!important;
  font-weight:650!important;
  cursor:pointer!important;
  box-shadow:none!important;
  transition:background .16s ease,border-color .16s ease,color .16s ease,transform .16s ease!important;
}
.health-tab:hover,.money-tab:hover,.cook-tab:hover,.clean-tab:hover,.clothing-tab:hover,
.life-tab:hover,.pet-tab:hover,.wash-tab:hover,.subtab:hover,.tab:hover{
  border-color:#c9c4ff!important;
  background:#faf9ff!important;
}
.health-tab.active,.money-tab.active,.cook-tab.active,.clean-tab.active,.clothing-tab.active,
.life-tab.active,.pet-tab.active,.wash-tab.active,.subtab.active,.tab.active,
.health-tabs button.active,.money-tabs button.active,.cook-tabs button.active,
.clean-tabs button.active,.clothing-tabs button.active,.life-tabs button.active,
.pet-tabs button.active{
  background:var(--ui-accent)!important;
  border-color:var(--ui-accent)!important;
  color:#fff!important;
}

/* buttons and fields */
button,input,select,textarea{font-family:inherit!important}
button:not(.knob){border-radius:12px!important}
input,select,textarea{
  border:1px solid var(--ui-line)!important;
  background:#fff!important;
  color:var(--ui-ink)!important;
  border-radius:12px!important;
  min-height:42px!important;
  padding:9px 12px!important;
}
input:focus,select:focus,textarea:focus,button:focus-visible{
  outline:3px solid rgba(91,76,240,.14)!important;
  outline-offset:2px!important;
}

/* consistent spacing inside cards */
.cook-card > * + *,.clean-card > * + *,.clothing-card > * + *,
.money-card > * + *,.health-card > * + *,.health-tool-card > * + *,
.life-card > * + *,.pet-card > * + *,.wash-pane-content > * + *,
.section > * + *{margin-top:12px}
.card-grid,.grid,.info-grid,.tool-grid,.health-grid,.money-grid,.life-grid,.pet-grid{gap:16px!important}

/* result / notice / source blocks */
.notice,.callout,.result-box,.sim-result,.budget-tone,.mood-result,
.source-box,.health-note,.warning,.tip,.info-box{
  border-radius:14px!important;
  padding:14px 16px!important;
  margin:14px 0 0!important;
  border:1px solid var(--ui-line)!important;
  line-height:1.58!important;
}

/* headings followed immediately by content: controlled gap */
.cook-card > h2 + p,.clean-card > h2 + p,.clothing-card > h2 + p,
.money-card > h2 + p,.health-card > h2 + p,.health-tool-card > h2 + p,
.life-card > h2 + p,.pet-card > h2 + p,.section > h2 + p,
.cook-card > h3 + p,.clean-card > h3 + p,.clothing-card > h3 + p,
.money-card > h3 + p,.health-card > h3 + p,.health-tool-card > h3 + p,
.life-card > h3 + p,.pet-card > h3 + p,.section > h3 + p{
  padding-top:2px!important;
}

/* kill one-off bold/ultra-light heading treatments */
.cook-card h2,.clean-card h2,.clothing-card h2,.money-card h2,
.health-card h2,.health-tool-card h2,.life-card h2,.pet-card h2,
.wash-pane-content h2,.section h2{font-weight:750!important}
.cook-card h3,.clean-card h3,.clothing-card h3,.money-card h3,
.health-card h3,.health-tool-card h3,.life-card h3,.pet-card h3,
.wash-pane-content h3,.section h3{font-weight:700!important}

/* tables and compact facts */
table{width:100%!important;border-collapse:separate!important;border-spacing:0!important;overflow:hidden!important;border:1px solid var(--ui-line)!important;border-radius:14px!important;background:#fff!important}
th,td{padding:11px 12px!important;border-bottom:1px solid var(--ui-line)!important;text-align:left!important;vertical-align:top!important;line-height:1.5!important}
th{font-weight:700!important;background:#fafaff!important}
tr:last-child td{border-bottom:0!important}

/* media / illustrations */
img,svg{max-width:100%}
.figure,.illustration,.mini-illustration,.image-card{border-radius:16px!important;overflow:hidden!important}

/* keep interactive washing-machine controls visually intentional */
.machine .knob{cursor:grab!important;z-index:20!important;pointer-events:auto!important}
.machine .knob:active{cursor:grabbing!important}

/* responsive consistency */
@media(max-width:800px){
  .app{padding:16px!important}
  h1{font-size:38px!important}
  h2{font-size:20px!important}
  h3{font-size:16px!important}
  .cook-card,.clean-card,.clothing-card,.money-card,.health-card,.health-tool-card,.life-card,.pet-card,.wash-pane-content,.section{padding:16px!important}
  .health-tabs,.money-tabs,.cook-tabs,.clean-tabs,.clothing-tabs,.life-tabs,.pet-tabs,.wash-tabs,.subtabs,.tabs{gap:6px!important}
  .health-tab,.money-tab,.cook-tab,.clean-tab,.clothing-tab,.life-tab,.pet-tab,.wash-tab,.subtab,.tab{padding:9px 12px!important}
}
</style>

<style id="final-global-polish">
/* Final global polish: one visual language across the prototype */
:root{
  --ui-ink:#22251f;
  --ui-muted:#666a61;
  --ui-accent:#5e56d8;
  --ui-surface:#fffdfa;
  --ui-line:#e3e0d8;
}

/* Readable dark panels */
.display{color:#f4f7ff!important;}
.display .eyebrow{color:#b9bec8!important;}
.display .display-title{color:#ffffff!important;}
.display .display-row,.display .display-row *{color:#d7dbe3!important;}
.display .display-value{color:#ffffff!important;}

/* Home note: larger, calmer statement */
.home-bottom-note{font-size:18px;line-height:1.6;padding:24px 0 8px;color:#575c54;}
.home-bottom-note strong{display:block;color:#22251f;font-size:28px;line-height:1.18;letter-spacing:-.02em;margin-bottom:8px;}

/* Finance safety rule: bold lead only, body uses the common text color */
.finance-rule{color:var(--ui-ink)!important;}
.finance-rule b{color:var(--ui-ink)!important;}

/* Keep larger sections visually compact like the rest of the app */
.health-pane.active,.life-pane.active,.pet-pane.active{max-width:1080px;margin:0 auto;}

/* Stable desktop layout for the washer */
.control-zone{grid-template-columns:minmax(0,1fr) 360px;gap:28px;align-items:center;}
.knob-stage{width:340px;height:340px;}
.knob-stage .mode-dot{width:86px;}

/* Consistent typography inside the larger section cards */
.health-card h2,.money-card h2,.life-card h2,.pet-card h2,.clean-card h2,.cook-card h2,.clothing-card h2{
  font-weight:700;
}
.health-card h3,.money-card h3,.life-card h3,.pet-card h3,.clean-card h3,.cook-card h3,.clothing-card h3{
  font-weight:700;
}

@media (max-width:1100px){
  .control-zone{grid-template-columns:minmax(0,1fr) 320px;gap:18px;}
  .knob-stage{width:310px;height:310px;}
}
@media (max-width:860px){
  .control-zone{grid-template-columns:1fr;}
  .knob-wrap{justify-self:center;}
}
@media (max-width:600px){
  .home-bottom-note{font-size:16px;padding-top:20px;}
  .home-bottom-note strong{font-size:23px;}
  .knob-stage{width:290px;height:290px;}
}
</style>

<style id="section-width-polish">
.view-health>.health-banner,.view-health>.health-tabs,.view-life>.life-quick,.view-life>.life-tabs,.view-pets>.pet-tabs{max-width:1080px;margin-left:auto;margin-right:auto;}
</style>

<style id="final-polish">
.health-banner-large{font-size:18px!important;line-height:1.55!important;padding:18px 20px!important}
.scam-flags{display:grid;gap:12px}
.scam-flag{display:flex;gap:12px;align-items:flex-start;padding:14px 16px;border:1px solid var(--line);border-radius:14px;background:#fff}
.scam-flag svg{width:28px;height:28px;min-width:28px;stroke:#d64545;fill:#ffe4e4;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.scam-flag span{font-size:15px;line-height:1.55;color:var(--ink)}
.mini-list{display:grid;gap:10px;margin-top:14px}
.mini-list>div{padding:12px 14px;border:1px solid var(--line);border-radius:12px;background:#fff}
.mini-list b{display:block;margin-bottom:5px}
.mini-list span{color:var(--muted);line-height:1.55}
.machine-top .brand,.machine-top .model{display:none}
</style>

<style id="final-eyebrow-fix">
/* Final section-number style: same typography and one purple color everywhere */
.view > .top .eyebrow,
.view .eyebrow {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
  font-size: 14px !important;
  line-height: 1.25 !important;
  font-weight: 700 !important;
  letter-spacing: .08em !important;
  text-transform: uppercase !important;
  color: #635BFF !important;
  margin: 0 0 10px !important;
}
</style>

<style id="final-page-consistency-fix">
/* Final page-width and heading consistency */
#view-health,
#view-life,
#view-pets {
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
}
/* Match the compact width used by the washing section. */
#view-washing,
#view-cooking,
#view-cleaning,
#view-clothing,
#view-money,
#view-health,
#view-life,
#view-pets {
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
}

/* From «Одежда и уход» onward, all page headings use exactly the same scale as «Стирка». */
#view-clothing .home-hero h1,
#view-money .home-hero h1,
#view-health .home-hero h1,
#view-life .home-hero h1,
#view-pets .home-hero h1 {
  font-family: inherit !important;
  font-size: clamp(34px, 5vw, 68px) !important;
  line-height: .98 !important;
  font-weight: 800 !important;
  letter-spacing: -.045em !important;
  color: var(--ink) !important;
  margin: 8px 0 12px !important;
}

#view-clothing .home-hero .section-label,
#view-money .home-hero .section-label,
#view-health .home-hero .section-label,
#view-life .home-hero .section-label,
#view-pets .home-hero .section-label {
  font-family: inherit !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  line-height: 1.25 !important;
  letter-spacing: .08em !important;
  color: #635BFF !important;
}

#view-clothing .home-hero .lead,
#view-money .home-hero .lead,
#view-health .home-hero .lead,
#view-life .home-hero .lead,
#view-pets .home-hero .lead {
  font-family: inherit !important;
  font-size: 17px !important;
  line-height: 1.5 !important;
  color: var(--muted) !important;
  max-width: 700px !important;
}
<style id="plants-consistency">
#view-plants{max-width:1080px;margin:0 auto}
#view-plants .home-hero{padding-top:8px}
#view-plants .life-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 22px}
#view-plants .plant-pane{display:none}
#view-plants .plant-pane.active{display:block}
#view-plants .plant-diagram{background:#f6f8fb;border:1px solid var(--line);border-radius:18px;padding:16px;margin-bottom:14px}
#view-plants .plant-diagram svg{width:100%;height:auto;display:block}
@media(max-width:700px){#view-plants .life-tabs{overflow-x:auto;flex-wrap:nowrap;padding-bottom:4px}#view-plants .life-tabs .life-tab{white-space:nowrap}}
</style>

<style id="standalone-washing-page">
  body > *:not(.app) { display: none !important; }
  .app > *:not(#view-washing) { display: none !important; }
  #view-washing {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    max-width: 1080px !important;
    width: min(1080px, calc(100% - 48px)) !important;
    margin: 0 auto !important;
  }
</style>
<style>.choices.multi .choice.selected{background:#635BFF;border-color:#635BFF;color:#fff}.choices.multi{margin-bottom:4px}.choices.multi:after{content:"Можно выбрать несколько";display:block;width:100%;font-size:12px;color:var(--muted);margin-top:2px}</style>
<style id="drawer-dnd-css">
.drawer-game{margin-top:24px;padding:24px;border:1px solid #e5e2ea;border-radius:22px;background:#fff}
.drawer-game h3{margin:0 0 8px;font-size:22px}
.drawer-game .muted{margin:0 0 18px;color:#666;line-height:1.55}
.drawer-layout{display:grid;grid-template-columns:1fr 1.1fr;gap:20px;align-items:stretch}
.products-pool,.drawer-board{border:1px solid #e5e2ea;border-radius:18px;padding:18px;background:#faf9fc}
.products-pool{display:flex;flex-wrap:wrap;gap:10px;align-content:flex-start}
.drag-product{border:1px solid #d9d5e0;background:#fff;border-radius:14px;padding:11px 13px;cursor:grab;font-weight:600;color:#24222a}
.drag-product.selected{outline:2px solid #635BFF;outline-offset:2px}
.drawer-slots{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.drawer-slot{min-height:110px;border:2px dashed #c9c4d2;border-radius:15px;background:#fff;padding:12px;text-align:center;display:flex;flex-direction:column;justify-content:center;gap:7px}
.drawer-slot strong{font-size:20px;color:#635BFF}
.drawer-slot span{font-size:13px;color:#666}
.drawer-slot.over{border-color:#635BFF;background:#f3f1ff}
.drawer-result{margin-top:16px;padding:14px 16px;border-radius:14px;background:#f4f2f8;line-height:1.5}
.drawer-result.good{background:#eef8f0}
.drawer-result.bad{background:#fff1f0}
@media(max-width:760px){.drawer-layout{grid-template-columns:1fr}.drawer-slots{grid-template-columns:1fr 1fr}.drawer-slot:last-child{grid-column:1/-1}}
</style>


<style id="washer-trainer-css">
.washer-trainer{margin-top:24px;padding:24px;border:1px solid #e5e2ea;border-radius:22px;background:#fff}
.washer-trainer h3{margin:0 0 7px;font-size:22px}
.washer-trainer .muted{margin:0 0 18px;color:#666;line-height:1.55}
.washer-layout{display:grid;grid-template-columns:minmax(320px,1.1fr) minmax(280px,.9fr);gap:20px}
.washer-machine{border:1px solid #ddd8e3;border-radius:22px;background:#f6f5f8;padding:18px;position:relative}
.washer-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.washer-brand{font-weight:800;letter-spacing:.08em}
.washer-drawer{background:#e8e6ec;border-radius:12px;padding:10px 12px;cursor:pointer;border:1px solid #d0ccd6}
.washer-drawer.open{background:#f3f1ff;outline:2px solid #635BFF}
.washer-panel{display:flex;align-items:center;gap:14px;padding:12px;background:#fff;border-radius:15px;border:1px solid #e2dee7}
.washer-knob{width:72px;height:72px;border-radius:50%;border:1px solid #c9c4ce;background:linear-gradient(145deg,#fff,#ddd9e2);position:relative}
.washer-knob:after{content:"";position:absolute;width:3px;height:25px;background:#635BFF;left:50%;top:8px;transform:translateX(-50%);border-radius:3px}
.washer-door{margin:18px auto 8px;width:min(280px,80%);aspect-ratio:1;border-radius:50%;background:#dddbe0;border:14px solid #b9b5bd;box-shadow:inset 0 0 0 8px #eee;display:flex;align-items:center;justify-content:center;cursor:pointer}
.washer-door.open{background:#f8f7fa}
.washer-glass{width:78%;height:78%;border-radius:50%;background:#22252a;box-shadow:inset 0 0 30px #111;position:relative;overflow:hidden}
.washer-glass:after{content:"";position:absolute;inset:12%;border-radius:50%;border:2px solid rgba(255,255,255,.18)}
.drum-drop{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#aaa;font-size:13px;text-align:center;padding:20px}
.washer-drawer-panel{display:none;position:absolute;z-index:5;top:76px;right:18px;width:min(360px,calc(100% - 36px));background:#fff;border:1px solid #d8d3dc;border-radius:16px;padding:14px;box-shadow:0 15px 35px rgba(20,15,30,.12)}
.washer-drawer-panel.open{display:block}
.drawer-slots-new{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.drawer-slot-new{min-height:95px;border:2px dashed #c9c4d2;border-radius:13px;background:#faf9fc;padding:8px;text-align:center;cursor:pointer}
.drawer-slot-new strong{display:block;color:#635BFF;font-size:20px;margin-bottom:5px}
.drawer-slot-new span{font-size:12px;color:#666}
.washer-items{border:1px solid #e1dde5;border-radius:18px;padding:16px;background:#faf9fc}
.washer-items h4{margin:0 0 12px}
.washer-item{display:block;width:100%;text-align:left;border:1px solid #d8d3dd;background:#fff;border-radius:12px;padding:11px 12px;margin:8px 0;cursor:pointer;font-weight:600}
.washer-item.selected{outline:2px solid #635BFF;outline-offset:2px}
.washer-result{margin-top:14px;padding:14px;border-radius:13px;background:#f1eff5;line-height:1.5}
.washer-result.good{background:#edf8f0}.washer-result.bad{background:#fff1f0}
.washer-reset{margin-top:10px;border:0;background:none;text-decoration:underline;cursor:pointer;color:#555}
@media(max-width:760px){.washer-layout{grid-template-columns:1fr}.washer-drawer-panel{position:relative;top:auto;right:auto;width:auto;margin-top:12px}}
</style>


<style id="washer-trainer-v8-css">
.washer-trainer .washer-brand{font-size:16px}
.washer-trainer .washer-drawer{font-size:14px}
.washer-trainer .drawer-slot-new span{display:none}
.washer-trainer .drawer-slot-new{min-height:72px;display:flex;align-items:center;justify-content:center}
.washer-trainer .drawer-slot-new strong{font-size:25px;margin:0}
.washer-trainer .washer-door{cursor:default}
.washer-trainer .washer-door.open{background:#dddbe0}
.washer-trainer .drum-drop{
  color:transparent;
}
.washer-trainer .drum-drop::before{
  content:"";
  display:block;
  width:62%;
  height:48%;
  margin:auto;
  border-radius:20% 24% 18% 22%;
  background:
    radial-gradient(circle at 25% 35%, #d9d3cb 0 13%, transparent 14%),
    radial-gradient(circle at 68% 42%, #777 0 12%, transparent 13%),
    radial-gradient(circle at 48% 70%, #b8aaa0 0 14%, transparent 15%),
    linear-gradient(18deg,#777 0 20%,#c7c1bb 21% 42%,#8e8985 43% 60%,#d6d0ca 61%);
  transform:rotate(-5deg);
  box-shadow:0 8px 18px rgba(0,0,0,.25);
}
.washer-trainer .washer-result{margin-top:14px}
</style>


<style id="washer-blue-active">
.washer-trainer .machine-active{
  outline:3px solid #58b7e8 !important;
  outline-offset:3px;
}
.washer-trainer .drawer-slot-new.machine-active{
  background:#eef9ff !important;
}
</style>




<style id="washer-trainer-no-machine-highlight">
.washer-trainer .washer-machine button,
.washer-trainer .washer-machine button:focus,
.washer-trainer .washer-machine button:focus-visible,
.washer-trainer .washer-machine button:active {
  outline: none !important;
  box-shadow: none !important;
}
</style>

</head>
<body>
<div class="app">
<nav class="nav" id="nav">
<button class="active" data-view="home">Главная</button>
<button data-view="washing">Стирка</button>
<button data-view="cooking">Готовка</button>
<button data-view="cleaning">Уборка</button>
<button data-view="clothing">Одежда и уход</button>
<button data-view="money">Счета и бюджет</button>
<button data-view="health">Здоровье</button>
<button data-view="life">Жильё и быт</button>
<button data-view="pets">Домашние животные</button>
<button data-view="plants">Растения</button>
</nav>
<section class="view active" id="view-home">
<div class="home-hero-v2">
<div class="hero-kicker">НЕ ЗВОНИ МАМЕ</div>
<div class="hero-grid">
<div>
<h1>Сначала разберёмся.<br/><span>Потом сделаем.</span></h1>
<p class="hero-copy">Путеводитель по взрослой жизни для тех случаев, когда хочется не советов «из воздуха», а нормального ответа на вопрос: что делать прямо сейчас.</p>
<div class="hero-actions">
<button class="hero-primary" data-go="washing">Начать с бытовой задачи</button>
<button class="hero-secondary" data-go="money">Разобраться с деньгами</button>
</div>
</div>
<div class="hero-note-v2">
<div class="hero-note-label">КАК МЫ ЗДЕСЬ РАБОТАЕМ</div>
<strong>Показываем, как это устроено.</strong>
<p class="hero-white" style="color:#fff !important;">Поворачиваешь ручку, выбираешь продукт, разбираешь сифон, считаешь месяц — и понимаешь не только <i style="color:#fff !important;">что</i> делать, но и <i style="color:#fff !important;">почему</i>.</p>
</div>
</div>
</div>
<section class="home-problem">
<div>
<div class="section-label">Если есть конкретная проблема</div>
<h2>Что случилось?</h2>
<p>Не обязательно знать, в какой раздел идти. Выбери ситуацию — дальше разберём по шагам.</p>
</div>
<div class="problem-chips">
<button data-go="washing">Не знаю, как стирать</button>
<button data-go="cooking">Не знаю, что приготовить</button>
<button data-go="cleaning">Не знаю, чем это отмыть</button>
<button data-go="money">Денег опять не хватает</button>
<button data-go="health">Плохо себя чувствую</button>
<button data-go="life">Что-то сломалось дома</button>
<button data-go="pets">Питомец сделал что-то странное</button>
</div>
</section>
<div class="home-section-head">
<div>
<div class="section-label">Все разделы</div>
<h2>Выбирай, что хочется освоить.</h2>
</div>
<div class="home-section-caption">Каждый раздел — это справочник + тренажёр.</div>
</div>
<div class="home-grid-v2">
<article class="home-card-v2" data-go="washing"><div class="home-icon"><svg aria-hidden="true" viewbox="0 0 64 64"><circle cx="32" cy="35" r="20"></circle><circle cx="32" cy="35" r="11"></circle><path d="M20 18h24M24 12h4M36 12h4"></path></svg></div><div><h3>Стирка</h3><p>Повернуть ручку, понять ярлык, выбрать средство и не устроить розово-серый эксперимент.</p></div><button data-go="washing">Открыть</button></article>
<article class="home-card-v2" data-go="cooking"><div class="home-icon"><svg aria-hidden="true" viewbox="0 0 64 64"><rect height="36" rx="6" width="40" x="12" y="14"></rect><circle cx="23" cy="27" r="5"></circle><circle cx="41" cy="27" r="5"></circle><path d="M22 42h20M28 35h8"></path></svg></div><div><h3>Готовка</h3><p>База кухни: плита, продукты, заморозка, простые рецепты и нормальный поход за едой.</p></div><button data-go="cooking">Открыть</button></article>
<article class="home-card-v2" data-go="cleaning"><div class="home-icon"><svg aria-hidden="true" viewbox="0 0 64 64"><path d="M19 14l8 8-8 8M39 14l8 8-8 8"></path><path d="M20 42h24M24 34l-4 8M40 34l4 8"></path><path d="M16 10h32"></path></svg></div><div><h3>Уборка</h3><p>Что и чем мыть, как часто это делать и как не испортить поверхность в попытке навести порядок.</p></div><button data-go="cleaning">Открыть</button></article>
<article class="home-card-v2" data-go="clothing"><div class="home-icon"><svg aria-hidden="true" viewbox="0 0 64 64"><path d="M24 12l8 7 8-7 10 7 5 22H9l5-22 10-7Z"></path><path d="M32 20v21"></path></svg></div><div><h3>Одежда и уход</h3><p>Глажка, отпаривание, сушка, хранение и мелкий ремонт без швейного подвига.</p></div><button data-go="clothing">Открыть</button></article>
<article class="home-card-v2" data-go="money"><div class="home-icon"><svg aria-hidden="true" viewbox="0 0 64 64"><rect height="28" rx="5" width="40" x="12" y="18"></rect><circle cx="32" cy="32" r="6"></circle><path d="M18 25h5M41 39h5"></path></svg></div><div><h3>Счета и бюджет</h3><p>Коммуналка, налоги, вклады, подписки и бюджет, который не стыдит тебя за жизнь.</p></div><button data-go="money">Открыть</button></article>
<article class="home-card-v2" data-go="health"><div class="home-icon"><svg aria-hidden="true" viewbox="0 0 64 64"><rect height="38" rx="8" width="38" x="13" y="13"></rect><path d="M32 22v20M22 32h20"></path></svg></div><div><h3>Здоровье</h3><p>Что можно сделать дома, когда записываться к врачу и когда не надо ждать вообще.</p></div><button data-go="health">Открыть</button></article>
<article class="home-card-v2" data-go="life"><div class="home-icon"><svg aria-hidden="true" viewbox="0 0 64 64"><path d="M13 29 32 14l19 15"></path><path d="M18 27v24h28V27M27 51V37h10v14"></path></svg></div><div><h3>Жильё и быт</h3><p>Краны, щиток, засоры, аварии, мелкий ремонт и тот самый вопрос «а где это вообще находится?».</p></div><button data-go="life">Открыть</button></article>
<article class="home-card-v2" data-go="pets"><div class="home-icon"><svg aria-hidden="true" viewbox="0 0 64 64"><circle cx="22" cy="23" r="6"></circle><circle cx="42" cy="23" r="6"></circle><circle cx="17" cy="35" r="5"></circle><circle cx="47" cy="35" r="5"></circle><path d="M32 30c-8 0-15 6-15 13 0 6 6 9 15 9s15-3 15-9c0-7-7-13-15-13Z"></path></svg></div><div><h3>Домашние животные</h3><p>Корм, уход, безопасность, ветеринар и бытовые вопросы про кошек, собак и других питомцев.</p></div><button data-go="pets">Открыть</button></article>
<article class="home-card-v2" data-go="plants"><div class="home-icon"><svg aria-hidden="true" viewbox="0 0 64 64"><path d="M31 50V28c0-11 7-18 18-18 0 12-7 20-18 20" fill="none"></path><path d="M31 36C20 35 13 28 13 16c11 0 18 7 18 18" fill="none"></path><path d="M22 50h20" fill="none"></path><path d="M24 50c0-7 16-7 16 0" fill="none"></path></svg></div><div><h3>Растения</h3><p>Свет, полив, грунт, пересадка и спасение растения, которое внезапно выглядит грустно.</p></div><button data-go="plants">Открыть</button></article>
</div>
<div class="home-bottom-note">
<strong>Не обязательно уметь всё сразу.</strong> Нормальная взрослая жизнь — это не когда ты знаешь все ответы. Это когда ты понимаешь, где их искать и что делать первым шагом.
    </div>
</section>
<section class="view" id="view-washing">
<header class="top">
<div>
<div class="section-label">01 · Стирка</div>
<h1>Сначала разберёмся.<br/>Потом нажмём «Старт».</h1>
<div class="lead">Интерактивная памятка, которая объясняет стиральную машину человеческим языком. Поворачивай ручку, пробуй кнопки и смотри, что меняется.</div>
</div>

</header>
<div class="wash-tabs" id="washTabs">
<button class="wash-tab active" data-wash="machine">Машина и режимы</button>
<button class="wash-tab" data-wash="detergents">Средства и лоток</button>

<button class="wash-tab" data-wash="labels">Ярлыки одежды</button>
<button class="wash-tab" data-wash="hand">Ручная стирка</button>
<button class="wash-tab" data-wash="stains">Пятна</button>
</div>
<main class="layout wash-layout">
<section class="machine wash-machine-pane" data-wash-pane="machine">
<div class="machine-top"></div>
<div class="control-zone">
<div class="display">
<div><div class="eyebrow" style="color:#aaa">текущая программа</div><div class="display-title" id="displayTitle">Хлопок</div></div>
<div class="display-row"><div><span id="tempValue">40</span> °C</div><div><span id="spinValue">1000</span> об/мин</div><div><span id="timeValue">1:58</span></div></div>
</div>
<div class="knob-wrap">
<div class="knob-stage">
<div aria-label="Ручка выбора режима" class="knob" id="knob"></div>
<div aria-label="Режимы стиральной машины" class="modes" id="modeDots"></div>
</div>
<div class="knob-label">Крути за ручку. Значки находятся вокруг неё, как на реальной панели.</div>
</div>
</div>
<div class="options" id="options"></div>
<div class="source-note" style="margin-top:12px">Обозначения вокруг ручки — учебные векторные версии типичных символов программ. Для конкретной машины всегда ориентируйся на её инструкцию.</div>
<div class="section"><h2 id="whyTitle">Что означает «Хлопок»</h2><p id="whyText">Базовый режим для большинства футболок, полотенец, постельного белья и других прочных хлопковых вещей.</p></div>
<div class="section"><h2>Что положить внутрь</h2><p id="loadText">Футболки, полотенца, постельное бельё. Сортируй по цвету и учитывай ярлыки.</p></div>
<div class="section"><h2>Главная мысль</h2><p>Панель не надо запоминать. Всегда ищи четыре вещи: программа, температура, отжим и дополнительные опции.</p></div>

</section>
<aside class="side">
<section class="panel machine-only-selection"><h3>Сейчас выбрано</h3><div class="facts"><div class="fact"><b>Температура</b><span id="factTemp">40 °C</span></div><div class="fact"><b>Отжим</b><span id="factSpin">1000 об/мин</span></div><div class="fact"><b>Время</b><span id="factTime">1:58</span></div><div class="fact"><b>Загрузка</b><span id="factLoad">до 7 кг</span></div></div></section>
<section class="panel wash-pane-content active" data-wash-pane="machine"><h3>Что мне включить?</h3>
<div class="q">Что стираем?</div><p class="hint">Можно выбрать несколько вещей — представь, что это одна корзина белья.</p><div class="choices multi" data-key="item"><button class="choice" data-value="tee">Футболки</button><button class="choice" data-value="shirt">Рубашки и блузки</button><button class="choice" data-value="underwear">Нижнее бельё</button><button class="choice" data-value="sports">Спортивная одежда</button><button class="choice" data-value="socks">Носки</button><button class="choice" data-value="towel">Полотенца</button><button class="choice" data-value="jeans">Джинсы</button><button class="choice" data-value="sheets">Постельное бельё</button><button class="choice" data-value="home">Домашняя одежда</button></div>
<div class="q">Из какого материала?</div><p class="hint">Если в корзине несколько материалов, выбери все. Для конкретной вещи всегда сверяйся с ярлыком.</p><div class="choices multi" data-key="material"><button class="choice" data-value="cotton">Хлопок</button><button class="choice" data-value="polyester">Полиэстер / синтетика</button><button class="choice" data-value="viscose">Вискоза</button><button class="choice" data-value="wool">Шерсть</button><button class="choice" data-value="mixed">Смесовая ткань</button></div>
<div class="q">Какие цвета?</div><p class="hint">Можно выбрать несколько. Приложение проверит, можно ли собрать их в одну загрузку.</p><div class="choices multi" data-key="color"><button class="choice" data-value="white">Белое</button><button class="choice" data-value="light">Светлое</button><button class="choice" data-value="dark">Тёмное</button><button class="choice" data-value="black">Чёрное</button><button class="choice" data-value="mixed">Разноцветное</button></div><p class="hint wash-color-note"><strong>Белое</strong> — преимущественно белые вещи. <strong>Светлое</strong> — бежевое, серое, кремовое и пастельное. <strong>Тёмное</strong> — насыщенные тёмные оттенки. <strong>Чёрное</strong> — именно чёрные вещи. <strong>Разноцветное</strong> — вещь с несколькими заметными цветами; если она новая и яркая, относись к ней осторожнее.</p>
<div class="q">Насколько всё грязное?</div><div class="choices" data-key="dirty"><button class="choice" data-value="no">Обычная стирка</button><button class="choice" data-value="yes">Есть сильные загрязнения</button></div>
<div class="result" id="quizResult"><strong id="quizTitle"></strong><div id="quizText"></div></div>
</section>
<section class="panel wash-pane-content" data-wash-pane="detergents"><h3>Стиральные средства — разберём по полочкам</h3><div class="det-grid">
<div class="det-card"><span class="tag">Основа</span><h4>Порошок</h4><p>Удобен для обычной стирки и часто хорошо работает на более горячих программах. Дозировка зависит от загрузки, жёсткости воды и загрязнения.</p></div>
<div class="det-card"><span class="tag">Основа</span><h4>Гель</h4><p>Жидкое средство быстро распределяется и удобно для повседневной одежды и более низких температур.</p></div>
<div class="det-card"><span class="tag">Дозировка</span><h4>Капсулы</h4><p>Количество уже отмерено. Нельзя делить капсулу или бросать её «на глаз» сверх инструкции.</p></div>
<div class="det-card"><span class="tag">Химия</span><h4>Энзимы</h4><p>Белковые, жировые и другие загрязнения могут лучше удаляться за счёт ферментов. Эффективность зависит от состава и температуры.</p></div>
<div class="det-card"><span class="tag">Отбеливание</span><h4>Кислородный отбеливатель</h4><p>Отдельная добавка для некоторых белых и цветостойких вещей. Сначала сверяйся с ярлыком и инструкцией средства.</p></div>
<div class="det-card"><span class="tag">Не моет</span><h4>Кондиционер</h4><p>Смягчает ткань и придаёт запах, но не заменяет моющее средство. Для полотенец его используют осторожно: он может снижать впитываемость.</p></div>
</div><div class="notice"><b>Главное:</b> сильнее дозировка не значит «чище». Избыток средства может хуже выполаскиваться и оставлять остатки на ткани или в машине.</div></section>
<section class="panel wash-pane-content" data-wash-pane="labels"><h3>Реальные значки на ярлыках</h3><p class="micro" style="margin:-4px 0 12px">Ниже — учебные векторные версии стандартных знаков ухода за текстилем. Система включает стирку, отбеливание, сушку, глажение и профессиональный уход.</p><div class="symbol-grid">
<div class="symbol"><div class="symbol-icon"><svg viewbox="0 0 48 48"><path d="M6 13h36l-3 24H9L6 13Z"></path><path d="M9 20h30"></path><text fill="#172033" font-size="12" stroke="none" text-anchor="middle" x="24" y="34">40</text></svg></div><b>Стирка</b><small>Число в тазу — максимальная температура. Одна или две линии снизу означают более мягкий процесс.</small></div>
<div class="symbol"><div class="symbol-icon"><svg viewbox="0 0 48 48"><path d="M24 7 40 37H8L24 7Z"></path></svg></div><b>Отбеливание</b><small>Треугольник — отбеливание разрешено; диагональные полосы — только кислородное/без хлора; крест — нельзя.</small></div>
<div class="symbol"><div class="symbol-icon"><svg viewbox="0 0 48 48"><rect height="34" width="34" x="7" y="7"></rect><circle cx="24" cy="24" r="9"></circle><circle cx="20" cy="20" fill="#172033" r="1.7" stroke="none"></circle></svg></div><b>Сушка в барабане</b><small>Квадрат с кругом — барабанная сушка. Точки внутри показывают допустимый уровень нагрева.</small></div>
<div class="symbol"><div class="symbol-icon"><svg viewbox="0 0 48 48"><path d="M17 36h17c3 0 5-2 5-5V19c0-3-2-5-5-5h-8l-7-6-4 4 6 7H7v8h10v9Z"></path><path d="M25 18v13"></path></svg></div><b>Глажение</b><small>Одна, две или три точки — низкая, средняя или высокая температура. Перечёркнутый утюг — не гладить.</small></div>
<div class="symbol"><div class="symbol-icon"><svg viewbox="0 0 48 48"><circle cx="24" cy="24" r="16"></circle><text fill="#172033" font-size="14" stroke="none" text-anchor="middle" x="24" y="29">P</text></svg></div><b>Профессиональный уход</b><small>Круг с буквой — профессиональный уход. Подчёркивания означают более щадящий процесс.</small></div>
<div class="symbol"><div class="symbol-icon"><svg viewbox="0 0 48 48"><path d="M6 14h36l-3 23H9L6 14Z"></path><path d="M14 31c3-4 6-4 9 0s6 4 10 0"></path></svg></div><b>Ручная стирка</b><small>Таз с рукой означает ручную стирку; конкретные ограничения по температуре и средству смотри на ярлыке.</small></div>
<div class="symbol"><div class="symbol-icon"><svg viewbox="0 0 48 48"><path d="M6 13h36l-3 24H9L6 13Z"></path><path d="M10 9 38 37M38 9 10 37"></path></svg></div><b>Не стирать</b><small>Перечёркнутый таз означает, что домашняя стирка запрещена; обычно вещь требует другого способа ухода.</small></div>
</div><div class="callout"><b>Как читать:</b> форма знака говорит о виде ухода, цифры и точки — о максимальной интенсивности, полосы — о более щадящем процессе.</div><div class="source-note">Основа: <a href="https://www.iso.org/standard/74401.html" rel="noreferrer" target="_blank">ISO 3758:2023</a> и материалы <a href="https://www.ginetex.net/article/home/care-labelling" rel="noreferrer" target="_blank">GINETEX</a>.</div></section>
<section class="panel wash-pane-content" data-wash-pane="stains"><h3>Пятна: сначала спасти, потом стирать</h3><div class="stain-grid">
<div class="stain-card"><div class="stain-meta">Кровь</div><h4>Холодная вода</h4><p>Не начинай с горячей воды: тепло может закрепить белки пятна.</p><ol><li>Промой изнанку холодной водой.</li><li>Нанеси немного жидкого средства для стирки.</li><li>Оставь на несколько минут и аккуратно промой.</li><li>После этого стирай по ярлыку.</li></ol></div>
<div class="stain-card"><div class="stain-meta">Ягоды</div><h4>Сначала холодная вода</h4><p>Свежий след лучше обработать до того, как он высохнет.</p><ol><li>Промой пятно с изнанки.</li><li>Нанеси средство для стирки.</li><li>Проверь результат до сушки: тепло может закрепить остаток.</li></ol></div>
<div class="stain-card"><div class="stain-meta">Шариковая ручка</div><h4>Не тереть сразу всей силой</h4><p>Состав чернил разный. Сначала проверь способ на незаметном участке.</p><ol><li>Подложи чистую салфетку под пятно.</li><li>Точечно обработай подходящим средством для чернил/спиртовым составом, если он разрешён для ткани.</li><li>Промокай, а не растирай.</li><li>Затем прополощи и постирай.</li></ol></div>
<div class="stain-card"><div class="stain-meta">Шоколад</div><h4>Сначала убрать лишнее</h4><p>Не размазывай растаявший шоколад по ткани.</p><ol><li>Осторожно сними излишки тупой стороной.</li><li>Нанеси жидкое средство для стирки или немного средства для мытья посуды на стойкое жирное место, если ткань это допускает.</li><li>Промой и постирай по ярлыку.</li></ol></div>
<div class="stain-card"><div class="stain-meta">Жир / масло</div><h4>До стирки</h4><p>Жир легче разбить обезжиривающим средством, чем надеяться только на цикл машинки.</p><ol><li>Нанеси небольшое количество средства на пятно.</li><li>Оставь ненадолго по инструкции.</li><li>Промой и только потом отправляй в машинку.</li></ol></div>
<div class="stain-card"><div class="stain-meta">Кофе / чай</div><h4>Не суши сразу</h4><p>Свежий след обычно проще удалить, чем старый.</p><ol><li>Промой прохладной водой.</li><li>Нанеси средство для стирки.</li><li>Проверь пятно после стирки до сушки.</li></ol></div>
<div class="stain-card"><div class="stain-meta">Грязь / трава</div><h4>Сначала убрать сухую грязь</h4><p>Не надо превращать комок земли в мокрый комок ткани.</p><ol><li>Дай грязи подсохнуть, если она мокрая.</li><li>Стряхни или аккуратно счисти остатки.</li><li>Нанеси средство и постирай по ярлыку.</li></ol></div>
<div class="stain-card"><div class="stain-meta">Косметика</div><h4>Пятна с маслом и пигментом</h4><p>Тональный крем и помада могут потребовать предварительной обработки.</p><ol><li>Сними излишки салфеткой.</li><li>Точечно нанеси средство, подходящее ткани.</li><li>Не суши вещь, пока не убедишься, что след ушёл.</li></ol></div>
</div><div class="stain-warn"><b>Важно:</b> если вещь дорогая, деликатная, шерстяная или на ярлыке указана только химчистка, лучше не экспериментировать. И не смешивай разные пятновыводители между собой.</div></section>
<section class="panel wash-pane-content" data-wash-pane="detergents">
<h3>Куда что добавлять в стиральную машину</h3>
<p class="micro">У разных моделей лоток может выглядеть по-разному. Обычно обозначения такие: <b>I</b> — предварительная стирка, <b>II</b> — основная стирка, <b>цветок</b> — кондиционер. Капсулу обычно кладут <b>в пустой барабан перед бельём</b>, а не в отсек порошка, но инструкция конкретной капсулы и машины важнее общего правила.</p>
<div class="detergent-tray">
<button class="tray-slot" data-tray="pre"><span class="tray-mark">I</span><b>Предварительная</b><small>Порошок/средство для предварительной стирки — если программа это использует.</small></button>
<button class="tray-slot active" data-tray="main"><span class="tray-mark">II</span><b>Основная стирка</b><small>Сюда обычно попадает порошок или жидкое средство, если ваша машина предусматривает его заливку в лоток.</small></button>
<button class="tray-slot" data-tray="soft"><span class="tray-mark">✿</span><b>Кондиционер</b><small>В отдельный отсек до отметки MAX. Не заменяет моющее средство.</small></button>
<button class="tray-slot capsule" data-tray="capsule"><span class="tray-mark">●</span><b>Капсула</b><small>Обычно — непосредственно в барабан, на дно пустого барабана перед загрузкой белья. Не режь и не прокалывай.</small></button>
</div>

<section class="washer-trainer" aria-label="Тренажёр лотка и барабана стиральной машины">
  <h3>Куда положить средство?</h3>
  <p class="muted">Это упрощённая модель стиральной машины. Открой дверцу барабана или лоток, выбери средство и положи его туда, куда нужно.</p>

  <div class="washer-layout">
    <div class="washer-machine">
      <div class="washer-top">
        <span class="washer-brand">Стиралка</span>
        <button class="washer-drawer" id="washer-drawer-btn" type="button">Лоток</button>
      </div>

      <div class="washer-panel"><div class="washer-knob" aria-hidden="true"></div></div>

      <div class="washer-door open" id="washer-door" aria-label="Открытая дверца барабана">
        <span class="washer-glass">
          <span class="drum-drop" id="drum-drop"></span>
        </span>
      </div>

      <div class="washer-drawer-panel" id="washer-drawer-panel">
        <strong>Лоток для средств</strong>
        <p class="muted" style="font-size:13px;margin:5px 0 12px">Перетащи средство сюда или выбери его справа.</p>
        <div class="drawer-slots-new">
          <button class="drawer-slot-new" data-slot="prewash" type="button"><strong>I</strong><span></span></button>
          <button class="drawer-slot-new" data-slot="main" type="button"><strong>II</strong><span></span></button>
          <button class="drawer-slot-new" data-slot="softener" type="button"><strong>✿</strong><span></span></button>
        </div>
      </div>
    </div>

    <div class="washer-items">
      <h4>Что положить?</h4>
      <button class="washer-item" data-product="powder" type="button">Порошок</button>
      <button class="washer-item" data-product="liquid" type="button">Жидкое средство</button>
      <button class="washer-item" data-product="capsule" type="button">Капсула</button>
      <button class="washer-item" data-product="conditioner" type="button">Кондиционер</button>
      <button class="washer-item" data-product="prewash" type="button">Средство для предварительной стирки</button>
      <div class="washer-result" id="washer-result">Выбери средство, затем открой лоток или барабан.</div>
      <button class="washer-reset" id="washer-reset" type="button">Начать заново</button>
    </div>
  </div>
</section>

<div class="notice"><b>Не угадывай по цвету отсека.</b> Ищи символы I, II и цветок или загляни в инструкцию своей модели.</div>
</section>
<section class="panel wash-pane-content" data-wash-pane="hand">
<h3>Ручная стирка в тазу</h3>
<p>Надпись «ручная стирка» на ярлыке — это не «постирать в машинке на самом нежном режиме». Если ярлык показывает таз с рукой, безопаснее следовать именно ручному способу.</p>
<div class="handwash-grid">
<div class="handwash-step"><b>1. Вода</b><p>Набери прохладную или тёплую воду в пределах температуры, указанной на ярлыке.</p></div>
<div class="handwash-step"><b>2. Средство</b><p>Используй средство, подходящее для ручной стирки и материала. Не сыпь порошок горкой прямо на вещь.</p></div>
<div class="handwash-step"><b>3. Замачивание</b><p>Полностью намочи вещь и аккуратно перемещай её в воде. Агрессивно не выкручивай и не растирай ткань.</p></div>
<div class="handwash-step"><b>4. Полоскание</b><p>Смени воду несколько раз, пока она не перестанет быть мыльной. Для шерсти движения особенно мягкие.</p></div>
<div class="handwash-step"><b>5. Отжим</b><p>Не скручивай тонкую ткань. Лучше осторожно отжать воду или промокнуть вещь полотенцем.</p></div>
<div class="handwash-step"><b>6. Сушка</b><p>Ориентируйся на символ сушки. Шерсть и вязанные вещи часто сушат горизонтально, чтобы они не вытянулись.</p></div>
</div>
<div class="callout"><b>Главное:</b> ручная стирка — это меньше механической нагрузки, а не обязательно «меньше воды». Температура и способ сушки всё равно определяются ярлыком.</div>
</section>
</aside>
</main>
</section>
<section class="view" id="view-cooking">
<div class="cook-hero">
<div class="section-label">02 · Готовка</div>
<h1>Кухня без догадок.</h1>
<div class="lead">Не обязательно уметь готовить «по наитию». Здесь разберём бытовые правила, которые экономят время, продукты и нервы.</div>
</div>
<div class="cook-tabs" id="cookTabs">
<button class="cook-tab active" data-cook="boards">Разные доски</button>
<button class="cook-tab" data-cook="microwave">Микроволновка</button>
<button class="cook-tab" data-cook="measures">Граммы и миллилитры</button>
<button class="cook-tab" data-cook="neighbors">Продуктовое соседство</button>
<button class="cook-tab" data-cook="oils">Какое масло выбрать</button>
<button class="cook-tab" data-cook="recipes">Рецепты для чайников</button>
<button class="cook-tab" data-cook="shopping">Поход за продуктами</button>
<button class="cook-tab" data-cook="stove">Плита</button>
<button class="cook-tab" data-cook="fridge">Холодильник</button>
<button class="cook-tab" data-cook="freezing">Заморозка и разморозка</button>
</div>
<div class="cook-pane active" id="cook-boards">
<div class="cook-grid">
<section class="cook-card"><h2>Зачем разные доски?</h2><p>Смысл не в цвете самой доски, а в разделении сырого и готового. Сырая птица, мясо и рыба могут переносить микроорганизмы на поверхность и затем попасть на продукты, которые уже не будут готовиться. Отдельные доски снижают риск перекрёстного загрязнения.</p><div class="callout"><b>Простое правило:</b> одна доска для сырых продуктов животного происхождения, другая — для овощей, хлеба и готовой еды. После сырого мяса доску и нож нужно тщательно вымыть.</div></section>
<section class="cook-card"><h2>Как запомнить</h2><div class="board-grid">
<div class="info-tile"><div class="board-swatch green"></div><h3>Овощи и фрукты</h3><p>Для продуктов, которые можно есть сырыми: овощи, фрукты, зелень.</p></div>
<div class="info-tile"><div class="board-swatch red"></div><h3>Сырое мясо</h3><p>Отдельная поверхность для мяса и птицы. Соки не должны попадать на готовые продукты.</p></div>
<div class="info-tile"><div class="board-swatch blue"></div><h3>Рыба</h3><p>Отдельная доска удобна прежде всего для разделения сырого продукта и готовой еды.</p></div>
<div class="info-tile"><div class="board-swatch yellow"></div><h3>Хлеб и готовое</h3><p>На этой доске уже не режем сырую птицу или мясо без тщательной мойки.</p></div>
</div></section>
</div>
</div>
<div class="cook-pane" id="cook-microwave">
<div class="cook-grid">
<section class="cook-card"><h2>Что можно ставить в микроволновку?</h2><div class="microwave-list">
<div class="micro-box ok"><b>Стекло</b><p>Подходит большинство жаропрочных стеклянных контейнеров.</p></div>
<div class="micro-box ok"><b>Керамика</b><p>Подходит, если производитель не запрещает микроволновку и нет металлического декора.</p></div>
<div class="micro-box ok"><b>Бумага</b><p>Некоторая бумажная посуда и бумажные полотенца допустимы для разогрева, если они предназначены для этого.</p></div>
<div class="micro-box ok"><b>Пластик с маркировкой для СВЧ</b><p>Используй только контейнеры, на которых производитель прямо допускает микроволновку.</p></div>
</div><div class="source-note">Микроволны проходят через стекло, бумагу, керамику и некоторые пластики, но отдельные пластиковые изделия могут плавиться от температуры пищи. Ориентируйся на маркировку и инструкцию самой печи.</div></section>
<section class="cook-card"><h2>Что лучше не ставить?</h2><div class="microwave-list">
<div class="micro-box no"><b>Металл</b><p>Металлическая посуда и фольга могут отражать микроволны и вызывать искрение или неравномерный нагрев.</p></div>
<div class="micro-box no"><b>Посуда с металлическим декором</b><p>Золотая и серебряная кайма — это тоже металл.</p></div>
<div class="micro-box no"><b>Закрытые герметичные ёмкости</b><p>Пар должен иметь возможность выходить. Не разогревай закрытую банку или герметично запечатанный контейнер.</p></div>
<div class="micro-box no"><b>Пластик без понятной маркировки</b><p>Не стоит угадывать: лучше взять стекло или контейнер с явной маркировкой для СВЧ.</p></div>
</div></section>
</div>
</div>
<div class="cook-pane" id="cook-measures">
<div class="cook-grid">
<section class="cook-card"><h2>Кухонная математика</h2><p>Для рецептов полезно различать массу и объём: граммы — это масса, миллилитры — объём. Для воды они близки по числу, но для масла, муки и сахара уже нет.</p><table class="measure-table"><thead><tr><th>Мера</th><th>Ориентир</th><th>Примечание</th></tr></thead><tbody>
<tr><td>1 чайная ложка</td><td><span class="measure-pill">≈ 5 мл</span></td><td>Объём стандартной чайной ложки.</td></tr>
<tr><td>1 столовая ложка</td><td><span class="measure-pill">≈ 15 мл</span></td><td>Три чайные ложки по объёму.</td></tr>
<tr><td>1 стакан</td><td><span class="measure-pill">обычно 200–250 мл</span></td><td>Стаканы бывают разного размера, поэтому в точном рецепте лучше мерный стакан.</td></tr>
<tr><td>1 мл воды</td><td><span class="measure-pill">≈ 1 г</span></td><td>Для воды удобно считать так; для других продуктов соотношение другое.</td></tr>
</tbody></table><div class="callout"><b>Правило:</b> если рецепт чувствителен к пропорциям, используй кухонные весы. Ложки удобны для небольших количеств, весы — для муки, сахара и других продуктов, где плотность сильно влияет на массу.</div></section>
<section class="cook-card"><h2>Почему «стакан муки» — не точная величина?</h2><div class="micro-grid">
<div class="info-tile"><h3>Насыпная плотность</h3><p>Муку можно насыпать рыхло или утрамбовать — объём тот же, масса разная.</p></div>
<div class="info-tile"><h3>Ложка с горкой</h3><p>«Ложка» без уточнения может означать разные объёмы. В приложении будем показывать, когда нужна горка, а когда ровная ложка.</p></div>
<div class="info-tile"><h3>Мерный стакан</h3><p>Удобен для воды, молока и других жидкостей. Для муки и сахара весы обычно надёжнее.</p></div>
<div class="info-tile"><h3>Весы</h3><p>Самый простой способ не спорить с рецептом, особенно при выпечке.</p></div>
</div></section>
</div>
</div>
<div class="cook-pane" id="cook-neighbors">
<div class="cook-grid">
<section class="cook-card"><h2>Продуктовое соседство</h2><p>Холодильник — не склад с хаотичными пакетами. Сырые продукты лучше хранить так, чтобы их соки не попадали на готовую еду. Сырое мясо, птицу и рыбу держи в закрытых контейнерах или хорошо упакованными и отдельно от готовых продуктов.</p><div class="neighbor-grid">
<div class="info-tile"><h3>Сырое мясо</h3><p>В герметичной таре/упаковке, отдельно от готовой еды и продуктов, которые едят без термообработки.</p></div>
<div class="info-tile"><h3>Готовая еда</h3><p>Накрывай и ставь так, чтобы на неё ничего не могло потечь сверху.</p></div>
<div class="info-tile"><h3>Овощи и фрукты</h3><p>Храни чистыми и отдельно от сырых мясных продуктов. Для разных холодильников полезно использовать отдельные ящики.</p></div>
<div class="info-tile"><h3>Запахи</h3><p>Закрытые контейнеры помогают не только с безопасностью, но и с тем, чтобы сырой лук не превращал весь холодильник в луковый.</p></div>
</div><div class="source-note">USDA рекомендует отделять сырое мясо, птицу и морепродукты от готовых продуктов, а сами сырые продукты держать в упаковке/контейнерах, чтобы соки не стекали на другую еду.</div></section>
<section class="cook-card"><h2>А что нельзя хранить рядом?</h2><div class="cook-mini">
<div class="info-tile"><h4>Сырое + готовое</h4><p>Не ставим в один открытый контейнер.</p></div>
<div class="info-tile"><h4>Сырое мясо + салат</h4><p>Разделяем, даже если оба продукта лежат на одной полке.</p></div>
<div class="info-tile"><h4>Протекающая упаковка</h4><p>Перекладываем сырые продукты в закрытую тару.</p></div>
</div><div class="callout"><b>Главная мысль:</b> проблема обычно не в том, что продукты физически «не любят» соседство, а в запахах, влаге, порче и перекрёстном загрязнении.</div></section>
</div>
</div>
<div class="cook-pane" id="cook-oils">
<section class="cook-card"><h2>Какое масло для чего?</h2><div class="oil-grid">
<div class="info-tile oil-card"><h3>Оливковое extra virgin</h3><p>Выраженный вкус. Отлично для салатов, соусов, готовых блюд и умеренного нагрева.</p><div class="oil-use">Когда важен вкус</div></div>
<div class="info-tile oil-card"><h3>Оливковое рафинированное</h3><p>Более нейтральное. Удобно, когда нужен мягкий вкус и жарка.</p><div class="oil-use">Когда нужна универсальность</div></div>
<div class="info-tile oil-card"><h3>Подсолнечное рафинированное</h3><p>Нейтральное по вкусу и универсальное для жарки и повседневной готовки.</p><div class="oil-use">Для обычной сковороды</div></div>
<div class="info-tile oil-card"><h3>Сливочное масло</h3><p>Даёт вкус и аромат. Подходит для каш, соусов, выпечки и мягкой обжарки; при сильном нагреве быстро темнеет.</p><div class="oil-use">Когда нужен сливочный вкус</div></div>
<div class="info-tile oil-card"><h3>Кунжутное</h3><p>Ароматное масло в небольших количествах. Часто используют как вкусовую добавку, а не как единственное масло для жарки.</p><div class="oil-use">Когда нужен яркий аромат</div></div>
<div class="info-tile oil-card"><h3>Кокосовое</h3><p>Придаёт собственный вкус и подходит для некоторых десертов и блюд. Не стоит считать его универсально «лучшим» маслом.</p><div class="oil-use">Для конкретного вкуса</div></div>
</div><div class="callout"><b>Не путай «масло для салата» и «масло для жарки» как строгие категории.</b> Важны конкретный продукт, его вкус, степень рафинации и температура приготовления.</div></section>
</div>
<div class="cook-pane" id="cook-recipes">
<div class="cook-grid">
<section class="cook-card"><h2>Рецепты для чайников, чтобы не умереть с голоду</h2><p>Не нужно уметь «чувствовать тесто». Здесь у каждого блюда есть понятные пропорции, порядок действий и контрольные признаки: как понять, что ты делаешь всё правильно.</p>
<div class="recipe-tip"><b>Базовое правило кухни:</b> сначала прочитай рецепт целиком, достань продукты и только потом включай плиту. Так меньше шансов забыть воду, соль или уже поставленную кастрюлю.</div>
</section>
<section class="cook-card"><h2>Если готовишь впервые</h2><ol class="step-list"><li>Подготовь всё заранее.</li><li>Поставь таймер, когда в рецепте есть время.</li><li>Не бойся пробовать еду по ходу приготовления, если это безопасно.</li><li>Если сомневаешься, лучше уменьшить огонь: пережарить проще, чем доготовить.</li><li>Сырые мясо и яйца держи отдельно от готовой еды и мой руки/инвентарь после контакта.</li></ol></section>
</div>
<section class="cook-card" style="margin-top:18px"><h2>Гречка</h2><div class="recipe-meta"><span class="recipe-pill">20–25 мин</span><span class="recipe-pill">2 порции</span><span class="recipe-pill">кастрюля</span></div><div class="recipe-grid"><div><h3>Ингредиенты</h3><table class="ingredient-table"><tr><td>Гречка</td><td>1 стакан</td></tr><tr><td>Вода</td><td>2 стакана</td></tr><tr><td>Соль</td><td>½ ч. л. или по вкусу</td></tr><tr><td>Масло</td><td>1 ч. л. или кусочек сливочного</td></tr></table></div><div><h3>Как готовить</h3><ol class="step-list"><li>Перебери гречку, если в упаковке есть шелуха или тёмные крупинки. Быстро промой.</li><li>Положи крупу, воду и соль в кастрюлю.</li><li>Доведи до кипения, затем убавь огонь до слабого.</li><li>Накрой крышкой и вари примерно 15 минут. Не мешай её постоянно.</li><li>Когда вода впиталась, выключи огонь и оставь под крышкой ещё 5 минут.</li><li>Добавь масло и разрыхли вилкой.</li></ol></div></div></section>
<section class="cook-card" style="margin-top:18px"><h2>Макароны</h2><div class="recipe-meta"><span class="recipe-pill">10–15 мин</span><span class="recipe-pill">2 порции</span><span class="recipe-pill">самый простой ужин</span></div><div class="recipe-grid"><div><h3>Пропорции</h3><table class="ingredient-table"><tr><td>Сухие макароны</td><td>160–200 г</td></tr><tr><td>Вода</td><td>много: кастрюля должна позволять макаронам свободно двигаться</td></tr><tr><td>Соль</td><td>примерно 1 ст. л. на большую кастрюлю воды</td></tr></table></div><div><h3>Как готовить</h3><ol class="step-list"><li>Доведи большую кастрюлю воды до активного кипения.</li><li>Посоли воду и опусти макароны.</li><li>Сразу хорошо перемешай первые 30–60 секунд.</li><li>Вари по времени на упаковке, а за 2 минуты до конца попробуй одну штуку.</li><li>Когда внутри нет сырого твёрдого центра, сливай воду.</li><li>Добавь масло, соус, сыр или немного воды от варки — по рецепту.</li></ol></div></div><div class="callout"><b>Не надо промывать макароны холодной водой</b>, если ты собираешься есть их с горячим соусом: смоешь часть крахмала, который помогает соусу держаться на пасте.</div></section>
<section class="cook-card" style="margin-top:18px"><h2>Каша: овсянка на молоке</h2><div class="recipe-meta"><span class="recipe-pill">7–10 мин</span><span class="recipe-pill">1 порция</span><span class="recipe-pill">кастрюля или сотейник</span></div><div class="recipe-grid"><div><h3>Ингредиенты</h3><table class="ingredient-table"><tr><td>Овсяные хлопья</td><td>40–50 г</td></tr><tr><td>Молоко</td><td>200 мл</td></tr><tr><td>Соль</td><td>щепотка</td></tr><tr><td>Начинка</td><td>банан, ягоды, яблоко, орехи или ложка варенья</td></tr></table></div><div><h3>Как готовить</h3><ol class="step-list"><li>Нагрей молоко на среднем огне. Не оставляй его без присмотра.</li><li>Добавь хлопья и щепотку соли.</li><li>Убавь огонь и вари, помешивая, до желаемой густоты.</li><li>Сними с плиты. Каша продолжит густеть ещё пару минут.</li><li>Добавь фрукты или другие топпинги.</li></ol></div></div></section>
<section class="cook-card" style="margin-top:18px"><h2>Самый простой куриный бульон</h2><div class="recipe-meta"><span class="recipe-pill">1–1,5 часа</span><span class="recipe-pill">3–4 порции</span><span class="recipe-pill">не нужен кулинарный талант</span></div><div class="recipe-grid"><div><h3>Ингредиенты</h3><table class="ingredient-table"><tr><td>Курица</td><td>500–700 г: голени, бёдра или суповой набор</td></tr><tr><td>Вода</td><td>1,5–2 л</td></tr><tr><td>Лук</td><td>1 шт.</td></tr><tr><td>Морковь</td><td>1 шт.</td></tr><tr><td>Соль</td><td>по вкусу</td></tr><tr><td>Перец/лавровый лист</td><td>по желанию</td></tr></table></div><div><h3>Как готовить</h3><ol class="step-list"><li>Положи курицу в кастрюлю и залей холодной водой.</li><li>Доведи до кипения и снизь огонь. Если сверху появляется пена, сними её ложкой.</li><li>Добавь лук и морковь.</li><li>Вари на слабом кипении до готовности курицы. Время зависит от частей и размера кусков.</li><li>Посоли ближе к концу и добавь специи.</li><li>Проверь, что мясо полностью приготовилось. Для птицы важна именно готовность внутри, а не только внешний вид.</li><li>Достань курицу, при желании процеди бульон.</li></ol></div></div><div class="recipe-tip"><b>Что делать потом:</b> добавить лапшу и морковь, положить мясо обратно, сделать суп с картофелем или просто выпить кружку бульона с хлебом. Хранить остатки нужно охлаждёнными и не держать готовую еду часами при комнатной температуре.</div></section>
<section class="cook-card" style="margin-top:18px"><h2>Яичница — база, к которой можно добавлять почти всё</h2><div class="recipe-meta"><span class="recipe-pill">5–8 мин</span><span class="recipe-pill">1 порция</span><span class="recipe-pill">сковорода</span></div><div class="recipe-grid"><div><h3>Основа</h3><table class="ingredient-table"><tr><td>Яйца</td><td>2–3 шт.</td></tr><tr><td>Масло</td><td>1 ч. л.</td></tr><tr><td>Соль</td><td>по вкусу</td></tr></table><h3 style="margin-top:14px">Что добавить</h3><p>Помидоры, сладкий перец, шпинат, зелёный лук, сыр, грибы, бекон или готовую курицу. Важно помнить: сырое мясо сначала нужно полностью приготовить отдельно, а потом добавлять.</p></div><div><h3>Как сделать</h3><ol class="step-list"><li>Разогрей сковороду на среднем огне и добавь масло.</li><li>Если используешь овощи или грибы, сначала обжарь их до мягкости.</li><li>Разбей яйца. Можно сделать целыми или слегка размешать для скрэмбла.</li><li>Убавь огонь. Готовь до тех пор, пока белок не станет непрозрачным, а желток — до желаемой степени готовности.</li><li>Посоли и добавь сыр/зелень в конце.</li></ol></div></div></section>
<section class="cook-card" style="margin-top:18px"><h2>Простое мясо на сковороде</h2><div class="recipe-meta"><span class="recipe-pill">20–30 мин</span><span class="recipe-pill">2 порции</span><span class="recipe-pill">например, свинина или говядина кусочками</span></div><div class="recipe-grid"><div><h3>Ингредиенты</h3><table class="ingredient-table"><tr><td>Мясо</td><td>300–400 г</td></tr><tr><td>Масло</td><td>1–2 ст. л.</td></tr><tr><td>Соль</td><td>в конце или по рецепту</td></tr><tr><td>Перец/паприка/чеснок</td><td>по желанию</td></tr></table></div><div><h3>Как готовить</h3><ol class="step-list"><li>Обсуши мясо бумажным полотенцем: так оно лучше подрумянится.</li><li>Нагрей сковороду и масло.</li><li>Положи мясо в один слой, не заполняя сковороду до краёв.</li><li>Обжарь до румяной корочки, затем убавь огонь и доведи до полной готовности.</li><li>Проверь самый толстый кусок внутри: мясо не должно оставаться сырым.</li><li>После приготовления дай мясу отдохнуть 3–5 минут.</li></ol></div></div><div class="callout"><b>Не ориентируйся только на цвет снаружи.</b> Толщина куска, вид мяса и температура сковороды сильно меняют время. Для первого раза лучше делать куски тоньше и проверять самый толстый.</div></section>
<section class="cook-card" style="margin-top:18px"><h2>Два салата из сезонных овощей</h2><div class="recipe-grid"><div class="recipe-card"><h3>Томат + огурец + зелень</h3><div class="recipe-meta"><span class="recipe-pill">5 мин</span><span class="recipe-pill">без готовки</span></div><ol class="step-list"><li>Нарежь 2 помидора и 1–2 огурца.</li><li>Добавь укроп или другую зелень.</li><li>Посоли непосредственно перед подачей.</li><li>Заправь оливковым или подсолнечным маслом.</li><li>Можно добавить немного красного лука и брынзы/феты.</li></ol></div><div class="recipe-card"><h3>Капустный хруст</h3><div class="recipe-meta"><span class="recipe-pill">10 мин</span><span class="recipe-pill">долго хранится лучше</span></div><ol class="step-list"><li>Нашинкуй белокочанную или молодую капусту.</li><li>Добавь тёртую морковь и яблоко по желанию.</li><li>Посоли и слегка разомни руками, чтобы капуста стала мягче.</li><li>Добавь масло и немного кислоты: лимонный сок или уксус по вкусу.</li><li>Попробуй и отрегулируй соль/кислоту.</li></ol></div></div><div class="recipe-tip"><b>Сезонный принцип:</b> покупай овощи, которые сейчас хорошо выглядят и стоят разумно. Салат можно собирать из той же логики: сочное + хрустящее + зелень + жирная заправка + немного кислоты.</div></section>
</div>
<div class="cook-pane" id="cook-shopping">
<div class="cook-grid">
<section class="cook-card"><h2>Поход за продуктами: как не набрать случайную гору еды</h2><p>Перед магазином реши, какие 3–5 блюд ты реально собираешься готовить. Потом покупай продукты, которые пересекаются между рецептами. Так меньше выбрасывается и проще начать готовить.</p><div class="shop-grid" style="margin-top:16px"><div class="shop-card"><h3>Шаг 1. Посмотри дома</h3><p>Проверь холодильник, морозилку и крупы. Часто половина «списка» уже есть.</p></div><div class="shop-card"><h3>Шаг 2. Составь короткий список</h3><p>Белок + гарнир + овощи + фрукты + молочка + базовые продукты.</p></div><div class="shop-card"><h3>Шаг 3. Иди с планом</h3><p>Не покупай скоропортящееся «на всякий случай», если не знаешь, когда его съешь.</p></div></div></section>
<section class="cook-card"><h2>Как выбирать продукты</h2><ul class="check-list"><li>Сначала смотри срок годности и условия хранения.</li><li>Упаковка должна быть целой: без вздутия, сильных подтёков и повреждений.</li><li>Скоропортящиеся продукты покупай ближе к концу похода и быстрее убирай в холодильник.</li><li>Не бери мясо или рыбу, если упаковка протекает или продукт хранится не в подходящих условиях.</li></ul></section>
</div>
<section class="cook-card" style="margin-top:18px"><h2>Овощи и фрукты</h2><div class="shop-grid"><div class="shop-card"><h3>Помидоры</h3><p>Ищи плотные, без вмятин, трещин и мокрых участков. Спелость выбирай по задаче: для салата — аромат и спелость, для запекания — можно плотнее.</p></div><div class="shop-card"><h3>Огурцы</h3><p>Лучше плотные и без мягких концов. Очень сморщенные огурцы уже потеряли часть влаги.</p></div><div class="shop-card"><h3>Яблоки</h3><p>Без глубоких повреждений и мокрых участков. Небольшие поверхностные точки не всегда проблема, но мягкая гниль — повод не брать.</p></div><div class="shop-card"><h3>Картофель</h3><p>Выбирай твёрдые клубни без сильной зелени, гнили и большого количества ростков. Храни в прохладном тёмном месте, а не на солнце.</p></div><div class="shop-card"><h3>Зелень</h3><p>Листья должны быть живыми, без слизи и сильного пожелтения. Дома убери лишнюю влагу и храни в подходящей упаковке.</p></div><div class="shop-card"><h3>Бананы</h3><p>Для запаса бери чуть зеленее; для каши и выпечки можно брать зрелые с выраженным запахом.</p></div></div></section>
<section class="cook-card" style="margin-top:18px"><h2>Мясо, птица и рыба</h2><div class="shop-grid"><div class="shop-card"><h3>Курица</h3><p>Упаковка целая, продукт холодный и без подозрительно вздутой упаковки. После покупки держи отдельно от готовой еды.</p></div><div class="shop-card"><h3>Мясо</h3><p>Смотри на дату, целостность упаковки и условия хранения. Визуальный цвет сам по себе не является надёжным тестом свежести.</p></div><div class="shop-card"><h3>Рыба</h3><p>Свежесть оценивай по условиям хранения, дате и запаху. Не бери продукт с повреждённой или протекающей упаковкой.</p></div></div><div class="callout"><b>После магазина:</b> сырое мясо, птицу и рыбу не клади рядом с готовой едой. Убери их в холодильник как можно скорее; если не планируешь готовить в ближайшее время, заморозь по подходящему для продукта плану.</div></section>
<section class="cook-card" style="margin-top:18px"><h2>Молочка и яйца</h2><div class="storage-grid"><div class="storage-card"><h4>Молоко</h4><p>Проверяй срок и условия хранения. После открытия ориентируйся на инструкцию упаковки и запах/вид продукта.</p></div><div class="storage-card"><h4>Йогурт</h4><p>Банка не должна быть вздутой или повреждённой. Не оставляй молочные продукты надолго при комнатной температуре.</p></div><div class="storage-card"><h4>Сыр</h4><p>Выбирай упаковку без повреждений и храни в условиях производителя. Для мягких сыров особенно важна температура.</p></div><div class="storage-card"><h4>Яйца</h4><p>Не бери треснувшие яйца. Храни так, как рекомендует упаковка или местная система торговли; дома важно избегать резких перепадов температуры.</p></div></div></section>
<section class="cook-card" style="margin-top:18px"><h2>Собери базовую корзину на неделю</h2><div class="shop-grid"><div class="shop-card"><h3>Белок</h3><p>Яйца, курица, рыба или мясо, бобовые — выбери 2–4 позиции.</p></div><div class="shop-card"><h3>Гарниры</h3><p>Гречка, рис, макароны, картофель, овсянка.</p></div><div class="shop-card"><h3>Овощи</h3><p>2–4 овоща, которые реально съешь: например, огурцы, помидоры, морковь, капуста.</p></div><div class="shop-card"><h3>Фрукты</h3><p>2 вида фруктов, чтобы один можно было есть сразу, а второй оставить на несколько дней.</p></div><div class="shop-card"><h3>Молочное</h3><p>Молоко/йогурт + один сыр или творог — без необходимости покупать всё сразу.</p></div><div class="shop-card"><h3>База</h3><p>Масло, соль, перец, чай/кофе, томатная паста, чеснок — набор, который превращает простые продукты в еду.</p></div></div><div class="recipe-tip"><b>Главный антихаос:</b> один продукт должен иметь несколько применений. Например, курица идёт в бульон, затем в салат или яичницу; морковь — в суп, салат и гарнир. Так холодильник не превращается в музей несъеденного.</div></section>
</div>
<div class="cook-pane" id="cook-stove">
<div class="stove-layout">
<section class="stove-card"><h2>Тренажёр плиты</h2><p>Оставили две базовые модели: газовую и электрическую. Выбери тип плиты и уровень мощности — изображение покажет, как меняется интенсивность нагрева.</p><div class="stove-demo"><div class="stove-face"><div class="stove-display" id="stoveDisplay">Выбери тип плиты</div><div class="stove-zone" id="stoveZone"><div class="gas-flame" id="gasFlame"></div><div class="electric-glow" id="electricGlow"></div></div></div><div class="stove-controls"><div class="stove-type-row"><button class="burner" data-burner="gas">Газовая</button><button class="burner" data-burner="electric">Электрическая</button></div><div class="intensity-row"><button class="heat-knob" data-heat="1">1</button><button class="heat-knob" data-heat="2">2</button><button class="heat-knob" data-heat="3">3</button><button class="heat-knob" data-heat="4">4</button><button class="heat-knob" data-heat="5">5</button><button class="heat-knob" data-heat="6">6</button><button class="heat-knob" data-heat="7">7</button><button class="heat-knob" data-heat="8">8</button><button class="heat-knob" data-heat="9">9</button></div><div class="heat-meter"><div class="heat-meter-fill" id="heatMeterFill"></div></div></div></div></section>
<section class="stove-card"><h2 id="heatTitle">Какой нужен огонь?</h2><p id="heatText">Выбери конфорку, затем уровень нагрева.</p><div class="result-box" id="heatResult">Подсказка появится здесь.</div></section>
</div>
</div>
<div class="cook-pane" id="cook-fridge">
<div class="fridge-layout">
<section class="fridge-card"><h2>Куда положить продукт?</h2><p>Выбери продукт, затем полку. Это учебная схема: реальные зоны зависят от конструкции холодильника.</p><div class="food-select" id="fridgeFoods"><button class="food-btn" data-food="chicken">сырая курица</button><button class="food-btn" data-food="milk">молоко</button><button class="food-btn" data-food="greens">зелень</button><button class="food-btn" data-food="ready">готовая еда</button><button class="food-btn" data-food="eggs">яйца</button><button class="food-btn" data-food="berries">ягоды</button></div><div class="result-box" id="fridgeResult">Выбери продукт.</div></section>
<section class="fridge-card"><div class="fridge"><div class="fridge-door"><div class="fridge-shelf"><button class="fridge-item" data-shelf="top">Верхняя полка</button></div><div class="fridge-shelf"><button class="fridge-item" data-shelf="middle">Средняя полка</button></div><div class="fridge-shelf"><button class="fridge-item" data-shelf="bottom">Нижняя полка</button></div><div class="fridge-shelf"><button class="fridge-item" data-shelf="drawer">Ящик овощей</button></div><div class="fridge-shelf"><button class="fridge-item" data-shelf="door">Дверца</button></div></div></div></section>
</div>
</div>
<div class="cook-pane" id="cook-freezing">
<div class="cook-grid">
<section class="cook-card"><h2>Подготовка к заморозке: подходит почти для всего</h2><p>Правильная заморозка начинается до морозилки: продукт должен быть свежим, подготовленным и упакованным так, чтобы к нему не попадали воздух, влага и запахи.</p><div class="freeze-grid">
<div class="freeze-card"><h3>Мясо и птица</h3><p>Раздели на удобные порции, при необходимости обсуши, плотно упакуй и подпиши. Чем тоньше и ровнее упаковка, тем проще её потом разморозить.</p><span class="tag">Порциями</span></div>
<div class="freeze-card"><h3>Рыба</h3><p>Удаляй лишнюю влагу с поверхности, плотно упаковывай и защищай от воздуха. Небольшие порции удобнее целой туши.</p><span class="tag">Плотно</span></div>
<div class="freeze-card"><h3>Овощи</h3><p>Вымой, обсуши и нарежь. Для многих овощей полезно <b>бланширование</b>: кратко обработать кипящей водой или паром, затем быстро охладить в очень холодной воде, хорошо обсушить и заморозить.</p><span class="tag">Иногда бланшировать</span></div>
<div class="freeze-card"><h3>Фрукты и ягоды</h3><p>Перебери, убери повреждённые части, промой только если это уместно, и обязательно хорошо обсуши. Ягоды удобно предварительно подморозить в один слой, а потом пересыпать в пакет.</p><span class="tag">Без лишней влаги</span></div>
<div class="freeze-card"><h3>Хлеб и выпечка</h3><p>Замораживай порциями, чтобы не размораживать всё сразу. Разделяй слои пергаментом, если они могут слипнуться.</p><span class="tag">Порционно</span></div>
<div class="freeze-card"><h3>Готовая еда</h3><p>Охлади до безопасного состояния, разложи небольшими порциями, подпиши название и дату. Контейнер не заполняй до самого верха.</p><span class="tag">Контейнер</span></div>
<div class="freeze-card"><h3>Молочные продукты</h3><p>Не всё хорошо переносит заморозку: текстура некоторых сливок, йогуртов и мягких продуктов после размораживания меняется. Для домашней практики лучше замораживать то, для чего это допускает продукт/производитель.</p><span class="tag">Сначала проверь</span></div>
<div class="freeze-card"><h3>Зелень</h3><p>Удали лишнюю воду, измельчи и замораживай маленькими порциями. Для супов и соусов удобно хранить в небольших пакетах или формах.</p><span class="tag">Мелкими порциями</span></div>
</div><div class="callout"><b>Что подписать:</b> название продукта + дата заморозки + при необходимости количество порций. Для готовой еды можно добавить способ разогрева.</div></section>
<section class="cook-card"><h2>Во что упаковывать</h2><div class="freeze-grid">
<div class="freeze-card"><h3>Пакет для заморозки</h3><p>Удобен для мяса, рыбы, ягод и овощей. Выпусти лишний воздух и распределяй содержимое тонким слоем.</p><span class="tag">Меньше воздуха</span></div>
<div class="freeze-card"><h3>Контейнер</h3><p>Подходит для супов, соусов и готовой еды. Оставляй свободное место, потому что жидкость расширяется при замерзании.</p><span class="tag">Оставь место</span></div>
<div class="freeze-card"><h3>Пергамент + пакет</h3><p>Удобен для блинов, сырников, котлет и других изделий, которые лучше разделять слоями.</p><span class="tag">Не слипнется</span></div>
<div class="freeze-card"><h3>Вакуум</h3><p>Может уменьшить контакт продукта с воздухом, но используй только оборудование и упаковку, предназначенные для замораживания.</p><span class="tag">Опционально</span></div>
</div><div class="notice"><b>Не переполняй упаковку.</b> Для продуктов с большим содержанием воды особенно важно оставить запас места и не закрывать тёплую еду герметично до её охлаждения.</div></section>
</div>
<section class="cook-card" style="margin-top:18px"><h2>Как размораживать</h2><div class="freeze-grid">
<div class="freeze-card"><h3>В холодильнике</h3><p>Базовый и спокойный способ для мяса, птицы и рыбы. Положи продукт в закрытую тару, чтобы соки не капали на другие продукты.</p><span class="tag">Лучший базовый вариант</span></div>
<div class="freeze-card"><h3>В холодной воде</h3><p>Продукт должен быть герметично упакован. Меняй холодную воду, чтобы она оставалась холодной.</p><span class="tag">Быстрее</span></div>
<div class="freeze-card"><h3>В микроволновке</h3><p>Используй режим разморозки и после этого сразу готовь продукт, потому что отдельные участки могут уже начать нагреваться.</p><span class="tag">Когда надо быстро</span></div>
<div class="freeze-card"><h3>Не на столе</h3><p>Не оставляй мясо, птицу и другие скоропортящиеся продукты надолго при комнатной температуре: поверхность может прогреться раньше середины.</p><span class="tag">Не делать</span></div>
</div><div class="callout"><b>После разморозки:</b> оценивай продукт по его назначению и правилам безопасности. Полностью размороженные скоропортящиеся продукты не стоит снова замораживать после длительного пребывания в небезопасной температуре.</div></section>
</div>
</section>
<section class="view" id="view-cleaning">
<div class="clean-hero"><div class="section-label">03 · Уборка</div><h1>Дом не просит генеральную уборку каждый день.</h1><div class="lead">Раздел про понятную рутину: что мыть, чем мыть, как часто и где лучше не геройствовать. Выбирай поверхность или открой календарный чек-лист.</div></div>
<div class="clean-tabs" id="cleanTabs">
<button class="clean-tab active" data-clean="surfaces">Поверхности</button>
<button class="clean-tab" data-clean="schedule">Чек-лист и календарь</button>
<button class="clean-tab" data-clean="fridge">Холодильник</button>
<button class="clean-tab" data-clean="mistakes">Ошибки и средства</button>
</div>
<div class="clean-pane active" id="clean-surfaces">
<div class="surface-grid">
<div class="surface-card"><h3>Мытьё полов</h3><p>Сначала сухая уборка, потом влажная. Для ламината и дерева — минимум воды; для плитки можно чуть больше. Не оставляй лужи.</p><span class="frequency">1–2 раза в неделю</span></div>
<div class="surface-card"><h3>Сантехника</h3><p>Раковина, ванна и унитаз требуют разных средств. Нанеси средство по инструкции, дай ему время подействовать и не смешивай хлорсодержащие и кислотные составы.</p><span class="frequency">1 раз в неделю</span></div>
<div class="surface-card"><h3>Плита</h3><p>Лучше вытирать брызги после готовки, пока они не засохли. Стеклокерамику не царапай абразивной губкой; жирные загрязнения сначала размягчи.</p><span class="frequency">после готовки + 1 раз в неделю глубже</span></div>
<div class="surface-card"><h3>Зеркала</h3><p>Средство на салфетку, а не лужей прямо на зеркало. Протри микрофиброй и убери разводы сухой стороной.</p><span class="frequency">по мере необходимости</span></div>
<div class="surface-card"><h3>Окна</h3><p>Мой стекло сверху вниз в пасмурный день без прямого солнца. Рамы и подоконник — отдельным проходом. Сильное средство на резинки и декоративные покрытия лучше не наносить без проверки.</p><span class="frequency">2–4 раза в год</span></div>
<div class="surface-card"><h3>Мелкие поверхности</h3><p>Выключатели, ручки, столы и часто трогаемые поверхности быстрее всего накапливают следы. Сначала смотри, подходит ли средство материалу.</p><span class="frequency">1–2 раза в неделю</span></div>
</div>
<section class="clean-card" style="margin-top:18px"><h2>Интерактив: чем это чистить?</h2><p>Выбери поверхность, а затем средство. Приложение подскажет, насколько это разумное сочетание.</p><div class="clean-selector" id="surfaceChooser"><button data-surface="glass">Стекло</button><button data-surface="stone">Камень</button><button data-surface="stainless">Нержавейка</button><button data-surface="wood">Дерево</button><button data-surface="tile">Плитка</button></div><div class="clean-selector" id="cleanerChooser" style="margin-top:10px"><button data-cleaner="glass">Средство для стекла</button><button data-cleaner="universal">Универсальное</button><button data-cleaner="acid">Кислотное</button><button data-cleaner="degrease">Обезжириватель</button><button data-cleaner="chlorine">Хлорсодержащее</button></div><div class="result-box" id="cleanerResult">Выбери поверхность и средство.</div></section>
<div class="clean-grid" style="margin-top:18px">
<section class="clean-card"><h2>Базовый порядок уборки</h2><ol class="clean-list"><li>Убери вещи с поверхности.</li><li>Сначала сухая грязь и пыль.</li><li>Потом нанеси подходящее средство.</li><li>Дай средству поработать по инструкции.</li><li>Протри чистой салфеткой и при необходимости смой.</li><li>Полы — в самом конце.</li></ol></section>
<section class="clean-card"><h2>Когда нужна осторожность</h2><p>Не смешивай бытовую химию «для усиления эффекта». Особенно важно не соединять хлорсодержащие средства с кислотами и аммиачными составами. На новой поверхности сначала проверь средство на незаметном участке.</p></section>
</div>
</div>
<div class="clean-pane" id="clean-schedule">
<div class="clean-grid">
<section class="clean-card"><h2>Ритм, который обновляется сам</h2><p>Выбери дату последней полноценной уборки. Приложение пересчитает ориентировочные задачи относительно сегодняшнего дня.</p><div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:14px"><label for="lastClean">Последняя уборка</label><input class="calendar-input" id="lastClean" type="date"/></div><div class="reminder-strip" style="margin-top:14px"><span id="scheduleSummary">Загрузка календаря…</span><button id="notifyBtn" type="button">Разрешить уведомления</button></div><div class="calendar-box" id="taskCalendar"></div></section>
<section class="clean-card"><h2>Чек-лист</h2>
<div class="check-row"><input data-task="daily" type="checkbox"/> <div><b>5–10 минут ежедневно</b><small>Кухонная поверхность, посуда, раковина, вещи по местам, быстро протереть очевидные пятна.</small></div></div>
<div class="check-row"><input data-task="weekly-floor" type="checkbox"/> <div><b>Раз в неделю</b><small>Полы, сантехника, плита, зеркала, пыль на открытых поверхностях.</small></div></div>
<div class="check-row"><input data-task="weekly-textile" type="checkbox"/> <div><b>Раз в 1–2 недели</b><small>Полотенца, постельное бельё по личному режиму и сезону, зона вокруг мусорного ведра.</small></div></div>
<div class="check-row"><input data-task="monthly" type="checkbox"/> <div><b>Раз в месяц</b><small>Холодильник по зонам, труднодоступные места, дверные ручки и выключатели подробнее.</small></div></div>
<div class="check-row"><input data-task="seasonal" type="checkbox"/> <div><b>Раз в сезон</b><small>Окна, верхние поверхности, вентиляционные решётки и вещи, которые редко трогаешь.</small></div></div>
</section>
</div>
</div>
<div class="clean-pane" id="clean-fridge">
<div class="clean-grid">
<section class="clean-card"><h2>Как разморозить холодильник</h2><p>Если у модели нет автоматической разморозки и в морозильной камере нарастает лёд, действуй спокойно.</p><ol class="clean-list"><li>Переложи продукты в прохладное место.</li><li>Выключи холодильник из сети и открой дверцы.</li><li>Поставь полотенца или ёмкость для воды.</li><li>Дай льду оттаять естественно. Не ковыряй его ножом.</li><li>Вымой и высуши поверхности.</li><li>Включи холодильник и дождись рабочего режима перед полной загрузкой.</li></ol></section>
<section class="clean-card"><h2>Чего не делать</h2><ul class="clean-list"><li>Не откалывай лёд острыми предметами.</li><li>Не лей кипяток прямо на пластиковые детали или испаритель.</li><li>Не используй агрессивную химию на внутренних поверхностях без разрешения производителя.</li><li>Проверь инструкцию своей модели: у современных холодильников алгоритм может отличаться.</li></ul></section>
</div>
</div>
<div class="clean-pane" id="clean-mistakes">
<div class="clean-grid">
<section class="clean-card"><h2>Средства: чем вообще чистить?</h2><div class="surface-grid"><div class="surface-card"><h3>Универсальное</h3><p>Для большинства моющихся поверхностей, если производитель материала не запрещает.</p></div><div class="surface-card"><h3>Для стекла</h3><p>Для зеркал и окон, чтобы уменьшить разводы.</p></div><div class="surface-card"><h3>Для сантехники</h3><p>Может быть кислотным или другим специализированным составом. Не смешивай его с хлорсодержащими средствами.</p></div><div class="surface-card"><h3>Обезжириватель</h3><p>Полезен на кухне, но сначала проверь совместимость с покрытием.</p></div></div></section>
<section class="clean-card"><h2>Главное правило</h2><p>Сначала попробуй самое мягкое подходящее средство и механическое удаление грязи. Более агрессивное средство — следующий шаг, а не первый.</p></section>
</div>
</div>
</section>
<section class="view" id="view-clothing">
<div class="home-hero"><div class="section-label">04 · Одежда и уход</div><h1>Чтобы вещи жили дольше, а пуговицы не превращались в драму.</h1><div class="lead">Всё, что начинается после стирки: как сушить, гладить, хранить и чинить одежду простыми способами.</div></div>
<div class="clothing-tabs" id="clothingTabs">
<button class="clothing-tab active" data-clothing="care">Уход и материалы</button>
<button class="clothing-tab" data-clothing="iron">Глажка</button>
<button class="clothing-tab" data-clothing="dry">Сушка и хранение</button>
<button class="clothing-tab" data-clothing="repair">Мелкий ремонт</button>
<button class="clothing-tab" data-clothing="problems">Что случилось?</button>
</div>
<div class="clothing-pane active" data-clothing-pane="care"><div class="clothing-grid">
<section class="clothing-card"><h2>Сначала смотри на материал</h2><div class="care-cards">
<article class="surface-card"><h3>Хлопок</h3><p>Обычно переносит обычную стирку лучше многих деликатных тканей. Смотри на ярлык: усадка и высокая температура всё равно возможны.</p></article>
<article class="surface-card"><h3>Полиэстер и синтетика</h3><p>Чаще сохнут быстрее и не любят слишком высокую температуру. Не перегревай при глажке.</p></article>
<article class="surface-card"><h3>Шерсть</h3><p>Меньше трения, умеренная температура и аккуратная сушка. Не выкручивай и не перегревай.</p></article>
<article class="surface-card"><h3>Вискоза</h3><p>Во влажном состоянии может быть уязвимой к растяжению. Обращайся мягче и не тяни мокрую вещь.</p></article>
</div></section>
<section class="clothing-card"><h2>Быстрый порядок ухода</h2><ol class="clean-list"><li>Посмотри ярлык до первой стирки.</li><li>Проверь карманы, застегни молнии и выверни вещь при необходимости.</li><li>Не перегревай ткань при сушке и глажке.</li><li>Суши вещь способом, указанным на ярлыке.</li><li>Перед уборкой в шкаф дай ей полностью высохнуть.</li></ol></section>
</div></div>
<div class="clothing-pane" data-clothing-pane="iron"><div class="clothing-grid">
<section class="clothing-card"><h2>Как гладить</h2><p>Символ утюга показывает допустимый нагрев: чем больше точек, тем выше температура. Перечёркнутый утюг — не гладить.</p><div class="iron-scale"><button class="iron-level active" data-iron="1">•<span>низкая</span></button><button class="iron-level" data-iron="2">••<span>средняя</span></button><button class="iron-level" data-iron="3">•••<span>высокая</span></button></div><div class="result-box" id="ironResult">Низкая температура: часто подходит для синтетики и чувствительных тканей. Если сомневаешься — начинай с меньшего нагрева.</div></section>
<section class="clothing-card"><div aria-hidden="true" class="topic-illustration"><svg viewbox="0 0 64 64"><path d="M18 45h24"></path><path d="M22 41h20l-3-10H18z"></path><path d="M25 31c1-8 1-10 5-14"></path><path d="M33 17c0-4 5-5 6-9"></path><path d="M39 18c1-4 5-4 5-8"></path></svg></div><h2>Отпаривание</h2><p>Отпариватель и режим пара помогают разгладить многие вещи без плотного прижатия подошвы утюга. Это удобно для рубашек, платьев, пиджаков и занавесок, если ярлык допускает обработку паром.</p><div class="instruction-grid"><div class="instruction-card"><h3>Как делать</h3><ol><li>Налей воду по инструкции прибора.</li><li>Развесь вещь свободно и расправь ткань.</li><li>Веди насадку сверху вниз, не задерживая её надолго на одном месте.</li><li>Дай вещи полностью высохнуть перед шкафом.</li></ol></div><div class="instruction-card"><h3>Когда осторожно</h3><p>Не отпаривай то, что ярлык запрещает обрабатывать паром или высокой температурой. Не направляй горячий пар на кожу и себя.</p></div></div></section>
<section class="clothing-card"><h2>Чтобы не сделать блестящее пятно</h2><ul class="clean-list"><li>Гладь с изнанки тёмные вещи и ткани, которые могут лосниться.</li><li>Не держи утюг на одном месте.</li><li>Не гладь загрязнение: тепло может закрепить пятно.</li></ul></section>
</div></div>
<div class="clothing-pane" data-clothing-pane="dry"><div class="clothing-grid">
<section class="clothing-card"><h2>Сушка и хранение</h2><div class="care-cards"><article class="surface-card"><h3>На верёвке</h3><p>Подходит для многих обычных вещей. Следи, чтобы мокрая тяжёлая ткань не вытянула форму.</p></article><article class="surface-card"><h3>Горизонтально</h3><p>Часто удобно для шерсти и трикотажа, которым нежелательно долго висеть мокрыми.</p></article><article class="surface-card"><h3>Сушильная машина</h3><p>Смотри символ барабанной сушки и ограничения по температуре.</p></article><article class="surface-card"><h3>Шкаф</h3><p>Не убирай влажную одежду. Трикотаж часто лучше хранить аккуратно сложенным.</p></article></div></section>
<section class="clothing-card"><h2>Чего не делать</h2><ul class="clean-list"><li>Не суши мокрые вещи на горячей батарее, если это запрещено ярлыком.</li><li>Не убирай вещи в плотный шкаф до полного высыхания.</li><li>Не выкручивай мокрый трикотаж с усилием.</li></ul></section>
</div></div>
<div class="clothing-pane" data-clothing-pane="repair"><div class="clothing-grid">
<section class="clothing-card"><div aria-hidden="true" class="topic-illustration"><svg viewbox="0 0 64 64"><circle cx="21" cy="22" r="7"></circle><circle cx="21" cy="22" r="2"></circle><path d="M16 37l11-11M27 37L16 26"></path><path d="M34 20h15M34 28h15M34 36h15"></path><path d="M39 16l-6 9 8 6-6 9"></path></svg></div><h2>Что можно починить самому</h2><p>Выбирай простую поломку. Ниже — конкретный порядок действий, а не только название ремонта.</p><div class="repair-grid"><button class="repair-card" data-repair="button"><b>Оторвалась пуговица</b><span>Как пришить и закрепить нитку.</span></button><button class="repair-card" data-repair="seam"><b>Разошёлся маленький шов</b><span>Как пройти по старой линии шва.</span></button><button class="repair-card" data-repair="hem"><b>Отошёл край</b><span>Как подшить край с изнанки.</span></button><button class="repair-card" data-repair="zip"><b>Заедает молния</b><span>Как проверить ткань, бегунок и зубцы.</span></button></div><div class="result-box" id="repairResult">Выбери ситуацию.</div></section>
<section class="clothing-card"><h2>Когда лучше не экспериментировать</h2><p>Сложная молния, дорогая вещь, кожа, замша, пальто с конструктивной посадкой или заметный разрыв — хороший повод обратиться к мастеру.</p></section>
</div></div>
<div class="clothing-pane" data-clothing-pane="problems"><div class="clothing-grid">
<section class="clothing-card"><h2>Что случилось с одеждой?</h2><div class="problem-grid"><button class="problem-card" data-problem="shrunk"><b>Села</b><span>Сначала проверь состав и ярлык, а не пытайся растянуть вещь силой.</span></button><button class="problem-card" data-problem="pills"><b>Катышки</b><span>Используй машинку для катышков или подходящий инструмент.</span></button><button class="problem-card" data-problem="stretch"><b>Растянулась</b><span>Проверь сушку и хранение: мокрый трикотаж легче деформируется.</span></button><button class="problem-card" data-problem="smell"><b>Пахнет сыростью</b><span>Проверь высыхание вещи и состояние стиральной машины.</span></button></div><div class="result-box" id="problemResult">Выбери проблему.</div></section>
</div></div>
</section>
<section class="view" id="view-money">
<div class="home-hero"><div class="section-label">05 · Счета и бюджет</div><h1>Деньги становятся спокойнее, когда знаешь, что и когда происходит.</h1><div class="lead">Коммуналка, налоги, вычеты, подписки, бюджет и накопления — без финансового шаманства. Там, где правила меняются, показываем дату и источник.</div></div>
<div class="money-tabs" id="moneyTabs"><button class="money-tab active" data-money="bills">Счета и налоги</button><button class="money-tab" data-money="budget">Бюджет</button><button class="money-tab" data-money="deposit">Вклады</button><button class="money-tab" data-money="scams">Фишинг и мошенники</button></div><div class="money-pane active" id="money-bills"><div class="money-grid money-grid-single"><section class="money-card"><h2>Коммуналка: что платить и когда</h2><p>В платежке могут быть содержание жилья и управление домом, коммунальные услуги, капитальный ремонт и другие начисления. Смотри состав именно своей платежки.</p><h3>Срок в 2026 году</h3><p>С 1 марта 2026 года по общему правилу плату за жилое помещение и коммунальные услуги вносят <b>до 15-го числа месяца, следующего за расчетным</b>. Платежный документ должен предоставляться не позднее 5-го числа.</p><h3>Где платить</h3><p>Через банк, приложение банка, поставщика услуг или ГИС ЖКХ. В личном кабинете ГИС ЖКХ есть сценарий «Оплатить ЖКУ».</p><div class="source-box">Источники: <a href="https://35vashkinskij.gosuslugi.ru/dlya-zhiteley/prokuratura/informatsiya-2025-god/?curPos=3&amp;cur_cc=2392&amp;filter%5B2392%5D%5BCategory%5D=3" target="_blank">изменение сроков оплаты ЖКУ с 1.03.2026</a>; <a href="https://cdn.dom.gosuslugi.ru/webhelp/topics/_citizen/payment/payment-grazhd.html" target="_blank">ГИС ЖКХ — оплата ЖКУ</a>.</div></section><section class="money-card"><h2>Налоги: что может платить физическое лицо</h2><p>Если ты работаешь по трудовому договору, НДФЛ с зарплаты обычно удерживает и перечисляет работодатель как налоговый агент. Но есть ситуации, когда налоговую обязанность нужно выполнить самому.</p><div class="mini-list"><div><b>Налог на имущество</b><span>Если у тебя есть облагаемая недвижимость. Сумма обычно приходит в налоговом уведомлении.</span></div><div><b>Транспортный налог</b><span>Если на тебе зарегистрирована облагаемая машина или другое транспортное средство.</span></div><div><b>Земельный налог</b><span>Если у тебя есть облагаемый земельный участок.</span></div><div><b>НДФЛ с некоторых доходов</b><span>Например, когда доход получен не от налогового агента, в отдельных случаях при продаже имущества, аренде и других доходах, которые закон требует декларировать самому.</span></div><div><b>Налог на профессиональный доход</b><span>Если ты зарегистрирован как самозанятый, налог по НПД рассчитывается по твоим доходам и уплачивается тобой через «Мой налог» или через ЕНС.</span></div><div><b>Налоги ИП</b><span>Если работаешь как индивидуальный предприниматель, набор налогов и порядок уплаты зависят от выбранного режима.</span></div></div><p>Самое простое правило: сначала посмотри, откуда у тебя доход и есть ли у тебя имущество, транспорт или земля. После этого проверь обязательства в Личном кабинете ФНС и в налоговом уведомлении.</p><div class="source-box">Источники: <a href="https://www.nalog.gov.ru/rn77/taxation/taxes/ndfl/ndfl_fl/" target="_blank">ФНС — налоги для физических лиц</a>; <a href="https://www.nalog.gov.ru/rn14/ens/" target="_blank">ФНС — ЕНС и налог на профессиональный доход</a>; <a href="https://www.nalog.gov.ru/" target="_blank">ФНС России</a>.</div></section><section class="money-card"><h2>Налоговый вычет</h2><p>Вычет уменьшает налогооблагаемую базу или позволяет вернуть часть ранее уплаченного НДФЛ, если закон дает тебе право на него.</p><div class="pillline"><span>жильё</span><span>ипотечные проценты</span><span>лечение</span><span>обучение</span><span>спорт</span><span>дети</span></div><p>Для социальных расходов с 2024 года действует общий лимит 150 000 ₽ за год для большинства расходов, входящих в этот лимит; дорогостоящее лечение имеет отдельное правило. Для каждого вида вычета есть свои условия.</p><h3>Как получить</h3><p>В зависимости от вида — через работодателя или ФНС, в том числе через Личный кабинет. Декларацию только ради вычета можно подавать в течение года.</p><div class="source-box">Источники: <a href="https://www.nalog.gov.ru/rn77/taxation/taxes/ndfl/nalog_vichet/soc_nv/soc_nv_pm/" target="_blank">ФНС — вычет на лечение и лекарства</a>; <a href="https://www.nalog.gov.ru/rn77/taxation/taxes/ndfl/ndfl_fl/" target="_blank">ФНС — налоговые вычеты для физлиц</a>.</div></section><section class="money-card"><h2>Подписки: не плати за то, чем не пользуешься</h2><ol><li>Раз в месяц проверь регулярные списания в банке и магазинах приложений.</li><li>Смотри дату следующего списания, а не только текущую цену.</li><li>Для бесплатного периода поставь напоминание заранее.</li><li>Отменяй ненужную подписку там, где она оформлена, и проверь, что автопродление отключено.</li><li>Для подписок через СБП Банк России указывает возможность видеть активные подписки и отключать ненужные в приложении банка.</li></ol><div class="source-box">Источник: <a href="https://www.cbr.ru/PSystem/sfp/" target="_blank">Банк России — Система быстрых платежей и управление подписками</a>.</div></section></div></div><div class="money-pane" id="money-budget"><section class="money-card" style="margin-top:16px"><h2>Бюджет без финансового насилия</h2><p>Нет обязательного процента, который должен откладывать каждый взрослый. Тренажёр помогает увидеть реальный месяц, выбрать посильный резерв и не превращать бюджет в наказание.</p><div class="budget-sim"><div class="budget-soft"><h3>Собери свой месяц</h3><div class="budget-control"><label>Доход в месяц<input id="budgetIncome" min="0" placeholder="80000" type="number"/></label><label>Обязательные расходы<input id="budgetFixed" min="0" placeholder="50000" type="number"/></label><label>Переменные расходы<input id="budgetVariable" min="0" placeholder="20000" type="number"/></label><label>Какую долю дохода хочется направлять в резерв?<div class="budget-range"><input id="budgetSave" max="50" min="0" type="range" value="5"/><output id="budgetSaveOut">5%</output></div></label><button id="budgetCalc" type="button">Посмотреть месяц</button></div><div class="budget-meter"><div class="budget-meter-fill" id="budgetMeterFill"></div></div><div class="budget-kpis"><div class="budget-kpi"><b id="budgetFree">—</b><span>остаётся после основных расходов</span></div><div class="budget-kpi"><b id="budgetSaveRub">—</b><span>выбранный резерв</span></div><div class="budget-kpi"><b id="budgetDays">—</b><span>дней такого темпа переменных расходов</span></div></div></div><div class="budget-soft"><h3>Без оценок</h3><div class="budget-tone" id="budgetTone">Введи три суммы. Здесь нет «правильно» и «неправильно» — только понятная картина месяца и следующий посильный шаг.</div><div class="budget-tone" style="margin-top:10px"><b>Мягкий порядок:</b><br/>сначала обязательное → затем обычная жизнь → затем небольшой резерв, если он помещается → отдельно нерегулярные траты.</div></div></div></section></div><div class="money-pane" id="money-deposit"><div class="money-grid money-grid-single"><section class="money-card"><h2>Вклады: какой вариант для чего</h2><p>Вклад — это не «просто положить деньги под процент». Главное — понять, когда тебе понадобятся деньги и насколько тебе важна возможность забрать их раньше срока.</p><div class="money-kpi"><div class="kpi"><b>3 мес.</b><span>короткая цель</span></div><div class="kpi"><b>1 год</b><span>деньги не нужны скоро</span></div><div class="kpi"><b>∞</b><span>накопительный счет / доступ к деньгам</span></div></div><h3>На что смотреть в условиях</h3><table class="mini-table"><tr><th>Тип</th><th>Что важно знать</th></tr><tr><td>Срочный вклад</td><td>Ставка действует на оговоренный срок. При досрочном закрытии проценты могут пересчитать по ставке, установленной договором.</td></tr><tr><td>Вклад с пополнением</td><td>Подходит, если хочешь регулярно докладывать деньги. Проверь ограничения по сумме и сроку пополнения.</td></tr><tr><td>Вклад с частичным снятием</td><td>Удобнее для резерва, но ставка может быть ниже. Смотри неснижаемый остаток и условия снятия.</td></tr><tr><td>Накопительный счет</td><td>Обычно деньги доступны почти в любой момент, но ставка может зависеть от условий банка и меняться.</td></tr><tr><td>«Процент ежедневно»</td><td>Смотри не только рекламную ставку, а как именно начисляется доход: на минимальный остаток, ежедневный остаток или при выполнении условий.</td></tr></table><div class="callout finance-rule"><b>Главное правило:</b> подушку безопасности не стоит запирать на долгом вкладе, если деньги могут понадобиться внезапно.</div><h3>Страхование</h3><p>Обычные банковские вклады и счета участвуют в системе страхования вкладов. Стандартный лимит возмещения — до <b>1,4 млн ₽</b> на одного вкладчика в одном банке, включая начисленные проценты, с учетом предусмотренных законом особенностей.</p><div class="source-box">Источники: <a href="https://www.cbr.ru/banking_sector/faq/" target="_blank">Банк России — вопросы о вкладах</a>; <a href="https://cbr.ru/Queries/XsltBlock/File/158093/-1/2497" target="_blank">Банк России — страхование вкладов</a>.</div></section></div><section class="money-card" style="margin-top:16px"><h2>Тренажёр вклада без финансового шаманства</h2><p>Как и в бюджете, здесь нет «правильного» выбора. Сначала скажи, насколько тебе важна доступность денег, а потом посмотри на учебный результат.</p><div class="finance-sim"><div class="finance-soft"><h3>Собери свой вариант</h3><p>Меняй параметры и сравнивай логику, а не рекламу конкретного банка.</p><div class="finance-fields"><label>Сумма, ₽<input id="depositSum" min="0" type="number" value="100000"/></label><label>Годовая ставка, %<input id="depositRate" min="0" step="0.1" type="number" value="12"/></label><label>Срок<select id="depositTerm"><option value="3">3 месяца</option><option value="6">6 месяцев</option><option selected="" value="12">12 месяцев</option></select></label><div class="finance-checks"><label class="finance-check"><input id="depositCap" type="checkbox"/> Начислять проценты на уже начисленные проценты</label><label class="finance-check"><input id="depositAccess" type="checkbox"/> Можно ли забрать деньги раньше срока</label></div><button id="depositCalc" type="button">Посмотреть вариант</button></div><div class="finance-kpis"><div class="finance-kpi"><b id="depPrincipal">—</b><span>стартовая сумма</span></div><div class="finance-kpi"><b id="depProfit">—</b><span>примерный доход по учебной модели</span></div><div class="finance-kpi"><b id="depFinal">—</b><span>сумма в конце срока</span></div><div class="finance-kpi"><b id="depMonths">—</b><span>срок</span></div></div></div><div class="finance-soft"><h3>Что важно заметить</h3><div class="finance-tone neutral" id="depositTone">Здесь нет победителя. Если деньги могут понадобиться в любой момент, доступность может быть важнее максимальной ставки.</div><div class="finance-tone neutral" id="depositRule" style="margin-top:10px">Проверь, можно ли забрать деньги раньше срока, что будет с процентами при досрочном закрытии, можно ли пополнять вклад и как именно начисляется доход.</div></div></div></section></div><div class="money-pane" id="money-scams">
<div class="scam-grid">

<section class="money-card"><h2>Красные флаги фишинга</h2><div class="scam-flags"><div class="scam-flag"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 28V5"></path><path d="M9 6c7-4 10 4 16 0v12c-6 4-9-4-16 0z"></path></svg><span>Адрес сайта выглядит странно или похож на настоящий домен с одной-двумя подменёнными буквами.</span></div><div class="scam-flag"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 28V5"></path><path d="M9 6c7-4 10 4 16 0v12c-6 4-9-4-16 0z"></path></svg><span>Тебя торопят: «срочно», «прямо сейчас», «иначе потеряете деньги».</span></div><div class="scam-flag"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 28V5"></path><path d="M9 6c7-4 10 4 16 0v12c-6 4-9-4-16 0z"></path></svg><span>Просят перейти по ссылке и ввести пароль, данные карты или код из SMS.</span></div><div class="scam-flag"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 28V5"></path><path d="M9 6c7-4 10 4 16 0v12c-6 4-9-4-16 0z"></path></svg><span>Просят установить приложение или дать удалённый доступ к телефону или компьютеру.</span></div><div class="scam-flag"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 28V5"></path><path d="M9 6c7-4 10 4 16 0v12c-6 4-9-4-16 0z"></path></svg><span>Предлагают непривычный способ оплаты или перевода, который нельзя проверить в официальном приложении.</span></div></div></section>
</div>
<div class="scam-grid" style="margin-top:16px">
<section class="money-card"><h2>Тренажёр: это мошенники?</h2><div class="scenario-card"><div class="scenario-label" id="scamLabel">Сценарий 1</div><p id="scamText">«Служба безопасности банка: замечена подозрительная операция. Чтобы отменить её, назовите код из SMS сотруднику.»</p><div class="scenario-actions"><button class="scam-answer" data-answer="danger">Похоже на мошенничество</button><button class="scam-answer" data-answer="ok">Можно продолжать разговор</button></div><div class="result-box" id="scamAnswerResult">Выбери ответ.</div><button id="nextScam" style="margin-top:12px" type="button">Следующий сценарий</button></div></section>
<section class="money-card"><h2>Если уже нажал на ссылку</h2><ol class="clean-list"><li>Не вводи больше данные и не подтверждай операцию.</li><li>Если ввёл банковские данные — свяжись с банком по официальному номеру из приложения или на карте.</li><li>Если отдал доступ к аккаунту — смени пароль через официальный сайт и проверь активные сеансы.</li><li>Сохрани сообщение, адрес сайта и время события для обращения в банк или правоохранительные органы.</li></ol></section>
</div>
</div>

</div>
</section>
</div>
<section class="view" id="view-health">
<div class="home-hero"><div class="section-label">06 · Здоровье</div><h1>Не ставим диагнозы. Учимся не паниковать и понимать, что делать дальше.</h1><div class="lead">Базовая аптечка, первая помощь, понятная граница между «наблюдаю дома», «записываюсь к врачу» и «звоню 103/112», плюс навигация по записи на прием.</div></div>
<div class="health-banner health-banner-large"><b>Важно:</b> этот раздел не заменяет врача. При угрозе жизни сначала вызывай экстренную помощь.</div><div class="health-tabs" id="healthTabs"><button class="health-tab active" data-health="medicine">Аптечка и первая помощь</button><button class="health-tab" data-health="doctor">Врач и экстренная помощь</button><button class="health-tab" data-health="movement">Физическая нагрузка без спортзала</button><button class="health-tab" data-health="mental">Психологическое здоровье</button></div><div class="health-pane active" id="health-medicine"><div class="health-grid"><section class="health-card"><h2>Домашняя аптечка</h2><p>Держи небольшой запас для типичных ситуаций, а не «коллекцию на все случаи жизни».</p><ul><li>пластыри разных размеров;</li><li>стерильные салфетки и бинты;</li><li>медицинские перчатки;</li><li>антисептик для обработки кожи вокруг небольших повреждений;</li><li>термометр;</li><li>ножницы с тупыми концами;</li><li>пинцет;</li><li>холодовый пакет;</li><li>назначенные тебе постоянные лекарства.</li></ul><p>Условия хранения проверяй на упаковке и в инструкции.</p><div class="source-box">Источник: <a href="https://79cge.rospotrebnadzor.ru/node/1307" target="_blank">Роспотребнадзор — как хранить лекарства дома</a>.</div></section><section class="health-card"><h2>Что можно делать дома</h2><p>При лёгком состоянии, которое не ухудшается, можно ограничиться базовой первой помощью и наблюдением.</p><ul><li>небольшой порез — остановить кровотечение и закрыть чистой повязкой;</li><li>лёгкий поверхностный ожог — прекратить воздействие источника и охлаждать прохладной проточной водой; пузыри не вскрывать;</li><li>лёгкий ушиб — покой и холод через ткань.</li></ul><div class="source-box">Источник: <a href="https://mchs.gov.ru/deyatelnost/bezopasnost-grazhdan/universalnyy-algoritm-okazaniya-pervoy-pomoshchi_5" target="_blank">МЧС — универсальный алгоритм первой помощи</a>; <a href="https://mchs.gov.ru/deyatelnost/bezopasnost-grazhdan/termicheskiy-ozhog_2" target="_blank">МЧС — термический ожог</a>.</div></section><section class="health-card"><h2>Безрецептурные лекарства: что можно держать дома</h2><p>Ниже — не назначение лечения, а ориентир для аптечки. Статус отпуска и противопоказания зависят от конкретного препарата, дозировки и формы выпуска: перед приемом всегда смотри актуальную инструкцию на упаковке.</p><div class="pill-grid"><div class="pill-card"><h3>Парацетамол</h3><p>Жаропонижающее и обезболивающее для кратковременного облегчения боли и температуры.</p><b>Важно:</b> не дублировать с другими средствами, где уже есть парацетамол.</div><div class="pill-card"><h3>Ибупрофен</h3><p>Обезболивающее, жаропонижающее и противовоспалительное.</p><b>Важно:</b> есть противопоказания, в том числе связанные с желудком, почками и беременностью; смотри инструкцию.</div><div class="pill-card"><h3>Лоперамид</h3><p>Средство для симптоматического уменьшения острой диареи у взрослых и некоторых других групп по инструкции.</p><b>Важно:</b> не маскируй им диарею с кровью, высокой температурой или сильной болью — нужна медицинская оценка.</div><div class="pill-card"><h3>Гель/крем с НПВС</h3><p>Местные средства с действующими веществами вроде ибупрофена или диклофенака применяют при некоторых болях мышц и суставов.</p><b>Важно:</b> не наносить на поврежденную кожу и учитывать противопоказания конкретного препарата.</div><div class="pill-card"><h3>Антисептик</h3><p>Для обработки кожи и некоторых небольших повреждений — только в соответствии с инструкцией конкретного средства.</p><b>Важно:</b> не смешивай разные антисептики без необходимости.</div><div class="pill-card"><h3>Перевязочные материалы</h3><p>Пластыри, стерильные салфетки, бинты и перчатки часто полезнее, чем большая полка лекарств.</p><b>Важно:</b> регулярно проверяй сроки годности и упаковку.</div></div><div class="source-box">Для поиска конкретного препарата и его инструкции используй Государственный реестр лекарственных средств Минздрава; перечень ЖНВЛП также публикуется Минздравом. <a href="https://grls.rosminzdrav.ru/" target="_blank">ГРЛС</a>.</div></section></div></div><div class="health-pane" id="health-doctor"><div class="health-grid"><section class="health-card"><h2>Когда записаться к врачу</h2><p>Если симптом не проходит, повторяется, мешает обычной жизни, усиливается или причина тебе непонятна — нужна медицинская оценка. Не пытайся лечить серьёзное состояние по самодиагностике.</p><ul><li>боль сильная, необычная или нарастает;</li><li>самочувствие заметно ухудшается;</li><li>повторяется рвота, выраженная слабость или обезвоживание;</li><li>травма выглядит серьёзной;</li><li>кровотечение продолжается или рана требует медицинской обработки.</li></ul></section><section class="health-card"><h2>Когда звонить 103 или 112</h2><div class="danger-box"><b>Срочно:</b> потеря сознания, остановка дыхания или кровообращения, угрожающие нарушения дыхания, интенсивное наружное кровотечение, серьёзная травма, отравление, судорожный приступ с потерей сознания и другие состояния с угрозой жизни или здоровью.</div><div class="money-kpi"><div class="kpi"><b>112</b><span>единый номер экстренных служб</span></div><div class="kpi"><b>103</b><span>скорая медицинская помощь</span></div><div class="kpi"><b>101</b><span>пожарные и спасатели</span></div></div><p>Диспетчеру сообщи адрес, что произошло, сколько пострадавших и каково их состояние.</p><div class="source-box">Источник: <a href="https://mchs.gov.ru/deyatelnost/bezopasnost-grazhdan/kak-pravilno-vyzvat-skoruyu_5" target="_blank">МЧС — как правильно вызвать скорую</a>.</div></section></div><section class="health-card" style="margin-top:16px"><h2>Как записаться к врачу</h2><div class="health-grid"><div><h3>Через Госуслуги</h3><ol><li>Открой услугу «Запись на прием к врачу».</li><li>Выбери регион, медицинскую организацию и специальность.</li><li>Выбери дату и время и подтверди запись.</li><li>Проверь кабинет и адрес приема.</li></ol><div class="source-box">Описание услуги: <a href="https://info.gosuslugi.ru/download.php?id=8049" target="_blank">ЕПГУ — запись на прием к врачу</a>.</div></div><div><h3>Через регистратуру</h3><p>Позвони в свою поликлинику или обратись лично. Набор документов и порядок записи лучше уточнить у конкретной медицинской организации.</p></div></div></section></div><div class="health-pane" id="health-movement">
<section class="health-tool-grid">
<section class="health-tool-card">
<h2>Физическая нагрузка без спортзала</h2>
<p>Не нужен абонемент, спортивная одежда и час свободного времени. Начни с того, что реально помещается в обычный день: немного ходьбы, несколько простых упражнений дома и постепенное увеличение нагрузки.</p>
<div class="health-note"><b>Ориентир, а не экзамен:</b> ВОЗ советует взрослым набирать 150–300 минут умеренной аэробной активности в неделю или 75–150 минут интенсивной, а силовые упражнения на основные группы мышц делать минимум 2 дня в неделю. Не нужно пытаться выполнить этот объём в первую же неделю.</div>
<h3>Перед началом</h3>
<ul class="health-steps">
<li>Выбери устойчивую поверхность и убери то, обо что можно споткнуться.</li>
<li>Первые тренировки делай короткими: 5–15 минут вполне достаточно.</li>
<li>Двигайся плавно. Лёгкая усталость нормальна, резкая или нарастающая боль — повод остановиться.</li>
<li>Если давно не занимался, начни с малого и добавляй по одному параметру: время, повторения или сложность.</li>
</ul>
<h3>Шесть упражнений, с которых можно начать</h3>
<div class="exercise-detail-grid">
<div class="exercise-detail"><div class="exercise-no">01</div><div><h4>Приседание к стулу</h4><p><b>Зачем:</b> ноги и ягодицы.</p><p><b>Как:</b> поставь устойчивый стул за спиной, отведи таз назад и мягко коснись сиденья. Встань, не падая в кресло. Держи стопы устойчиво.</p><p><b>Старт:</b> 1–2 подхода по 6–10 повторов.</p></div></div>
<div class="exercise-detail"><div class="exercise-no">02</div><div><h4>Отжимание от стены</h4><p><b>Зачем:</b> грудь, плечи и руки.</p><p><b>Как:</b> ладони на стене примерно на уровне плеч. Отойди на шаг, согни локти и приблизь корпус к стене, затем оттолкнись.</p><p><b>Старт:</b> 1–2 подхода по 6–12 повторов.</p></div></div>
<div class="exercise-detail"><div class="exercise-no">03</div><div><h4>Подъём на носки</h4><p><b>Зачем:</b> икры и устойчивость.</p><p><b>Как:</b> встань рядом со стеной или крепкой опорой, поднимись на носки и медленно опустись. Не раскачивайся.</p><p><b>Старт:</b> 1–2 подхода по 10–15 повторов.</p></div></div>
<div class="exercise-detail"><div class="exercise-no">04</div><div><h4>Подъём со стула</h4><p><b>Зачем:</b> ноги и повседневная сила.</p><p><b>Как:</b> сядь на устойчивый стул, стопы полностью на полу. Наклони корпус немного вперёд и встань, затем спокойно сядь обратно.</p><p><b>Старт:</b> 1–2 подхода по 6–10 повторов.</p></div></div>
<div class="exercise-detail"><div class="exercise-no">05</div><div><h4>Шаги на месте</h4><p><b>Зачем:</b> лёгкая аэробная нагрузка.</p><p><b>Как:</b> шагай в удобном темпе, постепенно подключая руки. Можно начать с 2–5 минут и разбить активность на несколько коротких эпизодов.</p><p><b>Ориентир:</b> дыхание заметно учащается, но короткий разговор всё ещё возможен.</p></div></div>
<div class="exercise-detail"><div class="exercise-no">06</div><div><h4>Подъём по лестнице</h4><p><b>Зачем:</b> ноги и выносливость.</p><p><b>Как:</b> начни с одного спокойного пролёта. Держись за перила, если чувствуешь себя неуверенно, и не превращай это в гонку.</p><p><b>Прогресс:</b> сначала увеличивай количество минут, а не скорость.</p></div></div>
</div>
<h3>Простой план на неделю</h3>
<div class="week-plan">
<div><b>Понедельник</b><span>Небольшая прогулка на 10–20 минут. Просто пройдись в удобном темпе.</span></div><div><b>Вторник</b><span>Сделай 3–4 простых упражнения по 2 подхода. Не нужно выжимать из себя максимум.</span></div><div><b>Среда</b><span>Прогуляйся или немного пройдись по лестнице, если тебе это комфортно.</span></div><div><b>Четверг</b><span>Можно отдохнуть. Если хочется подвигаться — сделай лёгкую растяжку на 5–10 минут.</span></div><div><b>Пятница</b><span>Ещё один короткий домашний комплекс: 3–4 упражнения по 2 подхода.</span></div><div><b>Суббота</b><span>Выбери прогулку подольше. Можно пройтись по району, сходить пешком по делам или просто погулять.</span></div><div><b>Воскресенье</b><span>Свободный день. Отдыхай или подвигайся по настроению.</span></div>
</div>
<p class="micro-note">Это пример, а не обязательное расписание. Если сейчас нагрузки почти нет, начни с половины объёма и постепенно приближайся к ориентиру.</p>
<div class="health-note"><b>Когда остановиться:</b> необычная боль в груди, выраженная одышка, обморок, сильное головокружение или внезапное ухудшение самочувствия — повод прекратить нагрузку и при необходимости обратиться за медицинской помощью.</div>
<div class="source-box">Ориентиры: <a href="https://www.who.int/europe/news-room/fact-sheets/item/physical-activity" target="_blank" rel="noopener">ВОЗ — физическая активность</a>. Пошаговые упражнения дома: <a href="https://www.nhs.uk/live-well/exercise/strength-exercises/" target="_blank" rel="noopener">NHS — упражнения на силу</a>, <a href="https://www.nhs.uk/live-well/exercise/flexibility-exercises/" target="_blank" rel="noopener">NHS — гибкость</a>, <a href="https://www.nhs.uk/live-well/exercise/how-to-improve-strength-flexibility/" target="_blank" rel="noopener">NHS — сила и гибкость</a>.</div>
</section>
<section class="health-tool-card">
<h2>Йога и мягкая растяжка</h2>
<p>Здесь не нужно тянуться до пола любой ценой. Цель — немного подвигаться, почувствовать тело и закончить спокойнее, чем начал.</p>
<h3>Короткая практика на 8–10 минут</h3>
<ol class="health-steps"><li><b>1–2 минуты:</b> спокойное дыхание, круги плечами и мягкие движения шеей.</li><li><b>1–2 минуты:</b> «кошка–корова» в комфортной амплитуде.</li><li><b>2 минуты:</b> мягкое вытяжение задней поверхности ног без пружинящих движений.</li><li><b>2 минуты:</b> спокойная поза стоя с переносом веса с ноги на ногу.</li><li><b>1–2 минуты:</b> сидя или лёжа, спокойное дыхание и отдых.</li></ol>
<h3>Как понять, что всё идёт нормально</h3>
<ul class="health-steps"><li>Есть ощущение вытяжения или работы мышц, но нет резкой боли.</li><li>Ты можешь спокойно дышать и не задерживаешь дыхание специально.</li><li>После занятия должно оставаться ощущение «поработал», а не необходимость срочно лежать.</li></ul>
<div class="health-note"><b>Важно:</b> при травме, выраженной боли, беременности, недавней операции или другой медицинской особенности сначала обсуди подходящую нагрузку с врачом.</div>
<div class="source-box">Примеры домашних упражнений и видео: <a href="https://www.nhs.uk/live-well/exercise/strength-and-flex-exercise-plan-how-to-videos/" target="_blank" rel="noopener">NHS — strength &amp; flex, видео и инструкции</a>. Общие рекомендации ВОЗ: <a href="https://www.who.int/europe/news-room/fact-sheets/item/physical-activity" target="_blank" rel="noopener">физическая активность</a>.</div>
</section>
</section>
</div>
<div class="health-pane" id="health-mental"><section class="health-tool-grid"><section class="health-tool-card">
<h2>Психологическое здоровье</h2>
<p>Психическое здоровье — это не только отсутствие диагноза. Это ещё и способность справляться со стрессом, отдыхать, поддерживать отношения, работать и замечать, когда привычный ритм перестал работать.</p>
<div class="mood-grid">
<button class="mood-btn" data-mood="tense"><b>Я всё время напряжён</b><span>проверим, что можно облегчить сегодня</span></button>
<button class="mood-btn" data-mood="sleep"><b>Плохо сплю</b><span>несколько шагов для вечера и утра</span></button>
<button class="mood-btn" data-mood="sad"><b>Давно нет сил и настроения</b><span>когда уже не стоит ждать, что «само пройдёт»</span></button>
<button class="mood-btn" data-mood="lonely"><b>Ощущаю себя одиноко</b><span>как возвращать контакт с людьми без насилия над собой</span></button>
</div>
<div class="mood-result" id="mood-result">Выбери ситуацию — получишь не диагноз, а нормальные первые шаги.</div>
<h3>Что обычно помогает поддерживать себя</h3>
<ul><li><b>Сон:</b> старайся держать более-менее стабильное время сна и подъёма и не превращать кровать в рабочее место.</li><li><b>Движение:</b> даже прогулка может быть частью заботы о психическом состоянии.</li><li><b>Люди:</b> не обязательно устраивать большую социальную жизнь — иногда достаточно одного человека, которому можно написать честное «мне сейчас тяжело».</li><li><b>Паузы:</b> если новости и соцсети только усиливают тревогу, временно сократи их.</li><li><b>Профессиональная помощь:</b> если состояние долго не улучшается или заметно мешает жить, работать, учиться и общаться, это нормальный повод обратиться за помощью.</li></ul>
<div class="health-note"><b>Важно:</b> этот блок не ставит диагнозов. Длительная подавленность, сильная тревога, невозможность выполнять обычные дела или мысли о причинении вреда себе — повод обратиться за профессиональной помощью; при непосредственной угрозе жизни нужна экстренная помощь.</div>
<div class="source-box">Опираемся на материалы ВОЗ о стрессе, самопомощи и психическом здоровье: <a href="https://www.who.int/news-room/questions-and-answers/item/stress" target="_blank">ВОЗ — стресс</a>, <a href="https://www.who.int/news-room/questions-and-answers/item/self-care-for-health-and-well-being" target="_blank">ВОЗ — самопомощь</a>, <a href="https://www.who.int/health-topics/mental-health" target="_blank">ВОЗ — психическое здоровье</a> и <a href="https://www.who.int/teams/mental-health-and-substance-use/treatment-care/Psychological-interventions/psychological-self-help-interventions" target="_blank">ВОЗ — психологические программы самопомощи</a>.</div>
</section></section></div>



</section>
<section class="view" id="view-life">
<div class="home-hero"><div class="section-label">07 · Жильё и быт</div><h1>Чтобы дома не было магии: разбираем вещи, аварии и мелкие поломки.</h1><div class="lead">Сначала безопасность, потом диагностика. Показываем, что в доме можно сделать самому, где искать нужный кран или счётчик и в какой момент пора звонить специалисту.</div></div>
<div class="life-quick" style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:18px;margin-bottom:8px">
<div class="life-card" style="padding:15px"><b>Вода</b><div style="color:var(--muted);font-size:12px;margin-top:6px">краны, протечки, засоры</div></div>
<div class="life-card" style="padding:15px"><b>Электричество</b><div style="color:var(--muted);font-size:12px;margin-top:6px">щиток, автоматы, лампы</div></div>
<div class="life-card" style="padding:15px"><b>Газ</b><div style="color:var(--muted);font-size:12px;margin-top:6px">безопасность и аварии</div></div>
<div class="life-card" style="padding:15px"><b>Дом</b><div style="color:var(--muted);font-size:12px;margin-top:6px">соседи, счётчики, службы</div></div>
</div>
<div class="life-tabs" id="lifeTabs">
<button class="life-tab active" data-life="objects">Разобрать предмет</button>
<button class="life-tab" data-life="emergency">Если что-то случилось</button>
<button class="life-tab" data-life="meters">Счётчики</button>
<button class="life-tab" data-life="clogs">Засоры</button>
<button class="life-tab" data-life="locations">Где что искать</button>
<button class="life-tab" data-life="neighbors">Соседи и правила дома</button>
<button class="life-tab" data-life="contacts">Кому звонить</button>
<button class="life-tab" data-life="diy">Мелкий ремонт</button>
</div>
<div class="life-pane active" id="life-objects">
<section class="life-card"><h2>Интерактивная квартира: нажимай на части предмета</h2><p>Выбирай предмет слева, затем отдельную деталь. Цель — не ремонтировать всё самому, а понимать, что это за штука и где заканчивается безопасная бытовая самостоятельность.</p>
<div class="object-layout" style="margin-top:16px">
<div class="object-menu">
<button class="object-btn active" data-object="sink">Раковина и сифон</button>
<button class="object-btn" data-object="toilet">Унитаз</button>
<button class="object-btn" data-object="washer">Стиральная машина</button>
<button class="object-btn" data-object="shield">Электрощит</button>
<button class="object-btn" data-object="gas">Газовая плита</button>
</div>
<div class="object-visual"><div class="object-title" id="objectTitle">Раковина и сифон</div><div id="objectIntro">Сифон — изогнутая часть под раковиной, где остаётся вода и который можно снять для очистки от мусора.</div><div class="parts" id="objectParts"></div><div class="result-box" id="partInfo">Выбери деталь, чтобы увидеть, для чего она нужна и что с ней можно делать самому.</div></div>
</div>
</section>
</div>
<div class="life-pane" id="life-emergency">
<div class="life-grid">
<section class="life-card"><h2>Прорвало трубу</h2><ol><li>Если безопасно — перекрой запорный кран на своей линии или общий ввод воды в квартиру.</li><li>Отодвинь электроприборы от воды и не трогай электроприборы мокрыми руками.</li><li>Позвони в аварийно-диспетчерскую службу дома/управляющей организации. Контакт обычно указан в платежке, на стенде дома или в договоре управления.</li><li>Если вода быстро распространяется, есть риск поражения электричеством или невозможно безопасно добраться до крана — звони 112.</li></ol><p><b>Не</b> начинай разбирать стояк или перекрывать чужие коммуникации без понимания, что именно ты отключаешь.</p></section>
<section class="life-card"><h2>Запах газа</h2><div class="danger-box"><b>Не включай и не выключай свет, электроприборы и не используй открытый огонь.</b> По возможности перекрой газ, открой окна, выйди из помещения и звони 104 или 112 уже с безопасного места.</div><p>Не пытайся искать место утечки огнём или самостоятельно чинить газовое оборудование.</p><div class="source-box">Источник: <a href="https://mchs.gov.ru/deyatelnost/bezopasnost-grazhdan/utechka-bytovogo-gaza_9" target="_blank">МЧС — помощь при утечке бытового газа</a>; <a href="https://mchs.gov.ru/deyatelnost/press-centr/novosti/1431843" target="_blank">МЧС — номер 112</a>.</div></section>
<section class="life-card"><h2>Нет света</h2><ul><li>Проверь, не выбило ли автомат в щите.</li><li>Если выбило один автомат — не включай его многократно, особенно если сразу снова отключается.</li><li>Если запах гари, дым, искрение или нагрев щита — не трогай его и обращайся за аварийной помощью.</li><li>Если проблема только в квартире — управляющая организация/электроаварийная служба; если затронут подъезд или дом — сообщи диспетчеру.</li></ul></section>
<section class="life-card"><h2>Течёт сантехника</h2><p>Для простого капающего крана иногда достаточно заменить аэратор или уплотнение, но соединения на стояках, смесители внутри стены и скрытые протечки лучше не разбирать без опыта.</p><p>Сфотографируй место течи и перекрой ближайший доступный кран. Если не уверен, где он, — звони в аварийно-диспетчерскую службу дома.</p></section>
</div>
</div>
<div class="life-pane" id="life-meters">
<div class="life-grid">
<section class="life-card"><h2>Как снять показания</h2><p>Нужна цифра на дисплее или счётном механизме. Для передачи обычно берут текущие показания по каждому прибору отдельно и не придумывают цифры за пропущенный месяц.</p><div class="meter-box"><b>Пример водосчётчика</b><div class="meter-display">00125.438</div><p>В учебном примере целая часть — <b>125 м³</b>. Десятичную часть используй только там, где её принимает твой поставщик.</p></div><h3>Как не перепутать</h3><ul><li>Запиши номер прибора и его текущие показания.</li><li>Сверь прошлое значение: текущее обычно не должно быть меньше предыдущего.</li><li>Для электроэнергии посмотри, какой тариф/тарифная зона используется в твоём счётчике.</li></ul></section>
<section class="life-card"><h2>Как передать</h2><ol><li>Через личный кабинет поставщика.</li><li>Через ГИС ЖКХ, если конкретный прибор и поставщик поддерживают передачу.</li><li>Через иной канал, указанный в договоре или платежном документе.</li></ol><p>В ГИС ЖКХ сроки передачи могут зависеть от условий конкретного договора/исполнителя.</p><div class="source-box">Источник: <a href="https://cdn.dom.gosuslugi.ru/webhelp/topics/_citizen/devices/send_data-grazhd.html" target="_blank">ГИС ЖКХ — передача показаний приборов учёта</a>.</div></section>
</div>
</div>
<div class="life-pane" id="life-clogs">
<section class="life-card"><h2>Засоры: что можно попробовать самому</h2><div class="clog-grid"><div class="clog-step"><b>1. Убери видимый мусор</b><span>В раковине, фильтре или сливе иногда проблема прямо перед глазами.</span></div><div class="clog-step"><b>2. Вантуз</b><span>Добавь немного воды, обеспечь плотное прилегание и сделай несколько уверенных прокачиваний.</span></div><div class="clog-step"><b>3. Сифон</b><span>Подставь ёмкость, открути нижнюю часть сифона и очисти её, если конструкция доступна и понятна.</span></div></div><div class="do-not"><b>Не лей разные химические средства одно за другим.</b> Не смешивай очистители: реакция может быть опасной. Если вода стоит в нескольких точках, поднимается из слива или засор явно относится к общему стояку, нужен специалист/аварийная служба.</div><h3>Как не допускать засоров</h3><ul><li>не смывай жир и масло в слив;</li><li>используй сетку на кухонном сливе;</li><li>не отправляй в унитаз салфетки, ватные палочки и другие предметы, не предназначенные для смыва;</li><li>периодически очищай доступные фильтры и слив стиральной машины по инструкции.</li></ul></section>
</div>
<div class="life-pane" id="life-locations">
<div class="life-grid">
<section class="life-card"><h2>Где обычно искать запорные краны</h2><p>Точное расположение зависит от планировки и инженерии дома. Схема ниже — ориентир, а не гарантия: подпиши свои реальные точки после проверки.</p>
<div class="clog-grid">
<div class="clog-step"><b>Ввод холодной воды</b><span>Часто находится рядом со стояком в санузле, техническом шкафу или за ревизионным люком. Нужен, чтобы перекрыть воду в квартире целиком.</span></div>
<div class="clog-step"><b>Горячая вода</b><span>Обычно рядом с вводом холодной воды, но схема бывает другой в домах с бойлером или иной системой.</span></div>
<div class="clog-step"><b>Кран на приборе</b><span>У смесителя, стиральной машины или другого потребителя может быть свой локальный кран. Он перекрывает именно этот прибор, а не всю квартиру.</span></div>
</div>
<div class="callout" style="margin-top:12px"><b>Полезная привычка:</b> один раз в спокойной обстановке найди все краны и проверь, понятно ли, что именно каждый из них перекрывает. Не крути тугие или непонятные вентили с усилием.</div>
</section>
<section class="life-card"><h2>Где обычно расположен электрощит</h2><p>В квартире щит чаще всего находится у входа, в прихожей или рядом с входной дверью. В некоторых домах часть оборудования вынесена на лестничную площадку.</p><div class="parts" style="margin-top:12px"><div class="part"><b>Вводной аппарат</b><small>Отвечает за питание квартиры целиком или крупной части сети.</small></div><div class="part"><b>Автоматы</b><small>Отключают отдельные линии при перегрузке или коротком замыкании.</small></div><div class="part"><b>УЗО / дифавтомат</b><small>Защищает от опасных токов утечки в зависимости от схемы щита.</small></div><div class="part"><b>Счётчик</b><small>Считает расход электроэнергии; точное место установки зависит от дома.</small></div></div><div class="danger-box" style="margin-top:12px"><b>Не разбирай щит и не снимай защитные крышки.</b> Если есть запах гари, дым, искрение или сильный нагрев — не трогай оборудование и вызывай аварийную помощь.</div></section>
<section class="life-card"><h2>Мини-карта квартиры: проверь себя</h2><p>Нажми на объект, чтобы увидеть, зачем знать его расположение.</p><div class="parts" id="locationQuiz"><button class="part" data-loc="water"><b>Кран ввода воды</b><small>Что перекрывает?</small></button><button class="part" data-loc="shield"><b>Электрощит</b><small>Что отключает?</small></button><button class="part" data-loc="gas"><b>Газовый кран</b><small>Когда его трогать?</small></button><button class="part" data-loc="riser"><b>Стояк</b><small>Почему это важно?</small></button></div><div class="result-box" id="locationInfo" style="margin-top:12px">Выбери объект.</div></section>
<section class="life-card"><h2>Что относится к общему имуществу</h2><p>В многоквартирном доме часть инженерных систем и оборудования обслуживает больше одной квартиры и относится к общему имуществу. Поэтому не стоит самостоятельно разбирать стояки, общедомовые узлы или другие элементы, от которых зависят соседи.</p><div class="source-box">Основание: ст. 36 ЖК РФ и требования к управлению общим имуществом. <a href="https://www.consultant.ru/document/cons_doc_LAW_51057/ef9450d47396aa2c9646eddb2126895406ce5b04/" target="_blank">ЖК РФ, ст. 36</a>; <a href="https://www.consultant.ru/document/cons_doc_LAW_51057/71c7149b7b2a7693ca3f88b93580da0a5376e041/" target="_blank">ЖК РФ, ст. 161</a>.</div></section>
</div>
</div>
<div class="life-pane" id="life-neighbors">
<div class="life-grid">
<section class="life-card"><h2>Зачем вообще взаимодействовать с соседями</h2><p>Потому что часть проблем в многоквартирном доме нельзя решить только внутри своей квартиры: протечки, доступ к общедомовым узлам, шум, ремонтные работы, общие собрания и безопасность.</p><h3>Нормальный бытовой уровень общения</h3><ul><li>обменяться контактами с ближайшими соседями, если вам обоим это комфортно;</li><li>предупредить о шумном ремонте в рамках местных правил и разумного времени;</li><li>сообщить о протечке или иной аварии, если она может затронуть соседнюю квартиру;</li><li>не заходить в чужую квартиру без согласия, кроме предусмотренных законом аварийных процедур.</li></ul></section>
<section class="life-card"><h2>Какие правила действуют для дома</h2><p>Есть федеральные правила пользования жилыми помещениями, требования пожарной и санитарной безопасности, нормы по общему имуществу, а также региональные правила тишины и локальные правила дома.</p><div class="parts"><div class="part"><b>Тишина</b><small>Конкретные часы определяются в том числе региональным законодательством. Не обещай соседям универсальное «после 23:00 нельзя» без проверки региона.</small></div><div class="part"><b>Общее имущество</b><small>Лестницы, коридоры, часть инженерных систем и другое имущество нельзя использовать так, чтобы нарушать права других жильцов.</small></div><div class="part"><b>Безопасность</b><small>Нельзя создавать пожароопасные или иные опасные условия в квартире и общих помещениях.</small></div><div class="part"><b>Ремонт</b><small>Для перепланировки и некоторых работ могут требоваться согласования. Обслуживание общедомовых систем обычно не относится к DIY внутри квартиры.</small></div></div><div class="source-box">Источники: <a href="https://www.consultant.ru/document/cons_doc_LAW_51057/56cfe20f3c49689a0fad54a0d3c7ea57c33effb1/" target="_blank">ЖК РФ, ст. 17</a>; <a href="https://www.consultant.ru/document/cons_doc_LAW_57956/aa1d0f065b1e3418e8e540e707b9d755c24ec6bf/" target="_blank">Правила пользования жилыми помещениями</a>.</div></section>
<section class="life-card"><h2>Если сосед шумит</h2><ol><li>Сначала, если безопасно, спокойно сообщи о проблеме и уточни, можно ли закончить работу тише.</li><li>Проверь региональные правила тишины: время и запреты различаются.</li><li>Если нарушение систематическое и мирно решить не получается, фиксируй даты и обстоятельства и обращайся в предусмотренный твоим регионом орган/службу.</li><li>При угрозе жизни, пожаре или другой экстренной ситуации — 112.</li></ol></section>
<section class="life-card"><h2>Если проблема может затронуть соседей</h2><div class="callout"><b>Протечка — сразу сообщить.</b> Даже если вода пока только капает, предупреди соседей снизу и аварийную службу дома, чтобы ограничить ущерб.</div><div class="callout" style="margin-top:10px"><b>Ремонт — предупреди заранее.</b> Особенно когда предстоят шумные работы, отключение воды или доступ специалистов к общим узлам.</div><div class="callout" style="margin-top:10px"><b>Не перекрывай общий стояк самовольно.</b> Если отключение затронет другие квартиры, это задача аварийной службы или управляющей организации.</div></section>
</div>
</div>
<div class="life-pane" id="life-diy">
<div class="life-grid">
<section class="life-card"><h2>Как выбрать лампочку</h2><p>Главное — не смотреть только на форму. Сначала узнай цоколь и допустимую мощность/тип лампы для своего светильника.</p><div class="bulb-picker"><button class="bulb-option active" data-bulb="led"><b>LED</b><br/><small>экономичная, обычно меньше нагревается</small></button><button class="bulb-option" data-bulb="filament"><b>Филаментная LED</b><br/><small>вид «классической» лампы, но на LED</small></button><button class="bulb-option" data-bulb="warm"><b>Тёплый свет</b><br/><small>уютный, часто около 2700–3000 K</small></button><button class="bulb-option" data-bulb="neutral"><b>Нейтральный свет</b><br/><small>более спокойный белый, часто около 4000 K</small></button></div><div class="bulb-result" id="bulbResult">Ищи на старой лампе или светильнике обозначение цоколя, например E27 или E14. Для мощности ориентируйся на маркировку светильника и упаковку новой лампы.</div><div class="notice"><b>Перед заменой:</b> выключи светильник, а лучше обесточь соответствующую линию, если конструкция позволяет. Дай горячей лампе остыть.</div></section>
<section class="life-card"><h2>Как поменять лампочку</h2><ol><li>Выключи свет.</li><li>Дай лампе остыть.</li><li>Если это безопасно и конструкция позволяет, обесточь линию.</li><li>Сними старую лампу без усилия.</li><li>Сравни цоколь новой лампы с патроном.</li><li>Установи новую лампу до нормальной посадки, но не перетягивай.</li><li>Включи питание и проверь работу.</li></ol><div class="danger-box">Если патрон болтается, обгорел, пахнет гарью, искрит или видны повреждённые провода — не ремонтируй его сам.</div></section>
<section class="life-card"><h2>Что можно попробовать самому</h2><p>Вот безопасные бытовые задачи, которые обычно не требуют вмешательства в скрытые коммуникации.</p><div class="diy-grid"><div class="diy-card"><h3>Заменить уплотнитель на кране</h3><p>Только на доступном соединении после перекрытия воды. Если соединение на стояке или скрытая течь — специалист.</p></div><div class="diy-card"><h3>Почистить сифон</h3><p>Поставь ёмкость под раковину, разбери доступную часть, промой и аккуратно собери обратно.</p></div><div class="diy-card"><h3>Поменять батарейки</h3><p>Пульт, часы, датчик дыма и другие бытовые устройства обычно не требуют специального ремонта.</p></div><div class="diy-card"><h3>Подтянуть ручку или крепёж</h3><p>Если это обычный мебельный или бытовой крепёж и нет риска повредить коммуникации.</p></div></div></section>
<section class="life-card"><h2>Где остановиться</h2><p>Не делай самостоятельно работы с газом, скрытой электропроводкой, стояками, общедомовыми узлами и любыми работами, где ошибка может привести к пожару, поражению током или большому затоплению.</p><div class="callout"><b>Хорошее правило:</b> если для ремонта нужно вскрывать стену, снимать крышку электрощита, разбирать газовый прибор или отключать соседей — это уже не обычный бытовой DIY.</div></section>
</div>
</div>
<div class="life-pane" id="life-contacts">
<section class="life-card"><h2>Кому звонить</h2><div class="emergency-grid"><div class="emergency-card"><h3>112</h3><p>Экстренные ситуации: угроза жизни, сильная авария, пожар, запах газа, опасное затопление и т. п.</p></div><div class="emergency-card"><h3>104</h3><p>Аварийная газовая служба при запахе бытового газа и других аварийных ситуациях с газом.</p></div><div class="emergency-card"><h3>Аварийно-диспетчерская служба дома</h3><p>Прорывы, общедомовые коммуникации, опасные протечки и проблемы, относящиеся к зоне ответственности управляющей организации.</p></div><div class="emergency-card"><h3>Поставщик услуги</h3><p>Счётчики, начисления, передача показаний, локальные аварийные номера — смотри платежку, договор и личный кабинет.</p></div></div><div class="contact-row"><label>Моя УК / аварийно-диспетчерская<input id="myUk" placeholder="впиши номер"/></label><label>Аварийный номер электросетей<input id="myPower" placeholder="впиши номер"/></label></div><div class="action-row"><button id="saveContacts" type="button">Сохранить контакты</button></div><div class="source-box">Для экстренных ситуаций используй 112; номер 104 относится к аварийной газовой службе. Конкретные номера УК, аварийных служб воды и электричества зависят от дома и региона — приложение не должно придумывать их.</div></section>
</div>
</section>
<section class="view" id="view-pets">
<div class="home-hero"><div class="section-label">08 · Домашние животные</div><h1>Уход без паники и без ветеринарной самодеятельности.</h1><div class="lead">Базовая организация дома, кормление, гигиена, безопасная среда и понимание момента, когда нужен ветеринар. Для примеров используем кошек, собак, рыбок, хомяков, попугаев и черепах.</div></div>
<div class="pet-tabs" id="petTabs">
<button class="pet-tab active" data-pet="start">С чего начать</button>
<button class="pet-tab" data-pet="cats">Кошка</button>
<button class="pet-tab" data-pet="dogs">Собака</button>
<button class="pet-tab" data-pet="fish">Рыбки</button>
<button class="pet-tab" data-pet="hamster">Хомяк</button>
<button class="pet-tab" data-pet="parrot">Попугай</button>
<button class="pet-tab" data-pet="turtle">Черепаха</button>
<button class="pet-tab" data-pet="safe">Безопасность</button>
</div>
<div class="pet-pane active" data-pet-pane="start">
<div class="pet-grid">
<section class="pet-card"><h2>До появления животного</h2><ol><li>Проверь, разрешено ли содержание животного в твоём жилье и есть ли ограничения по правилам дома или договорам.</li><li>Подготовь безопасную зону, миски, место отдыха и переноску.</li><li>Заранее найди ветеринарную клинику и сохрани контакт.</li><li>Составь месячный бюджет: корм, наполнитель/грунт, расходники, профилактика и запас на непредвиденные траты.</li></ol></section>
<section class="pet-card"><h2>Что должно быть дома</h2><div class="pet-species"><div class="pet-card"><b>Кошка</b><p>лоток, наполнитель, миски, переноска, когтеточка.</p></div><div class="pet-card"><b>Собака</b><p>миски, поводок, адресник, переноска или ремень безопасности, пакетики.</p></div><div class="pet-card"><b>Рыбки</b><p>аквариум, фильтрация, подходящий грунт, термометр и оборудование по виду рыб.</p></div><div class="pet-card"><b>Хомяк</b><p>просторное жильё, безопасное колесо, укрытие, поилка и подходящий корм.</p></div><div class="pet-card"><b>Попугай</b><p>клетка, безопасные жердочки, кормушки и игрушки для обогащения среды.</p></div><div class="pet-card"><b>Черепаха</b><p>подходящий террариум, температурный режим, освещение и рацион по виду.</p></div></div></section>
<section class="pet-card"><h2>Мини-решение перед покупкой</h2><p>Проверь три вещи: <b>время</b>, <b>деньги</b>, <b>условия дома</b>. Если хотя бы один пункт сейчас не тянется — лучше отложить решение, чем пытаться «как-нибудь потом».</p><div class="pet-budget"><div class="kpi"><b>Корм</b><span>регулярно</span></div><div class="kpi"><b>Гигиена</b><span>регулярно</span></div><div class="kpi"><b>Ветеринар</b><span>планово</span></div><div class="kpi"><b>Инвентарь</b><span>по необходимости</span></div><div class="kpi"><b>Резерв</b><span>непредвиденное</span></div></div></section>
</div>
</div>
<div class="pet-pane" data-pet-pane="cats">
<div class="pet-grid"><section class="pet-card"><h2>Кошка: база</h2><ul><li>Лоток ставь в спокойном месте с постоянным доступом.</li><li>Вода должна быть доступна постоянно; миску держи чистой.</li><li>Когтеточка — там, где кошка реально бывает.</li><li>Переноску лучше держать доступной, а не доставать только перед поездкой к врачу.</li></ul></section><section class="pet-card"><h2>Уборка</h2><p>Убирай загрязнения регулярно, а наполнитель меняй по его типу и состоянию. Не используй рядом с животным резко пахнущие или раздражающие средства без необходимости.</p></section>
<section class="pet-card"><h2>Кормление: как читать варианты</h2><p>Основа — полнорационный корм для кошек нужного возраста и состояния. Сухой, влажный или их сочетание могут быть рабочим вариантом. Смотри, чтобы корм был предназначен именно для кошек и соответствовал этапу жизни.</p><ul><li>Лакомства не должны вытеснять основной рацион.</li><li>Сыр и другие очень солёные или жирные продукты со стола лучше не превращать в привычку.</li><li>Смена корма обычно делается постепенно.</li></ul><div class="pet-safe"><b>Важно:</b> лакомства — дополнение, а не замена основного рациона. Переход на новый корм делай постепенно, если ветеринар не советует иначе.</div></section>
<section class="pet-card"><h2>Лоток и наполнители</h2><p>Популярные варианты: комкующийся минеральный, древесный, силикагелевый и растительный. У каждого свои свойства по запаху, пылению и удобству уборки.</p><ul><li>Убирай комки и загрязнения регулярно.</li><li>Полную замену делай по инструкции конкретного наполнителя и по состоянию лотка.</li><li>Если кошка перестала пользоваться лотком, не наказывай её: ищи причину и при резком изменении поведения связывайся с ветеринаром.</li></ul></section>
<section class="pet-card"><h2>Ветеринар и прививки</h2><p>Плановый осмотр обычно нужен регулярно, а при появлении питомца стоит обсудить вакцинацию, паразитов, стерилизацию/кастрацию и питание. Для кошек базовые вакцины подбираются по возрасту и риску; бешенство учитывает требования региона и образ жизни.</p><div class="pet-warning"><b>Срочно:</b> затруднённое дыхание, тяжёлая травма, судороги, подозрение на отравление, резкое ухудшение состояния — повод обращаться за ветеринарной помощью, а не ждать планового визита.</div></section>
<section class="pet-card"><h2>Прогулки и обогащение среды</h2><p>Кошке прогулка на улице не обязательна: многие домашние кошки прекрасно живут в квартире при наличии игры, когтеточек, вертикальных поверхностей, укрытий и возможностей наблюдать за окружающим. Выгул — отдельный формат и подходит не каждой кошке.</p></section>
<section class="pet-card"><h2>Сколько живёт</h2><p><strong>Около 12 лет в среднем</strong> — ориентир, но многие домашние кошки живут 15 лет и дольше при хорошем содержании и медицинском уходе.</p></section>
</div>
<section class="pet-card pet-food-section"><h2>Можно ли это животному?</h2><p>Здесь собраны именно те продукты, которыми чаще всего пытаются угостить кошку со стола. Основа рациона — полнорационный корм для кошек; человеческая еда, даже подходящая, остаётся редким дополнением.</p><div class="pet-food-columns"><div><h3>Можно как редкое угощение</h3><div class="pet-food-list"><button class="pet-food-choice" data-food-result="cat-1">Приготовленная курица или индейка без соли и специй</button><button class="pet-food-choice" data-food-result="cat-2">Небольшой кусочек приготовленного яйца без добавок</button><button class="pet-food-choice" data-food-result="cat-3">Небольшое количество некоторых ягод</button><button class="pet-food-choice" data-food-result="cat-4">Небольшой кусочек простого мяса без костей</button></div></div><div><h3>Лучше не давать</h3><div class="pet-food-list"><button class="pet-food-choice danger" data-food-result="cat-5">Сыр и другие солёные/жирные молочные продукты</button><button class="pet-food-choice danger" data-food-result="cat-6">Шоколад и какао</button><button class="pet-food-choice danger" data-food-result="cat-7">Лук, чеснок, зелёный лук</button><button class="pet-food-choice danger" data-food-result="cat-8">Виноград и изюм</button><button class="pet-food-choice danger" data-food-result="cat-9">Кости и сырое мясо/яйца без понятного рациона</button></div></div></div><div class="pet-result" id="catFoodResult">Нажми на продукт, чтобы увидеть объяснение.</div><div class="source-box" style="margin-top:12px">Ориентир: полноценный рацион для кошек и осторожное отношение к человеческой еде. ASPCA отдельно относит шоколад, лук/чеснок, виноград/изюм и кости к опасным категориям для домашних животных.</div></section>
</div>
<div class="pet-pane" data-pet-pane="dogs"><div class="pet-grid"><section class="pet-card"><h2>Собака: база</h2><ul><li>Перед прогулкой проверь ошейник/шлейку и поводок.</li><li>В жару следи за водой и перегревом; прогулку планируй с учётом погоды.</li><li>После улицы проверяй лапы, шерсть и пространство между пальцами.</li><li>Адресник и актуальный номер телефона помогают быстрее вернуть потерявшееся животное.</li></ul></section><section class="pet-card"><h2>Дома</h2><p>Убери из доступа лекарства, бытовую химию, мелкие предметы и еду, опасную для животных. На окнах и балконах продумай безопасную защиту.</p></section>
<section class="pet-card"><h2>Кормление: как выбирать</h2><p>Основа — полнорационный корм для собак соответствующего возраста, размера и состояния. Сухой, влажный или смешанный вариант может подойти, если рацион закрывает потребности животного.</p><ul><li>Остатки со стола не должны становиться основой рациона.</li><li>Простое приготовленное мясо без костей, соли, лука и специй может использоваться как редкое угощение у здоровой собаки, но не заменяет полноценный корм.</li><li>Лакомства учитываются в общей калорийности.</li></ul><div class="pet-safe"><b>Не перекармливай.</b> Лакомства тоже входят в общую энергетическую нагрузку.</div></section>
<section class="pet-card"><h2>Выгул</h2><p>Нет единого правильного числа прогулок: учитывай возраст, здоровье, темперамент и погоду. Взрослой здоровой собаке обычно нужны несколько выходов в течение дня.</p><ul><li>Дай время на туалет, движение, нюхание и исследование.</li><li>Убирай за собакой.</li><li>Не заставляй знакомиться с людьми или другими собаками.</li><li>Соблюдай местные правила поводка и свободного выгула.</li></ul></section>
<section class="pet-card"><h2>Ветеринар и прививки</h2><p>На плановом визите обсуждают профилактику, вес, зубы, паразитов и вакцинацию. У собак базовые вакцины и вакцина от бешенства подбираются по возрасту, региону и рискам образа жизни; дополнительные — при необходимости.</p><div class="pet-warning"><b>Срочно:</b> травма, затруднение дыхания, судороги, подозрение на отравление, сильное или повторяющееся ухудшение — повод связаться с ветеринаром.</div></section>
<section class="pet-card"><h2>Сколько живёт</h2><p><strong>Около 12 лет в среднем</strong>, но срок сильно зависит от размера, породы, наследственности и здоровья.</p></section>
</div>
<section class="pet-card pet-food-section"><h2>Можно ли это животному?</h2><p>Для собаки мы чаще всего делимся едой именно «со своей тарелки». Поэтому полезно сразу разделить безопасные редкие угощения и продукты, которые нельзя давать.</p><div class="pet-food-columns"><div><h3>Можно как редкое угощение</h3><div class="pet-food-list"><button class="pet-food-choice" data-food-result="dog-1">Приготовленное нежирное мясо без костей, соли, лука и специй</button><button class="pet-food-choice" data-food-result="dog-2">Морковь небольшими кусочками</button><button class="pet-food-choice" data-food-result="dog-3">Яблоко без семян и сердцевины</button><button class="pet-food-choice" data-food-result="dog-4">Некоторые ягоды, например черника</button><button class="pet-food-choice" data-food-result="dog-5">Приготовленное яйцо без соли и специй</button></div></div><div><h3>Нельзя давать</h3><div class="pet-food-list"><button class="pet-food-choice danger" data-food-result="dog-6">Шоколад и какао</button><button class="pet-food-choice danger" data-food-result="dog-7">Виноград и изюм</button><button class="pet-food-choice danger" data-food-result="dog-8">Лук, чеснок и другие продукты семейства Allium</button><button class="pet-food-choice danger" data-food-result="dog-9">Продукты с ксилитом</button><button class="pet-food-choice danger" data-food-result="dog-10">Кости, особенно приготовленные</button></div></div></div><div class="pet-result" id="dogFoodResult">Нажми на продукт, чтобы увидеть объяснение.</div><div class="source-box" style="margin-top:12px">ASPCA предупреждает о шоколаде, винограде и изюме, луке/чесноке, ксилите и костях; любые угощения должны оставаться небольшими и не заменять полноценный рацион.</div></section>
</div>
<div class="pet-pane" data-pet-pane="fish"><div class="pet-grid"><section class="pet-card"><h2>Рыбки: не просто налить воду</h2><p>Аквариум — отдельная экосистема. Нужны подходящие объём, фильтрация, температура и параметры воды для конкретных видов.</p><ul><li>Не запускай животных в неподготовленный аквариум.</li><li>Не перекармливай: избыток корма быстро ухудшает воду.</li><li>Проверяй оборудование и температуру регулярно.</li></ul></section><section class="pet-card"><h2>Объём аквариума: посчитать до покупки</h2>
<p>У рыб нет универсального правила «одна рыбка = столько-то литров». Объём зависит от взрослого размера, поведения, типа рыбы, фильтрации и площади поверхности воды. Для учебной оценки можно начать с длины взрослых рыб.</p>
<div class="mini-form fish-form"><label>Количество рыб<input id="fishCount" max="50" min="1" type="number" value="6"/></label><label>Средняя длина одной рыбы, см<input id="fishLength" max="80" min="1" type="number" value="4"/></label><label>Тип<input aria-label="Тип рыб" id="fishType" type="select" value="tropical"/></label></div>
<div class="pet-choices" id="fishTypeChoices"><button class="pet-choice active" data-fishtype="tropical">Тропические</button><button class="pet-choice" data-fishtype="goldfish">Золотые рыбки</button></div>
<div class="pet-result" id="fishVolumeResult">Ориентир рассчитаем после ввода данных.</div>
<p class="muted" style="margin-top:10px">Это стартовая оценка, а не разрешение на заселение: видовые требования, совместимость, фильтрация, кислород и качество воды могут потребовать большего объёма. RSPCA рекомендует брать запас по объёму; для тропических рыб приводит ориентир 1,5–2 л на 1 см длины без хвоста, а для золотых рыбок — 2 л на 0,5 см длины. Окончательный объём определяй по виду и взрослому размеру. Источник: WSAVA Nutrition Guidelines / RSPCA animal welfare guidance.</p>
</section><section class="pet-card"><h2>Смена воды</h2><p>Частичные подмены делай по состоянию системы и рекомендациям для конкретного аквариума. Вода для подмены должна быть безопасной по температуре и химическим параметрам.</p></section>
<section class="pet-card"><h2>Кормление</h2><p>Используй корм, подходящий конкретному виду: хлопья, гранулы, замороженные или иные специализированные корма. Перекармливание — одна из частых причин проблем с качеством воды.</p><ul><li>Давай небольшие порции.</li><li>Убирай остатки, если корм остаётся.</li><li>Не кормить «на глаз» в больших количествах только потому, что рыбы просят.</li></ul></section>
<section class="pet-card"><h2>Ветеринарная помощь</h2><p>Для рыб особенно важно заранее найти специалиста, который работает с аквариумными видами. Плановые прививки для обычных домашних аквариумных рыб не являются стандартной практикой; важнее профилактика через качество воды, совместимость видов и карантин новых животных.</p><div class="pet-warning"><b>Тревожные признаки:</b> резкое изменение плавания, дыхания, окраски, питания или массовая гибель рыб — повод срочно проверять воду и обращаться за консультацией по аквариумным видам.</div></section>
<section class="pet-card"><h2>Сколько живут</h2><p><strong>Очень зависит от вида.</strong> Например, некоторые золотые рыбки при хорошем содержании способны жить десятилетия, поэтому «рыбка» не обязательно означает короткую жизнь.</p></section>
</div></div>
<div class="pet-pane" data-pet-pane="hamster"><div class="pet-grid"><section class="pet-card"><h2>Хомяк: база</h2><ul><li>Нужна хорошая площадь пола и безопасное колесо подходящего размера.</li><li>Обеспечь укрытие и глубокий слой подходящего наполнителя для рытья.</li><li>Не размещай клетку на сквозняке и под прямым солнцем.</li></ul></section><section class="pet-card"><h2>Кормление: корм + свежие продукты</h2><p>Основа — полноценный корм для хомяка. Небольшие кусочки подходящих овощей, зелени и некоторых фруктов можно использовать как разнообразие, но малыми порциями.</p><ul><li>Ягоды можно предлагать понемногу, если они безопасны для вида.</li><li>Виноград и ревень RSPCA рекомендует не давать хомякам.</li><li>Сразу убирай влажную еду, если она начинает портиться.</li></ul></section>
<section class="pet-card"><h2>Кормление</h2><p>Основа — полноценный корм именно для хомяков; свежие овощи и безопасные лакомства — небольшая часть рациона. Чистая вода должна быть доступна постоянно.</p></section>
<section class="pet-card"><h2>Наполнитель и уборка</h2><p>Для рытья нужен глубокий слой подходящего наполнителя. Часто используют бумажные или другие безопасные материалы с низким пылением. Регулярно убирай загрязнённые участки, не превращая уборку в полное уничтожение привычных запахов.</p></section>
<section class="pet-card"><h2>Ветеринар</h2><p>Для хомяка заранее найди клинику, где принимают грызунов. Обращайся при выраженной вялости, проблемах с дыханием, травме, отказе от еды или воды и других резких изменениях.</p><div class="pet-warning"><b>Вакцинация:</b> стандартного календаря прививок, как у собак и кошек, для домашних хомяков нет.</div></section>
<section class="pet-card"><h2>Сколько живёт</h2><p><strong>Около 2 лет</strong> — распространённый ориентир, хотя отдельные животные живут дольше.</p></section>
</div>
<section class="pet-card pet-food-section"><h2>Можно ли это животному?</h2><p>Для хомяка со стола особенно легко переборщить с жирным, сладким или солёным. Угощения должны быть маленькими, а свежие продукты — лишь частью разнообразного рациона.</p><div class="pet-food-columns"><div><h3>Можно понемногу</h3><div class="pet-food-list"><button class="pet-food-choice" data-food-result="ham-1">Яблоко небольшим кусочком</button><button class="pet-food-choice" data-food-result="ham-2">Морковь или другие подходящие корнеплоды небольшим количеством</button><button class="pet-food-choice" data-food-result="ham-3">Немного зелени/овощей, подходящих хомякам</button><button class="pet-food-choice" data-food-result="ham-4">Небольшое количество безопасных ягод, если они подходят конкретному рациону</button></div></div><div><h3>Нельзя / лучше исключить</h3><div class="pet-food-list"><button class="pet-food-choice danger" data-food-result="ham-5">Виноград</button><button class="pet-food-choice danger" data-food-result="ham-6">Ревень</button><button class="pet-food-choice danger" data-food-result="ham-7">Шоколад, сладости и солёные снеки</button><button class="pet-food-choice danger" data-food-result="ham-8">Сыр как обычное угощение со стола</button><button class="pet-food-choice danger" data-food-result="ham-9">Неизвестные экзотические фрукты «на пробу»</button></div></div></div><div class="pet-result" id="hamsterFoodResult">Нажми на продукт, чтобы увидеть объяснение.</div><div class="source-box" style="margin-top:12px">RSPCA рекомендует хомякам небольшие количества зелени, корнеплодов и некоторых фруктов, например яблока, и отдельно предупреждает не давать виноград и ревень.</div></section>
</div>
<div class="pet-pane" data-pet-pane="parrot"><div class="pet-grid"><section class="pet-card"><h2>Попугай: база</h2><ul><li>Клетка должна позволять расправить крылья и двигаться, а вне клетки нужна безопасная зона.</li><li>Жердочки разного диаметра помогают нагрузке лап.</li><li>Проверь комнату на открытые окна, горячие поверхности, провода и других домашних животных.</li></ul></section><section class="pet-card"><h2>Что особенно важно</h2><p>Птицы чувствительны к испарениям и аэрозолям. Не используй рядом с ними дым, резкие аэрозоли и перегретые покрытия посуды.</p></section>
<section class="pet-card"><h2>Кормление: не только семечки</h2><p>Рацион зависит от вида. Для многих попугаев семечки не должны быть единственной основой: нужны подходящие по виду гранулы или другие полнорационные компоненты и безопасные свежие продукты.</p><ul><li>Сладкие фрукты — только небольшая часть рациона.</li><li>Авокадо, шоколад, алкоголь, кофеин и солёная еда — не угощение для птицы.</li><li>Новые продукты вводи постепенно и отслеживай реакцию.</li></ul><div class="pet-warning"><b>Не ориентируйся только на «ест охотно».</b> Жирные семена могут нравиться птице, но не обязательно подходят как единственная основа.</div></section>
<section class="pet-card"><h2>Ветеринар и профилактика</h2><p>Для птицы нужен ветеринар, который действительно работает с пернатыми. Плановые осмотры помогают раньше заметить проблемы с весом, клювом, лапами и дыханием. Рутинные прививки зависят от вида и региона и не являются универсальными для всех домашних попугаев.</p><div class="pet-warning"><b>Срочно:</b> тяжёлое дыхание, травма, длительная вялость, отказ от еды или подозрение на отравление — повод быстро искать помощь.</div></section>
<section class="pet-card"><h2>Сколько живёт</h2><p><strong>Очень зависит от вида.</strong> Небольшие попугаи могут жить 10–15 лет и дольше, крупные виды — несколько десятилетий. Это важно учитывать до покупки.</p></section>
</div>
<section class="pet-card pet-food-section"><h2>Можно ли это животному?</h2><p>Попугаю нельзя просто «отдать кусочек с тарелки». Вид птицы важен, а основу рациона должны составлять подходящие полноценные корма и свежие продукты, разрешённые для конкретного вида.</p><div class="pet-food-columns"><div><h3>Можно в подходящем рационе</h3><div class="pet-food-list"><button class="pet-food-choice" data-food-result="parrot-1">Морковь и брокколи</button><button class="pet-food-choice" data-food-result="parrot-2">Яблоко без семян</button><button class="pet-food-choice" data-food-result="parrot-3">Ягоды, например черника или гранат</button><button class="pet-food-choice" data-food-result="parrot-4">Некоторые фрукты и овощи, подходящие виду</button></div></div><div><h3>Нельзя давать</h3><div class="pet-food-list"><button class="pet-food-choice danger" data-food-result="parrot-5">Авокадо</button><button class="pet-food-choice danger" data-food-result="parrot-6">Шоколад и какао</button><button class="pet-food-choice danger" data-food-result="parrot-7">Лук и чеснок</button><button class="pet-food-choice danger" data-food-result="parrot-8">Алкоголь и сильно солёные продукты</button><button class="pet-food-choice danger" data-food-result="parrot-9">Еда с со стола с неизвестными приправами</button></div></div></div><div class="pet-result" id="parrotFoodResult">Нажми на продукт, чтобы увидеть объяснение.</div><div class="source-box" style="margin-top:12px">RSPCA для попугаев рекомендует полноценные гранулированные корма в сочетании со свежими овощами и фруктами и отдельно предупреждает, что авокадо для попугаев высокотоксичен.</div></section>
</div>
<div class="pet-pane" data-pet-pane="turtle"><div class="pet-grid"><section class="pet-card"><h2>Черепаха: сначала определить вид</h2><p>Сухопутные и водные черепахи требуют разных условий. Нельзя строить уход «по фотографии»: сначала определи вид и его потребности.</p><ul><li>Для многих видов нужны правильные температура и освещение.</li><li>Рацион зависит от вида и возраста.</li><li>Плохие условия содержания часто выглядят как «странное поведение», но требуют проверки условий и консультации специалиста.</li></ul></section><section class="pet-card"><h2>Домашняя среда</h2><p>Не ставь террариум рядом с батареей или под прямое солнце без контроля температуры. Обеспечь зоны с разными условиями, если это требуется конкретному виду.</p></section>
<section class="pet-card"><h2>Кормление: сначала определить вид</h2><p>У сухопутных и водных черепах разные рационы. Для сухопутных важны подходящие травы и зелень, а для водных — корм по конкретному виду и возрасту. Фрукты могут быть уместны только для некоторых видов и как небольшая часть рациона.</p><ul><li>Не корми «со стола» солёной, сладкой или приправленной пищей.</li><li>Экзотические фрукты нельзя считать автоматически безопасными: сначала смотри требования конкретного вида.</li><li>При составлении рациона лучше сверяться с врачом по экзотам.</li></ul></section>
<section class="pet-card"><h2>Ветеринар и профилактика</h2><p>Ищи специалиста по рептилиям или экзотическим животным. Проблемы содержания часто проявляются медленно, поэтому важно обсуждать освещение, температуру, рацион и рост, а не только лечить явные симптомы.</p><div class="pet-warning"><b>Вакцинация:</b> для домашних черепах универсального календаря прививок, как у собак и кошек, обычно нет; профилактика строится вокруг правильных условий и наблюдения.</div></section>
<section class="pet-card"><h2>Сколько живёт</h2><p><strong>Часто десятки лет.</strong> У некоторых видов продолжительность жизни очень большая, поэтому содержание черепахи — долгосрочное обязательство.</p></section>
</div>
<section class="pet-card pet-food-section"><h2>Можно ли это животному?</h2><p>Для черепахи сначала нужно определить вид: рацион сухопутной и водной черепахи может принципиально отличаться. Поэтому «можно» здесь почти всегда означает «можно для определённого вида и в подходящей доле рациона».</p><div class="pet-food-columns"><div><h3>Иногда можно — только по виду</h3><div class="pet-food-list"><button class="pet-food-choice" data-food-result="turtle-1">Некоторые ягоды для подходящих сухопутных видов</button><button class="pet-food-choice" data-food-result="turtle-2">Некоторые фрукты, включая отдельные экзотические, только если они разрешены рационом вида</button><button class="pet-food-choice" data-food-result="turtle-3">Листовая зелень и травы для травоядных сухопутных видов</button><button class="pet-food-choice" data-food-result="turtle-4">Специализированный корм для конкретного вида</button></div></div><div><h3>Не давать со стола</h3><div class="pet-food-list"><button class="pet-food-choice danger" data-food-result="turtle-5">Сыр и молочные продукты</button><button class="pet-food-choice danger" data-food-result="turtle-6">Шоколад, сладости и солёные снеки</button><button class="pet-food-choice danger" data-food-result="turtle-7">Еда с луком, чесноком и приправами</button><button class="pet-food-choice danger" data-food-result="turtle-8">Мясо для травоядной сухопутной черепахи</button><button class="pet-food-choice danger" data-food-result="turtle-9">Неизвестные продукты «на пробу» до определения вида</button></div></div></div><div class="pet-result" id="turtleFoodResult">Нажми на продукт, чтобы увидеть объяснение.</div><div class="source-box" style="margin-top:12px">Для черепах особенно важно не смешивать рекомендации для разных видов. Рацион определяется видом, возрастом и условиями содержания; человеческая еда со стола не должна быть универсальным решением.</div></section>
</div>
<div class="pet-pane" data-pet-pane="safe"><div class="pet-grid"><section class="pet-card"><h2>Что точно не оставлять в доступе</h2><ul><li>лекарства и бытовую химию;</li><li>открытые окна и балконы без защиты;</li><li>провода, мелкие предметы и опасные растения;</li><li>алкоголь, никотин и продукты, которые могут быть токсичны для животных;</li><li>незакреплённые тяжёлые предметы и опасные нагревательные приборы.</li></ul></section><section class="pet-card"><h2>Когда нужен ветеринар</h2><p>Резкое изменение поведения, травма, затруднение дыхания, повторная рвота или диарея, отказ от воды, выраженная вялость, судороги, подозрение на отравление и другие острые состояния — повод не лечить животное по интернету, а связаться с ветеринаром.</p><div class="pet-warning"><b>Не давай человеческие лекарства «на всякий случай».</b> У животных дозы и безопасность действующих веществ могут сильно отличаться.</div></section></div></div>
</section>
<section class="view" id="view-plants">
<div class="home-hero"><div class="section-label">09 · Растения</div><h1>Растения, за которыми проще ухаживать.</h1><div class="lead">Не нужно помнить двадцать правил сразу. Сначала выберем подходящее место и горшок, потом разберёмся с поливом и грунтом. А уже потом — с пересадкой, подкормкой и вредителями.</div></div>
<div class="life-tabs" id="plantTabs">
<button class="life-tab active" data-plant="start">С чего начать</button>
<button class="life-tab" data-plant="choose">Выбрать растение</button>
<button class="life-tab" data-plant="care">Свет, полив и грунт</button>
<button class="life-tab" data-plant="repot">Пересадка и подкормка</button>
<button class="life-tab" data-plant="problems">Вредители и проблемы</button>
<button class="life-tab" data-plant="safety">Безопасность</button>
</div>

<div class="plant-pane active" id="plant-start">
<div class="life-grid">
<section class="life-card"><h2>Что нужно до покупки</h2><p>Для первого растения не нужен целый магазин. Обычно достаточно подходящего горшка с отверстием снизу, нормального грунта и места, где растению будет хватать света.</p><div class="parts"><div class="part"><b>Горшок</b><small>Берём немного больше корней, а не огромный «на вырост». Дренажное отверстие важнее красивого кашпо.</small></div><div class="part"><b>Грунт</b><small>Он зависит от растения. Кактусу, орхидее и монстере нужна разная смесь.</small></div><div class="part"><b>Свет</b><small>Сначала посмотри на окно и место, где будет стоять горшок. В глубине комнаты света обычно намного меньше.</small></div><div class="part"><b>После покупки</b><small>Осмотри листья и грунт и несколько дней понаблюдай за растением отдельно, особенно если дома уже есть коллекция.</small></div></div></section>
<section class="life-card"><h2>Из чего состоит растение</h2><p>Нажми на часть растения — объясним простыми словами, зачем она нужна.</p><div class="plant-anatomy"><div class="plant-visual" aria-label="Схема обычного комнатного растения"><div class="plant-root"></div><div class="plant-stem"></div><div class="plant-leaf leaf-left"></div><div class="plant-leaf leaf-right"></div><div class="plant-leaf leaf-top"></div><div class="plant-pot"></div></div><div class="parts" id="plantParts"><button class="part" data-part="roots"><b>Корни</b><small>Вода и питание</small></button><button class="part" data-part="stem"><b>Стебель</b><small>Опора и перенос веществ</small></button><button class="part" data-part="leaves"><b>Листья</b><small>Свет и фотосинтез</small></button><button class="part" data-part="soil"><b>Грунт</b><small>Вода, воздух и опора</small></button><button class="part" data-part="drain"><b>Дренажное отверстие</b><small>Лишняя вода уходит</small></button></div></div><div class="result-box" id="plantPartResult">Выбери часть растения.</div></section>
<section class="life-card"><h2>Обычное растение и суккулент</h2><p>Обычное комнатное растение чаще полагается на грунт как на запас воды. Суккулент умеет хранить воду в своих тканях, поэтому ему обычно нужен более быстрый отток воды и больше света. Это не значит «суккулент почти не поливать» — просто его нельзя держать постоянно мокрым.</p></section>
<section class="life-card"><h2>Цветущие и декоративно-лиственные</h2><p>Цветущим растениям особенно важны свет и подходящее питание в период роста и бутонизации. Декоративно-лиственные выращивают прежде всего ради листьев. В обоих случаях удобрение выбирают под конкретную группу и не используют как средство «на всякий случай».</p></section>
</div>
</div>

<div class="plant-pane" id="plant-choose"><div class="life-grid">
<section class="life-card"><h2>Подбери растение под свою квартиру</h2><p>Выбирай не только глазами. Нажми на условие, которое похоже на твою ситуацию, и мы покажем конкретные примеры.</p><div class="parts" id="plantChooser"><button class="part" data-plant-choice="bright"><b>Много света</b></button><button class="part" data-plant-choice="low"><b>Света мало</b></button><button class="part" data-plant-choice="forget"><b>Часто забываю поливать</b></button><button class="part" data-plant-choice="pets"><b>Есть животные</b></button></div><div class="result-box" id="plantChooseResult">Нажми на условие — здесь появятся примеры растений и короткое объяснение.</div></section>
<section class="life-card"><h2>После покупки</h2><ol><li>Осмотри листья, стебли и грунт.</li><li>Поставь растение в подходящее место и не переставляй его каждый день.</li><li>Первые недели посмотри, как быстро просыхает грунт.</li><li>Не спеши удобрять в день покупки: сначала дай растению привыкнуть.</li></ol></section>
</div></div>

<div class="plant-pane" id="plant-care"><div class="life-grid">
<section class="life-card"><h2>Свет: какое у тебя окно</h2><p>Можно определить сторону света по компасу на телефоне. Потом несколько дней посмотри, когда в окно приходит прямое солнце. Если солнца почти нет весь день, это важно учесть при выборе растения.</p><div class="parts"><div class="part"><b>Южное</b><small>Обычно самое яркое. Летом у стекла бывает жарко, поэтому нежным растениям нужен контроль прямых лучей.</small></div><div class="part"><b>Восточное</b><small>Солнце в основном утром. Часто это мягкий и удобный вариант для светолюбивых растений.</small></div><div class="part"><b>Западное</b><small>Солнце приходит во второй половине дня. Летом место у стекла тоже может перегреваться.</small></div><div class="part"><b>Северное</b><small>Прямого солнца мало. Зимой света может не хватать даже тем растениям, которые спокойно относятся к полутени.</small></div></div><div class="callout"><b>Важно:</b> свет у окна и свет в глубине комнаты — не одно и то же. Чем дальше от окна, тем темнее.</div></section>
<section class="life-card"><h2>Полив: не по календарю</h2><p>Проверь грунт пальцем или деревянной палочкой. Поливать пора не потому, что сегодня воскресенье, а потому что грунт просох настолько, насколько любит твой вид.</p><div class="callout"><b>После полива</b> лишняя вода должна уйти. Если она постоянно стоит в поддоне, корням может не хватать воздуха.</div><p>Если забыл полить, не устраивай потоп. Полей обычным способом и посмотри, как вода проходит через грунт. Совсем пересохший ком лучше промочить постепенно.</p></section>
<section class="life-card"><h2>Грунт выбираем под растение</h2><p>Универсальный грунт — компромисс. Проще ориентироваться на группу растения.</p><div class="parts"><div class="part"><b>Суккуленты и кактусы</b><small>Более сухая и воздухопроницаемая смесь с быстрым оттоком воды.</small></div><div class="part"><b>Ароидные и крупнолистные</b><small>Рыхлая смесь, которая держит немного влаги, но остаётся воздушной. Подходит многим монстерам и филодендронам.</small></div><div class="part"><b>Орхидеи</b><small>Для популярных фаленопсисов обычно нужен крупный субстрат на основе коры, а не обычная земля.</small></div><div class="part"><b>Цветущие</b><small>Рыхлый питательный грунт под конкретный вид. Свет здесь не менее важен, чем состав смеси.</small></div><div class="part"><b>Декоративно-лиственные</b><small>Рыхлый грунт с умеренной влагоёмкостью, чтобы корни не сидели постоянно в воде.</small></div></div></section>
<section class="life-card"><h2>Размер горшка тоже важен</h2><p>Слишком большой горшок не ускоряет рост. В нём больше грунта, который дольше остаётся мокрым. Обычно лучше переходить на следующий размер постепенно.</p></section>
</div></div>

<div class="plant-pane" id="plant-repot"><div class="life-grid">
<section class="life-card"><h2>Когда пересаживать</h2><p>Не по календарю, а по ситуации. Корни заполнили горшок, грунт стал плохо промокать или слишком быстро пересыхать, растению явно тесно — вот нормальные причины пересадки.</p></section>
<section class="life-card"><h2>Как пересадить</h2><ol><li>Подготовь новый горшок и грунт заранее.</li><li>Аккуратно достань растение и посмотри на корни.</li><li>Удали только явно повреждённые части чистым инструментом.</li><li>Посади примерно на ту же глубину и заполни пустоты грунтом.</li><li>После пересадки не добавляй сразу ещё пять новых процедур ухода.</li></ol></section>
<section class="life-card"><h2>Подкормка: когда она нужна</h2><p>Удобрение не исправит нехватку света, перелив или плохой грунт. В первую очередь оно нужно растению во время активного роста.</p><div class="parts"><div class="part"><b>Цветущие</b><small>В период роста и бутонизации питание особенно важно, но лишняя доза не даст автоматически больше цветов.</small></div><div class="part"><b>Декоративно-лиственные</b><small>Обычно подкармливают в период роста, когда появляются новые листья и побеги.</small></div><div class="part"><b>Суккуленты</b><small>Обычно требуют более редкой и умеренной подкормки.</small></div></div></section>
<section class="life-card"><h2>Как не переборщить</h2><p>Смотри дозировку на упаковке конкретного средства. Не увеличивай её «для надёжности» и не удобряй растение, потому что оно заболело.</p></section>
</div></div>

<div class="plant-pane" id="plant-problems"><div class="life-grid">
<section class="life-card"><h2>Вредители: сначала определим, кто пришёл</h2><div class="parts"><div class="part"><b>Тля</b><small>Мелкие насекомые на молодых побегах и нижней стороне листьев.</small></div><div class="part"><b>Щитовка</b><small>Плотные небольшие «щитки» на стеблях и листьях.</small></div><div class="part"><b>Трипсы</b><small>После них часто остаются серебристые и повреждённые участки.</small></div><div class="part"><b>Паутинный клещ</b><small>Мелкие светлые точки, повреждения и иногда тонкая паутинка.</small></div><div class="part"><b>Грибные комарики</b><small>Мелкие мушки, которым нравится постоянно влажный грунт.</small></div></div></section>
<section class="life-card"><h2>Чем обрабатывать</h2><p>Сначала отдели заражённое растение от остальных. При лёгком поражении иногда хватает механического удаления или промывания, если это безопасно для вида.</p><p>Если вредителей много, используй <b>зарегистрированное средство защиты растений</b>, которое подходит именно для этой культуры и вредителя. Соблюдай этикетку, дозировку и меры безопасности. Не смешивай несколько средств «на всякий случай».</p><div class="callout"><b>Не экспериментируй с бытовой химией.</b> Она может обжечь листья и ухудшить ситуацию.</div></section>
<section class="life-card"><h2>Что случилось с растением?</h2><p>Выбери симптом — начнём с простых вещей, которые можно проверить дома.</p><div class="parts" id="plantSymptoms"><button class="part" data-symptom="yellow"><b>Жёлтые листья</b></button><button class="part" data-symptom="brown"><b>Коричневые кончики</b></button><button class="part" data-symptom="droop"><b>Листья повисли</b></button><button class="part" data-symptom="flies"><b>Мелкие мушки</b></button><button class="part" data-symptom="spots"><b>Пятна</b></button><button class="part" data-symptom="slow"><b>Растение почти не растёт</b></button></div><div class="result-box" id="plantSymptomResult">Выбери симптом.</div></section>
<section class="life-card"><h2>Не лечи наугад</h2><p>Один и тот же симптом бывает по разным причинам. Перед тем как что-то менять, проверь свет, полив, корни, вредителей и сезон.</p></section>
</div></div>

<div class="plant-pane" id="plant-safety"><div class="life-grid">
<section class="life-card"><h2>Если дома есть питомец</h2><p>«Комнатное» не означает «безопасное». Особенно внимательно проверяй растение, если кошка, собака или другое животное любит жевать листья.</p><div class="parts"><div class="part"><b>Лилии и лилейники</b><small><b>Особенно опасны для кошек:</b> даже контакт с пыльцой может привести к тяжёлому отравлению и поражению почек.</small></div><div class="part"><b>Саговая пальма и другие цикадовые</b><small>Опасны для собак и кошек; могут вызывать тяжёлое поражение ЖКТ, печени и кровотечения.</small></div><div class="part"><b>Олеандр</b><small>Токсичен для собак и кошек и может влиять на работу сердца.</small></div><div class="part"><b>Азалии и рододендроны</b><small>Токсичны для собак и кошек; возможны сильные желудочно-кишечные и сердечные нарушения.</small></div><div class="part"><b>Диффенбахия, филодендрон, потос, спатифиллум</b><small>При жевании могут сильно раздражать рот и горло из-за кристаллов оксалата кальция.</small></div><div class="part"><b>Тюльпаны, нарциссы и другие луковичные</b><small>Особенно опасны луковицы; возможны рвота, слюнотечение и другие реакции.</small></div></div></section>
<section class="life-card"><h2>Что делать, если питомец съел растение</h2><p>Если растение может быть токсичным, не жди, пока «само пройдёт». Убери растение, сохрани его фото или упаковку и свяжись с ветеринаром. Самостоятельно вызывать рвоту без указания врача не нужно.</p><div class="callout"><b>Не знаешь название?</b> Сфотографируй растение целиком и крупным планом — это поможет специалисту понять, что именно было съедено.</div></section>
<section class="life-card"><h2>Проверить конкретное растение</h2><p>Списки токсичных растений не бесконечны, а риск зависит от вида животного. Для спорного растения лучше искать точное название в ветеринарном справочнике.</p><div class="source-box"><a href="https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants" target="_blank">ASPCA: Toxic and Non-Toxic Plants</a><br><a href="https://www.rspca.org.uk/adviceandwelfare/seasonal/spring/pets" target="_blank">RSPCA: растения, опасные для домашних животных</a></div></section>
</div></div>
</section></section>
<script>
const modes=[
 {name:'Хлопок',icon:'cotton',temp:40,spin:1000,time:'1:58',load:'до 7 кг',angle:0,why:'Базовый режим для большинства футболок, полотенец, постельного белья и других прочных хлопковых вещей.',loadText:'Футболки, полотенца, постельное бельё. Сортируй по цвету и учитывай ярлыки.'},
 {name:'Смешанные ткани',icon:'mixed',temp:40,spin:1000,time:'1:20',load:'до 5 кг',angle:40,why:'Для повседневной одежды из разных материалов, когда в барабане смешанная загрузка.',loadText:'Футболки, рубашки, синтетика и хлопковые вещи, если их ярлыки допускают совместную стирку.'},
 {name:'Синтетика',icon:'synthetic',temp:30,spin:800,time:'1:10',load:'до 4 кг',angle:80,why:'Более щадящий режим для полиэстера и похожих материалов.',loadText:'Спортивная одежда, синтетические рубашки и лёгкие вещи. Не перегружай барабан.'},
 {name:'Деликатная',icon:'delicate',temp:30,spin:600,time:'0:45',load:'до 2 кг',angle:120,why:'Меньше механической нагрузки и более мягкий отжим.',loadText:'Тонкие блузки, некоторые вискозные и деликатные вещи — только если это разрешает ярлык.'},
 {name:'Шерсть',icon:'wool',temp:30,spin:600,time:'0:38',load:'до 2 кг',angle:160,why:'Особый режим для шерсти и некоторых смесей с шерстью. Здесь важнее всего ярлык.',loadText:'Только подходящие по маркировке шерстяные вещи. Без горячей воды и агрессивного обращения.'},
 {name:'Быстрая',icon:'quick',temp:30,spin:800,time:'0:28',load:'до 3 кг',angle:200,why:'Для небольшой и слегка загрязнённой загрузки, когда важнее скорость.',loadText:'Небольшая партия повседневной одежды без сильных загрязнений.'},
 {name:'Эко',icon:'eco',temp:40,spin:1000,time:'2:45',load:'до 7 кг',angle:240,why:'Экономичный цикл: обычно дольше, зато оптимизирует расход воды и энергии.',loadText:'Обычная прочная одежда. Не выбирай его только потому, что слово «эко» звучит лучше — смотри на задачу.'},
 {name:'Полоскание',icon:'rinse',temp:0,spin:1000,time:'0:25',load:'по барабану',angle:280,why:'Проходит полоскание без полноценной стирки.',loadText:'Используй, когда нужно прополоскать вещи или добавить полоскание отдельным циклом.'},
 {name:'Отжим',icon:'spin',temp:0,spin:1200,time:'0:12',load:'по барабану',angle:320,why:'Удаляет воду из вещей. Чем выше обороты, тем интенсивнее механическая нагрузка.',loadText:'Подходит только вещам, для которых такой отжим разрешён.'}
];
let idx=0;
function render(){const m=modes[idx];knob.style.setProperty('--angle',m.angle+'deg');
 ['displayTitle','whyTitle'].forEach(id=>document.getElementById(id).textContent=id==='displayTitle'?m.name:'Что означает «'+m.name+'»');
 document.getElementById('tempValue').textContent=m.temp||'—';document.getElementById('spinValue').textContent=m.spin||'—';document.getElementById('timeValue').textContent=m.time;
 document.getElementById('factTemp').textContent=(m.temp?m.temp+' °C':'не задана');document.getElementById('factSpin').textContent=(m.spin?m.spin+' об/мин':'не задан');document.getElementById('factTime').textContent=m.time;document.getElementById('factLoad').textContent=m.load;
 document.getElementById('whyText').textContent=m.why;document.getElementById('loadText').textContent=m.loadText;
 document.querySelectorAll('.mode-dot').forEach((d,i)=>d.classList.toggle('active',i===idx));document.querySelectorAll('.mode-card').forEach((b,i)=>b.classList.toggle('active',i===idx));
}
const dots=document.getElementById('modeDots');
function modeSvg(type){const p={cotton:'<circle cx="12" cy="12" r="8"/><path d="M7 8c1-3 3-4 5-4s4 1 5 4"/>',synthetic:'<path d="M5 17 9 7l6 4 4-5 4 11"/>',mixed:'<circle cx="9" cy="10" r="4"/><circle cx="17" cy="14" r="4"/>',delicate:'<path d="M4 8c5 0 5 8 10 8s5-8 10-8"/>',wool:'<path d="M5 12c3-7 7-7 10 0s7 7 10 0"/>',quick:'<path d="M15 3 7 13h7l-2 9 8-11h-7l2-8Z"/>',eco:'<path d="M12 20c-5 0-8-4-8-9 5 0 9 1 12 5 1-6 4-9 10-10 0 7-4 13-10 13h-4Z"/>',rinse:'<path d="M4 15c3 2 5 2 8 0s5-2 8 0"/><path d="M6 8c3-2 5-2 7 0M17 8c1-1 2-2 4-1"/>',spin:'<path d="M6 12a6 6 0 1 0 2-5"/><path d="M5 5v5h5"/>'};return `<svg viewBox="0 0 24 24">${p[type]||p.mixed}</svg>`;}
modes.forEach((m,i)=>{const d=document.createElement('div');d.className='mode-dot';const theta=(m.angle-90)*Math.PI/180;const radius=132;const x=155+Math.cos(theta)*radius;const y=155+Math.sin(theta)*radius;d.style.left=x+'px';d.style.top=y+'px';const b=document.createElement('button');b.setAttribute('aria-label',m.name);b.onclick=()=>{idx=i;render()};d.appendChild(b);const icon=document.createElement('span');icon.className='mode-symbol';icon.innerHTML=modeSvg(m.icon);d.appendChild(icon);const label=document.createElement('span');label.className='mode-label';label.textContent=m.name;d.appendChild(label);dots.appendChild(d);});
const opts=document.getElementById('options'); modes.forEach((m,i)=>{const b=document.createElement('button');b.className='opt mode-card';b.textContent=m.name;b.onclick=()=>{idx=i;render()};opts.appendChild(b);});
const knob=document.getElementById('knob');
let dragging=false;
let lastPointerAngle=null;
const center=()=>{const r=knob.getBoundingClientRect();return {x:r.left+r.width/2,y:r.top+r.height/2};};
function normalizedAngle(deg){ return (deg%360+360)%360; }
function angleFromPoint(e){const c=center(); const rad=Math.atan2(e.clientY-c.y,e.clientX-c.x); return normalizedAngle(rad*180/Math.PI + 90);}
const modeAngles=modes.map(m=>normalizedAngle(m.angle));
function circularDistance(a,b){const d=Math.abs(a-b); return Math.min(d,360-d);}
function nearestMode(angle){let best=0,bestDist=Infinity; for(let i=0;i<modeAngles.length;i++){const d=circularDistance(angle,modeAngles[i]); if(d<bestDist){best=i;bestDist=d;}} return best;}
function setFromPointer(e){const angle=angleFromPoint(e); const next=nearestMode(angle); if(next!==idx){idx=next;render();}}
knob.addEventListener('pointerdown',e=>{dragging=true; lastPointerAngle=angleFromPoint(e); knob.setPointerCapture(e.pointerId); setFromPointer(e); e.preventDefault();});
knob.addEventListener('pointermove',e=>{if(!dragging)return; setFromPointer(e);});
['pointerup','pointercancel','lostpointercapture'].forEach(ev=>knob.addEventListener(ev,()=>{dragging=false; lastPointerAngle=null;}));

const state={item:[],material:[],color:[],dirty:null};
document.querySelectorAll('.choices').forEach(group=>{group.addEventListener('click',e=>{if(!e.target.classList.contains('choice'))return;const key=group.dataset.key;if(group.classList.contains('multi')){e.target.classList.toggle('selected');state[key]=Array.from(group.querySelectorAll('.choice.selected')).map(b=>b.dataset.value);}else{group.querySelectorAll('.choice').forEach(b=>b.classList.remove('selected'));e.target.classList.add('selected');state[key]=e.target.dataset.value;}quiz();});});
function quiz(){
 const ready=state.item.length&&state.material.length&&state.color.length&&state.dirty;
 const result=document.getElementById('quizResult'); if(!ready){result.classList.remove('show');return;}
 const colors=new Set(state.color), mats=new Set(state.material), items=new Set(state.item);
 let title='Можно попробовать собрать одну загрузку';
 let text='По выбранным признакам явного конфликта нет. Но перед запуском всё равно проверь ярлыки и не перегружай барабан.';
 let danger=false;
 if(colors.has('white') && (colors.has('black')||colors.has('dark')||colors.has('mixed'))){danger=true;title='Лучше разделить по цвету';text='Белое не стоит смешивать с чёрным, тёмным или новой яркой разноцветной вещью: краситель может перейти на светлые ткани. Белое — отдельно.';}
 else if(colors.has('light') && (colors.has('black')||colors.has('dark'))){danger=true;title='Лучше разделить по цвету';text='Светлые вещи лучше не смешивать с чёрными и насыщенно-тёмными, особенно если тёмные вещи новые или раньше линяли.';}
 if(mats.has('wool')){danger=true;title='Шерсть лучше стирать отдельно';text='Шерсть требует более щадящего режима и средства для шерсти. Не добавляй её в обычную загрузку с полотенцами, джинсами или грубым хлопком. Если ярлык разрешает машинную стирку — выбирай режим для шерсти.';}
 else if(mats.has('viscose') && (items.has('towel')||items.has('jeans'))){danger=true;title='Вискозу лучше отделить от грубых вещей';text='Вискоза может легко деформироваться и не любит сильного трения. Не стоит класть её в одну загрузку с полотенцами или тяжёлыми джинсами.';}
 if(items.has('towel') && (items.has('tee')||items.has('shirt')||items.has('sports'))){if(!danger){title='Лучше разделить на две загрузки';}text+=' Полотенца дают много ворса и создают сильное механическое воздействие, поэтому тонкие футболки, рубашки и спортивные вещи лучше постирать отдельно.';danger=true;}
 if(items.has('jeans') && (colors.has('white')||colors.has('light'))){danger=true;title='Джинсы лучше не добавлять к светлому';text='Особенно если джинсы новые: они могут отдавать краситель. Выверни их наизнанку и стирай с тёмными вещами.';}
 if(items.size>1 && !danger){title='Можно вместе, но есть нюанс';text='Выбранные вещи в целом совместимы. Смотри на самый деликатный материал и самый чувствительный цвет: именно он определяет, насколько щадящей должна быть стирка.';}
 if(state.dirty==='yes' && !mats.has('wool')) text+=' Сильное загрязнение не означает, что нужно автоматически ставить самую высокую температуру: сначала обработай отдельные пятна и сверяйся с ярлыком.';
 if(!danger){
   if(mats.has('polyester') && !mats.has('cotton')) text+=' Для синтетики обычно подходит более прохладная стирка и умеренный отжим.';
   else if(mats.has('cotton')) text+=' Для обычного хлопка часто подходит 40 °C, если ярлык не говорит иначе.';
 }
 document.getElementById('quizTitle').textContent=title;document.getElementById('quizText').textContent=text;result.classList.add('show');
}

document.querySelectorAll('#cookTabs .cook-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('#cookTabs .cook-tab').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.cook-pane').forEach(p=>p.classList.remove('active'));btn.classList.add('active');document.getElementById('cook-'+btn.dataset.cook).classList.add('active');}));

document.querySelectorAll('#cleanTabs .clean-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('#cleanTabs .clean-tab').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.clean-pane').forEach(p=>p.classList.remove('active'));btn.classList.add('active');document.getElementById('clean-'+btn.dataset.clean).classList.add('active');}));

const cleanState={last:null};
const lastClean=document.getElementById('lastClean');
const todayISO=()=>{const d=new Date(); const off=d.getTimezoneOffset(); const local=new Date(d.getTime()-off*60000); return local.toISOString().slice(0,10);};
lastClean.value=localStorage.getItem('lastCleanDate')||todayISO();
const scheduleTasks=[
 {name:'Полы + пыль',days:7,label:'еженедельно'},
 {name:'Сантехника',days:7,label:'еженедельно'},
 {name:'Плита',days:7,label:'еженедельно'},
 {name:'Зеркала',days:10,label:'примерно раз в 1–2 недели'},
 {name:'Окна',days:90,label:'раз в сезон'},
 {name:'Холодильник: быстрый разбор',days:30,label:'примерно раз в месяц'}
];
function addDays(date,days){const x=new Date(date+'T12:00:00');x.setDate(x.getDate()+days);return x;}
function fmtDate(d){return d.toLocaleDateString('ru-RU',{day:'numeric',month:'long'});}
function renderSchedule(){const base=lastClean.value||todayISO();localStorage.setItem('lastCleanDate',base);const now=new Date();const baseDate=new Date(base+'T12:00:00');const elapsed=Math.floor((now-baseDate)/86400000);const due=scheduleTasks.filter(t=>elapsed>=t.days-1);document.getElementById('scheduleSummary').textContent=due.length?`Сегодня уже пора: ${due.length} задач. Можно делать по одной, а не всё сразу.`:`План в порядке. До ближайшей задачи около ${Math.max(0,Math.min(...scheduleTasks.map(t=>t.days))-elapsed)} дней.`;document.getElementById('taskCalendar').innerHTML=scheduleTasks.map(t=>{const next=addDays(base,t.days);return `<div class="task"><b>${t.name}</b><small>${t.label}</small><div class="due">Следующая дата: ${fmtDate(next)}</div></div>`}).join('');}
lastClean.addEventListener('change',renderSchedule);
document.querySelectorAll('[data-task]').forEach(ch=>{const k='clean-'+ch.dataset.task;ch.checked=localStorage.getItem(k)==='1';ch.addEventListener('change',()=>localStorage.setItem(k,ch.checked?'1':'0'));});
async function maybeNotify(){if(!('Notification' in window)||Notification.permission!=='granted')return;const base=lastClean.value||todayISO();const baseDate=new Date(base+'T12:00:00');const now=new Date();const elapsed=Math.floor((now-baseDate)/86400000);const due=scheduleTasks.filter(t=>elapsed>=t.days-1);if(!due.length)return;const key='clean-last-notify-'+todayISO();if(localStorage.getItem(key)=== '1')return;new Notification('Не звони маме — уборка', {body:`Сегодня пора: ${due.slice(0,3).map(x=>x.name).join(', ')}${due.length>3?' и ещё несколько задач.':''}`});localStorage.setItem(key,'1');}
document.getElementById('notifyBtn').addEventListener('click',async()=>{if(!('Notification' in window)){document.getElementById('notifyBtn').textContent='Уведомления недоступны';return;} const p=await Notification.requestPermission(); if(p==='granted'){document.getElementById('notifyBtn').textContent='Уведомления разрешены';maybeNotify();}else{document.getElementById('notifyBtn').textContent='Разрешение не дано';}});
renderSchedule();
maybeNotify();

const locAnswers={water:'Кран ввода воды обычно нужен, чтобы быстро перекрыть воду в квартире. Точное место смотри по своей планировке и подпиши заранее.',shield:'Электрощит нужен для отключения электрических линий. Не снимай крышки и не лезь внутрь щита.',gas:'Газовый кран — только для безопасного перекрытия подачи газа в предусмотренной ситуации. При запахе газа не пользуйся электроприборами и уходи звонить 104/112 с безопасного места.',riser:'Стояк — общедомовая вертикальная магистраль. Его обслуживание и перекрытие обычно нельзя считать обычной бытовой задачей внутри квартиры.'};
document.querySelectorAll('#locationQuiz .part').forEach(btn=>btn.addEventListener('click',()=>{document.getElementById('locationInfo').textContent=locAnswers[btn.dataset.loc]||'';}));
document.querySelectorAll('#lifeTabs .life-tab').forEach(btn=>btn.addEventListener('click',()=>{const locAnswers={water:'Кран ввода воды обычно нужен, чтобы быстро перекрыть воду в квартире. Точное место смотри по своей планировке и подпиши заранее.',shield:'Электрощит нужен для отключения электрических линий. Не снимай крышки и не лезь внутрь щита.',gas:'Газовый кран — только для безопасного перекрытия подачи газа в предусмотренной ситуации. При запахе газа не пользуйся электроприборами и уходи звонить 104/112 с безопасного места.',riser:'Стояк — общедомовая вертикальная магистраль. Его обслуживание и перекрытие обычно нельзя считать обычной бытовой задачей внутри квартиры.'};
document.querySelectorAll('#locationQuiz .part').forEach(btn=>btn.addEventListener('click',()=>{document.getElementById('locationInfo').textContent=locAnswers[btn.dataset.loc]||'';}));
document.querySelectorAll('#lifeTabs .life-tab').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.life-pane').forEach(p=>p.classList.remove('active'));btn.classList.add('active');document.getElementById('life-'+btn.dataset.life).classList.add('active');}));
const objectData={
 sink:{title:'Раковина и сифон',intro:'Сифон — изогнутая часть под раковиной, в которой остаётся водяной затвор. Он задерживает часть запахов из канализации и доступен для очистки в простых конструкциях.',parts:[['Слив','Отводит воду. Сетка или пробка задерживают мусор.','Обычно можно снять и очистить без инструмента.'],['Сифон','Содержит воду и собирает часть мусора.','Можно разобрать только если конструкция понятна; поставь ёмкость снизу.'],['Соединение','Место стыка деталей.','Если капает после сборки — прекрати экспериментировать и проверь уплотнение/вызови специалиста.'],['Стена/стояк','Дальше вода уходит в общую систему.','Общедомовые участки лучше не разбирать самостоятельно.']]},
 toilet:{title:'Унитаз',intro:'Основные части — чаша, сливной бачок, арматура и подвод воды. Многие простые проблемы начинаются с уровня воды или засора.',parts:[['Запорный кран','Перекрывает подачу воды к бачку.','Полезно знать его положение заранее.'],['Бачок','Набирает воду для смыва.','Кнопку и крышку можно снять по конструкции; сантехнику внутри лучше не ломать силой.'],['Слив','Уводит воду в канализацию.','Засор — сначала вантуз; если вода поднимается и не уходит, не продолжай смыв.'],['Перелив','Не даёт воде выйти за край бачка.','Если вода постоянно течёт, вероятна проблема с арматурой.']]},
 washer:{title:'Стиральная машина',intro:'Самое полезное — знать лоток, фильтр, кран подачи и аварийные сценарии с водой.',parts:[['Лоток','Отсеки для средства основной стирки, предварительной стирки и кондиционера.','Чистить по инструкции производителя.'],['Фильтр насоса','Собирает мелкий мусор перед насосом.','Перед открытием отключи машину и подготовь ёмкость для воды.'],['Кран подачи','Перекрывает подачу воды к машине.','При длительном отсутствии дома полезно знать, где он находится.'],['Сливной шланг','Отводит отработанную воду.','Если он слетел или повреждён — сначала перекрой воду и не запускай машину.']]},
 shield:{title:'Электрощит',intro:'Главное правило: щит — не место для ремонта проводки. Здесь безопасно только понимать, какой автомат что отключает, если система исправна и подписана.',parts:[['Автомат','Отключает конкретную цепь при аварийной ситуации.','Если он отключается снова и снова, не включай его бесконечно.'],['УЗО/дифавтомат','Помогает защищать от утечек тока.','Повторное срабатывание — повод искать причину со специалистом.'],['Главный ввод','Отключает питание квартиры целиком.','Знай его положение, но не снимай защитные панели щита.'],['Подписи','Показывают, какая линия за что отвечает.','Если ничего не подписано — не угадывай под нагрузкой; лучше выяснить безопасным способом.']]},
 gas:{title:'Газовая плита',intro:'Газовое оборудование относится к зоне повышенной опасности. Самостоятельный ремонт, разборка и поиск утечки — не бытовой DIY.',parts:[['Кран','Перекрывает подачу газа к прибору.','При запахе газа, если безопасно, перекрой подачу и покинь помещение.'],['Конфорка','Сгорание газа должно происходить стабильно.','Если пламя ведёт себя необычно, не ремонтируй горелку самостоятельно.'],['Шланг','Подводит газ к плите.','Не сгибай, не прокалывай и не пытайся самостоятельно менять газовые соединения.'],['Вентиляция','Нужна для безопасной работы газового оборудования.','Не перекрывай вентиляционные каналы.']]}};
const objectTitle=document.getElementById('objectTitle'),objectIntro=document.getElementById('objectIntro'),objectParts=document.getElementById('objectParts'),partInfo=document.getElementById('partInfo');
const objectSvg=(type)=>{const common=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520"><rect width="800" height="520" rx="28" fill="#f6f8fb"/><g stroke="#1f2937" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round">`;
 const body={
  sink:`<ellipse cx="400" cy="115" rx="210" ry="55" fill="#fff"/><path d="M190 118h420v65c0 120-75 190-210 190s-210-70-210-190z" fill="#eef2f7"/><path d="M305 310c0 0 35 55 95 55s95-55 95-55"/><path d="M400 70v-35"/><path d="M330 35h140"/><path d="M335 35c0 55 130 55 130 0"/><path d="M400 170v80"/><circle cx="400" cy="170" r="20" fill="#dbeafe"/>`,
  toilet:`<path d="M250 130h220v150c0 90-75 150-170 150h-25c-95 0-170-60-170-150V130z" fill="#fff"/><path d="M240 105h240v50H240z" fill="#eef2f7"/><ellipse cx="400" cy="215" rx="105" ry="55" fill="#dbeafe"/><path d="M285 310h230"/><path d="M320 430h160"/>`,
  washer:`<rect x="230" y="70" width="340" height="390" rx="20" fill="#fff"/><rect x="255" y="95" width="290" height="70" rx="12" fill="#eef2f7"/><circle cx="330" cy="130" r="18" fill="#fff"/><path d="M365 130h150"/><circle cx="400" cy="305" r="105" fill="#eaf1f7"/><circle cx="400" cy="305" r="72" fill="#fff"/><circle cx="400" cy="305" r="40" fill="#dbeafe"/>`,
  panel:`<rect x="280" y="65" width="240" height="390" rx="12" fill="#374151"/><rect x="300" y="90" width="200" height="70" rx="8" fill="#f3f4f6"/><path d="M320 185h160M320 225h160M320 265h160M320 305h160M320 345h160"/><circle cx="350" cy="185" r="9" fill="#93c5fd"/><circle cx="350" cy="225" r="9" fill="#93c5fd"/><circle cx="350" cy="265" r="9" fill="#93c5fd"/><circle cx="350" cy="305" r="9" fill="#93c5fd"/><circle cx="350" cy="345" r="9" fill="#93c5fd"/>`,
  gas:`<rect x="240" y="110" width="320" height="300" rx="18" fill="#f3f4f6"/><rect x="275" y="140" width="250" height="120" rx="12" fill="#fff"/><circle cx="330" cy="325" r="18" fill="#fff"/><circle cx="400" cy="325" r="18" fill="#fff"/><circle cx="470" cy="325" r="18" fill="#fff"/><path d="M330 285c-18 24-18 50 0 68M400 285c-18 24-18 50 0 68M470 285c-18 24-18 50 0 68" stroke="#60a5fa"/>`
 }[type]||`<rect x="200" y="100" width="400" height="300" rx="30" fill="#fff"/><circle cx="400" cy="250" r="100" fill="#dbeafe"/>`;
 return common+body+`</g><g font-family="Arial,sans-serif" font-size="24" fill="#2563eb"><text x="40" y="475">Учебная схема</text></g></svg>`};
const objectImages={
 sink:{src:'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(objectSvg('sink')),caption:'Учебная иллюстрация сифона — внешний вид и основные части.'},
 toilet:{src:'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(objectSvg('toilet')),caption:'Учебная иллюстрация сантехнического узла.'},
 washer:{src:'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(objectSvg('washer')),caption:'Учебная иллюстрация стиральной машины.'},
 panel:{src:'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(objectSvg('panel')),caption:'Учебная иллюстрация электрического щита.'},
 gas:{src:'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(objectSvg('gas')),caption:'Учебная иллюстрация газовой плиты и органов управления.'}
};
function renderObject(name){
  const o=objectData[name], img=objectImages[name];
  objectTitle.textContent=o.title;
  objectIntro.textContent=o.intro;
  objectParts.innerHTML=o.parts.map((p,i)=>`<button class="part" data-part="${i}"><span class="object-part-thumb"><img src="${img.src}" alt="${o.title}: ${p[0]}"></span><span><b>${p[0]}</b><small>${p[1]}</small></span></button>`).join('');
  partInfo.innerHTML=`<div class="object-detail-layout"><figure class="object-detail-figure"><img src="${img.src}" alt="${o.title}"><figcaption>${img.caption}</figcaption></figure><div><b>Выбери деталь.</b><p style="margin:8px 0 0;color:var(--muted);line-height:1.6">После выбора здесь появится объяснение, что делает деталь, что можно проверить самостоятельно и где заканчивается безопасный DIY.</p></div></div>`;
  objectParts.querySelectorAll('.part').forEach(btn=>btn.addEventListener('click',()=>{
    const p=o.parts[Number(btn.dataset.part)];
    partInfo.innerHTML=`<div class="object-detail-layout"><figure class="object-detail-figure"><img src="${img.src}" alt="${o.title}: ${p[0]}"><figcaption>${img.caption}</figcaption></figure><div><h3 style="margin-top:0">${p[0]}</h3><p style="line-height:1.65">${p[2]}</p><div class="notice" style="margin-top:12px"><b>Важно:</b> схема учебная. У конкретного прибора расположение деталей может отличаться.</div></div></div>`;
  }));
}
document.querySelectorAll('.object-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.object-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderObject(btn.dataset.object);}));
renderObject('sink');
const myUk=document.getElementById('myUk'),myPower=document.getElementById('myPower');if(myUk){myUk.value=localStorage.getItem('myUk')||'';myPower.value=localStorage.getItem('myPower')||'';document.getElementById('saveContacts').addEventListener('click',()=>{localStorage.setItem('myUk',myUk.value);localStorage.setItem('myPower',myPower.value);document.getElementById('saveContacts').textContent='Сохранено';setTimeout(()=>document.getElementById('saveContacts').textContent='Сохранить контакты',1200);});}


// Дополнительные интерактивные тренажёры
(function(){
  const heatMap={1:['очень слабый','Поддерживать тёплым, растапливать масло.'],2:['слабый','Томить соус, мягко прогревать.'],3:['слабый','Поддерживать слабое кипение.'],4:['средний','Готовить без сильного жара, аккуратно обжаривать.'],5:['средний','Обычная обжарка и тушение.'],6:['средне-сильный','Быстро прогреть и начать жарку.'],7:['сильный','Обжарить поверхность продукта.'],8:['очень сильный','Быстро довести до кипения.'],9:['максимальный','Быстрый разогрев или старт кипения; следи за продуктом.']};
  let selectedBurner=null,selectedHeat=5;
  document.querySelectorAll('.burner').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.burner').forEach(x=>x.classList.remove('active'));b.classList.add('active');selectedBurner=b.dataset.burner;renderHeat();}));
  document.querySelectorAll('.heat-knob').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.heat-knob').forEach(x=>x.classList.remove('active'));b.classList.add('active');selectedHeat=Number(b.dataset.heat);renderHeat();}));
  function renderHeat(){if(!selectedBurner)return;const [level,use]=heatMap[selectedHeat];const isGas=selectedBurner==='gas';document.getElementById('stoveDisplay').textContent=`${isGas?'Газовая':'Электрическая'} · уровень ${selectedHeat}`;document.getElementById('heatTitle').textContent=`${level[0].toUpperCase()+level.slice(1)} нагрев`;document.getElementById('heatText').textContent=use;document.getElementById('heatResult').innerHTML=`<b>Уровень ${selectedHeat}.</b> ${isGas?'Для газа интенсивность видно по высоте и устойчивости пламени.':'Для электрической конфорки нагрев заметнее по тому, насколько раскаляется зона.'} Конкретная мощность зависит от плиты и посуды.`;const pct=(selectedHeat/9)*100;document.getElementById('heatMeterFill').style.width=pct+'%';document.getElementById('gasFlame').style.setProperty('--heat',selectedHeat);document.getElementById('electricGlow').style.setProperty('--heat',selectedHeat);document.getElementById('gasFlame').style.opacity=isGas?(0.15+selectedHeat/10):0;document.getElementById('electricGlow').style.opacity=!isGas?(0.08+selectedHeat/11):0;document.getElementById('stoveZone').classList.toggle('gas-mode',isGas);document.getElementById('stoveZone').classList.toggle('electric-mode',!isGas);}

  const fridgeMap={chicken:['bottom','Сырое мясо/птицу разумно держать ниже готовой еды, чтобы возможные соки не стекали на другие продукты.'],milk:['middle','Молочные продукты обычно удобно хранить на холодных стабильных полках, а не в самой тёплой зоне дверцы.'],greens:['drawer','Овощной ящик помогает поддерживать подходящие условия для зелени и овощей.'],ready:['top','Готовую еду удобно держать выше сырого мяса и птицы, в закрытой ёмкости.'],eggs:['middle','Яйца лучше хранить в той зоне, где температура стабильнее; точное место зависит от конструкции холодильника.'],berries:['drawer','Ягоды удобно хранить в отдельной чистой таре, не рядом с сырым мясом.']};
  let selectedFood=null;
  document.querySelectorAll('.food-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.food-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');selectedFood=b.dataset.food;document.getElementById('fridgeResult').textContent='Теперь выбери полку в холодильнике.';document.querySelectorAll('.fridge-item').forEach(x=>x.classList.remove('correct','wrong'));}));
  document.querySelectorAll('.fridge-item').forEach(b=>b.addEventListener('click',()=>{if(!selectedFood)return;const [shelf,text]=fridgeMap[selectedFood];document.querySelectorAll('.fridge-item').forEach(x=>x.classList.remove('correct','wrong'));b.classList.add(b.dataset.shelf===shelf?'correct':'wrong');document.getElementById('fridgeResult').innerHTML=b.dataset.shelf===shelf?`<b>Хороший выбор.</b> ${text}`:`Не лучший вариант. ${text}`;}));

  const cleanPairs={glass:{glass:['good','Отлично: средство для стекла предназначено именно для такой поверхности.'],universal:['good','Обычно допустимо, если поверхность моющаяся и средство не оставляет плёнку.'],acid:['warn','Не лучший выбор: кислотное средство обычно не нужно для обычного стекла.'],degrease:['warn','Может сработать по жирному налёту, но для обычного зеркала чаще избыточно.'],chlorine:['bad','Не выбирай без явного указания производителя: лишняя химическая нагрузка не нужна.']},stone:{glass:['warn','Не гарантированный выбор: натуральный камень может требовать нейтрального средства.'],universal:['good','Часто подходит нейтральное средство, но проверь рекомендацию производителя.'],acid:['bad','Кислоты могут повредить некоторые виды натурального камня.'],degrease:['good','Для жирных загрязнений может подойти при совместимости с поверхностью.'],chlorine:['warn','Нужна проверка совместимости; универсального разрешения нет.']},stainless:{glass:['warn','Можно для следов, но не обязательно лучший вариант.'],universal:['good','Обычно достаточно мягкого средства и микрофибры.'],acid:['warn','Проверяй конкретный состав: кислоты могут повредить поверхность при неправильном применении.'],degrease:['good','Для кухонного жира часто уместно.'],chlorine:['bad','Хлорсодержащие составы могут повредить нержавеющую сталь.']},wood:{glass:['bad','Не стоит: средство для стекла может не подходить защищённой деревянной поверхности.'],universal:['good','Только если производитель покрытия допускает влажную уборку. Минимум воды.'],acid:['bad','Кислотные средства не нужны и могут повредить покрытие.'],degrease:['warn','Сильный обезжириватель может снять защитный слой.'],chlorine:['bad','Не использовать без прямого указания производителя.']},tile:{glass:['warn','Подойдёт только для стеклянных вставок, но не лучший вариант для швов.'],universal:['good','Обычно нормальный базовый выбор для моющейся плитки.'],acid:['good','Может помочь известковому налёту, но проверь швы и материал.'],degrease:['good','Полезен на кухонной плитке при жирном налёте.'],chlorine:['warn','Не смешивай с кислотами и используй только по инструкции.']}};
  let surface=null,cleaner=null;
  document.querySelectorAll('#surfaceChooser button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('#surfaceChooser button').forEach(x=>x.classList.remove('active'));b.classList.add('active');surface=b.dataset.surface;renderCleaner();}));
  document.querySelectorAll('#cleanerChooser button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('#cleanerChooser button').forEach(x=>x.classList.remove('active'));b.classList.add('active');cleaner=b.dataset.cleaner;renderCleaner();}));
  function renderCleaner(){if(!surface||!cleaner)return;const [kind,text]=cleanPairs[surface][cleaner];const box=document.getElementById('cleanerResult');box.className='result-box '+kind;box.textContent=text;}


  const dep=document.getElementById('depositCalc');
if(dep)dep.addEventListener('click',()=>{const sum=Number(document.getElementById('depositSum').value||0),rate=Number(document.getElementById('depositRate').value||0),months=Number(document.getElementById('depositTerm').value||12),cap=document.getElementById('depositCap').checked,access=document.getElementById('depositAccess').checked;const fmt=n=>Math.round(n).toLocaleString('ru-RU')+' ₽';if(!sum||sum<0){document.getElementById('depPrincipal').textContent='—';document.getElementById('depProfit').textContent='—';document.getElementById('depFinal').textContent='—';document.getElementById('depMonths').textContent='—';return;}let total=sum;if(cap){const monthly=Math.pow(1+rate/100,1/12)-1;for(let i=0;i<months;i++)total*=1+monthly;}else total=sum*(1+rate/100*months/12);const profit=total-sum;document.getElementById('depPrincipal').textContent=fmt(sum);document.getElementById('depProfit').textContent=fmt(profit);document.getElementById('depFinal').textContent=fmt(total);document.getElementById('depMonths').textContent=months+' мес.';const tone=document.getElementById('depositTone');const rule=document.getElementById('depositRule');tone.className='finance-tone '+(access?'good':'neutral');tone.textContent=access?'Доступ к деньгам важен: такой вариант может быть удобнее для резерва, даже если учебный доход ниже.':'Если деньги точно не понадобятся в ближайшее время, фиксированный срок может быть логичнее — но проверь правила досрочного закрытия.';rule.className='finance-tone '+(cap?'good':'neutral');rule.textContent=cap?'Капитализация включена: в учебной модели начисленные проценты остаются в сумме и тоже участвуют в следующем начислении.':'Без капитализации учебный расчёт считает проценты на исходную сумму. Реальный договор может использовать другую механику.';});
document.querySelectorAll('[data-bulb]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-bulb]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const map={led:'LED — практичный базовый вариант. Сначала проверь цоколь и габариты.',filament:'Филаментная LED — свет выглядит ближе к классической лампе, но принцип остаётся светодиодным.',warm:'Тёплый свет чаще выбирают для спальни и гостиной, когда хочется более уютного ощущения.',neutral:'Нейтральный белый свет часто удобен для кухни, рабочего места и задач, где нужна более точная видимость.'};document.getElementById('bulbResult').textContent=map[btn.dataset.bulb]||'';}));
})();


// Plants interactions
(function(){
  const tabs=document.querySelectorAll('#plantTabs .life-tab');
  const panes=document.querySelectorAll('.plant-pane');
  function showPlant(name){
    tabs.forEach(b=>b.classList.toggle('active',b.dataset.plant===name));
    panes.forEach(p=>p.classList.toggle('active',p.id==='plant-'+name));
  }
  tabs.forEach(b=>b.addEventListener('click',()=>showPlant(b.dataset.plant)));
  const choose=document.getElementById('plantChooseResult');
  document.querySelectorAll('#plantChooser .part').forEach(b=>b.addEventListener('click',()=>{
    const map={
      bright:'Много света: попробуй сансевиерию, алоэ, хавортию или некоторые виды фикусов. Если окно южное, летом следи, чтобы нежные листья не перегревались.',
      low:'Света мало: замиокулькас, сансевиерия и аспидистра обычно легче переносят менее яркое место. Но полностью тёмная комната не подходит даже им.',
      forget:'Часто забываешь поливать: сансевиерия, замиокулькас, хавортия и алоэ обычно прощают более редкий полив лучше, чем влаголюбивые растения.',
      pets:'Есть животные: сначала проверь конкретный вид по ветеринарному списку. Из популярных комнатных растений с питомцами особенно осторожно относись к лилиям, саговым пальмам, олеандру, азалиям и некоторым ароидным.'
    };
    choose.textContent=map[b.dataset.plantChoice]||'';
  }));
  const symptom=document.getElementById('plantSymptomResult');
  document.querySelectorAll('#plantSymptoms .part').forEach(b=>b.addEventListener('click',()=>{
    const map={yellow:'Жёлтые листья: сначала проверь, не слишком ли влажный грунт и хватает ли света. Один жёлтый старый лист сам по себе не означает катастрофу.',brown:'Коричневые кончики: посмотри на влажность грунта, сухость воздуха и солевой налёт. Не начинай с горы удобрений.',droop:'Вялые листья: сначала проверь грунт и корни. И пересушивание, и перелив могут выглядеть похоже.',flies:'Мелкие мушки: часто связаны с постоянно влажным грунтом. Уменьши переувлажнение и разберись, что именно за насекомые.',spots:'Пятна на листьях: осмотри обе стороны листьев и проверь условия света и полива. Если пятен становится больше, лучше искать точную причину, а не лечить наугад.',slow:'Медленный рост: проверь свет, сезон, размер горшка и общее состояние корней. Зимой многие растения естественно растут медленнее.'};
    symptom.textContent=map[b.dataset.symptom]||'';
  }));
  const part=document.getElementById('plantPartResult');
  document.querySelectorAll('#plantParts .part').forEach(b=>b.addEventListener('click',()=>{
    const map={roots:'Корни: получают воду и растворённые минеральные вещества и удерживают растение в грунте.',stem:'Стебель: поддерживает растение и связывает корни с листьями.',leaves:'Листья: здесь растение использует свет для фотосинтеза и обменивается газами.',soil:'Грунт: среда для корней. Важны не только питательные вещества, но и вода и воздух.',drain:'Дренажное отверстие: помогает лишней воде покидать горшок и уменьшает риск длительного переувлажнения.'};
    part.textContent=map[b.dataset.part]||'';
  }));
})();

const navButtons=document.querySelectorAll('#nav button');
const views=document.querySelectorAll('.view');
function showView(name){views.forEach(v=>v.classList.toggle('active',v.id==='view-'+name));navButtons.forEach(b=>b.classList.toggle('active',b.dataset.view===name));if(name!=='money'){document.querySelectorAll('#view-money .money-pane').forEach(p=>p.classList.remove('active'));const bills=document.getElementById('money-bills');if(bills)bills.classList.add('active');}window.scrollTo({top:0,behavior:'smooth'});}
navButtons.forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.go)));

render();
(function(){
  const washTabs=document.querySelectorAll('.wash-tab');
  const washLayout=document.querySelector('.wash-layout');
  const washPanels=document.querySelectorAll('.wash-pane-content');
  function showWash(name){
    washTabs.forEach(b=>b.classList.toggle('active',b.dataset.wash===name));
    washPanels.forEach(p=>p.classList.toggle('active',p.dataset.washPane===name));
    washLayout.classList.toggle('wash-learning-mode',name!=='machine');
    document.querySelectorAll('.machine-only-selection').forEach(el=>el.style.display=name==='machine'?'':'none');
    const machine=document.querySelector('.wash-machine-pane');
    if(machine) machine.style.display='';
  }
  washTabs.forEach(b=>b.addEventListener('click',()=>showWash(b.dataset.wash)));
  showWash('machine');

  const trayCopy={
    pre:['I · предварительная стирка','Сюда попадает средство только для программы, которая действительно использует предварительную стирку.'],
    main:['II · основная стирка','Здесь обычно находится средство для главного цикла. Для порошка это самый привычный отсек.'],
    soft:['✿ · кондиционер','Отдельный отсек для кондиционера. Не заливай выше отметки MAX и не используй его вместо моющего средства.'],
    capsule:['● · капсула','Капсулу обычно кладут прямо в пустой барабан перед бельём. Точную инструкцию смотри на упаковке и у производителя машины.']
  };
  document.querySelectorAll('.tray-slot').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.tray-slot').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
    const [title,text]=trayCopy[btn.dataset.tray];
    document.getElementById('trayResult').innerHTML='<b>'+title+'.</b> '+text;
  }));
})();

</script>
<script>
(function(){
  const calc=document.getElementById('budgetCalc');
  const save=document.getElementById('budgetSave'),saveOut=document.getElementById('budgetSaveOut');
  if(save)save.addEventListener('input',()=>saveOut.textContent=save.value+'%');
  if(calc){calc.addEventListener('click',()=>{
    const income=Number(document.getElementById('budgetIncome').value||0), fixed=Number(document.getElementById('budgetFixed').value||0), variable=Number(document.getElementById('budgetVariable').value||0), pct=Number(document.getElementById('budgetSave').value||0);
    const free=income-fixed-variable, reserve=Math.max(0,Math.round(income*pct/100));
    document.getElementById('budgetFree').textContent=income?free.toLocaleString('ru-RU')+' ₽':'—';
    document.getElementById('budgetSaveRub').textContent=income?reserve.toLocaleString('ru-RU')+' ₽':'—';
    document.getElementById('budgetDays').textContent=(income&&variable>0)?Math.max(0,Math.round((income-fixed)/(variable/30))).toLocaleString('ru-RU'):'—';
    document.getElementById('budgetMeterFill').style.width=(income?Math.max(0,Math.min(100,((fixed+variable)/income)*100)):0)+'%';
    const box=document.getElementById('budgetTone');
    if(!income){box.className='budget-tone';box.textContent='Введи доход и реальные расходы. Тренажёр ничего не оценивает — он помогает увидеть математику.';return;}
    if(free<0){box.className='budget-tone bad';box.innerHTML='<b>Сейчас расходы выше дохода.</b><br>Это не повод ругать себя. Посмотри на самые крупные обязательные статьи и регулярные списания: одна большая корректировка полезнее десятка запретов на кофе.';}
    else if(reserve===0){box.className='budget-tone warn';box.innerHTML='<b>Резерв пока не помещается.</b><br>Накопления не обязаны начинаться сегодня. Сначала можно стабилизировать обязательные расходы и просто начать видеть, куда уходит месяц.';}
    else {box.className='budget-tone good';box.innerHTML='<b>После основных расходов остаётся '+free.toLocaleString('ru-RU')+' ₽.</b><br>Выбранный резерв '+reserve.toLocaleString('ru-RU')+' ₽ — твоя цель, а не обязанность. Остаток можно оставить на нерегулярные траты и обычную жизнь.';}
  });}
})();
</script>
<script>
(function(){
 const ht=[...document.querySelectorAll('.health-tab')],hp=[...document.querySelectorAll('.health-pane')];
 function showH(n){ht.forEach(b=>b.classList.toggle('active',b.dataset.health===n));hp.forEach(p=>p.classList.toggle('active',p.id==='health-'+n));}
 ht.forEach(b=>b.addEventListener('click',()=>showH(b.dataset.health))); if(ht.length) showH('medicine');
})();
</script>
<script>
(function(){
 const ct=[...document.querySelectorAll('.clothing-tab')],cp=[...document.querySelectorAll('.clothing-pane')];
 function showC(n){ct.forEach(b=>b.classList.toggle('active',b.dataset.clothing===n));cp.forEach(p=>p.classList.toggle('active',p.dataset.clothingPane===n));}
 ct.forEach(b=>b.addEventListener('click',()=>showC(b.dataset.clothing)));showC('care');
 const irons={1:'Низкая температура: часто подходит для синтетики и чувствительных тканей. Если сомневаешься — начинай с меньшего нагрева.',2:'Средняя температура: часто используют для шерсти и некоторых смесовых тканей, но ориентируйся на ярлык.',3:'Высокая температура: только если такой нагрев разрешён ярлыком.'};
 document.querySelectorAll('[data-iron]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-iron]').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.getElementById('ironResult').textContent=irons[b.dataset.iron];}));
 const repairs={button:'1. Возьми нитку похожего цвета и иглу. 2. Совмести пуговицу с местом старых проколов. 3. Сделай 4–6 проходов через отверстия. 4. Оберни нитку под пуговицей несколько раз, чтобы оставить небольшой зазор, затем закрепи узел с изнанки.',seam:'1. Выверни вещь наизнанку. 2. Совмести края ткани по старой линии шва. 3. Сделай небольшие стежки, захватывая обе стороны. 4. В начале и конце закрепи нить несколькими обратными стежками.',hem:'1. Подверни край на прежнюю ширину. 2. Зафиксируй его булавками или зажимами. 3. Делай мелкие потайные или обычные аккуратные стежки с изнанки. 4. В конце закрепи нить и проверь, чтобы край лежал ровно.',zip:'1. Осмотри зубцы и убери ткань, попавшую в бегунок. 2. Попробуй медленно провести бегунок назад. 3. Если зубцы погнуты или бегунок разошёлся, не тяни силой. 4. При повторяющемся заедании лучше заменить бегунок или обратиться в ремонт.'};
 document.querySelectorAll('[data-repair]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-repair]').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.getElementById('repairResult').textContent=repairs[b.dataset.repair];}));
 const problems={shrunk:'Сначала проверь состав и ярлык. Не растягивай вещь рывками и не используй горячую сушку.',pills:'Используй машинку для катышков или подходящий инструмент. Не выдёргивай катышки руками.',stretch:'Проверь сушку и хранение: мокрый трикотаж легче деформируется.',smell:'Полностью высуши вещь, не оставляй её в барабане после стирки и проверь чистоту машины.'};
 document.querySelectorAll('[data-problem]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-problem]').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.getElementById('problemResult').textContent=problems[b.dataset.problem];}));
 const mt=[...document.querySelectorAll('.money-tab')],mp=[...document.querySelectorAll('.money-pane')];
 function showM(n){mt.forEach(b=>b.classList.toggle('active',b.dataset.money===n));mp.forEach(p=>p.classList.toggle('active',p.id==='money-'+n));}
 mt.forEach(b=>b.addEventListener('click',()=>showM(b.dataset.money)));showM('bills');
 const ss=[
  ['«Служба безопасности банка: замечена подозрительная операция. Назовите код из SMS сотруднику.»',true,'Код подтверждения нельзя сообщать собеседнику. Положи трубку и сам свяжись с банком по официальному номеру.'],
  ['«Перейдите по ссылке из SMS и введите данные карты, чтобы избежать блокировки.»',true,'Не вводи данные по ссылке из подозрительного сообщения. Проверяй информацию через официальный сайт или приложение.'],
  ['«Ваш заказ уже оплачен и готов к выдаче.» — ты действительно недавно его оформлял.',false,'Само по себе такое сообщение не доказывает мошенничество. Всё равно переходи в заказ через официальное приложение или сайт, а не по неизвестной ссылке.'],
  ['«Вы выиграли приз. Чтобы получить его, срочно оплатите комиссию по реквизитам из письма.»',true,'Требование заранее оплатить «получение выигрыша» — сильный красный флаг.']
 ];
 let si=0;function rs(){const s=ss[si];document.getElementById('scamLabel').textContent='Сценарий '+(si+1);document.getElementById('scamText').textContent=s[0];const b=document.getElementById('scamAnswerResult');b.className='result-box';b.textContent='Выбери ответ.';}
 document.querySelectorAll('.scam-answer').forEach(b=>b.addEventListener('click',()=>{const s=ss[si],ok=(b.dataset.answer==='danger')===s[1],o=document.getElementById('scamAnswerResult');o.className='result-box '+(ok?'good':'bad');o.textContent=(ok?'Верно. ':'Не лучший ответ. ')+s[2];}));
 document.getElementById('nextScam')?.addEventListener('click',()=>{si=(si+1)%ss.length;rs();});
})();

(function(){
  const tabs=[...document.querySelectorAll('.pet-tab')], panes=[...document.querySelectorAll('.pet-pane')];
  function showPet(n){tabs.forEach(b=>b.classList.toggle('active',b.dataset.pet===n));panes.forEach(p=>p.classList.toggle('active',p.dataset.petPane===n));}
  tabs.forEach(b=>b.addEventListener('click',()=>showPet(b.dataset.pet))); showPet('start');
  const petFoodText={
   'cat-1':'Подходит как редкое угощение: без соли, лука, чеснока, соусов и костей. Основной рацион всё равно должен оставаться полнорационным кормом для кошек.',
   'cat-2':'Небольшое количество хорошо приготовленного яйца без добавок может быть редким лакомством. Не заменяет основной рацион.',
   'cat-3':'Некоторые ягоды можно в небольшом количестве, но кошке они не нужны для построения полноценного рациона.',
   'cat-4':'Простое приготовленное мясо без костей и приправ может быть маленьким угощением.',
   'cat-5':'Лучше не делать сыр привычной наградой: молочные продукты часто плохо переносятся, а сыр дополнительно жирный и солёный.',
   'cat-6':'Нельзя: шоколад и какао могут быть токсичны для кошек.',
   'cat-7':'Нельзя: лук и чеснок относятся к опасным продуктам для кошек.',
   'cat-8':'Не давать: виноград и изюм безопаснее исключить.',
   'cat-9':'Кости могут травмировать ЖКТ, а сырое мясо/яйца требуют отдельной оценки рациона и рисков. Для обычного домашнего угощения лучше выбрать приготовленное мясо.',
   'dog-1':'Подходит как небольшое угощение, если мясо полностью приготовлено и без костей, соли, лука, чеснока и острых специй.',
   'dog-2':'Можно небольшими кусочками как редкое угощение.',
   'dog-3':'Можно понемногу без семян и сердцевины.',
   'dog-4':'Некоторые ягоды, например черника, могут быть небольшим угощением.',
   'dog-5':'Можно небольшое количество хорошо приготовленного яйца без соли и специй.',
   'dog-6':'Нельзя: шоколад содержит метилксантины, опасные для собак.',
   'dog-7':'Нельзя: виноград и изюм могут приводить к тяжёлому поражению почек.',
   'dog-8':'Нельзя: лук, чеснок и родственные им продукты могут повреждать эритроциты.',
   'dog-9':'Нельзя: ксилит может вызвать опасное падение уровня глюкозы и другие серьёзные последствия.',
   'dog-10':'Не давай приготовленные кости: они могут раскалываться и травмировать ЖКТ.',
   'ham-1':'RSPCA допускает небольшие кусочки яблока как часть разнообразного рациона.',
   'ham-2':'Небольшое количество подходящих очищенных овощей и корнеплодов может быть полезно как разнообразие.',
   'ham-3':'Можно понемногу, если продукт подходит хомякам и хорошо вымыт.',
   'ham-4':'Небольшие количества некоторых ягод возможны, но их не должно быть много.',
   'ham-5':'Не давать: RSPCA отдельно указывает виноград как опасный для хомяков.',
   'ham-6':'Не давать: ревень указан RSPCA как опасный для грызунов.',
   'ham-7':'Сладкая, солёная и жирная еда со стола не подходит как обычное угощение.',
   'ham-8':'Сыр не нужен как регулярная человеческая «награда»; безопаснее выбирать подходящие продукты из рациона хомяка.',
   'ham-9':'Не экспериментируй с экзотическими фруктами без проверки конкретного продукта и рациона.',
   'parrot-1':'Морковь и брокколи входят в список подходящих свежих овощей для попугаев.',
   'parrot-2':'Можно в небольшом количестве, без семян.',
   'parrot-3':'Некоторые ягоды и гранат могут входить в разнообразную фруктовую часть рациона.',
   'parrot-4':'Некоторые свежие фрукты и овощи подходят, но вид попугая имеет значение.',
   'parrot-5':'Нельзя: RSPCA прямо указывает авокадо как высокотоксичный продукт для попугаев.',
   'parrot-6':'Нельзя: шоколад и какао опасны для птиц.',
   'parrot-7':'Не давать: лук и чеснок не подходят как бытовая еда для попугаев.',
   'parrot-8':'Не давать: алкоголь и сильно солёная пища опасны для птиц.',
   'parrot-9':'Соусы, специи и солёная пища плохо подходят; лучше дать отдельный безопасный продукт.',
   'turtle-1':'Только для некоторых подходящих сухопутных видов и как небольшая часть рациона. Для водных видов схема питания может быть другой.',
   'turtle-2':'Экзотический фрукт не становится безопасным автоматически: сначала определи вид и проверь его рацион.',
   'turtle-3':'Для травоядных сухопутных видов подходящая листовая зелень и травы обычно важнее фруктовых лакомств.',
   'turtle-4':'Лучший вариант — специализированное питание, рассчитанное на конкретный вид и возраст.',
   'turtle-5':'Не подходит: молочные продукты не являются нормальной частью рациона черепах.',
   'turtle-6':'Нельзя: шоколад, сладости и солёные снеки не подходят.',
   'turtle-7':'Не давать приправленную человеческую еду; она не соответствует базовому рациону черепах.',
   'turtle-8':'Для травоядных сухопутных черепах мясо не является обычной пищей.',
   'turtle-9':'Не давай неизвестный продукт до определения вида и его рациона.'
  };
  document.querySelectorAll('.pet-food-choice').forEach(b=>b.addEventListener('click',()=>{
    const pane=b.closest('.pet-pane');
    pane.querySelectorAll('.pet-food-choice').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const code=b.dataset.foodResult;
    const key=code.split('-')[0];
    const out=pane.querySelector('#'+({cat:'catFoodResult',dog:'dogFoodResult',ham:'hamsterFoodResult',parrot:'parrotFoodResult',turtle:'turtleFoodResult'}[key]||''));
    if(out) out.textContent=petFoodText[code]||'Для этого продукта лучше свериться с ветеринаром по виду и рациону.';
  }));
  
let fishType='tropical';
function renderFishVolume(){const count=Math.max(1,Number(document.getElementById('fishCount')?.value||1));const len=Math.max(1,Number(document.getElementById('fishLength')?.value||1));let liters;if(fishType==='goldfish'){liters=count*len*4;}else{liters=count*len*1.75;}const shown=Math.ceil(liters/5)*5;document.getElementById('fishVolumeResult').textContent=`Учебный ориентир: около ${shown} л и выше. Это не финальный размер аквариума: учитывай взрослый размер, вид, совместимость, фильтрацию и требования к поверхности воды. Для золотых рыбок лучше закладывать больше, чем минимальный расчёт.`;}
document.querySelectorAll('#fishTypeChoices .pet-choice').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('#fishTypeChoices .pet-choice').forEach(x=>x.classList.remove('active'));b.classList.add('active');fishType=b.dataset.fishtype;renderFishVolume();}));
document.getElementById('fishCount')?.addEventListener('input',renderFishVolume);document.getElementById('fishLength')?.addEventListener('input',renderFishVolume);renderFishVolume();
})();
</script>
<script>
(function(){
  const el=document.getElementById('mood-result');
  if(!el) return;
  const map={
    tense:'Начни с малого: на 5 минут убери уведомления, сделай несколько спокойных вдохов и выйди пройтись. Если напряжение держится неделями и мешает жить — это уже хороший повод поговорить со специалистом.',
    sleep:'Сегодня попробуй встать и лечь примерно в одно время, не тащить телефон в кровать и не пытаться «отоспаться» до середины дня. Если проблемы со сном постоянные или сильно влияют на жизнь, обсуди их с врачом.',
    sad:'Не требуй от себя мгновенно «собраться». Сохрани базовый режим сна, еды и движения, скажи кому-то близкому, как ты себя чувствуешь. Если подавленность или потеря интереса держатся и мешают жить, стоит обратиться за профессиональной помощью.',
    lonely:'Можно начать с маленького контакта: написать одному человеку, предложить прогулку или присоединиться к привычному сообществу. Не нужно сразу становиться душой компании.'
  };
  document.querySelectorAll('[data-mood]').forEach(btn=>btn.addEventListener('click',()=>{el.textContent=map[btn.dataset.mood]||'';}));
})();
</script>

<script>
(function () {
  function showLaundry() {
    document.querySelectorAll('.view').forEach(function (el) {
      el.style.setProperty('display', el.id === 'view-washing' ? 'block' : 'none', 'important');
    });
    var washing = document.getElementById('view-washing');
    if (washing) {
      washing.classList.add('active');
      washing.style.setProperty('display', 'block', 'important');
    }
  }
  document.addEventListener('DOMContentLoaded', showLaundry);
  setTimeout(showLaundry, 100);
  setTimeout(showLaundry, 500);
})();
</script>

<script>
document.addEventListener('DOMContentLoaded', function(){
  const products = document.querySelectorAll('#drawer-products .drag-product');
  const slots = document.querySelectorAll('.drawer-slot');
  const result = document.getElementById('drawer-result');
  if(!products.length || !slots.length || !result) return;

  let selected = null;

  const messages = {
    prewash: {
      powder: ['bad','Обычно нет. Отделение I используется только для режима с предварительной стиркой. Для обычной стирки порошок отправляется в II.'],
      liquid: ['bad','Обычно нет. Жидкое средство для основной стирки идёт в II, если инструкция вашей машины или средства не говорит иначе.'],
      capsule: ['bad','Капсулу сюда не кладём. Обычно её помещают прямо в барабан.'],
      conditioner: ['bad','Кондиционер сюда не нужен. Для него есть отдельное отделение с цветком.'],
      prewash: ['good','Правильно. Это средство предназначено для предварительной стирки.']
    },
    main: {
      powder: ['good','Правильно. Порошок для обычной стирки обычно отправляется в отделение II.'],
      liquid: ['good','Правильно. Жидкое средство обычно идёт в отделение II. Смотри инструкцию конкретного средства и машины.'],
      capsule: ['bad','Капсулу обычно кладут прямо в барабан до загрузки белья, а не в лоток.'],
      conditioner: ['bad','Не сюда. Кондиционер идёт в отдельное отделение с цветком.'],
      prewash: ['bad','Это средство нужно для предварительной стирки — обычно отделение I.']
    },
    softener: {
      powder: ['bad','Порошок сюда не нужен. Это отделение предназначено для кондиционера.'],
      liquid: ['bad','Обычное жидкое средство для стирки идёт в отделение II, а не сюда.'],
      capsule: ['bad','Капсулу не кладут в отделение для кондиционера. Обычно она отправляется прямо в барабан.'],
      conditioner: ['good','Правильно. Кондиционер идёт в отдельное отделение, которое часто отмечено цветком.'],
      prewash: ['bad','Средство для предварительной стирки обычно идёт в отделение I.']
    }
  };

  function show(product, slot){
    const msg = (messages[slot] && messages[slot][product]) || ['bad','Проверь символы на лотке и инструкцию конкретной машины.'];
    result.className = 'drawer-result ' + msg[0];
    result.textContent = msg[1];
  }

  products.forEach(function(product){
    product.addEventListener('dragstart', function(e){
      e.dataTransfer.setData('text/plain', product.dataset.product);
    });
    product.addEventListener('click', function(){
      products.forEach(p=>p.classList.remove('selected'));
      product.classList.add('selected');
      selected = product.dataset.product;
      result.className = 'drawer-result';
      result.textContent = 'Теперь выбери отделение.';
    });
  });

  slots.forEach(function(slot){
    slot.addEventListener('dragover', function(e){ e.preventDefault(); slot.classList.add('over'); });
    slot.addEventListener('dragleave', function(){ slot.classList.remove('over'); });
    slot.addEventListener('drop', function(e){
      e.preventDefault(); slot.classList.remove('over');
      const product = e.dataTransfer.getData('text/plain');
      if(product) show(product, slot.dataset.slot);
    });
    slot.addEventListener('click', function(){
      if(selected){ show(selected, slot.dataset.slot); products.forEach(p=>p.classList.remove('selected')); selected=null; }
    });
  });
});
</script>


<script>
document.addEventListener('DOMContentLoaded', function(){
  const door = document.getElementById('washer-door');
  const drawerBtn = document.getElementById('washer-drawer-btn');
  const drawerPanel = document.getElementById('washer-drawer-panel');
  const drumDrop = document.getElementById('drum-drop');
  const result = document.getElementById('washer-result');
  const items = document.querySelectorAll('.washer-item');
  const slots = document.querySelectorAll('.drawer-slot-new');
  const reset = document.getElementById('washer-reset');
  if(!door || !drawerBtn || !drawerPanel || !result) return;

  let selected = null;

  const answers = {
    prewash: {
      powder:['bad','Порошок для обычной стирки обычно идёт в II. I используют, когда включена предварительная стирка.'],
      liquid:['bad','Жидкое средство для основной стирки обычно идёт в II.'],
      capsule:['bad','Капсулу в лоток не кладут. Обычно она отправляется прямо в барабан.'],
      conditioner:['bad','Кондиционер идёт в отделение с цветком.'],
      prewash:['good','Правильно. Средство для предварительной стирки отправляется в I, если выбран соответствующий режим.']
    },
    main: {
      powder:['good','Правильно. Порошок для основной стирки обычно идёт в II.'],
      liquid:['good','Правильно. Жидкое средство обычно идёт в II.'],
      capsule:['bad','Капсулу обычно кладут прямо в барабан, а не в лоток.'],
      conditioner:['bad','Кондиционер идёт в отделение с цветком.'],
      prewash:['bad','Средство для предварительной стирки обычно идёт в I.']
    },
    softener: {
      powder:['bad','Порошок сюда не нужен. Это отделение предназначено для кондиционера.'],
      liquid:['bad','Жидкое средство для стирки обычно идёт в II.'],
      capsule:['bad','Капсулу не кладут в лоток для кондиционера.'],
      conditioner:['good','Правильно. Кондиционер обычно идёт в отделение с цветком.'],
      prewash:['bad','Средство для предварительной стирки обычно идёт в I.']
    },
    drum: {
      powder:['bad','Порошок обычно кладут в лоток. Для барабана здесь лучше выбрать капсулу.'],
      liquid:['bad','Жидкое средство обычно отправляется в лоток II, если инструкция конкретного средства не говорит иначе.'],
      capsule:['good','Правильно. Капсулу обычно кладут прямо в барабан до загрузки белья.'],
      conditioner:['bad','Кондиционер не льют прямо на бельё. Используй специальное отделение в лотке.'],
      prewash:['bad','Средство для предварительной стирки обычно отправляется в отделение I.']
    }
  };

  function feedback(type){
    if(!selected){ result.className='washer-result'; result.textContent='Сначала выбери средство.'; return; }
    const msg=answers[type][selected];
    result.className='washer-result '+msg[0];
    result.textContent=msg[1];
  }

  items.forEach(function(item){
    item.addEventListener('click',function(){
      items.forEach(i=>i.classList.remove('selected'));
      item.classList.add('selected');
      selected=item.dataset.product;
      result.className='washer-result';
      result.textContent='Теперь открой нужное место: лоток или барабан.';
    });
  });

  door.addEventListener('click',function(){

    feedback('drum');
  });

  drawerBtn.addEventListener('click',function(){

    drawerPanel.classList.toggle('open');
    drawerBtn.classList.toggle('open');
    if(drawerPanel.classList.contains('open')){
      result.className='washer-result';
      result.textContent='Выбери отделение лотка.';
    }
  });

  slots.forEach(function(slot){
    slot.addEventListener('click',function(){
      feedback(slot.dataset.slot);
    });
  });

  reset.addEventListener('click',function(){
    selected=null;
    items.forEach(i=>i.classList.remove('selected'));

    door.classList.add('open');
    drawerPanel.classList.remove('open');
    drawerBtn.classList.remove('open');
    drumDrop.innerHTML='';
    result.className='washer-result';
    result.textContent='Выбери средство, затем открой лоток или барабан.';
  });
});
</script>


<script>
document.addEventListener('DOMContentLoaded', function(){
  const root = document.querySelector('.washer-trainer');
  if(!root) return;
  const machineTargets = root.querySelectorAll('#washer-drawer-btn, #washer-door, .drawer-slot-new');
  machineTargets.forEach(function(el){
    el.addEventListener('click', function(){
      machineTargets.forEach(function(x){ x.classList.remove('machine-active'); });
      el.classList.add('machine-active');
    });
  });
});
</script>



</body></html>
