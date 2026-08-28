// Slider cam nhan, tu viet, khong dung thu vien.
// Cac slide xep thanh mot dai ngang, moi slide rong dung 100% khung nhin,
// roi dich ca dai sang trai.

export function initSlider() {
  const root = document.getElementById("slider-cam-nhan");
  if (!root) return;

  const track = root.querySelector("[data-slider-track]");
  const slides = Array.from(root.querySelectorAll("[data-slide]"));
  const dots = root.querySelector("[data-slider-dots]");
  const prev = root.querySelector("[data-slider-prev]");
  const next = root.querySelector("[data-slider-next]");
  if (!track || slides.length === 0) return;

  let index = 0;
  let timer = null;

  // Cham chi dan sinh bang JS tu so slide THAT, khong viet cung trong HTML.
  const nutCham = slides.map((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "h-2 w-2 rounded-pill bg-line transition-colors";
    b.setAttribute("aria-label", "Xem cảm nhận thứ " + (i + 1));
    b.addEventListener("click", () => {
      go(i);
      dung();
    });
    if (dots) dots.appendChild(b);
    return b;
  });

  function go(next_) {
    // Mot dong lo ca hai dau: tu slide 0 bam lui ra -1, cong length thanh
    // slide cuoi. Khong can if.
    index = (next_ + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;

    slides.forEach((s, i) => {
      // Khong co inert thi nhan Tab se roi vao slide vo hinh nam ngoai man hinh.
      s.toggleAttribute("inert", i !== index);
      s.setAttribute("aria-hidden", String(i !== index));
    });

    nutCham.forEach((b, i) => {
      b.classList.toggle("bg-brand-600", i === index);
      b.classList.toggle("bg-line", i !== index);
      b.classList.toggle("w-6", i === index);
      b.setAttribute("aria-current", i === index ? "true" : "false");
    });
  }

  function chay() {
    dung();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer = setInterval(() => go(index + 1), 6000);
  }

  function dung() {
    // Luon clear truoc khi dat cai moi, neu khong slider chay chong nhieu lop.
    if (timer) clearInterval(timer);
    timer = null;
  }

  if (prev) prev.addEventListener("click", () => { go(index - 1); dung(); });
  if (next) next.addEventListener("click", () => { go(index + 1); dung(); });

  // Dung khi nguoi dung dang xem hoac dang dung ban phim.
  root.addEventListener("mouseenter", dung);
  root.addEventListener("mouseleave", chay);
  root.addEventListener("focusin", dung);
  root.addEventListener("focusout", chay);
  document.addEventListener("visibilitychange", () => {
    document.hidden ? dung() : chay();
  });

  // Dieu khien bang phim mui ten khi tieu diem nam trong slider.
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { go(index - 1); dung(); }
    if (e.key === "ArrowRight") { go(index + 1); dung(); }
  });

  go(0);
  chay();
}
