import {MyMath} from "../01-MyMath/MyMath.js";

export class Calculator {

    constructor(numpad, outputCalculation, outputSolution) {
        this.numpad = numpad;
        this.outputCalculation = outputCalculation;
        this. outputSolution = outputSolution;

        this.myMath = newMyMath(0);
        this.las_operation = (value => this.myMath.add(value));

        this.setupNumPad()
    }

    setupNumPad() { 
        /* wird nur einmal beim Erstellen durchlaufen - sinnvoll
        var numb = this.numpad.children;
        for (let i=0; i<numb.length; i++){
            let nummer = numb[i];
            let nummerInText = nummer.innerText;
            nummer.addEventListener('click',this.onButtonClick.bind(this, nummerInText));
        }*/
        this.numpad.classList.add("flex-4");
        for(let i=0; i<10; i++){
            
            let e = document.createElement('button');
            e.innerHTML = i;
            this.numpad.appendChild(e);
            e.addEventListener('click', this.onButtonClick.bind(this, i));
        }
        let operatoren = ['+','-','*','/','^','!','Clear'];
        operatoren.forEach(operator => {
            
            let e = document.createElement('button');
            e.innerHTML = operator;
            this.numpad.appendChild(e);
            e.addEventListener('click', this.onButtonClick.bind(this, operator));
        });
    }

    onButtonClick(symbol) {
     /*   switch(symbol){
            case "Clear":
                this.clear();
                break;
            case lkllkkkkk
        }*/
        this.print(symbol); ////
        console.log(symbol);
    }

    print(string) {
        let operatoren = ['+','-','*','/','^','!','Clear'];
        let out = this.outputCalculation.value;
        matcher = new RegExp("[0-9]");
        if(out===''&&matcher.test(string)){
            this.outputCalculation.value = string;
            console.log("erstes Zeichen");
        }
        else if(this.outputCalculation.value.length === 1&&operatoren.indexOf(string)!==-1){
            this.outputCalculation.value=out+string;
            console.log("weiteres Zeichen"+out);
        }else{
            console.log("Falsch");
            console.log(this.outputCalculation.value);
        }

        //gesamte Rechenweg soll mit print(string) 
        //in der #calculation textarea angezeigt werden
    }

    printSolution(string) {

        //jeweilige Wert der Instanz #solution textarea angezeigt
    }

    clear() {
        //beide textareas leeren nach "Clear"
    }

}
