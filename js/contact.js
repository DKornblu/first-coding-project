let inputs = document.querySelectorAll(".required");
let btn = document.querySelector(".sbmt");

function TurnOnSubmit() {

    console.log(inputs);
    console.log(btn);

    for (i = 0; i < inputs.length; i++){
        if (inputs[i].value == ""){
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    }
        console.log(btn.disabled);
}

document.addEventListener("click", function () {
    TurnOnSubmit();
});
