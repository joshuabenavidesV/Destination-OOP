const Plane = require("../../classes/Plane");
const Person = require("../../classes/Person");

describe("Class Plane", () => {
  const plane1 = new Plane("Delta", "DFW", "LAX");
  const plane2 = new Plane("Southwest", "DFW", "JFK", [
    "Jerry",
    "Joey",
    "Lane",
  ]);

  test("plane has a company, origin, and destination", () => {
    expect(plane1.company).toEqual("Delta");
    expect(plane1.origin).toEqual("DFW");
    expect(plane1.destination).toEqual("LAX");
  });

  test("passengers array is empty or has correct amount of passengers", () => {
    expect(plane2.getPassengers().length).toEqual(3);
    expect(plane1.getPassengers().length).toEqual(0);
  });

  test("passengers array is empty", () => {
    expect(plane1.getPassengers().length).toEqual(0);
  });

  test("getPassengers() returns all passengers", () => {
    const plane1 = new Plane("Delta", "DFW", "LAX");
    const plane2 = new Plane("Southwest", "DFW", "JFK", [
      "Jerry",
      "Joey",
      "Lane",
    ]);
    const Billy = new Person("Billy", "LAX");
    const Emmanuel = new Person("Emmanuel", "LAX");
    plane1.addPassenger(Billy);
    plane1.addPassenger(Emmanuel);
    expect(plane2.getPassengers()).toEqual(["Jerry", "Joey", "Lane"]);
    expect(plane1.getPassengers().map((p) => p.name)).toEqual([
      "Billy",
      "Emmanuel",
    ]);
  });

  test("addPassenger(passenger) adds to passengers array", () => {
    plane1.addPassenger("Joy");
    plane1.addPassenger("Josh");
    expect(plane1.getPassengers().length).toEqual(2);
  });
});
