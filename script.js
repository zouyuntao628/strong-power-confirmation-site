const translations = {
  zh: {
    htmlLang: "zh-CN",
    meta: {
      description: "1楼强电设计、工程量、报价和复核事项确认页面"
    },
    ui: {
      "brand.title": "1楼强电确认",
      "brand.sub": "方案设计 · 工程量 · 报价",
      "nav.drawing": "图纸",
      "nav.systems": "系统",
      "nav.quote": "报价",
      "nav.confirm": "确认",
      "hero.eyebrow": "Rhino 3DM 图纸解析 · 2026-06-22",
      "hero.title": "1楼强电设计与报价确认",
      "hero.lead": "基于《1楼 -调整设备间距.3dm》提取的方舱、设备、桥架、入户和配电标注，整理为可确认的网页版本。所有确认状态保存在当前浏览器，可导出确认摘要。",
      "hero.start": "开始确认",
      "hero.quote": "查看报价",
      "progress.title": "确认进度",
      "progress.confirmed": "项已确认",
      "progress.note": "未确认项会保留在“待复核”清单中。",
      "metric.it": "IT 方舱",
      "metric.itSub": "ITFC-A 至 F，M/N 两列",
      "metric.cooling": "冷却&配电方舱",
      "metric.coolingSub": "COFC-A01 至 F01",
      "metric.transformer": "变压器",
      "metric.transformerSub": "TRFC-01/02，各 1600kVA",
      "metric.budget": "推荐预算",
      "metric.budgetValue": "2310 万",
      "metric.budgetSub": "方案阶段，不含设备本体",
      "drawing.eyebrow": "图纸可视化",
      "drawing.title": "一层设备与方舱平面示意",
      "drawing.desc": "示意图由 3DM 中墙体、门、方舱、设备、桥架和电源入户相关图层抽取生成，用于会议沟通和确认。",
      "drawing.obj": "已读取 72178 个模型对象",
      "drawing.layers": "93 个图层",
      "drawing.texts": "814 条文字对象",
      "drawing.blocks": "402 个块实例",
      "deployment.eyebrow": "部署效果",
      "deployment.title": "设备部署后的 3D 效果",
      "deployment.desc": "该 3D 场景按图纸识别结果抽象表达方舱、主配电、桥架和设备组的空间关系，用于方案沟通和评审确认。",
      "deployment.fallback": "按住拖动可旋转备用 3D 视图；若网络可访问 Three.js，页面会自动切换为更精细的可旋转 3D 场景。",
      "scene.overview": "总览",
      "scene.power": "电源",
      "scene.it": "IT 方舱",
      "scene.cooling": "冷却配电",
      "legend.it": "IT 方舱",
      "legend.cooling": "冷却&配电",
      "legend.power": "变配电",
      "legend.battery": "锂电/巴拿马",
      "legend.tray": "桥架",
      "systems.eyebrow": "强电架构",
      "systems.title": "中压分段、低压分区、末端就近配电",
      "systems.desc": "当前方案按数据中心/方舱区强电系统考虑。缺少一次系统图和厂家设备表的部分，统一标记为需要复核。",
      "flow.mvTitle": "中压入户",
      "flow.mvDesc": "由图纸电缆入户点进入中压方舱或中压&辅变方舱，建议按双路或分段方式配置。",
      "flow.trfcTitle": "TRFC 变配电",
      "flow.trfcDesc": "TRFC-01/02 各配置 1600kVA 变压器、AH 柜、TRB 回路、SVG 与直流屏。",
      "flow.lvTitle": "低压分区",
      "flow.lvDesc": "IT、冷却、控制、储能与辅助电源分柜分回路，关键负荷建议采用 A/B 或 M/N 供电。",
      "flow.endTitle": "末端配电",
      "flow.endDesc": "COFC 与 ITFC 就近成组接入，RPP、TMAH、CDU、CRAHB 等设置专用馈线。",
      "systems.identified": "已识别设备",
      "systems.boundary": "设计边界",
      "boundary.1": "包含强电接入、桥架、电缆、接地、防火封堵和调试配合。",
      "boundary.2": "不含供电公司外线、方舱设备本体、厂家成套设备内部接线。",
      "boundary.3": "UPS/BESS/锂电系统内部设计需由厂家深化。",
      "boundary.4": "施工图阶段必须复核一次系统图、设备铭牌功率和电缆路由。",
      "quote.eyebrow": "报价估算",
      "quote.title": "推荐预算值 2310 万元",
      "quote.desc": "报价为方案阶段概算口径。切换区间可查看保守值、推荐值和风险高值。",
      "quote.low": "保守低值",
      "quote.base": "推荐预算",
      "quote.high": "风险高值",
      "quote.current": "当前口径",
      "quote.breakdown": "分项报价",
      "confirm.eyebrow": "信息确认",
      "confirm.title": "请确认可采用的信息",
      "confirm.desc": "点击每项右侧状态，选择“确认”或“需复核”。备注内容会随确认摘要一起导出。",
      "summary.title": "确认摘要",
      "summary.confirmed": "已确认",
      "summary.review": "需复核",
      "summary.open": "未处理",
      "summary.reviewer": "确认人",
      "summary.reviewerPh": "填写姓名或单位",
      "summary.notes": "总体备注",
      "summary.notesPh": "例如：待厂家提供一次系统图后锁定电缆规格。",
      "summary.export": "导出确认摘要",
      "summary.reset": "清空本机状态",
      "footer.note": "本页面为方案确认用途，最终施工及报价应以一次系统图、厂家资料、现场复核和正式合同为准。"
    },
    quote: {
      low: { value: "1900 万元", note: "适用于范围严格、设备本体均为甲供、路由较短的保守低值。", width: "45%" },
      base: { value: "2310 万元", note: "推荐用于方案汇报和内部预算控制。", width: "62%" },
      high: { value: "2800 万元", note: "适用于图纸深化后电缆路由增加、接口复杂或措施费上升的风险高值。", width: "86%" }
    },
    statuses: { confirmed: "确认", review: "需复核", open: "未处理", note: "本项备注" },
    exportText: {
      title: "# 1楼强电设计确认摘要",
      reviewer: "确认人",
      emptyReviewer: "未填写",
      exportTime: "导出时间",
      notes: "## 总体备注",
      none: "无",
      items: "## 分项确认",
      status: "状态",
      note: "备注",
      file: "1楼强电设计确认摘要.md",
      resetConfirm: "确定清空当前浏览器保存的确认状态吗？"
    },
    items: [
      ["scope", "设计范围", "本方案覆盖强电接入、桥架、电缆、接地、等电位、防火封堵和调试配合；不含供电外线和方舱设备本体。"],
      ["itfc", "IT 方舱数量", "图纸识别 ITFC-A/B/C/D/E/F，M/N 两列，共 12 套 IT 方舱。"],
      ["cofc", "冷却&配电方舱数量", "图纸识别 COFC-A01 至 COFC-F01，共 6 套冷却&配电方舱。"],
      ["trfc", "中压&辅变方舱", "图纸识别 TRFC-01、TRFC-02，共 2 套，并标注 2 台 1600kVA 变压器。"],
      ["mediumVoltage", "中压柜与回路", "图纸识别 17/18 两组 AH 柜、TRB 回路、SVG 与直流屏；最终柜型和保护配置需一次系统图确认。"],
      ["btfcPafc", "BTFC/PAFC/PNDC 方舱接入", "锂电方舱、巴拿马方舱、PNDC 与电力箱按厂家端子图设置专用电源，不建议临时合并回路。"],
      ["cableTray", "桥架与电缆", "中压、低压、IT 末端、控制电源和接地干线建议分系统敷设，桥架填充率按不超过 40% 控制。"],
      ["grounding", "接地与等电位", "低压系统建议采用 TN-S，所有方舱、桥架、机柜、套管、设备基础和金属外壳接入等电位系统。"],
      ["quote", "报价口径", "推荐预算值 2310 万元，区间 1900 至 2800 万元；不含设备本体、供电外线、报装费和厂家内部接线。"],
      ["missingDocs", "施工图深化资料", "正式锁价前需补齐一次系统图、厂家设备清单、铭牌功率、电缆路由、桥架综合图和品牌档次。"]
    ]
  },
  fr: {
    htmlLang: "fr",
    meta: { description: "Page de validation de la conception courant fort, des quantités, du budget et des points à vérifier pour le niveau 1." },
    ui: {
      "brand.title": "Validation courant fort N1",
      "brand.sub": "Conception · Quantités · Budget",
      "nav.drawing": "Plans",
      "nav.systems": "Système",
      "nav.quote": "Budget",
      "nav.confirm": "Validation",
      "hero.eyebrow": "Analyse du fichier Rhino 3DM · 2026-06-22",
      "hero.title": "Conception courant fort et validation budgétaire du niveau 1",
      "hero.lead": "Cette page transforme les informations extraites du fichier 3DM en version vérifiable : modules, équipements, chemins de câbles, arrivée d'alimentation et repères de distribution. Les validations sont conservées dans ce navigateur et peuvent être exportées.",
      "hero.start": "Commencer la validation",
      "hero.quote": "Voir le budget",
      "progress.title": "Avancement",
      "progress.confirmed": "éléments validés",
      "progress.note": "Les éléments non validés restent dans la liste des points à revoir.",
      "metric.it": "Modules IT",
      "metric.itSub": "ITFC-A à F, deux rangées M/N",
      "metric.cooling": "Modules refroidissement & distribution",
      "metric.coolingSub": "COFC-A01 à F01",
      "metric.transformer": "Transformateurs",
      "metric.transformerSub": "TRFC-01/02, 1600 kVA chacun",
      "metric.budget": "Budget recommandé",
      "metric.budgetValue": "23,10 M CNY",
      "metric.budgetSub": "Phase avant-projet, équipements exclus",
      "drawing.eyebrow": "Visualisation du plan",
      "drawing.title": "Schéma du niveau 1 : équipements et modules",
      "drawing.desc": "Le schéma est généré à partir des couches du 3DM : murs, portes, modules, équipements, chemins de câbles et arrivée d'alimentation.",
      "drawing.obj": "72178 objets du modèle lus",
      "drawing.layers": "93 couches",
      "drawing.texts": "814 textes",
      "drawing.blocks": "402 blocs",
      "deployment.eyebrow": "Implantation",
      "deployment.title": "Vue 3D après implantation des équipements",
      "deployment.desc": "La scène 3D représente les relations spatiales entre modules, distribution principale, chemins de câbles et groupes d'équipements pour la revue de conception.",
      "deployment.fallback": "Maintenez et faites glisser pour faire pivoter la vue 3D de secours. Si Three.js est accessible, une scène 3D plus détaillée et rotative est chargée automatiquement.",
      "scene.overview": "Vue générale",
      "scene.power": "Alimentation",
      "scene.it": "Modules IT",
      "scene.cooling": "Refroidissement",
      "legend.it": "Modules IT",
      "legend.cooling": "Refroidissement & distribution",
      "legend.power": "Poste électrique",
      "legend.battery": "Batterie / Panama",
      "legend.tray": "Chemins de câbles",
      "systems.eyebrow": "Architecture courant fort",
      "systems.title": "Moyenne tension segmentée, basse tension par zones, distribution terminale de proximité",
      "systems.desc": "Le concept est traité comme une zone data center / modules. Les éléments sans schéma unifilaire ou fiche fabricant sont marqués à vérifier.",
      "flow.mvTitle": "Arrivée MT",
      "flow.mvDesc": "L'arrivée câble alimente les modules moyenne tension ou TRFC ; une double alimentation ou une segmentation est recommandée.",
      "flow.trfcTitle": "Distribution TRFC",
      "flow.trfcDesc": "TRFC-01/02 intègrent chacun un transformateur 1600 kVA, cellules AH, départs TRB, SVG et alimentation CC.",
      "flow.lvTitle": "Zonage BT",
      "flow.lvDesc": "Charges IT, refroidissement, contrôle, stockage et auxiliaires sont séparés par armoires et départs ; A/B ou M/N est recommandé pour les charges critiques.",
      "flow.endTitle": "Distribution terminale",
      "flow.endDesc": "COFC et ITFC sont raccordés par groupes proches ; RPP, TMAH, CDU et CRAHB reçoivent des départs dédiés.",
      "systems.identified": "Équipements identifiés",
      "systems.boundary": "Limites de conception",
      "boundary.1": "Comprend raccordement courant fort, chemins de câbles, câbles, terre, équipotentialité, calfeutrement coupe-feu et assistance aux essais.",
      "boundary.2": "Exclut réseau externe du distributeur, équipements modulaires eux-mêmes et câblage interne des ensembles fabricants.",
      "boundary.3": "La conception interne UPS/BESS/batteries doit être détaillée par les fabricants.",
      "boundary.4": "Le schéma unifilaire, les puissances nominales et les routes de câbles doivent être vérifiés en phase exécution.",
      "quote.eyebrow": "Estimation budgétaire",
      "quote.title": "Budget recommandé : 23,10 M CNY",
      "quote.desc": "Estimation d'avant-projet. Basculez entre valeur basse, budget recommandé et valeur haute de risque.",
      "quote.low": "Valeur basse",
      "quote.base": "Budget recommandé",
      "quote.high": "Valeur haute",
      "quote.current": "Scénario actuel",
      "quote.breakdown": "Détail du budget",
      "confirm.eyebrow": "Validation",
      "confirm.title": "Validez les informations exploitables",
      "confirm.desc": "Choisissez Valider ou À revoir pour chaque élément. Les remarques sont incluses dans le résumé exporté.",
      "summary.title": "Résumé de validation",
      "summary.confirmed": "Validés",
      "summary.review": "À revoir",
      "summary.open": "Ouverts",
      "summary.reviewer": "Validateur",
      "summary.reviewerPh": "Nom ou organisation",
      "summary.notes": "Remarques générales",
      "summary.notesPh": "Ex. : verrouiller les sections de câbles après réception du schéma unifilaire fabricant.",
      "summary.export": "Exporter le résumé",
      "summary.reset": "Effacer l'état local",
      "footer.note": "Cette page sert à la validation d'avant-projet. L'exécution et le prix final doivent suivre le schéma unifilaire, les données fabricants, la vérification terrain et le contrat."
    },
    quote: {
      low: { value: "19,00 M CNY", note: "Valeur basse si le périmètre est strict, les équipements sont fournis par le client et les routes sont courtes.", width: "45%" },
      base: { value: "23,10 M CNY", note: "Valeur recommandée pour présentation et contrôle budgétaire interne.", width: "62%" },
      high: { value: "28,00 M CNY", note: "Valeur haute si les routes de câbles augmentent, les interfaces sont complexes ou les mesures de chantier progressent.", width: "86%" }
    },
    statuses: { confirmed: "Valider", review: "À revoir", open: "Ouvert", note: "Remarque sur cet élément" },
    exportText: {
      title: "# Résumé de validation courant fort N1",
      reviewer: "Validateur",
      emptyReviewer: "Non renseigné",
      exportTime: "Exporté le",
      notes: "## Remarques générales",
      none: "Aucune",
      items: "## Validation par élément",
      status: "Statut",
      note: "Remarque",
      file: "resume-validation-courant-fort-n1.md",
      resetConfirm: "Effacer les validations enregistrées dans ce navigateur ?"
    },
    items: [
      ["scope", "Périmètre", "Le concept couvre raccordement courant fort, chemins de câbles, câbles, terre, équipotentialité, calfeutrement coupe-feu et assistance aux essais ; il exclut le réseau externe et les équipements modulaires eux-mêmes."],
      ["itfc", "Nombre de modules IT", "Le plan identifie ITFC-A/B/C/D/E/F avec deux rangées M/N, soit 12 modules IT."],
      ["cofc", "Nombre de modules refroidissement & distribution", "Le plan identifie COFC-A01 à COFC-F01, soit 6 modules."],
      ["trfc", "Modules TRFC", "Le plan identifie TRFC-01 et TRFC-02, soit 2 ensembles, avec deux transformateurs 1600 kVA."],
      ["mediumVoltage", "Cellules MT et départs", "Le plan identifie deux groupes 17/18 de cellules AH, départs TRB, SVG et alimentation CC ; le type final dépend du schéma unifilaire."],
      ["btfcPafc", "Raccordement BTFC/PAFC/PNDC", "Les modules batteries, Panama, PNDC et boîtes de puissance doivent recevoir des départs dédiés selon les schémas bornier fabricants."],
      ["cableTray", "Chemins de câbles et câbles", "MT, BT, distribution IT terminale, contrôle et terre doivent être séparés ; le taux de remplissage des chemins est limité à 40 % en phase concept."],
      ["grounding", "Terre et équipotentialité", "Le système BT recommandé est TN-S ; modules, chemins, armoires, fourreaux, socles et enveloppes métalliques sont raccordés à l'équipotentialité."],
      ["quote", "Hypothèse budgétaire", "Budget recommandé : 23,10 M CNY, plage 19,00 à 28,00 M CNY ; équipements, réseau externe et câblage interne fabricant exclus."],
      ["missingDocs", "Documents d'exécution", "Avant prix ferme : schéma unifilaire, listes fabricants, puissances nominales, routes de câbles, synthèse chemins de câbles et niveau de marques sont requis."]
    ]
  },
  uz: {
    htmlLang: "uz",
    meta: { description: "1-qavat kuchli tok loyihasi, hajmlar, smeta va tekshiruv bandlarini tasdiqlash sahifasi." },
    ui: {
      "brand.title": "1-qavat kuchli tok tasdig'i",
      "brand.sub": "Loyiha · Hajmlar · Smeta",
      "nav.drawing": "Chizma",
      "nav.systems": "Tizim",
      "nav.quote": "Smeta",
      "nav.confirm": "Tasdiq",
      "hero.eyebrow": "Rhino 3DM chizmasi tahlili · 2026-06-22",
      "hero.title": "1-qavat kuchli tok loyihasi va smetasini tasdiqlash",
      "hero.lead": "3DM fayldan olingan konteynerlar, uskunalar, kabel lotoklari, kirish kabeli va taqsimot belgilarini tekshiriladigan veb sahifaga aylantiradi. Tasdiqlash holati brauzerda saqlanadi va eksport qilinadi.",
      "hero.start": "Tasdiqlashni boshlash",
      "hero.quote": "Smetani ko'rish",
      "progress.title": "Tasdiqlash jarayoni",
      "progress.confirmed": "band tasdiqlandi",
      "progress.note": "Tasdiqlanmagan bandlar tekshiruv ro'yxatida qoladi.",
      "metric.it": "IT konteynerlar",
      "metric.itSub": "ITFC-A dan F gacha, M/N ikki qator",
      "metric.cooling": "Sovitish va taqsimot konteynerlari",
      "metric.coolingSub": "COFC-A01 dan F01 gacha",
      "metric.transformer": "Transformatorlar",
      "metric.transformerSub": "TRFC-01/02, har biri 1600 kVA",
      "metric.budget": "Tavsiya etilgan smeta",
      "metric.budgetValue": "23,10 mln CNY",
      "metric.budgetSub": "Konsept bosqichi, uskunalar kiritilmagan",
      "drawing.eyebrow": "Chizma ko'rinishi",
      "drawing.title": "1-qavat uskunalar va konteynerlar sxemasi",
      "drawing.desc": "Sxema 3DM qatlamlaridan: devorlar, eshiklar, konteynerlar, uskunalar, kabel lotoklari va elektr kirish nuqtalaridan tuzilgan.",
      "drawing.obj": "72178 model obyekti o'qildi",
      "drawing.layers": "93 qatlam",
      "drawing.texts": "814 matn obyekti",
      "drawing.blocks": "402 blok nusxasi",
      "deployment.eyebrow": "Joylashtirish",
      "deployment.title": "Uskunalar o'rnatilgandan keyingi 3D ko'rinish",
      "deployment.desc": "3D sahna konteynerlar, asosiy taqsimot, kabel lotoklari va uskunalar guruhlari orasidagi fazoviy bog'lanishni ko'rsatadi.",
      "deployment.fallback": "Zaxira 3D ko'rinishni aylantirish uchun bosib torting. Three.js mavjud bo'lsa, batafsilroq aylanuvchi 3D sahna avtomatik yuklanadi.",
      "scene.overview": "Umumiy",
      "scene.power": "Elektr",
      "scene.it": "IT konteyner",
      "scene.cooling": "Sovitish",
      "legend.it": "IT konteynerlar",
      "legend.cooling": "Sovitish va taqsimot",
      "legend.power": "Elektr taqsimoti",
      "legend.battery": "Batareya / Panama",
      "legend.tray": "Kabel lotoklari",
      "systems.eyebrow": "Kuchli tok arxitekturasi",
      "systems.title": "O'rta kuchlanish segmentatsiyasi, past kuchlanish zonalari va yaqin yakuniy taqsimot",
      "systems.desc": "Hozirgi yechim data-markaz/konteyner zonasi sifatida ko'rib chiqilgan. Bir chiziqli sxema yoki ishlab chiqaruvchi jadvali yo'q bandlar tekshirilishi kerak.",
      "flow.mvTitle": "O'rta kuchlanish kirishi",
      "flow.mvDesc": "Kabel kirish nuqtasi o'rta kuchlanish yoki TRFC konteyneriga ulanadi; ikki manbali yoki segmentlangan yechim tavsiya etiladi.",
      "flow.trfcTitle": "TRFC taqsimoti",
      "flow.trfcDesc": "TRFC-01/02 har biri 1600 kVA transformator, AH shkaflari, TRB chiqishlari, SVG va DC ta'minotni o'z ichiga oladi.",
      "flow.lvTitle": "Past kuchlanish zonalari",
      "flow.lvDesc": "IT, sovitish, boshqaruv, saqlash va yordamchi yuklar alohida shkaf va chiqishlarga ajratiladi; muhim yuklar uchun A/B yoki M/N tavsiya qilinadi.",
      "flow.endTitle": "Yakuniy taqsimot",
      "flow.endDesc": "COFC va ITFC yaqin guruhlar bo'yicha ulanadi; RPP, TMAH, CDU va CRAHB uchun alohida chiqishlar ajratiladi.",
      "systems.identified": "Aniqlangan uskunalar",
      "systems.boundary": "Loyiha chegarasi",
      "boundary.1": "Kuchli tok ulanishi, kabel lotoklari, kabellar, yerga ulash, teng potensial, yong'in muhrlash va sinovga ko'maklashishni o'z ichiga oladi.",
      "boundary.2": "Tashqi elektr tarmog'i, konteyner uskunalarining o'zi va ishlab chiqaruvchi komplektlarining ichki simlari kiritilmagan.",
      "boundary.3": "UPS/BESS/batareya tizimlarining ichki loyihasi ishlab chiqaruvchi tomonidan aniqlashtiriladi.",
      "boundary.4": "Ishchi loyiha bosqichida bir chiziqli sxema, nominal quvvatlar va kabel yo'nalishlari tekshirilishi shart.",
      "quote.eyebrow": "Smeta bahosi",
      "quote.title": "Tavsiya etilgan smeta: 23,10 mln CNY",
      "quote.desc": "Bu konsept bosqichi smetasi. Past qiymat, tavsiya etilgan smeta va yuqori xavf qiymatini tanlang.",
      "quote.low": "Past qiymat",
      "quote.base": "Tavsiya etilgan",
      "quote.high": "Yuqori xavf",
      "quote.current": "Joriy ssenariy",
      "quote.breakdown": "Smeta tarkibi",
      "confirm.eyebrow": "Ma'lumotni tasdiqlash",
      "confirm.title": "Foydalanish mumkin bo'lgan ma'lumotlarni tasdiqlang",
      "confirm.desc": "Har bir band uchun Tasdiqlash yoki Tekshirish kerak holatini tanlang. Izohlar eksport qilinadigan xulosaga qo'shiladi.",
      "summary.title": "Tasdiqlash xulosasi",
      "summary.confirmed": "Tasdiqlandi",
      "summary.review": "Tekshirish",
      "summary.open": "Ochiq",
      "summary.reviewer": "Tasdiqlovchi",
      "summary.reviewerPh": "Ism yoki tashkilot",
      "summary.notes": "Umumiy izohlar",
      "summary.notesPh": "Masalan: ishlab chiqaruvchi bir chiziqli sxemani bergandan so'ng kabel kesimini yakunlash.",
      "summary.export": "Xulosani eksport qilish",
      "summary.reset": "Lokal holatni tozalash",
      "footer.note": "Bu sahifa konseptni tasdiqlash uchun. Yakuniy qurilish va narx bir chiziqli sxema, ishlab chiqaruvchi ma'lumotlari, joyida tekshiruv va rasmiy shartnomaga asoslanadi."
    },
    quote: {
      low: { value: "19,00 mln CNY", note: "Chegara qat'iy, uskunalar buyurtmachi tomonidan berilgan va yo'nalishlar qisqa bo'lsa past qiymat.", width: "45%" },
      base: { value: "23,10 mln CNY", note: "Taqdimot va ichki byudjet nazorati uchun tavsiya etilgan qiymat.", width: "62%" },
      high: { value: "28,00 mln CNY", note: "Kabel yo'nalishlari ko'payishi, interfeyslar murakkablashishi yoki qurilish choralari oshishi holati uchun yuqori qiymat.", width: "86%" }
    },
    statuses: { confirmed: "Tasdiqlash", review: "Tekshirish kerak", open: "Ochiq", note: "Ushbu band bo'yicha izoh" },
    exportText: {
      title: "# 1-qavat kuchli tok tasdiqlash xulosasi",
      reviewer: "Tasdiqlovchi",
      emptyReviewer: "Kiritilmagan",
      exportTime: "Eksport vaqti",
      notes: "## Umumiy izohlar",
      none: "Yo'q",
      items: "## Bandlar bo'yicha tasdiq",
      status: "Holat",
      note: "Izoh",
      file: "1-qavat-kuchli-tok-tasdiq-xulosasi.md",
      resetConfirm: "Ushbu brauzerda saqlangan tasdiqlash holatini tozalaysizmi?"
    },
    items: [
      ["scope", "Loyiha chegarasi", "Yechim kuchli tok ulanishi, kabel lotoklari, kabellar, yerga ulash, teng potensial, yong'in muhrlash va sinovga ko'maklashishni qamrab oladi; tashqi tarmoq va konteyner uskunalari kiritilmagan."],
      ["itfc", "IT konteynerlar soni", "Chizmada ITFC-A/B/C/D/E/F va M/N ikki qator aniqlangan, jami 12 ta IT konteyner."],
      ["cofc", "Sovitish va taqsimot konteynerlari soni", "Chizmada COFC-A01 dan COFC-F01 gacha, jami 6 ta konteyner aniqlangan."],
      ["trfc", "TRFC konteynerlari", "Chizmada TRFC-01 va TRFC-02, jami 2 ta to'plam va 1600 kVA lik 2 ta transformator ko'rsatilgan."],
      ["mediumVoltage", "O'rta kuchlanish shkaflari va chiqishlar", "Chizmada 17/18 guruh AH shkaflari, TRB chiqishlari, SVG va DC ta'minot aniqlangan; yakuniy konfiguratsiya bir chiziqli sxemaga bog'liq."],
      ["btfcPafc", "BTFC/PAFC/PNDC ulanishi", "Batareya, Panama, PNDC va elektr qutilari ishlab chiqaruvchi terminal sxemasi bo'yicha alohida manba bilan ulanadi."],
      ["cableTray", "Kabel lotoklari va kabellar", "O'rta kuchlanish, past kuchlanish, IT yakuniy taqsimot, boshqaruv va yerga ulash tizimlari alohida yotqiziladi; to'ldirish 40 % dan oshmasligi kerak."],
      ["grounding", "Yerga ulash va teng potensial", "Past kuchlanish uchun TN-S tavsiya qilinadi; konteynerlar, lotoklar, shkaflar, gilzalar, poydevorlar va metall korpuslar teng potensialga ulanadi."],
      ["quote", "Smeta taxmini", "Tavsiya etilgan smeta 23,10 mln CNY, oraliq 19,00 dan 28,00 mln CNY gacha; uskunalar, tashqi tarmoq va ishlab chiqaruvchi ichki simlari kiritilmagan."],
      ["missingDocs", "Ishchi loyiha hujjatlari", "Qat'iy narxdan oldin bir chiziqli sxema, ishlab chiqaruvchi ro'yxatlari, nominal quvvatlar, kabel yo'nalishlari, lotok koordinatsiyasi va brend darajasi kerak."]
    ]
  }
};

