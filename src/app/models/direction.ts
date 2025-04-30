export class DiagramDirection {
    value: string;

    next() {
        if (this.value == 'TD') this.value = 'RL'
        else this.value = 'TD'
        console.log(this.value);
        
    }


    constructor() {
        this.value = 'TD';
    }
    
}