// Cong tac gia thang / nam.
// So tien nam trong HTML o data-monthly va data-yearly, khong nam trong JS:
// nguoi sua gia la nguoi lam noi dung, khong phai lap trinh vien.

const dong = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
});

export function initPricing() {
  const sw = document.querySelector("[data-price-switch]");
  if (!sw) return;

  const gia = Array.from(document.querySelectorAll("[data-price]"));
  const donVi = Array.from(document.querySelectorAll("[data-price-unit]"));
  if (!gia.length) return;

  function ve(theoNam) {
    gia.forEach((el) => {
      const so = Number(theoNam ? el.dataset.yearly : el.dataset.monthly);
      if (!Number.isFinite(so)) return;
      // Intl lo dau cham hang nghin va ky hieu tien te dung kieu Viet Nam
      el.textContent = so === 0 ? "0đ" : dong.format(so);
    });
    donVi.forEach((el) => {
      el.textContent = theoNam ? "/năm" : "/tháng";
    });
    sw.setAttribute("aria-checked", String(theoNam));
  }

  sw.addEventListener("click", () => {
    ve(sw.getAttribute("aria-checked") !== "true");
  });

  ve(false);
}
