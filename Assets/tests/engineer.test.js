const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Testing Engineer Class", () => {
    it("should be able to create instance", () => {
      // data set up
      const name = "Rasheem";
      const id = 546;
      const email = "rasheemut@gmail.com";
      const username = "ivsir";
      // create case
      const engineer = new Engineer(name, id, email, username);
      // make assertion
      expect(engineer.name).toBe(name);
      expect(engineer.id).toBe(id);
      expect(engineer.email).toBe(email);
      expect(engineer.username).toBe(username);
    });
  });
  describe("getName", () => {
    it("should return the value of the property 'name'", () => {
      // data setup
      const name = "Rasheem";
      const id = 546;
      const email = "rasheemut@gmail.com";
      const username = "ivsir";
      // create the case
      const rasheem = new Engineer(name, id, email, username);
      const result = rasheem.getName();

      // make assertion
      expect(result).toEqual(rasheem.name);
    });
  });
  describe("getID", () => {
    it("should return the value of the property 'id'", () => {
      // data setup
      const name = "Rasheem";
      const id = 546;
      const email = "rasheemut@gmail.com";
      const username = "ivsir";

      // create the case
      const rasheem = new Engineer(name, id, email, username);
      const result = rasheem.getID();

      // make assertion
      expect(result).toEqual(rasheem.id);
    });
  });
  describe("getEmail", () => {
    it("should return the value of the property 'email'", () => {
      // data setup
      const name = "Rasheem";
      const id = 546;
      const email = "rasheemut@gmail.com";
      const username = "ivsir";

      // create the case
      const rasheem = new Engineer(name, id, email, username);
      const result = rasheem.getEmail();

      // make assertion
      expect(result).toEqual(rasheem.email);
    });
  });
  describe("getUsername", () => {
    it("should return the value of the property 'username'", () => {
      // data setup
      const name = "Rasheem";
      const id = 546;
      const email = "rasheemut@gmail.com";
      const username = "ivsir";

      // create the case
      const rasheem = new Engineer(name, id, email, username);
      const result = rasheem.getUsername();

      // make assertion
      expect(result).toEqual(rasheem.username);
    });
  });
  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      // data setup
      const name = "Rasheem";
      const id = 546;
      const email = "rasheemut@gmail.com";
      const username = "ivsir";
      // create the case
      const rasheem = new Engineer(name, id, email, username);
      const result = rasheem.getRole();

      // make assertion
      expect(result).toEqual("Engineer");
    });
  });
});
