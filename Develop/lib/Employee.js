// TODO: Write code to define and export the Employee class
function Employee(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.getName = () => {
    console.log(this.name);
    return this.name;
  };
  this.getId = () => {
    console.log(this.id);
    return this.id;
  };
  this.getEmail = () => {
    console.log(this.email);
    return this.email;
  };
  this.getRole = () => {
    console.log("Employee");
    return "Employee";
  };
}

module.exports = Employee;
