const confirmationItems = [
  {
    id: "scope",
    title: "设计范围",
    body: "本方案覆盖强电接入、桥架、电缆、接地、等电位、防火封堵和调试配合；不含供电外线和方舱设备本体。"
  },
  {
    id: "itfc",
    title: "IT 方舱数量",
    body: "图纸识别 ITFC-A/B/C/D/E/F，M/N 两列，共 12 套 IT 方舱。"
  },
  {
    id: "cofc",
    title: "冷却&配电方舱数量",
    body: "图纸识别 COFC-A01 至 COFC-F01，共 6 套冷却&配电方舱。"
  },
  {
    id: "trfc",
    title: "中压&辅变方舱",
    body: "图纸识别 TRFC-01、TRFC-02，共 2 套，并标注 2 台 1600kVA 变压器。"
  },
  {
    id: "mediumVoltage",
    title: "中压柜与回路",
    body: "图纸识别 17/18 两组 AH 柜、TRB 回路、SVG 与直流屏；最终柜型和保护配置需一次系统图确认。"
  },
  {
    id: "btfcPafc",
    title: "BTFC/PAFC/PNDC 方舱接入",
    body: "锂电方舱、巴拿马方舱、PNDC 与电力箱按厂家端子图设置专用电源，不建议临时合并回路。"
  },
  {
    id: "cableTray",
    title: "桥架与电缆",
    body: "中压、低压、IT 末端、控制电源和接地干线建议分系统敷设，桥架填充率按不超过 40% 控制。"
  },
  {
    id: "grounding",
    title: "接地与等电位",
    body: "低压系统建议采用 TN-S，所有方舱、桥架、机柜、套管、设备基础和金属外壳接入等电位系统。"
  },
  {
    id: "quote",
    title: "报价口径",
    body: "推荐预算值 2310 万元，区间 1900 至 2800 万元；不含设备本体、供电外线、报装费和厂家内部接线。"
  },
  {
    id: "missingDocs",
    title: "施工图深化资料",
    body: "正式锁价前需补齐一次系统图、厂家设备清单、铭牌功率、电缆路由、桥架综合图和品牌档次。"
  }
];

const quoteMap = {
  low: {
    value: "1900 万元",
    note: "适用于范围严格、设备本体均为甲供、路由较短的保守低值。",
    width: "45%"
  },
  base: {
    value: "2310 万元",
    note: "推荐用于方案汇报和内部预算控制。",
    width: "62%"
  },
  high: {
    value: "2800 万元",
    note: "适用于图纸深化后电缆路由增加、接口复杂或措施费上升的风险高值。",
    width: "86%"
  }
};

const storageKey = "strong-power-confirmation-v1";

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

function renderConfirmations() {
  const state = loadState();
  const list = document.getElementById("confirmList");
  list.innerHTML = "";

  confirmationItems.forEach((item) => {
    const itemState = state[item.id] || {};
    const article = document.createElement("article");
    article.className = "confirm-item";
    article.innerHTML = `
      <div>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </div>
      <div class="status-options" aria-label="${item.title}状态">
        <button type="button" data-id="${item.id}" data-status="confirmed" data-active="${itemState.status === "confirmed"}">确认</button>
        <button type="button" data-id="${item.id}" data-status="review" data-active="${itemState.status === "review"}">需复核</button>
      </div>
      <textarea class="item-note" data-note="${item.id}" rows="2" placeholder="本项备注">${itemState.note || ""}</textarea>
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
  const confirmed = confirmationItems.filter((item) => state[item.id]?.status === "confirmed").length;
  const review = confirmationItems.filter((item) => state[item.id]?.status === "review").length;
  const open = confirmationItems.length - confirmed - review;
  const progress = Math.round((confirmed / confirmationItems.length) * 100);

  document.getElementById("confirmedCount").textContent = confirmed;
  document.getElementById("totalCount").textContent = confirmationItems.length;
  document.getElementById("summaryConfirmed").textContent = confirmed;
  document.getElementById("summaryReview").textContent = review;
  document.getElementById("summaryOpen").textContent = open;
  document.getElementById("progressValue").textContent = `${progress}%`;
  document.getElementById("progressRing").style.setProperty("--progress", progress);
}

function setupQuoteControls() {
  const value = document.getElementById("quoteValue");
  const note = document.getElementById("quoteNote");
  const bar = document.getElementById("quoteBar");

  document.querySelectorAll(".seg").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".seg").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const data = quoteMap[button.dataset.quote];
      value.textContent = data.value;
      note.textContent = data.note;
      bar.style.width = data.width;
    });
  });

  document.querySelector('.seg[data-quote="base"]').click();
}

function setupExport() {
  const reviewer = document.getElementById("reviewer");
  const globalNotes = document.getElementById("globalNotes");

  reviewer.value = localStorage.getItem(`${storageKey}:reviewer`) || "";
  globalNotes.value = localStorage.getItem(`${storageKey}:globalNotes`) || "";

  reviewer.addEventListener("input", () => localStorage.setItem(`${storageKey}:reviewer`, reviewer.value));
  globalNotes.addEventListener("input", () => localStorage.setItem(`${storageKey}:globalNotes`, globalNotes.value));

  document.getElementById("exportBtn").addEventListener("click", () => {
    const state = loadState();
    const lines = [
      "# 1楼强电设计确认摘要",
      "",
      `确认人：${reviewer.value || "未填写"}`,
      `导出时间：${new Date().toLocaleString("zh-CN")}`,
      "",
      "## 总体备注",
      globalNotes.value || "无",
      "",
      "## 分项确认"
    ];

    confirmationItems.forEach((item) => {
      const itemState = state[item.id] || {};
      const status = itemState.status === "confirmed" ? "确认" : itemState.status === "review" ? "需复核" : "未处理";
      lines.push("", `### ${item.title}`, `状态：${status}`, item.body);
      if (itemState.note) lines.push(`备注：${itemState.note}`);
    });

    const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "1楼强电设计确认摘要.md";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    if (!confirm("确定清空当前浏览器保存的确认状态吗？")) return;
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

renderConfirmations();
updateSummary();
setupQuoteControls();
setupExport();
