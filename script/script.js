let frutta = ["mela", "banana", "pera"];

function stampa(){
    let lista = document.getElementById("listaIniziale");
    let banana = document.getElementById("banana"); 
    let kiwi = document.getElementById("kiwi");

    // lista normale
    for(let oggetto of frutta){
        let li = document.createElement("li");
        li.textContent = oggetto;
        lista.appendChild(li);
    }

    // lista con solo il secondo frutto
    let secondo = document.createElement("li");
    secondo.textContent = frutta[1]
    banana.appendChild(secondo);

    // lista con la modifica kiwi
    frutta.splice(1,1, "kiwi");
    for(let oggetto of frutta){
        let terzo = document.createElement("li");
        terzo.textContent = oggetto;
        kiwi.appendChild(terzo);
    }
}

document.addEventListener("DOMContentLoaded", stampa());