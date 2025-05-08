class Plane {
    #passengers
    constructor(company, origin, destination, passengers = []) {
        this.company = company;
        this.origin = origin;
        this.destination = destination;
        this.#passengers = passengers;
    }

    getPassengers() {
        return this.#passengers;
    }

    addPassenger(passenger) {
        this.#passengers.push(passenger)
    }

}


module.exports = Plane;