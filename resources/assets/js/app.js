class Person {
    constructor(name) {
        this.name = name;
    }
    
    playAV() {
        console.log(`${this.name}'s watching it`);
    }
}

$(() => {
    let whx = new Person('王海');
    whx.playAV();
});