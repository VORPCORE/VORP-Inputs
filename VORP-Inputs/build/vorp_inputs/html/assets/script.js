$(function () {
  window.addEventListener("message", function (event) {
    if (event.data.type == "enableinput") {
      const data = event.data;
      document.body.style.display = data.style;

      var inputEle = document.getElementById("inputUser");
      var buttonEle = document.getElementById("subButton");
      var inputContainer = document.getElementById("vorpSingleInput");
      var textareaContainer = document.getElementById("vorpTextarea");

      if (data.style == "block") {
        buttonEle.innerHTML = data.button;
        inputEle.placeholder = data.placeholder;

        if (data.inputType == "textarea") {
          textareaContainer.style.display = "unset";
          inputContainer.style.display = "none";
          inputEle = document.getElementById("inpTextarea");
        } else if (data.inputType == "input") {
          textareaContainer.style.display = "none";
          inputContainer.style.display = "unset";        
        }

        for (const key in data?.attributes) {
          inputEle.setAttribute(`${key}`, `${data.attributes[key]}`);
        }
      }

      if (textareaContainer.is(":visible")) {
        $("#inpTextarea").focus();
      } else {
        $("#inputUser").focus();
      }
    }
  });

  document.onkeyup = function (data) {
    if (data.which == 27) {
      // Escape key
      $.post(
        "http://vorp_inputs/close",
        JSON.stringify({
          stringtext: "close",
        })
      );
    }
  };

  $("#notButton").click(function () {
    $.post(
      "http://vorp_inputs/close",
      JSON.stringify({
        stringtext: "close",
      })
    );
  });

  $("#formInputs").submit(function (event) {
    //event.preventDefault(); // Prevent form from submitting

    var fieldValue = $("#inputUser").val();

    if ($("#vorpTextarea").is(":visible")) {
      fieldValue = $("#inpTextarea").val();
    }

    $.post(
      "http://vorp_inputs/submit",
      JSON.stringify({
        stringtext: $("#inputUser").val(),
      })
    );
  });
});
