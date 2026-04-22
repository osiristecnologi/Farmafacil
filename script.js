function go(page) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });

  const el = document.getElementById(page);
  el.classList.add("active");

  el.style.animation = "none";
  setTimeout(() => {
    el.style.animation = "slideUp 0.4s ease";
  }, 10);
}
