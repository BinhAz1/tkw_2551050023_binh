// Nut sao chep nhanh (bai tap ve nha buoi 4).
// Dung o trang lien he: sao chep hotline va email de nguoi dung dan thang
// vao ung dung goi dien hoac trinh gui mail, khoi phai go tay.

export function initCopy() {
  const nut = Array.from(document.querySelectorAll("[data-copy]"));
  if (!nut.length) return;

  nut.forEach((btn) => {
    const nhanGoc = btn.getAttribute("aria-label") || "Sao chép";
    // Vung bao nam canh nut, khong nam trong nut
    const bao = btn.parentElement && btn.parentElement.querySelector("[data-copy-status]");

    btn.addEventListener("click", async () => {
      const noiDung = btn.dataset.copy;
      if (!noiDung) return;

      let xong = false;
      try {
        await navigator.clipboard.writeText(noiDung);
        xong = true;
      } catch {
        // Trinh duyet cu hoac trang khong chay tren https thi khong co Clipboard API.
        // Bao that cho nguoi dung thay vi im lang.
        xong = false;
      }

      // textContent chu khong phai innerHTML: du day la chuoi cua minh,
      // giu thoi quen nay de khong bao gio chen HTML tu du lieu ben ngoai.
      if (bao) bao.textContent = xong ? "Đã sao chép" : "Không sao chép được";
      btn.setAttribute("aria-label", xong ? "Đã sao chép " + noiDung : nhanGoc);

      setTimeout(() => {
        if (bao) bao.textContent = "";
        btn.setAttribute("aria-label", nhanGoc);
      }, 2000);
    });
  });
}
