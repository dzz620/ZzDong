window.onload = function () {
  // 滚动页面时显示“回到顶部”按钮
  window.onscroll = function () {
    const btn = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // 点击按钮平滑滚动回顶部
  const btn = document.getElementById("backToTop");
  btn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
};
