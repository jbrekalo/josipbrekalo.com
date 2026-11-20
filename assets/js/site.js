/* Josip Brekalo, portfolio. Vanilla JS, no dependencies. */

/* <before-after>: a range input drives the split between two stacked screenshots. */
class BeforeAfter extends HTMLElement {
  connectedCallback() {
    const range = this.querySelector('input[type="range"]');
    if (!range) return;

    const apply = () => {
      const value = Number(range.value);
      this.style.setProperty('--pos', `${value}%`);
      range.setAttribute('aria-valuetext', `${Math.round(value)}% before, ${Math.round(100 - value)}% after`);
    };

    range.addEventListener('input', apply);
    apply();
  }
}

customElements.define('before-after', BeforeAfter);
