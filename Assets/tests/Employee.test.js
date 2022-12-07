const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Testing Employee Class", () => {
    it("should be able to create instance", () => {
      // data set up
      const name = "Reaanna";
      const id = 34;
      const email = "Reeanna@gmail.com";
      // create case
      const employee = new Employee(name, id, email);
      // make assertion
      expect(employee.name).toBe(name);
      expect(employee.id).toBe(id);
      expect(employee.email).toBe(email);
    });
  });
  describe("getName", () => {
    it("should return the value of the property 'name'", () => {
      // data setup
      const name = "Reaanna";
      const id = 34;
      const email = "Reeanna@gmail.com";

      // create the case
      const reeanna = new Employee(name, id, email);
      const result = reeanna.getName();

      // make assertion
      expect(result).toEqual(reeanna.name);
    });
  });
  describe("getID", () => {
    it("should return the value of the property 'id'", () => {
      // data setup
      const name = "Reaanna";
      const id = 34;
      const email = "Reeanna@gmail.com";

      // create the case
      const reeanna = new Employee(name, id, email);
      const result = reeanna.getID();

      // make assertion
      expect(result).toEqual(reeanna.id);
    });
  });
  describe("getEmail", () => {
    it("should return the value of the property 'email'", () => {
      // data setup
      const name = "Reaanna";
      const id = 34;
      const email = "Reeanna@gmail.com";

      // create the case
      const reeanna = new Employee(name, id, email);
      const result = reeanna.getEmail();

      // make assertion
      expect(result).toEqual(reeanna.email);
    });
  });
  describe("getRole", () => {
    it("should return 'Employee'", () => {
      // data setup
      const name = "Reaanna";
      const id = 34;
      const email = "Reeanna@gmail.com";
      // create the case
      const reeanna = new Employee(name, id, email);
      const result = reeanna.getRole();

      // make assertion
      expect(result).toEqual("Employee");
    });
  });
});
