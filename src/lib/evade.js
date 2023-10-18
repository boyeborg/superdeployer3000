/** @param {HTMLElement} node */
export default function evade(node) {
  const { top, right, bottom, left } = node.getBoundingClientRect();

  const minX = -left;
  const maxX = window.innerWidth - right - 10;
  const minY = -top;
  const maxY = window.innerHeight - bottom - 10;

  const escape = () => {
    const translateX = Math.random() * (maxX - minX) + minX;
    const translateY = Math.random() * (maxY - minY) + minY;
    node.style.transform = `translate(${translateX}px ,${translateY}px)`;
  }

  const vanish = () => {
    node.style.opacity = "0";
  }

  node.addEventListener("mouseover", escape);
  node.addEventListener("mousedown", vanish);

  node.style.transition = "transform 0.2s, opacity 0.2s";

  return {
    destroy() {
      node.removeEventListener("mouseover", escape);
      node.removeEventListener("mousedown", vanish);
    }
  }
}