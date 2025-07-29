// 获取返回顶部按钮
const backToTopBtn = document.getElementById("bottom-to-top-id");

// 当用户滚动页面时，显示或隐藏按钮
// window.onscroll = function() {
//     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//         backToTopBtn.style.display = "block"; // 显示按钮
//     } else {
//         backToTopBtn.style.display = "none"; // 隐藏按钮
//     }
// };

// 点击按钮时，平滑滚动到顶部
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
});