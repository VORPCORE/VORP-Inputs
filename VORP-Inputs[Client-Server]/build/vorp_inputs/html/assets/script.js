$(function() {
    window.addEventListener('message', function(event) {
        if (event.data.type == "enableinput") {
            document.body.style.display = event.data.style;
            if (event.data.style == "block") {
                document.getElementById("subButton").innerHTML = event.data.button;
                document.getElementById("inputUser").placeholder = event.data.placeholder;
            }
        }
    });

    document.onkeyup = function(data) {
        if (data.which == 27) { // Escape key
            //$.post('http://vorp_inputs/escape', JSON.stringify({}));
        }
    };

    $("#formInputs").submit(function(event) {
        event.preventDefault(); // Prevent form from submitting

        $.post('http://vorp_inputs/submit', JSON.stringify({
            stringtext: $("#inputUser").val()
        }));
    });
});