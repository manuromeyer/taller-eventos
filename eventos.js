function mensaje(event){
    alert('Hola!');
    event.stopPropagation();
}

document.addEventListener('DOMContentLoaded', function(){
    var divElement = document.getElementById('alerta');
    divElement.addEventListener('click', function() {
        alert("Hola! Soy el div");
    });
})
