import {Item} from "./item.js";

export class ItemList {

    constructor(itemService) {
        this.container = document.createElement('div');
        this.container.classList.add(ItemList.name());
        this.itemService = itemService;
        this.itemService.subscribe(this.render.bind(this));
    }

    render(items) {
        this.cleanList();
        items
            .forEach(item => {
                const itemInstance = new Item(item, this.update.bind(this), this.remove.bind(this));
                this.container.appendChild(itemInstance.asHTML())
            })
    }

    cleanList() {
        this.container.innerHTML = '';
    }


    update(item) {
        this.itemService.update(item);
    }

    remove({id}) {
        this.itemService.remove(id);
    }

    static name() {
        return 'item-list';
    }

    asHTML() {
        return this.container
    }
}