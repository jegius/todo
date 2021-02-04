import {AddField} from "./addField.js";
import {ItemList} from "./item-list/itemList.js";
import {ItemService} from "./services/itemService.js";

export class App {

    constructor(target) {
        const itemService = new ItemService();

        this.target = document.querySelector(target);
        this.mainContainer =  document.createElement('div');
        this.mainContainer.classList.add('app');
        this.elementsList = new Map();
        this.elementsList.set(AddField.name(), new AddField(itemService));
        this.elementsList.set(ItemList.name(), new ItemList(itemService));

        this.renderElements()
    }

    renderElements() {
        [...this.elementsList.entries()]
            .forEach(([key, element]) => {
                console.log(element)
                const container = document.createElement('div');
                container.classList.add(`${key}__container`);
                container.appendChild(element.asHTML());
                this.mainContainer.appendChild(container)
            })
    }


    run() {
        this.target.appendChild(this.mainContainer);
    }
}