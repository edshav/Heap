class Heap {
    static getParent(index) {
        return Math.floor((index - 1) / 2);
    }
    static getChild(index) {
        return {
            left: index * 2 + 1,
            right: index * 2 + 2
        };
    }
    constructor() {
        this.arr = [];
        this.size = 0;
    }
    _swap(p, q) {
        [this.arr[p], this.arr[q]] = [this.arr[q], this.arr[p]];
    }
    _sink(index) {
        while ((index + 1) * 2 <= this.size) { // last node with at least one leaf
            const child = Heap.getChild(index);
            let largest = child.left;
            if (largest < this.size - 1 && this.arr[largest] < this.arr[child.right]) {
                largest = child.right;
            }
            if (this.arr[largest] <= this.arr[index]) break;
            this._swap(largest, index);
            index = largest;
        }
    }
    _swim(index) {
        while (index > 0) {
            let parentIndex = Heap.getParent(index);
            if (this.arr[index] > this.arr[parentIndex]) {
                this._swap(index, parentIndex);
            } else {
                return;
            }
            index = parentIndex;
        }
    }
    getMax() {
        return this.size > 0 ? this.arr[0] : false;
    }
    insert(priority) {
        this.arr.push(priority);
        this._swim(this.arr.length - 1);
        this.size++;
        return true;
    }
    extractMax() {
        if (this.size === 0) return false;
        this._swap(0, this.arr.length - 1);
        const max = this.arr.pop();
        this.size--;
        this._sink(0);
        return max;
    }
    remove(index) {
        if (index >= this.size || index < 0) return false;
        this._swap(index, this.arr.length - 1);
        this.arr.pop();
        this.size--;
        this._sink(index);
        return true;
    }
    changePriority(index, priority) {
        if (index >= this.size || index < 0) return false;
        if (priority > this.arr[index]) {
            this.arr[index] = priority;
            this._swim(index);
        } else if (priority < this.arr[index]) {
            this.arr[index] = priority;
            this._sink(index);
        } else {
            return false;
        }
        return true;
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
h.remove(1);
h.changePriority(0, 1)
