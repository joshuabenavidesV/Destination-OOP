class Airport {
    static airportCode = "DFW";
    constructor(name) {
        this.name = name;
        this.planes = [];
    }

    getPlanes() {
        return this.planes;
    }

    addPlane(Plane) {
        this.planes.push(Plane);
    }
}


module.exports = Airport; 