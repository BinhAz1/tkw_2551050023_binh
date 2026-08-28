// Menu mobile, navbar khi cuon, nut len dau trang.

// ---------- 1. Menu mobile ----------
export function initNav() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.getElementById("menu-mobile");
  const header = document.querySelector("header");
  if (!toggle || !menu || !header) return;

  // Doi giao dien thi phai doi ca trang thai ARIA di kem,
  // neu khong thi voi trinh doc man hinh menu se dong mai mai.
  function setOpen(open) {
    menu.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
    document.body.classList.toggle("overflow-hidden", open);
  }

  function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
  }

  toggle.addEventListener("click", () => setOpen(!isOpen()));

  // Ba cach dong, vi nguoi dung khong ai giong ai.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus(); // tra tieu diem ve nut, khong de no roi ra ngoai
    }
  });

  document.addEventListener("click", (e) => {
    if (isOpen() && !header.contains(e.target)) setOpen(false);
  });

  // Man hinh phong len desktop thi menu mobile khong con nghia gi.
  const desktop = window.matchMedia("(min-width: 64rem)");
  desktop.addEventListener("change", (e) => {
    if (e.matches) setOpen(false);
  });

  setOpen(false);
}

// ---------- 2. Navbar khi cuon ----------
export function initHeaderOnScroll() {
  const header = document.querySelector("header");
  const sentinel = document.getElementById("nav-sentinel");
  if (!header || !sentinel) return;

  // Su kien scroll ban hang tram lan moi giay.
  // IntersectionObserver chi bao dung hai lan: luc vao va luc ra.
  const observer = new IntersectionObserver(([entry]) => {
    const scrolled = !entry.isIntersecting;
    header.classList.toggle("shadow-sm", scrolled);
    header.classList.toggle("border-line", scrolled);
  });
  observer.observe(sentinel);
}

// ---------- 3. Nut len dau trang ----------
export function initToTop() {
  const btn = document.querySelector("[data-to-top]");
  const sentinel = document.getElementById("nav-sentinel");
  if (!btn || !sentinel) return;

  // rootMargin duong lam no ra them 400px len tren:
  // sentinel thoi giao nhau dung luc trang da cuon qua 400px.
  const observer = new IntersectionObserver(
    ([entry]) => {
      const hien = !entry.isIntersecting;
      btn.classList.toggle("pointer-events-none", !hien);
      btn.classList.toggle("opacity-0", !hien);
      btn.classList.toggle("translate-y-2", !hien);
    },
    { rootMargin: "400px 0px 0px 0px" }
  );
  observer.observe(sentinel);

  btn.addEventListener("click", () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
}
