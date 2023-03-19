const Intern = require('../lib/intern');

const obj = {name: "John", id: "1", email:"john@email.com", github: "john1"};
const person = new Intern(obj);

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
    expect(person.getRole()).toBe("Intern")
    
});

test("testing github method", () => {
    expect(person.getSchool()).toBe("HARD KNOCKS")
    
});