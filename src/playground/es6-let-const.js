const multiplier = {
    numbers : [2,5,10,13,7],
    multiplyBy : 3,
    mutiply() {
        return this.numbers.map((number) => number * this.multiplyBy); 
    }
};

console.log(multiplier.mutiply());
