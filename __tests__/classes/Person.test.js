const Person = require("../../classes/Person");
const Bag = require("../../classes/Bag");

describe(`Person class`, () => {
    const p1 = new Person(`Bob`, "New York")
    const p2 = new Person(`Jeff`, "Dallas")
    test(`Test instance of Person`, () => {
        expect(p1).toBeInstanceOf(Person)
    })
    test(`Has a valid name and destination`, () => {
        expect(p1.name).toEqual(`Bob`)
        expect(p1.destination).toEqual(`New York`)
    })
    test(`Has a an empty bag array`, () => {
        expect(p1.getBags().length).toEqual(0)

    })
    test(`Has addBag() to add bags`, () => {
        const bag = new Bag(10,1)
        p1.addBag(bag);
        expect(p1.getBags()).toEqual([{weight:10, id:1}])
})
})

module.exports = Person.test