menu = document.getElementById("menu");
notice = document.getElementById("notice");
creative = document.getElementById("creative-mode");
quest = document.getElementById("quest-mode");
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