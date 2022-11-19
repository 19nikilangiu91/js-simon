// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 4) Andiamo a collegare il nostro bottone.

let myButton = document.getElementById("mystart");

// 5) Andiamo a collegare il nostro "div show-number".

let myShowNumber = document.getElementById("show-number");

// // 6) Andiamo a creare una classe "hidden"

myShowNumber.classList.add("hidden");

// 7) Andiamo a collegare al click il nostro bottone.

myButton.addEventListener("click",

    function(){

        myShowNumber.classList.remove("hidden");

        // 3)Andiamo a creare un array di 100 numeri includendo i 5 numeri che ci serivranno.

        const myArrayFiveNumbers = genArrayNumUniciRandomMinMax(5, 1, 100);
        console.log(myArrayFiveNumbers);

        myShowNumber.innerHTML = myArrayFiveNumbers;

        // 8) Andiamo a inserire il nostro "array" nel ciclo "for" e andiamoa creare una funzione per il  "timer" di "30 sec" per i nostri numeri.

        let trentaSec = 3 ;

        let timer = setInterval(function(){
            if(trentaSec === -1){
                myShowNumber.innerHTML = '';
                myShowNumber.classList.add("hidden");
                clearInterval(timer);
                myShowNumber.classList.remove("hidden");

                let mioArray =[];

                for (let i = 0; i < myArrayFiveNumbers.length; i++) {
                    let numeri = parseInt(prompt(`Inserisci i numeri`));
                    if(myArrayFiveNumbers.includes(numeri)){
                        mioArray.push(numeri);
                        console.log(`Hai indovinato ${mioArray.lenght} numeri`);
                    }else{
                        console.log("Non hai indovinato nesseun numero");
                    }
                // myShowNumber.append(numeri);
                // console.log(numeri);
                }
            }else
                trentaSec--;
                console.log(trentaSec);

        }, 1000)
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