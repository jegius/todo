export class Item {
    constructor(data, updateCallback, removeCallback) {
        this.container = document.createElement('div');
        this.container.setAttribute('id', data.id);
        this.container.classList.add(Item.name());

        const itemData = document.createElement('span');
        itemData.classList.add(`${Item.name()}__value`);
        itemData.innerHTML = data.value;

        const doneCheckbox = document.createElement('input');
        doneCheckbox.setAttribute('type', 'checkbox');
        doneCheckbox.setAttribute('value', data.done);
        doneCheckbox.classList.add(`${Item.name()}__checkbox`)

        const removeButton = document.createElement('input');
        removeButton.setAttribute('type', 'button');
        removeButton.setAttribute('value', 'Remove');
        doneCheckbox.classList.add(`${Item.name()}__remove`)


        doneCheckbox.onclick = () => updateCallback.call(this, data);
        removeButton.onclick = () => removeCallback.call(this, data);

        this.container.appendChild(itemData)
        this.container.appendChild(doneCheckbox)
        this.container.appendChild(removeButton)
    }

    static name() {
        return 'item';
    }

    asHTML() {
        return this.container
    }
}