const exactText = {
  fr: {
    "系统": "Système", "图纸识别": "Identification du plan", "数量": "Quantité",
    "IT 方舱": "Modules IT", "冷却&配电方舱": "Modules refroidissement & distribution", "中压&辅变方舱": "Modules MT & auxiliaires", "变压器": "Transformateurs", "中压 AH 柜": "Cellules AH MT", "局部等电位": "Équipotentialité locale",
    "ITFC-A/B/C/D/E/F，M/N 两列": "ITFC-A/B/C/D/E/F, deux rangées M/N", "COFC-A01 至 COFC-F01": "COFC-A01 à COFC-F01", "TRFC-01、TRFC-02": "TRFC-01, TRFC-02", "1600kVA 标注": "Repère 1600 kVA", "17-AH-01 至 18-AH-11": "17-AH-01 à 18-AH-11", "大端子箱、小端子箱": "Grand et petit coffrets de liaison équipotentielle", "12 套": "12 ensembles", "6 套": "6 ensembles", "2 套": "2 ensembles", "2 台": "2 unités", "22 面/回路": "22 cellules / départs", "各 6 套": "6 de chaque",
    "分项": "Poste", "金额（万元）": "Montant (10 k CNY)", "说明": "Remarques",
    "施工图深化、负荷计算、回路表、桥架综合": "Plans d'exécution, calculs de charge, tableaux de départs, synthèse chemins de câbles",
    "中压进线、电缆头、试验、保护配合": "Arrivée MT, extrémités de câbles, essais et coordination protection",
    "TRFC/HVFC/中压柜/变压器接口安装配合": "Interfaces TRFC/HVFC/cellules MT/transformateurs",
    "低压主干电缆及桥架": "Câbles principaux BT et chemins de câbles",
    "COFC/ITFC 方舱低压接入": "Raccordement BT des modules COFC/ITFC",
    "末端动力": "Puissance terminale",
    "BTFC/PAFC/PNDC 电力方舱接入": "Raccordement des modules électriques BTFC/PAFC/PNDC",
    "接地、等电位、防雷跨接": "Terre, équipotentialité et liaisons de protection",
    "防火封堵、套管、开孔修补": "Calfeutrement coupe-feu, fourreaux et reprises d'ouvertures",
    "系统调试、送电配合": "Essais système et assistance mise sous tension",
    "安全文明施工、成品保护、二次搬运": "Mesures de chantier, protection des ouvrages et manutention",
    "预备费": "Provision",
    "强电深化与接口复核": "Détail courant fort et vérification des interfaces",
    "不含供电外线": "Réseau externe exclu",
    "设备本体按甲供或厂家成套另计": "Équipements fournis par client/fabricant hors prix",
    "含大截面电缆、主干桥架、支吊架": "Câbles de forte section, chemins principaux et supports",
    "6 套 COFC、12 套 ITFC": "6 COFC, 12 ITFC",
    "RPP、TMAH、CDU、CRAHB、ATSB、IMS": "RPP, TMAH, CDU, CRAHB, ATSB, IMS",
    "锂电、巴拿马方舱、PNDC、电力箱接口": "Interfaces batterie, Panama, PNDC et coffrets de puissance",
    "等电位箱、接地干线、桥架跨接": "Coffrets équipotentiels, conducteur principal de terre, pontages de chemins",
    "穿墙、穿舱、穿防火分区": "Traversées de murs, modules et compartiments coupe-feu",
    "测试、标识、资料整理": "Essais, étiquetage et dossiers",
    "方舱区施工措施": "Mesures spécifiques zone modules",
    "覆盖图纸未明确项": "Couvre les éléments non clarifiés par le plan"
  },
  uz: {
    "系统": "Tizim", "图纸识别": "Chizmada aniqlangan", "数量": "Miqdor",
    "IT 方舱": "IT konteynerlar", "冷却&配电方舱": "Sovitish va taqsimot konteynerlari", "中压&辅变方舱": "O'rta kuchlanish va yordamchi transformator konteyneri", "变压器": "Transformatorlar", "中压 AH 柜": "O'rta kuchlanish AH shkaflari", "局部等电位": "Mahalliy teng potensial",
    "ITFC-A/B/C/D/E/F，M/N 两列": "ITFC-A/B/C/D/E/F, M/N ikki qator", "COFC-A01 至 COFC-F01": "COFC-A01 dan COFC-F01 gacha", "TRFC-01、TRFC-02": "TRFC-01, TRFC-02", "1600kVA 标注": "1600 kVA belgisi", "17-AH-01 至 18-AH-11": "17-AH-01 dan 18-AH-11 gacha", "大端子箱、小端子箱": "Katta va kichik teng potensial qutilari", "12 套": "12 to'plam", "6 套": "6 to'plam", "2 套": "2 to'plam", "2 台": "2 dona", "22 面/回路": "22 shkaf / chiqish", "各 6 套": "har biridan 6 to'plam",
    "分项": "Bo'lim", "金额（万元）": "Miqdor (10 ming CNY)", "说明": "Izoh",
    "施工图深化、负荷计算、回路表、桥架综合": "Ishchi loyiha, yuklama hisoblari, chiqishlar jadvali, lotok koordinatsiyasi",
    "中压进线、电缆头、试验、保护配合": "O'rta kuchlanish kirishi, kabel uchlari, sinov va himoya muvofiqligi",
    "TRFC/HVFC/中压柜/变压器接口安装配合": "TRFC/HVFC/O'K shkaflari/transformator interfeyslari",
    "低压主干电缆及桥架": "Past kuchlanish magistral kabellari va lotoklari",
    "COFC/ITFC 方舱低压接入": "COFC/ITFC konteynerlarining past kuchlanish ulanishi",
    "末端动力": "Yakuniy quvvat taqsimoti",
    "BTFC/PAFC/PNDC 电力方舱接入": "BTFC/PAFC/PNDC elektr konteynerlari ulanishi",
    "接地、等电位、防雷跨接": "Yerga ulash, teng potensial va himoya ko'priklari",
    "防火封堵、套管、开孔修补": "Yong'in muhrlash, gilzalar va teshiklarni tiklash",
    "系统调试、送电配合": "Tizim sinovi va kuchlanish berishga ko'mak",
    "安全文明施工、成品保护、二次搬运": "Qurilish choralari, tayyor ishlarni himoya qilish va ichki tashish",
    "预备费": "Zaxira xarajat",
    "强电深化与接口复核": "Kuchli tok detallashtirish va interfeys tekshiruvi",
    "不含供电外线": "Tashqi elektr tarmog'i kiritilmagan",
    "设备本体按甲供或厂家成套另计": "Uskunalar buyurtmachi/ishlab chiqaruvchi tomonidan alohida",
    "含大截面电缆、主干桥架、支吊架": "Katta kesimli kabellar, magistral lotoklar va tayanchlar",
    "6 套 COFC、12 套 ITFC": "6 ta COFC, 12 ta ITFC",
    "RPP、TMAH、CDU、CRAHB、ATSB、IMS": "RPP, TMAH, CDU, CRAHB, ATSB, IMS",
    "锂电、巴拿马方舱、PNDC、电力箱接口": "Batareya, Panama konteyneri, PNDC va elektr qutilari interfeyslari",
    "等电位箱、接地干线、桥架跨接": "Teng potensial qutilari, asosiy yerga ulash va lotok ko'priklari",
    "穿墙、穿舱、穿防火分区": "Devor, konteyner va yong'in zonasi o'tishlari",
    "测试、标识、资料整理": "Sinov, belgilash va hujjatlarni tayyorlash",
    "方舱区施工措施": "Konteyner zonasi qurilish choralari",
    "覆盖图纸未明确项": "Chizmada aniqlanmagan bandlarni qoplaydi"
  }
};

