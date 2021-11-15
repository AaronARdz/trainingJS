class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log('please introduce yourself' + this.name + this.type)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        console.log('wizard ', this);
        super(name, type);
    }
    play() {
        console.log('Wee Im a type: ' +  this.type)
    }
}