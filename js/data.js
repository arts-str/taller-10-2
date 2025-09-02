document.addEventListener('DOMContentLoaded', () =>{
    let data = document.getElementById('data');
    let stored = localStorage.getItem('text');
    if (stored) {        
        data.innerHTML = stored.toString();
    }else{
        data.innerHTML = "debes definir el dato en index.html";
    }
});