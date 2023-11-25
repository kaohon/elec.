menu = document.getElementById("menu");
notice = document.getElementById("notice");
creative = document.getElementById("creative-mode");
quest = document.getElementById("quest-mode");

left_sidebar = document.getElementById("left-sidebar");

slot_1 = document.getElementById("slot-1");
slot_2 = document.getElementById("slot-2");
slot_3 = document.getElementById("slot-3");
slot_4 = document.getElementById("slot-4");

slot_1.addEventListener("click", function () {
    left_sidebar.style.display = "block";
});

slot_2.addEventListener("click", function () {
    left_sidebar.style.display = "block";
});

slot_3.addEventListener("click", function () {
    left_sidebar.style.display = "block";
});

slot_4.addEventListener("click", function () {
    left_sidebar.style.display = "block";
});
/*
menu.addEventListener("click", function () {

});

notice.addEventListener("click", function () {

});

creative.addEventListener("click", function () {

});

quest.addEventListener("click", function () {

});
*/
function addChangeListener(switchId, slotId) {
    for (let target of switchId) {
      target.addEventListener('change', () => {
        document.querySelector(`#${slotId}`).innerHTML = '<img src="img/スイッチ.png">';
      });
    }
  }
  
  let switch1 = document.querySelectorAll(`input[type='radio'][name='s1'][class='switch']`);
  let switch2 = document.querySelectorAll(`input[type='radio'][name='s2'][class='switch']`);
  let switch3 = document.querySelectorAll(`input[type='radio'][name='s3'][class='switch']`);
  let switch4 = document.querySelectorAll(`input[type='radio'][name='s4'][class='switch']`);
  
  addChangeListener(switch1, 'slot-1');
  addChangeListener(switch2, 'slot-2');
  addChangeListener(switch3, 'slot-3');
  addChangeListener(switch4, 'slot-4');

  function addChangeListener(dcId, slotId) {
    for (let target of dcId) {
      target.addEventListener('change', () => {
        document.querySelector(`#${slotId}`).innerHTML = '<img src="img/直流電源.png">';
      });
    }
  }
  
  let dc1 = document.querySelectorAll(`input[type='radio'][name='s1'][class='dc']`);
  let dc2 = document.querySelectorAll(`input[type='radio'][name='s2'][class='dc']`);
  let dc3 = document.querySelectorAll(`input[type='radio'][name='s3'][class='dc']`);
  let dc4 = document.querySelectorAll(`input[type='radio'][name='s4'][class='dc']`);
  
  addChangeListener(dc1, 'slot-1');
  addChangeListener(dc2, 'slot-2');
  addChangeListener(dc3, 'slot-3');
  addChangeListener(dc4, 'slot-4');


$(function() {
    // Make the element draggable
    $('.items').draggable();

    // Make the element droppable, but set accept option to make it not droppable
    $("#center").droppable({
        accept: ".items", // Only accept the specified draggable element
        drop: function(event, ui) {
            alert("Drop not allowed here!");
      }
    });
});