// var modal= document.querySelector("#modal-div");

$(document).ready(function() {
    var button = $('.modal-button'); 
    var modal = $('#modal-div');
    button.on('click', function(event) {
        modal.show();
    });
});