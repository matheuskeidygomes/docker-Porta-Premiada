export default class DoorModel {

    #number
    #present
    #selected
    #open 

    constructor(number, present = true, selected = false, open = false) {
        this.#number = number;
        this.#present = present;
        this.#selected = selected;
        this.#open = open;
    }

    get number() {
        return this.#number;
    }

    get present() {
        return this.#present;
    }

    get selected() {
        return this.#selected;
    }
    
    get open() {
        return this.#open;
    }

    Deselect() {
        const selected = false;
        return new DoorModel(this.number, this.present, selected, this.open);
    }

    SelectOther() {
        const selected = !this.selected;
        return new DoorModel(this.number, this.present, selected, this.open);
    }

    Open() {
        const open = true;
        return new DoorModel(this.number, this.present, this.selected, open);
    }

}