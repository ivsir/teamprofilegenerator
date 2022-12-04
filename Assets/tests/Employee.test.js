const Employee = require("../lib/Employee");

describe("Testing Employee Class", () => {
    it("should be able to create instance", () => {
        // data set up
        const name = "Ana";
        const id = 77;
        const email = "ana@ana.com"
        // create case
        const employee = new Employee(name,id,email)
        // make assertion
        expect(employee.name).toBe(name);
        expect(employee.id).toBe(id);
        expect(employee.email).toBe(email);
    })
})