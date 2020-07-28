// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
function Manager(name, id, email, officeNumber) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.officeNumber = officeNumber;
  this.getName = () => {
    // console.log(this.name);
    return this.name;
  };
  this.getId = () => {
    // console.log(this.id);
    return this.id;
  };
  this.getEmail = () => {
    // console.log(this.email);
    return this.email;
  };
  this.getRole = () => {
    // console.log("Manager");
    return "Manager";
  };
  this.getOfficeNumber = () => {
    // console.log(this.officeNumber);
    return this.officeNumber;
  };
}

module.exports = Manager;
