const Manager = require('../lib/manager');

test("instantiate instance class of Manager", () => {
  
    const person = new Manager();
    expect(typeof(person)).toBe("object")
    
});
test("testing name", () => {
    const testValue =  "John";
    const person = new Manager(testValue);
    expect(person.getName()).toBe(testValue)
    
});

test("testing ID", () => {
    const testValue =  "1";
    const person = new Manager("John", testValue);
    expect(person.getId()).toBe(testValue)
    
});

test("testing email", () => {
    const testValue = "john@email.com";
    const person = new Manager("John", "1", testValue);
    expect(person.getEmail()).toBe(testValue)
    
});

test("testing role method", () => {
    const testValue = "Manager";
    const person = new Manager(testValue);
    expect(person.getRole()).toBe(testValue)
    
});
test("setting name to constructor", () => {
const testValue = "John";
const person = new Manager(testValue);
expect(person.name).toBe(testValue)
});
test("setting id to constructor", () => {
    const testValue = "1";
    const person = new Manager("John", testValue);
    expect(person.id).toBe(testValue)
    });
    test("setting email to constructor", () => {
        const testValue = "john@email.com";
        const person = new Manager("John", "john@email.com", testValue);
        expect(person.email).toBe(testValue)
        });

// const obj = {name: "John", id: "1", email:"john@email.com", github: "john1"};
// const person = new Manager(obj);

// test("testing name", () => {
//     expect(person.getName()).toBe("John")
    
// });

// test("testing ID", () => {
//     expect(person.id).toBe("1")
    
// });

// test("testing email", () => {
//     expect(person.email).toBe("john@email.com")
    
// });

// test("testing role method", () => {
//     expect(person.getRole()).toBe("Manager")
    
// });

// test("testing github method", () => {
//     expect(person.getOfficeNumber()).toBe("01")
    
// });