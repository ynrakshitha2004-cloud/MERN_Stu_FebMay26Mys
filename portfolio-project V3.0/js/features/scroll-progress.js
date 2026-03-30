const bar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;

  bar.style.width = progress + "%";
});