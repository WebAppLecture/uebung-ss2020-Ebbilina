/**
 * 'export' ist nötig falls wir MyMath in einem anderen Modul importieren wollen.
 * 'class' legt fest dass es sich hierbei um eine Klasse handelt.
 * 'MyMath' ist der Name der Klasse.
 */
export class MyMath {

    /**
     * Der Konstruktor wird aufgerufen um neue Instanzen der Klasse zu generieren.
     * vgl. let myNumber = new MyMath(3);
     * 
     * @param value Unser Initialwert für den Wert von unserer MyMath Instanz.
     */
    constructor(value) {
        // 'this' referenziert den Kontext in dem die aktuelle Funktion aufgerufen wird. 
        // Hier referenziert es die Instanz der Klasse MyMath die wir gerade erstellen.
        // mit 'value * 1' erzwingen wir, dass value als number gelesen wird.
        this.value = value * 1; 
    }
    
    add(value) {
        this.value+=value
       // return this.value
        return this
    }

    subtract(value) {
        this.value-=value
       // return this.value
        return this
    }

    multiply(value) {
        this.value*=value
        return this
    }

    divide(value) {
        if(value!==0){
        this.value/=value
        }
        return this
    }

    pow(value) {
        if(value>0){
            let a = this.value;
            for(let i = 0;i < value; i++)
            {this.value*=a}
        }
        return this
    }

    faculty() {
        let n = this.value
        if(n % 1 === 0){
            for (let index = n-1; index >0; index--) {
                n*=index
            }
        }
        this.value =n
        return this
    }
}
