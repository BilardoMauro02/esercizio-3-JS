let frutta = ["mela", "banana", "pera"];
let animali = ["cane", "gatto"];

//event listener che al caricamento della pagina permette una stampa completa di tutte le liste
document.addEventListener("DOMContentLoaded", stampa());


//funzione che permette tutte le stampe
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
        let li = document.createElement("li");
        li.textContent = oggetto;
        kiwi.appendChild(li);
    }

    // lista animali
    let listaAnimali = document.getElementById("listaAnimali");
    for(let animale of animali){
        let li = document.createElement("li");
        li.textContent = animale;
        listaAnimali.appendChild(li);
    }


    //modifica aggiunta pesce e criceto
    animali.unshift("pesce");
    animali.push("criceto");
    
    let listaAnimali2 = document.getElementById("listaAnimali2");
    for(let animale of animali){
        let li = document.createElement("li");
        li.textContent = animale;
        listaAnimali2.appendChild(li);
    }

    // modifica rimozione criceto
    animali.pop();
    let listaAnimali3 = document.getElementById("listaAnimali3");
    for(let animale of animali){
        let li = document.createElement("li");
        li.textContent = animale;
        listaAnimali3.appendChild(li);
    }

    
}

