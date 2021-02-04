export class AddField {
    constructor(itemService) {
        this.itemService = itemService;
        this.container = document.createElement('div');
        this.container.classList.add(AddField.name());

        this.input = document.createElement('input');
        const addButton = document.createElement('input');

        this.input.classList.add(`${AddField.name()}__input`);
        addButton.classList.add(`${AddField.name()}__add-button`);
        addButton.setAttribute('type', 'submit');
        addButton.setAttribute('value', 'add');

        this.container.appendChild(this.input);
        this.container.appendChild(addButton);


        addButton.addEventListener('click', this.add.bind(this));
    }

    static name() {
        return 'app-field';
    }

    add(){
        const value = this.input.value;
        this.input.value = '';
        this.itemService.add(value);
    }

    asHTML() {
        return this.container;
    }
}