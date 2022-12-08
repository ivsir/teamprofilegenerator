const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Testing Manager Class", () => {
    it("should be able to create instance", () => {
      // data set up
      const name = "Risvi Tareq";
      const id = 79;
      const email = "ivsirqerat@gmail.com";
      const officeNumber = 782;
      // create case
      const manager = new Manager(name, id, email, officeNumber);
      // make assertion
      expect(manager.name).toBe(name);
      expect(manager.id).toBe(id);
      expect(manager.email).toBe(email);
      expect(manager.officeNumber).toBe(officeNumber);
    });
  });
  describe("getName", () => {
    it("should return the value of the property 'name'", () => {
      // data setup
      const name = "Risvi Tareq";
      const id = 79;
      const email = "ivsirqerat@gmail.com";
      const officeNumber = 782;
      // create the case
      const risvi = new Manager(name, id, email, officeNumber);
      const result = risvi.getName();

      // make assertion
      expect(result).toEqual(risvi.name);
    });
  });
  describe("getID", () => {
    it("should return the value of the property 'id'", () => {
      // data setup
      const name = "Risvi Tareq";
      const id = 79;
      const email = "ivsirqerat@gmail.com";
      const officeNumber = 782;

      // create the case
      const risvi = new Manager(name, id, email, officeNumber);
      const result = risvi.getID();

      // make assertion
      expect(result).toEqual(risvi.id);
    });
  });
  describe("getEmail", () => {
    it("should return the value of the property 'email'", () => {
      // data setup
      const name = "Risvi Tareq";
      const id = 79;
      const email = "ivsirqerat@gmail.com";
      const officeNumber = 782;
      // create the case
      const risvi = new Manager(name, id, email, officeNumber);
      const result = risvi.getEmail();

      // make assertion
      expect(result).toEqual(risvi.email);
    });
  });
  describe("getOfficeNumber", () => {
    it("should return the value of the property 'officeNUmber'", () => {
      // data setup
      const name = "Risvi Tareq";
      const id = 79;
      const email = "ivsirqerat@gmail.com";
      const officeNumber = 782;

      // create the case
      const risvi = new Manager(name, id, email, officeNumber);
      const result = risvi.getOfficeNumber();

      // make assertion
      expect(result).toEqual(risvi.officeNumber);
    });
  });
  describe("getRole", () => {
    it("should return 'Manager'", () => {
      // data setup
      const name = "Risvi Tareq";
      const id = 79;
      const email = "ivsirqerat@gmail.com";
      const officeNumber = 782;
      // create the case
      const risvi = new Manager(name, id, email, officeNumber);
      const result = risvi.getRole();

      // make assertion
      expect(result).toEqual("Manager");
    });
  });
});
