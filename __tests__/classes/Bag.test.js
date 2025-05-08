const Bag = require('../../classes/Bag')

describe("Bag Class", () => {
    // new Bag(weight, id, owner)
    const bag1 = new Bag(5, 30, "John")
    const bag2 = new Bag(2, 40)
    const bag3 = new Bag(15, 20, "Ellie")


    it("is an instance of Bag", () => {
        expect(bag1).toBeInstanceOf(Bag)
    })

    it("has a weight and id" , () => {
        expect(bag1.weight).toEqual(5)
        expect(bag1.id).toEqual(30)
    })

    it("has an owner", () => {
        expect(bag1.getOwner()).toEqual("John")
        expect(bag2.getOwner()).toEqual(null)
    })

    it("getOwner() method gets owner data" , () => {
        expect(bag1.getOwner()).toEqual("John")
    })

    it("assignOwner() method reassigns owner" , () => {
        expect(bag1.assignOwner(bag3.getOwner())).toEqual("Ellie")
    })


})