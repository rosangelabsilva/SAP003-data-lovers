require("../src/data.js");

const dataExample = 
[{"id": 1, "name": "Rick Sanchez", "status": "Alive", "gender": "Male"},
  {"id": 2, "name": "Morty Smith", "status": "Alive", "gender": "Male"},
  {"id": 3, "name": "Summer Smith", "status": "Alive", "gender": "Female"},
  {"id": 4, "name": "Beth Smith", "status": "Alive", "gender": "Female"}, 
  {"id": 5, "name": "Jerry Smith", "status": "Alive", "gender": "Male"}];

describe("Sort", () => {
  it("is a function", () => {
    expect(typeof app.sortNames).toBe("function");
  });

  it("return ordered elements of AZ ", () => {
    expect(app.sortNames(dataExample, "sortAZ")).toEqual(
      [{"gender": "Female", "id": 4, "name": "Beth Smith", "status": "Alive"},
        {"gender": "Male", "id": 5, "name": "Jerry Smith", "status": "Alive"},
        {"gender": "Male", "id": 2, "name": "Morty Smith", "status": "Alive"},
        {"gender": "Male", "id": 1, "name": "Rick Sanchez", "status": "Alive"}, 
        {"gender": "Female", "id": 3, "name": "Summer Smith", "status": "Alive"}]
    );
  });

  it("return ordered elements of ZA", () => {
    expect(app.sortNames(dataExample, "sortZA")).toEqual(
      [{"gender": "Female", "id": 3, "name": "Summer Smith", "status": "Alive"},
        {"gender": "Male", "id": 1, "name": "Rick Sanchez", "status": "Alive"}, 
        {"gender": "Male", "id": 2, "name": "Morty Smith", "status": "Alive"}, 
        {"gender": "Male", "id": 5, "name": "Jerry Smith", "status": "Alive"}, 
        {"gender": "Female", "id": 4, "name": "Beth Smith", "status": "Alive"}]
    );
  });
});

describe("Filter", () => {
  it("is a function", () => {
    expect(typeof app.filterStatus).toBe("function");
  });
  it("return characters with status 'Alive'", () => {
    expect(app.filterStatus(dataExample, "Alive")).toEqual([
      {"id": 1, "name": "Rick Sanchez", "status": "Alive", "gender": "Male"},
      {"id": 2, "name": "Morty Smith", "status": "Alive", "gender": "Male"},
      {"id": 3, "name": "Summer Smith", "status": "Alive", "gender": "Female"},
      {"id": 4, "name": "Beth Smith", "status": "Alive", "gender": "Female"}, 
      {"id": 5, "name": "Jerry Smith", "status": "Alive", "gender": "Male"}]);
  });
});

describe("Filter", () => {
  it("is a function", () => {
    expect(typeof app.filterData).toBe("function");
  });
  it("return characters with gender 'Female'", () => {
    expect(app.filterData(dataExample, "Female")).toEqual([
      {"id": 3, "name": "Summer Smith", "status": "Alive", "gender": "Female"},
      {"id": 4, "name": "Beth Smith", "status": "Alive", "gender": "Female"}]);
  });
});

describe("Percentage calculation", () => {
  it("is a function", () => {
    expect(typeof app.percCalculation).toBe("function");
  });
  it("return percentage", () => {
    expect(app.percCalculation(dataExample)).toBe("1");
  });
});