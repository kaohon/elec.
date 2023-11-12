// 変数の初期化
l1 = false;
s1 = false;
s2 = false;

l1element = document.getElementById("l1");

// ボタンの定義
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// ボタンのクリックイベントリスナーの設定
button1.addEventListener("click", function () {
  // ボタン1が押された時の処理
  s1 = true;


  if (s2 === true) {
    l1 = true;
    l1element.classList.add("l1-enabled");
  } else if (l1 === true) {
    l1 = false;
    l1element.classList.remove("l1-enabled");
  } else if (l1 === false) {
    l1 = true;
    l1element.classList.add("l1-enabled");
  } else if (s1 === true) {
    l1 = false;
    l1element.classList.remove("l1-enabled");
  }
});
button2.addEventListener("click", function () {
  // ボタン2が押された時の処理
  s2 = true;


  if (s1 === true) {
    l1 = true;
    l1element.classList.add("l1-enabled");
  } else if (l1 === true) {
    l1 = false;
    l1element.classList.remove("l1-enabled");
  } else if (l1 === false) {
    l1 = true;
    l1element.classList.add("l1-enabled");
  } else if (s2 === true) {
    l1 = false;
    l1element.classList.remove("l1-enabled");
  }
});