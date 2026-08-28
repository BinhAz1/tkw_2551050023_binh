// Cong tac sang / toi.
// Viec BAT che do toi luc tai trang do mot script inline trong <head> lo,
// khong lam o day, neu khong se bi nhay trang. File nay chi lo cai nut bam.

const KEY = "theme";

export function initTheme() {
  const btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;

  const root = document.documentElement;

  function dangToi() {
    return root.classList.contains("dark");
  }

  function capNhatNut() {
    const toi = dangToi();
    btn.setAttribute("aria-pressed", String(toi));
    btn.setAttribute("aria-label", toi ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối");
    // Hien icon mat trang khi dang sang, mat troi khi dang toi
    btn.querySelectorAll("[data-icon-sang]").forEach((el) => el.classList.toggle("hidden", toi));
    btn.querySelectorAll("[data-icon-toi]").forEach((el) => el.classList.toggle("hidden", !toi));
  }

  btn.addEventListener("click", () => {
    const toi = !dangToi();
    root.classList.toggle("dark", toi);
    localStorage.setItem(KEY, toi ? "dark" : "light"); // lua chon cua nguoi dung duoc nho lai
    capNhatNut();
  });

  // Nguoi dung doi cai dat he dieu hanh: chi nghe theo khi ho CHUA tung tu chon.
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (localStorage.getItem(KEY)) return;
    root.classList.toggle("dark", e.matches);
    capNhatNut();
  });

  capNhatNut();
}