const storageKey = "strong-power-confirmation-v1";
const languageKey = "strong-power-language";

function getLang() {
  return localStorage.getItem(languageKey) || "zh";
}

function t(key) {
  return translations[getLang()].ui[key] || translations.zh.ui[key] || key;
}

function currentItems() {
  return translations[getLang()].items.map(([id, title, body]) => ({ id, title, body }));
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveState(state) {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function applyExactTextTranslation() {
  const lang = getLang();
  const map = exactText[lang] || {};
  document.querySelectorAll("th, td").forEach((node) => {
    const original = node.dataset.zhText || node.textContent.trim();
    node.dataset.zhText = original;
    node.textContent = map[original] || original;
  });
}

function applyLanguage(lang = getLang()) {
  const pack = translations[lang] || translations.zh;
  localStorage.setItem(languageKey, lang);
  document.documentElement.lang = pack.htmlLang;
  document.title = pack.ui["hero.title"];
  const meta = document.querySelector("[data-i18n-meta='description']");
  if (meta) meta.setAttribute("content", pack.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (pack.ui[key]) node.textContent = pack.ui[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (pack.ui[key]) node.setAttribute("placeholder", pack.ui[key]);
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.dataset.active = String(button.dataset.lang === lang);
  });
  applyExactTextTranslation();
  renderConfirmations();
  updateSummary();
  updateQuoteDisplay();
}

function renderConfirmations() {
  const state = loadState();
  const list = document.getElementById("confirmList");
  const statuses = translations[getLang()].statuses;
  list.innerHTML = "";

  currentItems().forEach((item) => {
    const itemState = state[item.id] || {};
    const article = document.createElement("article");
    article.className = "confirm-item";
    article.innerHTML = `
      <div>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </div>
      <div class="status-options" aria-label="${item.title}">
        <button type="button" data-id="${item.id}" data-status="confirmed" data-active="${itemState.status === "confirmed"}">${statuses.confirmed}</button>
        <button type="button" data-id="${item.id}" data-status="review" data-active="${itemState.status === "review"}">${statuses.review}</button>
      </div>
      <textarea class="item-note" data-note="${item.id}" rows="2" placeholder="${statuses.note}">${itemState.note || ""}</textarea>
    `;
    list.appendChild(article);
  });

  list.querySelectorAll("button[data-status]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      const current = loadState();
      current[id] = current[id] || {};
      current[id].status = button.dataset.status;
      saveState(current);
      renderConfirmations();
      updateSummary();
    });
  });

  list.querySelectorAll("textarea[data-note]").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      const id = textarea.dataset.note;
      const current = loadState();
      current[id] = current[id] || {};
      current[id].note = textarea.value;
      saveState(current);
      updateSummary();
    });
  });
}

