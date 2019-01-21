class Heap {
    static getParent(index) {
        return index % 2 === 0 ? (index - 2) / 2 : (index - 1) / 2;
    }
    constructor() {
        this.arr = [];
    }
    _swap(child, parent) {
        [this.arr[child], this.arr[parent]] = [this.arr[parent], this.arr[child]];
    }
    _sink() {

    }
    _swim(index) {
        while (index > 0) {
            let parentIndex = Heap.getParent(index);
            if (this.arr[index] > this.arr[parentIndex]) {
                this._swap(index, parentIndex);
            }
            index = parentIndex;
        }
    }
    getMax() {
        return this.arr[0];
    }
    insert(p) {
        this.arr.push(p);
        this._swim(this.arr.length - 1);
    }
    extractMax() {

    }
    remove(p) {

    }
    changePriority(it, p) {

    }
}

const h = new Heap();
h.insert(6);
h.insert(3);
h.insert(10);
h.insert(8);
h.insert(7);

h.insert(2);
h.insert(7);



