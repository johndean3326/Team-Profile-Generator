
const Engineer = require('../lib/engineer');

// const obj = {name: "John", id: "1", email:"john@email.com", github: "john1"};
// const person = new Engineer(obj);


test("instantiate instance class of Engineer", () => {
  
    const person = new Engineer();
    expect(typeof(person)).toBe("object")
    
});
test("testing name", () => {
    const testValue =  "John";
    const person = new Engineer(testValue);
    expect(person.getName()).toBe(testValue)
    
});

test("testing ID", () => {
    const testValue =  "1";
    const person = new Engineer("John", testValue);
    expect(person.getId()).toBe(testValue)
    
});

test("testing email", () => {
    const testValue = "john@email.com";
    const person = new Engineer("John", "1", testValue);
    expect(person.getEmail()).toBe(testValue)
    
});

test("testing role method", () => {
    const testValue = "Manager";
    const person = new Engineer(testValue);
    expect(person.getRole()).toBe(testValue)
    
});
test("setting name to constructor", () => {
const testValue = "John";
const person = new Engineer(testValue);
expect(person.name).toBe(testValue)
});
test("setting id to constructor", () => {
    const testValue = "1";
    const person = new Engineer("John", testValue);
    expect(person.id).toBe(testValue)
    });
    test("setting email to constructor", () => {
        const testValue = "john@email.com";
        const person = new Engineer("John", "john@email.com", testValue);
        expect(person.email).toBe(testValue)
        });