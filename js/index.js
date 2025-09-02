document.addEventListener('DOMContentLoaded', () =>{
    let boton = document.getElementById('buttonText');
    boton.addEventListener('click', () =>{ 
        let text = document.getElementById('inputText').value;
        localStorage.setItem('text', text);
    });
});