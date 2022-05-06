// This is only for running locally
var loader = setInterval(function () {
  if (document.readyState !== "complete") return;
  clearInterval(loader);
  if (window.location.href.match(/localhost/)) {
    document.body.style.display = "block";

    const modalEle = document.getElementById("modal");
    const size = "md";

    let modalWidth = "w-3/12";
    let modalHeight = "h-48";

    switch (size) {
      case "md":
        modalWidth = "w-3/12";
        modalHeight = "h-48";
        break;
      case "lg":
        modalWidth = "w-5/12";
        modalHeight = "h-64";
        break;
    }

    modalEle.classList.add(modalWidth);
    modalEle.classList.add(modalHeight);

    setTimeout(() => {
      location.reload();
    }, 10000);
  }
}, 300);

// these methods will only work when in game
$(function () {
  window.addEventListener("message", function (event) {
    if (event.data.type == "enableinput") {
      const data = event.data;
      document.body.style.display = data.style;

      const inputEle = document.getElementById("inputUser");
      const inputHeaderEle = document.getElementById("inputHeader");
      const buttonEle = document.getElementById("submitButton");
      const modalEle = document.getElementById("modal");

      inputHeaderEle.style.display = "none";

      if (event.data.inputType) {
        inputEle.type = data.inputType;
      }

      if (data.style == "block") {
        buttonEle.innerHTML = data.button;
        inputEle.placeholder = data.placeholder;
        inputEle.value = data?.attributes?.value ?? "";

        let modalWidth = "w-3/12";
        let modalHeight = "h-48";
        switch (data.attributes.size) {
          case "md":
            modalWidth = "w-5/12";
            modalHeight = "h-64";
        }
        modalEle.classList.add(modalWidth);
        modalEle.classList.add(modalHeight);

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
