// 用来控制输入搜索框的方法
function inputFilter() {
    var input, filter, publication_list, li, a, i, txtValue;
    // 获取输入的文字内容
    input = document.getElementById("input-filter-id");
    // 将输入的内容转换成大写字母
    filter = input.value.toUpperCase();

    // 获取id为container-publications中的所有内容
    publication_list = document.getElementById("container-publications");
    
    // 提取publications的部分
    publications = publication_list.getElementsByClassName("grid-sizer col-lg-12 isotope-item");

    for (i = 0; i < publications.length; i++) {
    // 提取学术发表的作者
    tmp = publications[i].getElementsByClassName("pub-list-item")[0]
                         .getElementsByClassName("article-metadata li-cite-author")[0]
                         .getElementsByTagName("span")[0]
                         .getElementsByTagName("a")[0];
    pub_authors_list = tmp.textContent

    // 提取学术发表的标题
    tmp = publications[i].getElementsByClassName("pub-list-item")[0]
                         .getElementsByClassName("article-title")[0]
                         .getElementsByTagName("i")[0];
    pub_title = tmp.textContent
    
    // 比对输入内容与作者是否吻合
    if (pub_authors_list.toUpperCase().indexOf(filter) > -1 || 
        pub_title.toUpperCase().indexOf(filter) > -1) {
        publications[i].style.display = "";
    } else {
        publications[i].style.display = "none";
    }
    }
}

function typeFilter() {
    var select_value;
    // 获取类型选项的值
    select_value = document.getElementById("select-type-id").value;

    // 获取id为container-publications中的所有内容
    publication_list = document.getElementById("container-publications");
    
    // 提取publications的部分
    publications = publication_list.getElementsByClassName("grid-sizer col-lg-12 isotope-item");

    for (i = 0; i < publications.length; i++) {
    // 提取学术发表的类型
    pub_type = publications[i].className;
    
    // 比对输入内容与作者是否吻合
    if (pub_type.indexOf(select_value) > -1) {
        publications[i].style.display = "";
    } else {
        publications[i].style.display = "none";
    }
    }
}

function yearFilter() {
    var select_value;
    // 获取类型选项的值
    select_value = document.getElementById("select-year-id").value;

    // 获取id为container-publications中的所有内容
    publication_list = document.getElementById("container-publications");
    
    // 提取publications的部分
    publications = publication_list.getElementsByClassName("grid-sizer col-lg-12 isotope-item");

    for (i = 0; i < publications.length; i++) {
        // 提取学术发表的类型
        pub_year = publications[i].className;
        
        // 比对输入内容与作者是否吻合
        if (pub_year.indexOf(select_value) > -1) {
        publications[i].style.display = "";
        } else {
        publications[i].style.display = "none";
        }
    }
}