$(function () {
  window.addEventListener("message", function (event) {
    if (event.data.type == "enableinput") {
      const data = event.data;
      document.body.style.display = data.style;

      const inputEle = document.getElementById("inputUser");
      const inputHeaderEle = document.getElementById("inputHeader");
      const buttonEle = document.getElementById("submitButton");

      inputHeaderEle.style.display = "none";

      if (event.data.inputType) {
        inputEle.type = data.inputType;
      }

      if (data.style == "block") {
        buttonEle.innerHTML = data.button;
        inputEle.placeholder = data.placeholder;
        inputEle.value = data?.attributes?.value ?? "";

        for (const key in data?.attributes) {
          if (key === "inputHeader") {
            inputHeaderEle.innerHTML = data.attributes[key];
            inputHeaderEle.style.display = "block";
          } else {
            inputEle.setAttribute(`${key}`, `${data.attributes[key]}`);
          }
        }
      }

      $("#inputUser").focus();
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

  $("#closeButton").click(function () {
    $.post(
      "http://vorp_inputs/close",
      JSON.stringify({
        stringtext: "close",
      })
    );
  });

  $("#formInputs").submit(function (event) {
    //event.preventDefault(); // Prevent form from submitting

    $.post(
      "http://vorp_inputs/submit",
      JSON.stringify({
        stringtext: $("#inputUser").val(),
      })
    );
  });
});
