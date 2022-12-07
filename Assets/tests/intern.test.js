const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Testing Intern Class", () => {
    it("should be able to create instance", () => {
      // data set up
      const name = "Hailey Baltazar";
      const id = 366;
      const email = "haileyxbaltazar@gmail.com";
      const currentSchool = "SDSU";
      // create case
      const intern = new Intern(name, id, email, currentSchool);
      // make assertion
      expect(intern.name).toBe(name);
      expect(intern.id).toBe(id);
      expect(intern.email).toBe(email);
      expect(intern.currentSchool).toBe(currentSchool);
    });
  });

  describe("getName", () => {
    it("should return the value of the property 'name'", () => {
      // data setup
      const name = "Hailey Baltazar";
      const id = 366;
      const email = "haileyxbaltazar@gmail.com";
      const currentSchool = "SDSU";
      // create the case
      const hailey = new Intern(name, id, email, currentSchool);
      const result = hailey.getName();

      // make assertion
      expect(result).toEqual(hailey.name);
    });
  });
  describe("getID", () => {
    it("should return the value of the property 'id'", () => {
      // data setup
      const name = "Hailey Baltazar";
      const id = 366;
      const email = "haileyxbaltazar@gmail.com";
      const currentSchool = "SDSU";

      // create the case
      const hailey = new Intern(name, id, email, currentSchool);
      const result = hailey.getID();

      // make assertion
      expect(result).toEqual(hailey.id);
    });
  });
  describe("getEmail", () => {
    it("should return the value of the property 'email'", () => {
      // data setup
      const name = "Hailey Baltazar";
      const id = 366;
      const email = "haileyxbaltazar@gmail.com";
      const currentSchool = "SDSU";
      // create the case
      const hailey = new Intern(name, id, email, currentSchool);
      const result = hailey.getEmail();

      // make assertion
      expect(result).toEqual(hailey.email);
    });
  });
  describe("getCurrentSchool", () => {
    it("should return the value of the property 'currentSchool'", () => {
      // data setup
      const name = "Hailey Baltazar";
      const id = 366;
      const email = "haileyxbaltazar@gmail.com";
      const currentSchool = "SDSU";

      // create the case
      const hailey = new Intern(name, id, email, currentSchool);
      const result = hailey.getCurrentSchool();

      // make assertion
      expect(result).toEqual(hailey.currentSchool);
    });
  });
  describe("getRole", () => {
    it("should return 'Intern'", () => {
      // data setup
      const name = "Hailey Baltazar";
      const id = 366;
      const email = "haileyxbaltazar@gmail.com";
      const currentSchool = "SDSU";
      // create the case
      const hailey = new Intern(name, id, email, currentSchool);
      const result = hailey.getRole();

      // make assertion
      expect(result).toEqual("Intern");
    });
  });
});
