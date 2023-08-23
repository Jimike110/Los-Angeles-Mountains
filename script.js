window.addEventListener("scroll", function () {
  const isScrolled = this.scrollY > 20;
  const logo = document.querySelector(".logo");
  const stickyLogo = document.querySelector(".sticky-logo");
  const nav = document.getElementById("nav");
  const links = document.getElementsByTagName("a");

  if (isScrolled) {
    logo.style.display = "none";
    stickyLogo.style.display = "flex";
    nav.style.background = "#fff";
    for (const link of links) {
      link.style.color = "#414f6b";
      link.style.borderBottom = "1px solid #414f6b";
    }
  } else {
    stickyLogo.style.display = "none";
    logo.style.display = "flex";
    nav.style.background = "transparent";
    for (const link of links) {
      link.style.color = "#fff";
      link.style.borderBottom = "1px solid #fff";
    }
  }
});
