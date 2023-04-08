const Intern = require('../lib/intern');



// const obj = {name: "john", id: "1", email:"john@email.cm"};
// const person = new Employee(obj);
test("instantiate instance class of Intern", () => {
  
    const person = new Intern();
    expect(typeof(person)).toBe("object")
    
});
test("testing name", () => {
    const testValue =  "John";
    const person = new Intern(testValue);
    expect(person.getName()).toBe(testValue)
    
});

test("testing ID", () => {
    const testValue =  "1";
    const person = new Intern("John", testValue);
    expect(person.getId()).toBe(testValue)
    
});

test("testing email", () => {
    const testValue = "john@email.com";
    const person = new Intern("John", "1", testValue);
    expect(person.getEmail()).toBe(testValue)
    
});

test("testing role method", () => {
    const testValue = "Intern";
    const person = new Intern(testValue);
    expect(person.getRole()).toBe(testValue)
    
});
test("setting name to constructor", () => {
const testValue = "John";
const person = new Intern(testValue);
expect(person.name).toBe(testValue)
});
test("setting id to constructor", () => {
    const testValue = "1";
    const person = new Intern("John", testValue);
    expect(person.id).toBe(testValue)
    });
    test("setting email to constructor", () => {
        const testValue = "john@email.com";
        const person = new Intern("John", "john@email.com", testValue);
        expect(person.email).toBe(testValue)
        });
// test("testing github method", () => {
//     const testValue = "HARD KNOCKS";
//     const person = new Intern("John", "john@email.com", testValue);
//     expect(person.getSchool()).toBe(testValue)
//     });
//     expect(person.getSchool()).toBe("HARD KNOCKS")
    
// });