

let div = document.getElementsByTagName("div");
    div[0].addEventListener("click", function(e) {
    if (e.target.tagName !== "BUTTON") {
        alert("Hola! Soy el div");}
    }) 