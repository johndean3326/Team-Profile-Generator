const Engineer = require('../lib/engineer');

const obj = {name: "John", id: "1", email:"john@email.com", github: "john1"};
const person = new Engineer(obj);

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
    expect(person.getRole()).toBe("Engineer")
    
});

test("testing github method", () => {
    expect(person.getGithub()).toBe("john1")
    
});