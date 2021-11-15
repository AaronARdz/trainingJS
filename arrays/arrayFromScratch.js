class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[item] = item;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems();
        return item;
    }
    shiftItems(index) {
        for (let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const array = new MyArray();
array.push('a la una');
array.push('a las 2');
array.push('sdsdsd');
array.delete(0);
array.push('tigueres');

console.log(array);








