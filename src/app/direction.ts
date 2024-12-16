export class DiagramDirection {
    readonly TopToDown = 'TD'
    readonly RightToLeft = 'RL'
    readonly DownToTop = 'DT'
    readonly LeftToRight = 'LR'

    value = this.TopToDown

    next() {
        let directions: string[] = [
            this.TopToDown, 
            this.RightToLeft,
            this.DownToTop,
            this.LeftToRight
        ]
        let index = directions.findIndex((element)=>{
            return (element == this.value);
        })
        console.log(index);
        
        if (index < 3) this.value = directions.at(++index)!;

        else {this.value = directions.at(0)!, index = 0};
        
    }

    constructor() {
        this.value = 'TD';
    }
    
}