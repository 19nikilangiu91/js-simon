// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let mioArray = [];

// 4) Andiamo a collegare il nostro bottone.

let myButton = document.getElementById("mystart");

// 5) Andiamo a collegare il nostro "div show-number".

let myShowNumber = document.getElementById("show-number");

// 6) Andiamo ad aggiungere una classe "hidden".

myShowNumber.classList.add("hidden");

// 7) Andiamo a collegare il "text".

let numeri = document.getElementById("text");

// 8) Andiamo ad aggiungere una classe "hidden".

numeri.classList.add("hidden");

// 9) Andiamo a collegare il bottone "invia".

let myInvia = document.getElementById("invia");

// 10) Andiamo ad aggiungere una classe "hidden".

myInvia.classList.add("hidden");

// 11) Andiamo a collegare il bottone "invia".

let myOutput = document.getElementById("output");

// 12) Andiamo ad aggiungere una classe "hidden".

myOutput.classList.add("hidden");

// 13) Andiamo a collegare al click il nostro bottone.

myButton.addEventListener("click",

    function(){

        myShowNumber.classList.remove("hidden");
        myOutput.innerHTML = '';

        // 3)Andiamo a creare un array di 100 numeri includendo i 5 numeri che ci serivranno.

        const myArrayFiveNumbers = genArrayNumUniciRandomMinMax(5, 1, 100);
        console.log(myArrayFiveNumbers);

        myShowNumber.innerHTML = myArrayFiveNumbers;

        // 14) Andiamo a inserire il nostro "array" nel ciclo "for" e andiamoa creare una funzione per il  "timer" di "30 sec" per i nostri numeri.

        let trentaSec = 1 ;

        let timer = setInterval(function(){
            if(trentaSec === 0){
                myShowNumber.innerHTML = '';
                clearInterval(timer);
                myShowNumber.classList.remove("hidden");
                numeri.classList.remove("hidden");
                myInvia.classList.remove("hidden");
            }else{
                trentaSec--;
                console.log(trentaSec);
            }
        }, 1000)

        // 15) Andiamo a collegare al click il nostro bottone "Invia".

        let mioArray = [];

        myInvia.addEventListener("click",

            function(){

            mioArray.push(numeri.value);
            console.log(mioArray);

            myShowNumber.innerHTML = `${mioArray}`;

            if(5 === mioArray.length){
            
                for (let i = 0; i < myArrayFiveNumbers.length; i++) {
            
                    if(myArrayFiveNumbers[i] == mioArray[i]){
                        console.log("il numeri sono corretti");
                        numeri.classList.add("hidden");
                        myInvia.classList.add("hidden");
                        myOutput.classList.remove("hidden");
                        document.getElementById("output").innerHTML = `Hai indovinato i numeri`;
                    }else{
                        console.log("il numeri non sono corretti");
                        numeri.classList.add("hidden");
                        myInvia.classList.add("hidden");
                        myOutput.classList.remove("hidden");
                        document.getElementById("output").innerHTML = `Non hai indovinato i numeri`;
                    }
                }
            }
        })
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