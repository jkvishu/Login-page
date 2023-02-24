const form = document.querySelector("form");
const sfield = form.querySelector(".email");
const sinput = sfield.querySelector("input");
const pfield = form.querySelector(".password");
const pinput = pfield.querySelector("input");

form.onsubmit = (ele) => {
    ele.preventDefault();
    if (sinput.value == "") {
        sfield.classList.add("kyuHilaDalaNa", "error");
    }
    else {
        checkmail();
    }
    if (pinput.value == "") {
        pfield.classList.add("kyuHilaDalaNa", "error");
    }
    setTimeout(() => {
        sfield.classList.remove("kyuHilaDalaNa");
        pfield.classList.remove("kyuHilaDalaNa");
    }, 500)
    sinput.onkeyup = () => {
        checkmail();
    }

    function checkmail() {
        let ptrn = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!sinput.value.match(ptrn)) {
            sfield.classList.add("error");
            let errorTxt = sfield.querySelector(".error-txt");
            (sinput.value != "") ? errorTxt.innerHTML = "Enter a valid email address" : errorTxt.innerHTML = "Email can't be blank";
        }
        else {
            sfield.classList.remove("error");
        }
    }

    pinput.onkeyup = () => {
        if (pinput.value == "") {
            pfield.classList.add("error");
        }
        else {
            pfield.classList.remove("error");
        }
    }
    if (!sfield.classList.contains("error") && !pfield.classList.contains("error")) {
        window.location.href = "#";
        console.log("form-Submitted!");
    }
}