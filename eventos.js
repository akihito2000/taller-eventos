function saludar(){
    alert("Hola!");
}

let div = document.getElementsByTagName("div");
    div[0].addEventListener("click", function(){
        alert('Hola! Soy el div');
    }) 