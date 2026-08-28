// Hieu ung lo dan khi cuon toi.

export function initReveal() {
  const items = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!items.length) return;

  // Nguoi bi roi loan tien dinh co the chong mat that vi hieu ung truot.
  // He dieu hanh co san cong tac, viec cua minh la nghe theo.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => el.classList.add("is-visible")); // hien luon, khong animate
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // hien roi thi thoi theo doi
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => observer.observe(el));
}