function updateSummary() {
  const state = loadState();
  const items = currentItems();
  const confirmed = items.filter((item) => state[item.id]?.status === "confirmed").length;
  const review = items.filter((item) => state[item.id]?.status === "review").length;
  const open = items.length - confirmed - review;
  const progress = Math.round((confirmed / items.length) * 100);

  document.getElementById("confirmedCount").textContent = confirmed;
  document.getElementById("totalCount").textContent = items.length;
  document.getElementById("summaryConfirmed").textContent = confirmed;
  document.getElementById("summaryReview").textContent = review;
  document.getElementById("summaryOpen").textContent = open;
  document.getElementById("progressValue").textContent = `${progress}%`;
  document.getElementById("progressRing").style.setProperty("--progress", progress);
}

function updateQuoteDisplay() {
  const active = document.querySelector(".seg.active") || document.querySelector('.seg[data-quote="base"]');
  const data = translations[getLang()].quote[active.dataset.quote];
  document.getElementById("quoteValue").textContent = data.value;
  document.getElementById("quoteNote").textContent = data.note;
  document.getElementById("quoteBar").style.width = data.width;
}

function setupQuoteControls() {
  document.querySelectorAll(".seg").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".seg").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      updateQuoteDisplay();
    });
  });
  document.querySelector('.seg[data-quote="base"]').classList.add("active");
}

