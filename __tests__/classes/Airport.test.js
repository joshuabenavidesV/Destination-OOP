const Airport = require("../../classes/Airport");
const Plane = require("../../classes/Plane");
const {describe, test, expect} = require("@jest/globals");

describe("Airport class", () => {
    const airport = new Airport("Dallas Airport");
    test("Should have correct vaules for fields name and planes", () => {
        expect(airport.name).toBe("Dallas Airport");
        expect(airport.planes).toEqual([]);
    })

    test("Airport class should have correct airport code", () => {
        expect(Airport.airportCode).toBe("DFW");
    })

    test("Should be able to add plane to airport", () => {
        const plane = new Plane("Delta", "DFW", "JFK");
        airport.addPlane(plane);
        expect(airport.getPlanes()).toEqual([
            {
                company: "Delta",
                origin: "DFW",
                destination: "JFK",
            }
        ])
    })
}) 