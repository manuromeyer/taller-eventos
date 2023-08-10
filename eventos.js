function mensaje(){
    alert('Hola!');
}

document.addEventListener('DOMContentLoaded', function(){
    var divElement = document.getElementById('alerta');
    divElement.addEventListener('click', function() {
        alert("Hola! Soy el div");
    });
})