function setupLanguageSwitch() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });
}

function setupExport() {
  const reviewer = document.getElementById("reviewer");
  const globalNotes = document.getElementById("globalNotes");

  reviewer.value = localStorage.getItem(`${storageKey}:reviewer`) || "";
  globalNotes.value = localStorage.getItem(`${storageKey}:globalNotes`) || "";

  reviewer.addEventListener("input", () => localStorage.setItem(`${storageKey}:reviewer`, reviewer.value));
  globalNotes.addEventListener("input", () => localStorage.setItem(`${storageKey}:globalNotes`, globalNotes.value));

  document.getElementById("exportBtn").addEventListener("click", () => {
    const lang = getLang();
    const state = loadState();
    const exportText = translations[lang].exportText;
    const statuses = translations[lang].statuses;
    const lines = [
      exportText.title,
      "",
      `${exportText.reviewer}: ${reviewer.value || exportText.emptyReviewer}`,
      `${exportText.exportTime}: ${new Date().toLocaleString(lang === "zh" ? "zh-CN" : lang === "fr" ? "fr-FR" : "uz-UZ")}`,
      "",
      exportText.notes,
      globalNotes.value || exportText.none,
      "",
      exportText.items
    ];

    currentItems().forEach((item) => {
      const itemState = state[item.id] || {};
      const status = itemState.status === "confirmed" ? statuses.confirmed : itemState.status === "review" ? statuses.review : statuses.open;
      lines.push("", `### ${item.title}`, `${exportText.status}: ${status}`, item.body);
      if (itemState.note) lines.push(`${exportText.note}: ${itemState.note}`);
    });

    const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = exportText.file;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    if (!confirm(translations[getLang()].exportText.resetConfirm)) return;
    localStorage.removeItem(storageKey);
    localStorage.removeItem(`${storageKey}:reviewer`);
    localStorage.removeItem(`${storageKey}:globalNotes`);
    reviewer.value = "";
    globalNotes.value = "";
    renderConfirmations();
    updateSummary();
  });
}

document.getElementById("printBtn").addEventListener("click", () => window.print());

setupQuoteControls();
setupLanguageSwitch();
setupExport();
applyLanguage(getLang());
