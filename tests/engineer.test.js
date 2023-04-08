const { describe } = require('yargs');
const Engineer = require('../lib/engineer');

const obj = {name: "John", id: "1", email:"john@email.com", github: "john1"};
const person = new Engineer(obj);

describe("testing name", () => {
    expect(person.getName()).toBe("John")
    
});

describe("testing ID", () => {
    expect(person.id).toBe("1")
    
});

describe("testing email", () => {
    expect(person.email).toBe("john@email.com")
    
});

describe("testing role method", () => {
    expect(person.getRole()).toBe("Engineer")
    
});

describe("testing github method", () => {
    expect(person.getGithub()).toBe("john1")
    
});
