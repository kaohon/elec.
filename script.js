menu_btn = document.getElementById("menu-button");
menu = document.getElementById("menu");
notice_btn = document.getElementById("notice-button");
notice = document.getElementById("notice");
creative = document.getElementById("creative-mode");
quest = document.getElementById("quest-mode");

menu_btn.addEventListener("click", function () {
    menu.style.display = "block";
});

notice_btn.addEventListener("click", function () {
    notice.style.display = "block";
});

creative.addEventListener("click", function () {
    window.location.href = "creative/index.html";
});

quest.addEventListener("click", function () {

});