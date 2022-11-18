// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 4) Andiamo a collegare il nostro bottone.

let myButton = document.getElementById("mystart");

// 5) Andiamo a collegare il nostro "div show-number".

let myShowNumber = document.getElementById("show-number");

// 6) Andiamo a collegare al click il nostro bottone.

myButton.addEventListener("click",

    function(){

        // 3)Andiamo a creare un array di 100 numeri includendo i 5 numeri che ci serivranno.

        const myArrayFiveNumbers = genArrayNumUniciRandomMinMax(5, 1, 100);
        console.log(myArrayFiveNumbers);

        myShowNumber.innerHTML = myArrayFiveNumbers;
    } 
)

// 1) Andiamo a creare la nostra "Funzione" per generare i numeri random da "1" a "100", includendo i "5" numeri che ci serviranno.

function randomNumber(min, max){
    return ( Math.floor(Math.random() * ((max + 1) - min) + min));
}

// 2) Generiamo un numero Random "min - max".

function genArrayNumUniciRandomMinMax(howMany, minNum, maxNum){

    const newArr = [];

    // 3) Generiamo un array di howMany elementi.
    while (newArr.length < howMany){
        let newNumber = randomNumber(minNum, maxNum);

        // 4) Andiamo a creare la condizione se i numeri "non sono presenti" di inserirli.

        if(!newArr.includes(newNumber)){
            newArr.push(newNumber);
        }
    }

    return newArr;
}