function switchLanguage() {
    // 检查当前存储的语言，如果没有设置，默认为英文
    var currentLanguage = localStorage.getItem('language') || 'english';

    // 切换语言设置
    var newLanguage = currentLanguage === 'english' ? 'chinese' : 'english';

    // 更新存储的语言
    localStorage.setItem('language', newLanguage);

    // 应用新的语言设置到页面元素
    updateLanguageOnPage(newLanguage);
}

function updateLanguageOnPage(language) {
    var elementsEn = document.querySelectorAll('[data-lang="en"]');
    var elementsZh = document.querySelectorAll('[data-lang="zh"]');

    elementsEn.forEach(function(el) {
        el.style.display = (language === 'chinese') ? 'none' : '';
    });

    elementsZh.forEach(function(el) {
        el.style.display = (language === 'chinese') ? '' : 'none';
    });
}

// 当页面加载时，应用存储的语言偏好
document.addEventListener('DOMContentLoaded', function() {
    // 获取存储的语言偏好或默认为英文
    var storedLanguage = localStorage.getItem('language') || 'english';
    updateLanguageOnPage(storedLanguage);
});
