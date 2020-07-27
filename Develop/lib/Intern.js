// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
function Engineer(name, id, email, school) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.school = school;
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
    console.log("Intern");
    return "Intern";
  };
  this.getSchool = () => {
    console.log(this.school);
    return this.school;
  };
}
