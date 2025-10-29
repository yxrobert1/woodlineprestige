let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }

    lastScroll = currentScroll;
});

const toTopBtn = document.getElementById("toTop");

if (toTopBtn) {
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }