export class ItemService {

    constructor() {
        this.counter = 0;
        this.items = [];
        this.subscriptions = [];
    }

    subscribe(callback) {
        this.subscriptions.push(callback);
    }

    add(value) {
        this.items.push({
            id: this.counter++,
            value,
            done: false
        });
        this.notify();
    }

    update(data) {
        const newDataIndex = this.items.findIndex(item => item.id === data.id);
        this.items[newDataIndex] = data;

        this.notify();
    }

    notify(){
        this.subscriptions.forEach(callback => callback.call(this, this.items))
    }

    remove(itemId) {
        this.items = this.items.filter(({id}) => id !== itemId);
        this.notify();
    }

}