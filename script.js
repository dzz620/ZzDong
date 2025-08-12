// script.js

window.onload = function () {
  // 获取回到顶部按钮
  const btn = document.getElementById("backToTop");

  // 滚动时显示或隐藏按钮
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // 点击按钮平滑回到顶部
  btn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // 让导航菜单在当前页面高亮
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
};
