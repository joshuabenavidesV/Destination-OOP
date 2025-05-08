class Bag {
    #owner
    constructor(weight, id, owner = null) {
        this.weight = weight;
        this.id = id;
        this.#owner = owner;
    }

    getOwner() {
        return this.#owner;
    }

    assignOwner(person) {
        this.#owner = person;
        return this.#owner
    }

}


module.exports = Bag;