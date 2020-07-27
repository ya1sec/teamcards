// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function Engineer(name, id, email, github) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.github = github;
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
    console.log("Engineer");
    return "Engineer";
  };
  this.getGithub = () => {
    console.log(this.github);
    return this.github;
  };
}

module.exports = Engineer;
