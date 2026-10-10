document.documentElement.classList.add("js-ready");

const initPortfolio = () => {
  const renderIcons = () => {
    if (window.lucide) window.lucide.createIcons();
  };
  renderIcons();
  window.addEventListener("load", renderIcons, { once: true });

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".primary-nav");
  const firstNavLink = nav?.querySelector("a");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const setMenu = (open) => {
    header?.classList.toggle("menu-open", open);
    toggle?.setAttribute("aria-expanded", String(open));
    toggle?.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    if (open) {
      const focusFirstLink = () => firstNavLink?.focus({ preventScroll: true });
      window.requestAnimationFrame(focusFirstLink);
      window.setTimeout(focusFirstLink, 60);
    }
  };

  toggle?.addEventListener("click", () => {
    setMenu(!header?.classList.contains("menu-open"));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header?.classList.contains("menu-open")) {
      setMenu(false);
      toggle?.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (header?.classList.contains("menu-open") && !header.contains(event.target)) {
      setMenu(false);
    }
  });

  const revealItems = document.querySelectorAll(".reveal");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((element) => element.classList.add("visible"));
  } else {
    const observer = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((element) => observer.observe(element));
    window.setTimeout(() => {
      revealItems.forEach((element) => {
        if (!element.classList.contains("visible")) element.classList.add("visible");
      });
      observer.disconnect();
    }, 1600);
  }

  const progress = document.querySelector(".scroll-progress span");
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  document.querySelectorAll(".timeline-item").forEach((item) => {
    const button = item.querySelector(".timeline-node");
    const content = item.querySelector(".timeline-content");
    const openItem = () => {
      document.querySelectorAll(".timeline-item").forEach((other) => {
        const otherContent = other.querySelector(".timeline-content");
        const otherButton = other.querySelector(".timeline-node");
        const active = other === item;
        other.classList.toggle("active", active);
        otherButton?.setAttribute("aria-expanded", String(active));
        if (otherContent) otherContent.hidden = !active;
      });
    };
    button?.addEventListener("click", openItem);
    item.addEventListener("keydown", (event) => {
      if ((event.key === "Enter" || event.key === " ") && event.target === item) {
        event.preventDefault();
        openItem();
      }
    });
  });

  if (!reducedMotion.matches && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".btn-primary").forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const bounds = button.getBoundingClientRect();
        button.style.transform = `translate(${(event.clientX - bounds.left - bounds.width / 2) * 0.035}px, ${(event.clientY - bounds.top - bounds.height / 2) * 0.035}px)`;
      });
      button.addEventListener("pointerleave", () => { button.style.transform = ""; });
    });
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPortfolio, { once: true });
} else {
  initPortfolio();
}
