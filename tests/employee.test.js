const Employee = require('../lib/employee');

// const obj = {name: "john", id: "1", email:"john@email.cm"};
// const person = new Employee(obj);
test("instantiate instance class of employee", () => {
  
    const person = new Employee();
    expect(typeof(person)).toBe("object")
    
});
test("testing name", () => {
    const testValue =  "John";
    const person = new Employee(testValue);
    expect(person.getName()).toBe(testValue)
    
});

test("testing ID", () => {
    const testValue =  "1";
    const person = new Employee("John", testValue);
    expect(person.getId()).toBe(testValue)
    
});

test("testing email", () => {
    const testValue = "john@email.com";
    const person = new Employee("John", "1", testValue);
    expect(person.getEmail()).toBe(testValue)
    
});

test("testing role method", () => {
    const testValue = "Employee";
    const person = new Employee(testValue);
    expect(person.getRole()).toBe(testValue)
    
});
test("setting name to constructor", () => {
const testValue = "John";
const person = new Employee(testValue);
expect(person.name).toBe(testValue)
});
test("setting id to constructor", () => {
    const testValue = "1";
    const person = new Employee("John", testValue);
    expect(person.id).toBe(testValue)
    });
    test("setting email to constructor", () => {
        const testValue = "john@email.com";
        const person = new Employee("John", "john@email.com", testValue);
        expect(person.email).toBe(testValue)
        });