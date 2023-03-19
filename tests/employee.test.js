const Employee = require('../lib/employee');

const obj = {name: "john", id: "1", email:"john@email.cm"};
const person = new Employee(obj);

test("testing name", () => {
    expect(person.getName()).toBe("John")
    
});

test("testing ID", () => {
    expect(person.id).toBe("1")
    
});

test("testing email", () => {
    expect(person.email).toBe("john@email.com")
    
});

test("testing role method", () => {
    expect(person.getRole()).toBe("Employee")
    
});