// Accordion cau hoi thuong gap. Moi luc chi mo mot muc.

export function initFaq() {
  const root = document.getElementById("faq");
  if (!root) return; // trang nay khong co FAQ, thoat em

  const triggers = Array.from(root.querySelectorAll("[data-faq-trigger]"));
  if (!triggers.length) return;

  function setOpen(trigger, open) {
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    if (!panel) return;
    trigger.setAttribute("aria-expanded", String(open));
    panel.classList.toggle("hidden", !open);
    // Mui ten quay xuong khi mo
    const icon = trigger.querySelector("[data-faq-icon]");
    if (icon) icon.classList.toggle("rotate-180", open);
  }

  // Mot listener cho ca nhom thay vi moi nut mot listener.
  root.addEventListener("click", (e) => {
    // Bam trung icon SVG ben trong nut thi e.target la <svg>,
    // closest leo nguoc len tim dung <button>.
    const trigger = e.target.closest("[data-faq-trigger]");
    if (!trigger || !root.contains(trigger)) return;

    const willOpen = trigger.getAttribute("aria-expanded") !== "true";
    triggers.forEach((t) => setOpen(t, false)); // dong het
    if (willOpen) setOpen(trigger, true); // roi mo dung cai vua bam
  });

  triggers.forEach((t) => setOpen(t, false));
}
