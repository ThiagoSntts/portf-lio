function digitar(letras){
    const textoArray = letras.innerHTML.split('');
    letras.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => letras.innerHTML += letra, 150 * i)
    });
}

const titulo = document.getElementById('maquina');
digitar(titulo);